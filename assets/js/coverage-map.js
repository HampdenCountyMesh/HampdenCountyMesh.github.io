document.addEventListener("DOMContentLoaded", async () => {
    const mapElement = document.getElementById("hcmn-map");

    if (!mapElement) {
        return;
    }

    const statsElement = document.getElementById("hcmn-map-stats");

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
        const [countyResponse, nodesResponse, statusResponse] = await Promise.all([
            fetch("data/coverage/hampden-county.geojson"),
            fetch("data/nodes.json"),
            fetch("data/status.json")
        ]);

        if (!countyResponse.ok) {
            throw new Error("Could not load Hampden County GeoJSON.");
        }

        if (!nodesResponse.ok) {
            throw new Error("Could not load nodes.json.");
        }

        if (!statusResponse.ok) {
            throw new Error("Could not load status.json.");
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

        const infrastructure = getInfrastructure(nodeData);
        const observedTraffic = getObservedTraffic(nodeData);
        const coverageTests = getCoverageTests(nodeData);

        addInfrastructureMarkers(infrastructure, infrastructureLayer);
        addObservedTrafficMarkers(observedTraffic, observedTrafficLayer);
        addCoverageTestMarkers(coverageTests, coverageTestLayer);

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

        const mappedItemCount =
            countMappedItems(infrastructure) +
            countMappedItems(observedTraffic) +
            countMappedItems(coverageTests);

        if (mappedItemCount === 0) {
            addMapNotice(
                map,
                "No public-safe node coordinates are currently published. The county boundary and activity statistics are still loaded below."
            );
        }

        updateStats({
            infrastructure,
            observedTraffic,
            coverageTests,
            nodeData,
            statusData
        });
    } catch (error) {
        console.error("Map data could not be loaded:", error);

        if (statsElement) {
            statsElement.innerHTML = `
                <div class="status-note">
                    <strong>Status:</strong> Map data could not be loaded.<br>
                    Check that the following files exist in the correct folders:<br>
                    <code>data/coverage/hampden-county.geojson</code><br>
                    <code>data/nodes.json</code><br>
                    <code>data/status.json</code>
                </div>
            `;
        }
    }
});

function getInfrastructure(nodeData) {
    if (Array.isArray(nodeData.infrastructure)) {
        return nodeData.infrastructure;
    }

    if (Array.isArray(nodeData.nodes)) {
        return nodeData.nodes;
    }

    return [];
}

function getObservedTraffic(nodeData) {
    if (Array.isArray(nodeData.observed_traffic)) {
        return nodeData.observed_traffic;
    }

    return [];
}

function getCoverageTests(nodeData) {
    if (Array.isArray(nodeData.coverage_tests)) {
        return nodeData.coverage_tests;
    }

    return [];
}

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

function addInfrastructureMarkers(items, layerGroup) {
    items.forEach((item) => {
        if (!hasPublicCoordinates(item)) {
            return;
        }

        const marker = L.circleMarker([item.latitude, item.longitude], {
            radius: 8,
            color: "#ffb347",
            weight: 2,
            fillColor: "#ffb347",
            fillOpacity: 0.8
        }).addTo(layerGroup);

        marker.bindPopup(`
            <strong>${escapeHtml(item.name || "Infrastructure Node")}</strong><br>
            Layer: Project Infrastructure<br>
            Role: ${escapeHtml(item.role || "Unknown")}<br>
            Device: ${escapeHtml(item.device || "Unknown")}<br>
            Status: ${escapeHtml(item.status || "Unknown")}<br>
            Location: ${escapeHtml(item.location_label || "Generalized / not specified")}<br>
            Accuracy: ${escapeHtml(item.location_accuracy || "Unknown")}
        `);
    });
}

function addObservedTrafficMarkers(items, layerGroup) {
    items.forEach((item) => {
        if (!hasPublicCoordinates(item)) {
            return;
        }

        const marker = L.circleMarker([item.latitude, item.longitude], {
            radius: 7,
            color: "#7cff9a",
            weight: 2,
            fillColor: "#7cff9a",
            fillOpacity: 0.75
        }).addTo(layerGroup);

        marker.bindPopup(`
            <strong>${escapeHtml(item.name || item.node_name || "Observed MeshCore Traffic")}</strong><br>
            Layer: Observed MeshCore Traffic<br>
            Last seen: ${escapeHtml(item.last_seen || "Unknown")}<br>
            Heard by: ${escapeHtml(item.heard_by || "Unknown")}<br>
            RSSI: ${escapeHtml(formatOptionalValue(item.rssi))}<br>
            SNR: ${escapeHtml(formatOptionalValue(item.snr))}<br>
            Location source: ${escapeHtml(item.location_source || "Unknown")}<br>
            Accuracy: ${escapeHtml(item.location_accuracy || "Unknown")}
        `);
    });
}

function addCoverageTestMarkers(items, layerGroup) {
    items.forEach((item) => {
        if (!hasPublicCoordinates(item)) {
            return;
        }

        const marker = L.circleMarker([item.latitude, item.longitude], {
            radius: 7,
            color: "#ffd27a",
            weight: 2,
            fillColor: "#ffd27a",
            fillOpacity: 0.65
        }).addTo(layerGroup);

        marker.bindPopup(`
            <strong>${escapeHtml(item.name || "Coverage Test")}</strong><br>
            Layer: Field-Tested Coverage<br>
            Test date: ${escapeHtml(item.test_date || "Unknown")}<br>
            Result: ${escapeHtml(item.result || "Unknown")}<br>
            Tested with: ${escapeHtml(item.tested_with || "Unknown")}<br>
            Location: ${escapeHtml(item.location_label || "Generalized / not specified")}<br>
            Notes: ${escapeHtml(item.notes || "No notes provided.")}
        `);

        if (Number.isFinite(item.radius_meters) && item.radius_meters > 0) {
            L.circle([item.latitude, item.longitude], {
                radius: item.radius_meters,
                color: "#ffd27a",
                weight: 1,
                fillColor: "#ffd27a",
                fillOpacity: 0.08
            }).addTo(layerGroup);
        }
    });
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

function formatOptionalValue(value) {
    if (value === null || value === undefined || value === "") {
        return "Unknown";
    }

    return String(value);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}document.addEventListener("DOMContentLoaded", async () => {
  const mapElement = document.getElementById("hcmn-map");

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

  try {
    const [countyResponse, nodesResponse, statusResponse] = await Promise.all([
      fetch("data/coverage/hampden-county.geojson"),
      fetch("data/nodes.json"),
      fetch("data/status.json")
    ]);

    const countyGeojson = await countyResponse.json();
    const nodeData = await nodesResponse.json();
    const statusData = await statusResponse.json();

    const countyLayer = L.geoJSON(countyGeojson, {
      style: {
        color: "#d9a441",
        weight: 2,
        opacity: 0.9,
        fillColor: "#d9a441",
        fillOpacity: 0.08
      }
    }).addTo(map);

    map.fitBounds(countyLayer.getBounds(), {
      padding: [20, 20]
    });

    const nodes = nodeData.nodes || [];

    nodes.forEach((node) => {
      if (typeof node.latitude !== "number" || typeof node.longitude !== "number") {
        return;
      }

      const marker = L.marker([node.latitude, node.longitude]).addTo(map);

      marker.bindPopup(`
        <strong>${node.name}</strong><br>
        Role: ${node.role}<br>
        Device: ${node.device}<br>
        Status: ${node.status}<br>
        Location: ${node.location_label}
      `);
    });

    updateStats(nodes, statusData);
  } catch (error) {
    console.error("Map data could not be loaded:", error);

    const statsElement = document.getElementById("hcmn-map-stats");
    if (statsElement) {
      statsElement.innerHTML = `
        <p><strong>Status:</strong> Map data could not be loaded.</p>
        <p>Check that nodes.json, status.json, and hampden-county.geojson exist in the correct folders.</p>
      `;
    }
  }
});

function updateStats(nodes, statusData) {
  const statsElement = document.getElementById("hcmn-map-stats");

  if (!statsElement) {
    return;
  }

  const repeaters = nodes.filter((node) => node.role === "repeater").length;
  const observers = nodes.filter((node) => node.role === "observer").length;
  const companions = nodes.filter((node) => node.role === "companion").length;
  const fixedNodes = nodes.filter((node) => node.fixed === true).length;
  const mappedNodes = nodes.filter((node) =>
    typeof node.latitude === "number" && typeof node.longitude === "number"
  ).length;

  statsElement.innerHTML = `
    <div class="stat-card">
      <span class="stat-number">${nodes.length}</span>
      <span class="stat-label">Documented Nodes</span>
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
      <span class="stat-number">${fixedNodes}</span>
      <span class="stat-label">Fixed Nodes</span>
    </div>

    <div class="stat-card">
      <span class="stat-number">${mappedNodes}</span>
      <span class="stat-label">Publicly Mapped</span>
    </div>

    <p class="status-note">
      <strong>Observer:</strong> ${statusData.observer_status}<br>
      <strong>MQTT:</strong> ${statusData.mqtt_status}<br>
      <strong>MeshMapper alignment:</strong> ${statusData.meshmapper_region}<br>
      <strong>Last updated:</strong> ${statusData.last_updated}
    </p>
  `;
}
