document.addEventListener("DOMContentLoaded", function () {
    const mapElement = document.getElementById("coverage-map");

    if (!mapElement || typeof L === "undefined") {
        return;
    }

    const map = L.map("coverage-map", {
        scrollWheelZoom: false
    }).setView([42.12, -72.63], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const observedActivityLayer = L.layerGroup().addTo(map);

    const overlays = {
        "Observed activity": observedActivityLayer
    };

    L.control.layers(null, overlays, {
        collapsed: true
    }).addTo(map);

    const hampdenCountyUrl =
        "https://services1.arcgis.com/hGdibHYSPO59RG1h/ArcGIS/rest/services/Massachusetts_Counties_with_Generalized_Coastline/FeatureServer/1/query?where=COUNTY%3D%27HAMPDEN%27&outFields=COUNTY,FIPS_STCO&outSR=4326&f=geojson";

    fetch(hampdenCountyUrl)
        .then(function (response) {
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
            }).addTo(map);

            countyOutline.bindPopup(
                "<strong>Hampden County</strong><br>" +
                "Local reference area for Hampden County Mesh."
            );

            map.fitBounds(countyOutline.getBounds(), {
                padding: [20, 20]
            });
        })
        .catch(function () {
            console.warn("Could not load Hampden County outline.");
        });

    fetch("data/observed-activity.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Observed activity file not available.");
            }

            return response.json();
        })
        .then(function (observedData) {
            if (!observedData || !Array.isArray(observedData.activity)) {
                return;
            }

            observedData.activity.forEach(function (item) {
                if (
                    typeof item.latitude !== "number" ||
                    typeof item.longitude !== "number"
                ) {
                    return;
                }

                const name = item.name || "Observed activity";
                const type = item.type || "Mesh activity";
                const source = item.source || "Source not listed";
                const lastSeen = item.last_seen || "Last seen not listed";
                const note = item.note || "";

                L.circleMarker([item.latitude, item.longitude], {
                    radius: 7,
                    color: "#9daf88",
                    weight: 2,
                    fillColor: "#9daf88",
                    fillOpacity: 0.35
                })
                    .addTo(observedActivityLayer)
                    .bindPopup(
                        "<strong>" + name + "</strong><br>" +
                        type + "<br>" +
                        "Source: " + source + "<br>" +
                        "Last seen: " + lastSeen +
                        (note ? "<br>" + note : "")
                    );
            });
        })
        .catch(function () {
            console.warn("Observed activity data is not available yet.");
        });

    setTimeout(function () {
        map.invalidateSize();
    }, 250);
});
