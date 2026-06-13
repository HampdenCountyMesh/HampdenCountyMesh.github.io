document.addEventListener("DOMContentLoaded", async () => {
    const mapElement = document.getElementById("hcmn-map");
    const statsElement = document.getElementById("hcmn-map-stats");

    if (!mapElement) {
        return;
    }

    const map = L.map("hcmn-map", {
        scrollWheelZoom: false
    }).setView([42.14, -72.62], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const infrastructureLayer = L.layerGroup().addTo(map);
    const observedTrafficLayer = L.layerGroup().addTo(map);
    const coverageTestLayer = L.layerGroup().addTo(map);

    try {
        const countyResponse = await fetch("data/coverage/hampden-county.geojson");
        const nodesResponse = await fetch("data/nodes.json");
        const statusResponse = await fetch("data/status.json");

        if (!countyResponse.ok || !nodesResponse.ok || !statusResponse.ok) {
            throw new Error("One or more map data files could not be loaded.");
        }

        const countyGeojson = await countyResponse.json();
        const nodeData = await nodesResponse.json();
        const statusData = await statusResponse.json();

        const countyLayer = L.geoJSON(countyGeojson, {
            style: {
                color: "#ffb347",
                weight: 1,
                opacity: 0.75,
                fillColor: "#ffb347",
                fillOpacity: 0.08
            }
        }).addTo(map);

        map.fitBounds(countyLayer.getBounds(), {
            padding: [20, 20]
        });

        const infrastructure = Array.isArray(nodeData.infrastructure)
            ? nodeData.infrastructure
            : [];

        const observedTraffic = Array.isArray(nodeData.observed_traffic)
            ? nodeData.observed_traffic
            : [];

        const coverageTests = Array.isArray(nodeData.coverage_tests)
            ? nodeData.coverage_tests
            : [];

        addMarkers(infrastructure, infrastructureLayer, {
            layerName: "Project Infrastructure",
            color: "#ffb347"
        });

        addMarkers(observedTraffic, observedTrafficLayer, {
            layerName: "Observed MeshCore Traffic",
            color: "#7cff9a"
        });

        addMarkers(coverageTests, coverageTestLayer, {
            layerName: "Field-Tested Coverage",
            color: "#ffd27a"
        });

        L.control.layers(
            null,
            {
                "Project Infrastructure": infrastructureLayer,
                "Observed MeshCore Traffic": observedTrafficLayer,
                "Field-Tested Coverage": coverageTestLayer
            },
            {
                collapsed: false
            }
        ).addTo(map);

        updateStats({
            infrastructure,
            observedTraffic,
            coverageTests,
            nodeData,
            statusData
        });

        const totalMapped =
            countMappedItems(infrastructure) +
            countMappedItems(observedTraffic) +
            countMappedItems(coverageTests);

        if (totalMapped === 0) {
            addMapNotice(
                map,
                "No public-safe node coordinates are currently published. The county boundary and activity statistics are loaded below."
            );
        }
    } catch (error) {
        console.error("Coverage map error:", error);

        if (statsElement) {
            statsElement.innerHTML = `
                <div class="status-note">
                    <strong>Status:</strong> Map data could not be loaded.<br>
                    Check <code>data/coverage/hampden-county.geojson</code>,
                    <code>data/nodes.json</code>, and
                    <code>data/status.json</code>.
                </div>
            `;
        }
    }
});

function hasPublicCoordinates(item) {
    return (
        item &&
        item.show_on_public_map !== false &&
        Number.isFinite(item.latitude) &&
        Number.isFinite(item.longitude)
    );
}

function countMappedItems(items) {
    return items.filter(hasPublicCoordinates).length;
}

function addMarkers(items, layerGroup, options) {
    items.forEach((item) => {
        if (!hasPublicCoordinates(item)) {
            return;
        }

        const marker = L.circleMarker([item.latitude, item.longitude], {
            radius: 8,
            color: options.color,
            weight: 2,
            fillColor: options.color,
            fillOpacity: 0.75
        }).addTo(layerGroup);

        marker.bindPopup(`
            <strong>${escapeHtml(item.name || item.node_name || item.id || "Map Point")}</strong><br>
            Layer: ${escapeHtml(options.layerName)}<br>
            Role: ${escapeHtml(item.role || "Not specified")}<br>
            Status: ${escapeHtml(item.status || item.result || "Unknown")}<br>
            Location: ${escapeHtml(item.location_label || "Generalized / not specified")}<br>
            Accuracy: ${escapeHtml(item.location_accuracy || "Unknown")}<br>
            Notes: ${escapeHtml(item.notes || "No notes provided.")}
        `);

        if (Number.isFinite(item.radius_meters) && item.radius_meters > 0) {
            L.circle([item.latitude, item.longitude], {
                radius: item.radius_meters,
                color: options.color,
                weight: 1,
                fillColor: options.color,
                fillOpacity: 0.08
            }).addTo(layerGroup);
        }
    });
}

function updateStats(data) {
    const statsElement = document.getElementById("hcmn-map-stats");

    if (!statsElement) {
        return;
    }

    const infrastructure = data.infrastructure;
    const observedTraffic = data.observedTraffic;
    const coverageTests = data.coverageTests;
    const nodeData = data.nodeData;
    const statusData = data.statusData;

    const repeaters = infrastructure.filter((item) => item.role === "repeater").length;
    const observers = infrastructure.filter((item) => item.role === "observer").length;
    const companions = infrastructure.filter((item) => item.role === "companion").length;
    const fixedInfrastructure = infrastructure.filter((item) => item.fixed === true).length;

    const mappedInfrastructure = countMappedItems(infrastructure);
    const mappedObservedTraffic = countMappedItems(observedTraffic);
    const mappedCoverageTests = countMappedItems(coverageTests);

    const totalMapped =
        mappedInfrastructure +
        mappedObservedTraffic +
        mappedCoverageTests;

    statsElement.innerHTML = `
        <div class="stat-card">
            <span class="stat-number">${infrastructure.length}</span>
            <span class="stat-label">Project Infrastructure</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${observedTraffic.length}</span>
            <span class="stat-label">Observed Traffic Records</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${coverageTests.length}</span>
            <span class="stat-label">Coverage Tests</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${totalMapped}</span>
            <span class="stat-label">Public Map Points</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${repeaters}</span>
            <span class="stat-label">Repeaters</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${observers}</span>
            <span class="stat-label">Observers</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${companions}</span>
            <span class="stat-label">Companion Nodes</span>
        </div>

        <div class="stat-card">
            <span class="stat-number">${fixedInfrastructure}</span>
            <span class="stat-label">Fixed Infrastructure</span>
        </div>

        <div class="status-note">
            <strong>Map status:</strong><br>
            County boundary loaded. Infrastructure, observed traffic, and coverage test layers are available.
            Items without public-safe coordinates are counted but not plotted.
            <br><br>

            <strong>Observer:</strong> ${escapeHtml(statusData.observer_status || "Unknown")}<br>
            <strong>MQTT:</strong> ${escapeHtml(statusData.mqtt_status || "Unknown")}<br>
            <strong>MeshMapper alignment:</strong> ${escapeHtml(statusData.meshmapper_region || nodeData.region_alignment || "Unknown")}<br>
            <strong>Public live data:</strong> ${statusData.public_live_data === true ? "Yes" : "No / in development"}<br>
            <strong>Last updated:</strong> ${escapeHtml(nodeData.last_updated || statusData.last_updated || "Unknown")}
        </div>

        <div class="status-note">
            <strong>What this map means:</strong><br>
            Project infrastructure means equipment intentionally documented by Hampden County Mesh.
            Observed traffic means MeshCore activity seen through logs, observers, MQTT, analyzer data, or reports.
            Coverage tests mean intentional field checks.
            Observed traffic is useful evidence, but it is not the same as guaranteed continuous coverage.
        </div>

        <div class="status-note">
            <strong>Project infrastructure:</strong><br>
            ${renderItemList(infrastructure, "No infrastructure records yet.")}
        </div>

        <div class="status-note">
            <strong>Observed MeshCore traffic:</strong><br>
            ${renderItemList(observedTraffic, "No observed traffic records have been published yet.")}
        </div>

        <div class="status-note">
            <strong>Field-tested coverage:</strong><br>
            ${renderItemList(coverageTests, "No field-test records have been published yet.")}
        </div>
    `;
}

function renderItemList(items, emptyMessage) {
    if (!Array.isArray(items) || items.length === 0) {
        return escapeHtml(emptyMessage);
    }

    return `
        <ul style="margin-top:0.75rem; padding-left:1.25rem;">
            ${items.map((item) => {
                const name = item.name || item.node_name || item.id || "Unnamed item";
                const role = item.role ? ` — ${item.role}` : "";
                const location = item.location_label ? ` — ${item.location_label}` : "";
                const mapped = hasPublicCoordinates(item) ? " — mapped" : " — not publicly mapped";

                return `
                    <li>
                        ${escapeHtml(name)}${escapeHtml(role)}${escapeHtml(location)}${escapeHtml(mapped)}
                    </li>
                `;
            }).join("")}
        </ul>
    `;
}

function addMapNotice(map, message) {
    const notice = L.control({
        position: "bottomleft"
    });

    notice.onAdd = function () {
        const div = L.DomUtil.create("div", "hcmn-map-notice");

        div.innerHTML = escapeHtml(message);

        div.style.maxWidth = "320px";
        div.style.padding = "0.75rem";
        div.style.background = "rgba(15, 13, 10, 0.9)";
        div.style.color = "#efe3c2";
        div.style.border = "1px solid rgba(255, 179, 71, 0.35)";
        div.style.borderRadius = "10px";
        div.style.fontSize = "0.85rem";
        div.style.lineHeight = "1.4";
        div.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.35)";

        return div;
    };

    notice.addTo(map);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
