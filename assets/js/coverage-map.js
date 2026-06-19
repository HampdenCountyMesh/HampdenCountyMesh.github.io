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
        return String(value)
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
            if (!observedData || !Array.isArray(observedData.activity)) {
                setActivityStatus(
                    "Observed activity data loaded, but no usable activity list was found."
                );
                return;
            }

            if (observedData.public_live_data === false || observedData.automation_status === "not_automated_yet") {
                if (observedData.activity.length === 0) {
                    setActivityStatus(
                        "Observed activity data is prepared, but public live activity is not automated yet."
                    );
                    return;
                }
            }

            if (observedData.activity.length === 0) {
                setActivityStatus(
                    "Observed activity layer is prepared. No public observed activity entries are available yet."
                );
                return;
            }

            let plottedEntries = 0;

            observedData.activity.forEach(function (item) {
                const latitude = item.latitude;
                const longitude = item.longitude;

                if (!isValidCoordinate(latitude, longitude)) {
                    return;
                }

                if (item.public_safe === false || item.show_on_public_map === false) {
                    return;
                }

                const name = escapeHtml(item.name || "Observed activity");
                const type = escapeHtml(item.type || item.source_type || "Mesh activity");
                const source = escapeHtml(item.source || item.source_type || "Source not listed");
                const lastSeen = escapeHtml(item.last_seen || item.last_updated || "Last seen not listed");
                const locationPrecision = escapeHtml(item.location_precision || "not listed");
                const note = item.note ? escapeHtml(item.note) : "";

                const popupLines = [
                    "<strong>" + name + "</strong>",
                    type,
                    "Source: " + source,
                    "Last seen: " + lastSeen,
                    "Location precision: " + locationPrecision
                ];

                if (note) {
                    popupLines.push(note);
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

            setActivityStatus(
                plottedEntries +
                " public-safe observed activity " +
                (plottedEntries === 1 ? "entry" : "entries") +
                " loaded. Last updated: " +
                (observedData.last_updated || "not listed") +
                "."
            );
        })
        .catch(function () {
            setActivityStatus(
                "Observed activity data is not available yet. The map is still usable as a Hampden County reference map."
            );

            console.warn("Observed activity data is not available yet.");
        });

    setTimeout(function () {
        map.invalidateSize();
    }, 250);
});