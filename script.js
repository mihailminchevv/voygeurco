/* ─────────────────────────────
   CITIES SYSTEM (FIXED CLEAN VERSION)
────────────────────────────── */

/* ── CITIES DATA ── */
const cities = {
  berlin: {
    name: "Berlin",
    center: [52.5200, 13.4050],
    zoom: 13,
    attractions: [
      { id: 1, name: "Brandenburg Gate", category: "Landmarks", lat: 52.5163, lng: 13.3777 },
      { id: 2, name: "Reichstag Dome", category: "Landmarks", lat: 52.5186, lng: 13.3761 },
      { id: 3, name: "Museum Island", category: "Culture", lat: 52.5169, lng: 13.3995 },
      { id: 4, name: "Checkpoint Charlie", category: "Cold War", lat: 52.5074, lng: 13.3904 },
      { id: 5, name: "Berlin Wall Memorial", category: "History", lat: 52.5351, lng: 13.3904 },
      { id: 6, name: "East Side Gallery", category: "Street Art", lat: 52.5050, lng: 13.4399 },
      { id: 7, name: "Charlottenburg Palace", category: "Palaces", lat: 52.5211, lng: 13.2958 },
      { id: 8, name: "Alexanderplatz", category: "City Life", lat: 52.5219, lng: 13.4132 },
      { id: 9, name: "Berlin Cathedral", category: "Architecture", lat: 52.5194, lng: 13.4010 },
      { id: 10, name: "Tiergarten Park", category: "Nature", lat: 52.5145, lng: 13.3501 }
    ]
  },

  paris: {
    name: "Paris",
    center: [48.8566, 2.3522],
    zoom: 13,
    attractions: Array.from({ length: 40 }).map((_, i) => ({
      id: i + 1,
      name: `Paris Place ${i + 1}`,
      category: "Landmarks",
      lat: 48.8566 + Math.random() * 0.05,
      lng: 2.3522 + Math.random() * 0.05
    }))
  },

  rome: {
    name: "Rome",
    center: [41.9028, 12.4964],
    zoom: 13,
    attractions: Array.from({ length: 40 }).map((_, i) => ({
      id: i + 1,
      name: `Rome Site ${i + 1}`,
      category: "History",
      lat: 41.9028 + Math.random() * 0.05,
      lng: 12.4964 + Math.random() * 0.05
    }))
  },

  london: {
    name: "London",
    center: [51.5074, -0.1278],
    zoom: 13,
    attractions: Array.from({ length: 40 }).map((_, i) => ({
      id: i + 1,
      name: `London Spot ${i + 1}`,
      category: "Landmarks",
      lat: 51.5074 + Math.random() * 0.05,
      lng: -0.1278 + Math.random() * 0.05
    }))
  },

  barcelona: {
    name: "Barcelona",
    center: [41.3851, 2.1734],
    zoom: 13,
    attractions: Array.from({ length: 40 }).map((_, i) => ({
      id: i + 1,
      name: `Barcelona Place ${i + 1}`,
      category: "Architecture",
      lat: 41.3851 + Math.random() * 0.05,
      lng: 2.1734 + Math.random() * 0.05
    }))
  }
};

/* ── STATE (FIXED) ── */
let currentCity = "berlin";
let currentPage = "home";

let dirFilter = "all";
let activeAttractions = [];

/* map state */
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

/* ─────────────────────────────
   CITY SWITCHER
────────────────────────────── */

function toggleCityMenu() {
  document.getElementById("city-menu")?.classList.toggle("active");
}

function switchCity(cityKey) {
  if (!cities[cityKey]) return;

  currentCity = cityKey;
  activeAttractions = cities[cityKey].attractions;

  renderExplore();

  if (leafletMap) {
    leafletMap.setView(
      cities[cityKey].center,
      cities[cityKey].zoom
    );

    mapMarkers.forEach(m => leafletMap.removeLayer(m.marker));
    mapMarkers = [];

    activeAttractions.forEach(p => {
      const marker = L.marker([p.lat, p.lng], {
        icon: createMarkerIcon(p.category)
      })
        .addTo(leafletMap)
        .bindPopup(`<b>${p.name}</b><br>${p.category}`);

      mapMarkers.push({ id: p.id, marker, place: p });
    });

    renderMapList(activeAttractions);
  }

  document.getElementById("city-menu")?.classList.remove("active");
}

/* ─────────────────────────────
   FIX: SAFE GET
────────────────────────────── */

function getActiveAttractions() {
  return activeAttractions.length
    ? activeAttractions
    : cities[currentCity].attractions;
}

/* ─────────────────────────────
   EXPLORE
────────────────────────────── */

function renderExplore() {
  const q = (document.getElementById("dir-search-input")?.value || "")
    .toLowerCase();

  const data = getActiveAttractions();

  const filtered = data.filter(p => {
    const matchCat = dirFilter === "all" || p.category === dirFilter;
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q);

    return matchCat && matchQ;
  });

  const grid = document.getElementById("dir-grid");
  if (!grid) return;

  grid.innerHTML = filtered.map(p => `
    <div class="place-card" onclick="selectPlace(${p.id})">
      <div class="place-card-name">${p.name}</div>
      <div class="place-card-cat">${p.category}</div>
    </div>
  `).join("");
}

/* ─────────────────────────────
   MAP
────────────────────────────── */

function renderMapList(list) {
  const data = list || getActiveAttractions();
  const container = document.getElementById("map-places-list");
  if (!container) return;

  container.innerHTML = data.map(p => `
    <div class="map-place-item"
         onclick="selectPlace(${p.id})">
      <div>${p.name}</div>
      <div>${p.category}</div>
    </div>
  `).join("");
}

function selectPlace(id) {
  const p = getActiveAttractions().find(x => x.id === id);
  if (!p) return;

  selectedPlaceId = id;

  if (leafletMap) {
    leafletMap.setView([p.lat, p.lng], 16);

    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }
}
