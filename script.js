/* ─────────────────────────────
   MAP STATE
────────────────────────────── */

let leafletMap = null;
let mapMarkers = [];

/* ─────────────────────────────
   CITY DATA
────────────────────────────── */

const cities = {
  berlin: {
    center: [52.5200, 13.4050],
    zoom: 13,
    attractions: [
      { id: 1, name: "Brandenburg Gate", category: "Landmarks", lat: 52.5163, lng: 13.3777 },
      { id: 2, name: "Reichstag Dome", category: "Landmarks", lat: 52.5186, lng: 13.3761 },
      { id: 3, name: "Museum Island", category: "Culture", lat: 52.5169, lng: 13.3995 },
      { id: 4, name: "Checkpoint Charlie", category: "Cold War", lat: 52.5074, lng: 13.3904 },
      { id: 5, name: "Berlin Wall Memorial", category: "History", lat: 52.5351, lng: 13.3904 }
    ]
  },

  paris: generateCity("Paris", 48.8566, 2.3522),
  rome: generateCity("Rome", 41.9028, 12.4964),
  london: generateCity("London", 51.5074, -0.1278),
  barcelona: generateCity("Barcelona", 41.3851, 2.1734)
};

/* helper */
function generateCity(name, lat, lng) {
  return {
    center: [lat, lng],
    zoom: 13,
    attractions: Array.from({ length: 40 }).map((_, i) => ({
      id: i + 1,
      name: `${name} Place ${i + 1}`,
      category: "Landmarks",
      lat: lat + (Math.random() - 0.5) * 0.05,
      lng: lng + (Math.random() - 0.5) * 0.05
    }))
  };
}

/* ─────────────────────────────
   INIT CITY PAGE (MAIN ENTRY)
────────────────────────────── */

function initCity(cityKey) {
  const city = cities[cityKey];
  if (!city) return;

  renderExplore(city);
  initMap(city);
}

/* ─────────────────────────────
   EXPLORE SECTION
────────────────────────────── */

function renderExplore(city) {
  const grid = document.getElementById("dir-grid");
  if (!grid) return;

  grid.innerHTML = city.attractions.map(p => `
    <div class="place-card">
      <div class="place-card-name">${p.name}</div>
      <div class="place-card-cat">${p.category}</div>
    </div>
  `).join("");
}

/* ─────────────────────────────
   MAP INIT
────────────────────────────── */

function initMap(city) {
  leafletMap = L.map("leaflet-map").setView(
    city.center,
    city.zoom
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(leafletMap);

  city.attractions.forEach(p => {
    const marker = L.marker([p.lat, p.lng])
      .addTo(leafletMap)
      .bindPopup(`<b>${p.name}</b><br>${p.category}`);

    mapMarkers.push(marker);
  });

  renderMapList(city);
}

/* ─────────────────────────────
   MAP LIST
────────────────────────────── */

function renderMapList(city) {
  const list = document.getElementById("map-places-list");
  if (!list) return;

  list.innerHTML = city.attractions.map(p => `
    <div class="map-place-item" onclick="goToPlace(${p.lat}, ${p.lng})">
      <div>${p.name}</div>
      <small>${p.category}</small>
    </div>
  `).join("");
}

/* ─────────────────────────────
   MAP INTERACTION
────────────────────────────── */

function goToPlace(lat, lng) {
  if (!leafletMap) return;
  leafletMap.setView([lat, lng], 16);
}
