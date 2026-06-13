document.addEventListener("DOMContentLoaded", async () => {
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
