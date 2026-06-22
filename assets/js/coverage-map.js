document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("coverage-map");
    const activityStatusText = document.getElementById("activity-data-status-text");

    if (!mapElement || typeof L === "undefined") {
        return;
    }

    function setActivityStatus(message) {
        if (activityStatusText) {
            activityStatusText.textContent = message;
        }
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function isValidCoordinate(latitude, longitude) {
        return (
            typeof latitude === "number" &&
            typeof longitude === "number" &&
            Number.isFinite(latitude) &&
            Number.isFinite(longitude) &&
            latitude >= -90 &&
            latitude <= 90 &&
            longitude >= -180 &&
            longitude <= 180
        );
    }

    function readableDate(value) {
        if (!value) {
            return "not listed";
        }

        const date = new Date(value);

        if (Number.isNaN(date.getTime())) {
            return String(value);
        }

        return date.toLocaleString("en-US", {
            timeZone: "America/New_York",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short"
        });
    }

    function getActivityItems(data) {
        if (Array.isArray(data)) {
            return data;
        }

        if (data && Array.isArray(data.activity)) {
            return data.activity;
        }

        return [];
    }

    function getDataStatus(data) {
        if (!data || typeof data !== "object" || Array.isArray(data)) {
            return {};
        }

        return {
            publicLiveData: data.public_live_data,
            automationStatus: data.automation_status,
            lastUpdated: data.last_updated,
            note: data.note || data.description || ""
        };
    }

    setActivityStatus("Checking observed activity data...");

    const map = L.map("coverage-map", {
        scrollWheelZoom: false
    }).setView([42.12, -72.63], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    const countyOutlineLayer = L.layerGroup().addTo(map);
    const observedActivityLayer = L.layerGroup().addTo(map);

    const overlays = {
        "Hampden County outline": countyOutlineLayer,
        "Observed activity": observedActivityLayer
    };

    L.control.layers(null, overlays, {
        collapsed: true
    }).addTo(map);

    const hampdenCountyUrl =
        "https://services1.arcgis.com/hGdibHYSPO59RG1h/ArcGIS/rest/services/Massachusetts_Counties_with_Generalized_Coastline/FeatureServer/1/query?where=COUNTY%3D%27HAMPDEN%27&outFields=COUNTY,FIPS_STCO&outSR=4326&f=geojson";

    fetch(hampdenCountyUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Hampden County outline data not available.");
            }

            return response.json();
        })
        .then(function (countyData) {
            const countyOutline = L.geoJSON(countyData, {
                style: {
                    color: "#ffb347",
                    weight: 3,
                    opacity: 0.95,
                    fillColor: "#9daf88",
                    fillOpacity: 0.08
                }
            }).addTo(countyOutlineLayer);

            countyOutline.bindPopup(
                "<strong>Hampden County</strong><br>" +
                "Local reference area for Hampden County Mesh."
            );

            const bounds = countyOutline.getBounds();

            if (bounds.isValid()) {
                map.fitBounds(bounds, {
                    padding: [20, 20]
                });
            }
        })
        .catch(function () {
            console.warn("Could not load Hampden County outline.");
        });

    fetch("/data/observed-activity.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Observed activity data not available.");
            }

            return response.json();
        })
        .then(function (observedData) {
            const activityItems = getActivityItems(observedData);
            const dataStatus = getDataStatus(observedData);

            if (!Array.isArray(activityItems)) {
                setActivityStatus(
                    "Observed activity data loaded, but no usable activity list was found."
                );
                return;
            }

            if (
                activityItems.length === 0 &&
                (
                    dataStatus.publicLiveData === false ||
                    dataStatus.automationStatus === "not_automated_yet"
                )
            ) {
                setActivityStatus(
                    "Observed activity data is prepared, but public live activity is not automated yet."
                );
                return;
            }

            if (activityItems.length === 0) {
                setActivityStatus(
                    "Observed activity layer is prepared. No public observed activity entries are available yet."
                );
                return;
            }

            let plottedEntries = 0;
            let skippedEntries = 0;

            activityItems.forEach(function (item) {
                if (!item || typeof item !== "object") {
                    skippedEntries += 1;
                    return;
                }

                if (item.public_safe === false || item.show_on_public_map === false) {
                    skippedEntries += 1;
                    return;
                }

                const latitude = item.latitude;
                const longitude = item.longitude;

                if (!isValidCoordinate(latitude, longitude)) {
                    skippedEntries += 1;
                    return;
                }

                const label = escapeHtml(item.label || item.name || "Observed activity");
                const system = escapeHtml(item.system || item.type || "Mesh activity");
                const sourceType = escapeHtml(item.source_type || item.source || "source not listed");
                const status = escapeHtml(item.status || "observed");
                const generalArea = escapeHtml(item.general_area || item.area || "general area not listed");
                const locationPrecision = escapeHtml(item.location_precision || "not listed");
                const lastSeen = escapeHtml(
                    readableDate(item.timestamp || item.last_seen || item.last_updated)
                );
                const description = escapeHtml(item.description || item.note || item.notes || "");

                const popupLines = [
                    "<strong>" + label + "</strong>",
                    "System: " + system,
                    "Status: " + status,
                    "Source type: " + sourceType,
                    "General area: " + generalArea,
                    "Last updated: " + lastSeen,
                    "Location precision: " + locationPrecision
                ];

                if (description) {
                    popupLines.push(description);
                }

                L.circleMarker([latitude, longitude], {
                    radius: 7,
                    color: "#9daf88",
                    weight: 2,
                    fillColor: "#9daf88",
                    fillOpacity: 0.35
                })
                    .addTo(observedActivityLayer)
                    .bindPopup(popupLines.join("<br>"));

                plottedEntries += 1;
            });

            if (plottedEntries === 0) {
                setActivityStatus(
                    "Observed activity data loaded, but no entries had public-safe map coordinates."
                );
                return;
            }

            const lastUpdatedText = readableDate(dataStatus.lastUpdated);

            setActivityStatus(
                plottedEntries +
                " public-safe observed activity " +
                (plottedEntries === 1 ? "entry" : "entries") +
                " loaded. Last updated: " +
                lastUpdatedText +
                "." +
                (skippedEntries > 0 ? " Some entries were not shown because they were private, hidden, or did not include public-safe map coordinates." : "")
            );
        })
        .catch(function () {
            setActivityStatus(
                "Observed activity data is not available yet. The map is still usable as a Hampden County reference map."
            );

            console.warn("Observed activity data is not available yet.");
        });

    window.setTimeout(function () {
        map.invalidateSize();
    }, 250);
});