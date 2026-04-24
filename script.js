/* ─────────────────────────────
   CITIES SYSTEM (FIXED)
────────────────────────────── */

/* ── CITIES DATA ── */
const cities = {
  berlin: {
    name: "Berlin",
    center: [52.5200, 13.4050],
    zoom: 13,
    attractions: [{ id: 1, name: "Brandenburg Gate", category: "Landmarks", lat: 52.5163, lng: 13.3777 },
  { id: 2, name: "Reichstag Dome", category: "Landmarks", lat: 52.5186, lng: 13.3761 },
  { id: 3, name: "Museum Island", category: "Culture", lat: 52.5169, lng: 13.3995 },
  { id: 4, name: "Checkpoint Charlie", category: "Cold War", lat: 52.5074, lng: 13.3904 },
  { id: 5, name: "Berlin Wall Memorial", category: "History", lat: 52.5351, lng: 13.3904 },
  { id: 6, name: "East Side Gallery", category: "Street Art", lat: 52.5050, lng: 13.4399 },
  { id: 7, name: "Charlottenburg Palace", category: "Palaces", lat: 52.5211, lng: 13.2958 },
  { id: 8, name: "Alexanderplatz", category: "City Life", lat: 52.5219, lng: 13.4132 },
  { id: 9, name: "Berlin Cathedral", category: "Architecture", lat: 52.5194, lng: 13.4010 },
  { id: 10, name: "Tiergarten Park", category: "Nature", lat: 52.5145, lng: 13.3501 },

  { id: 11, name: "Potsdamer Platz", category: "Modern", lat: 52.5096, lng: 13.3759 },
  { id: 12, name: "Gendarmenmarkt", category: "Squares", lat: 52.5136, lng: 13.3927 },
  { id: 13, name: "Unter den Linden", category: "Boulevard", lat: 52.5170, lng: 13.3886 },
  { id: 14, name: "Victory Column", category: "Monuments", lat: 52.5145, lng: 13.3501 },
  { id: 15, name: "Berlin Zoo", category: "Nature", lat: 52.5079, lng: 13.3378 },
  { id: 16, name: "DDR Museum", category: "Museums", lat: 52.5194, lng: 13.4022 },
  { id: 17, name: "Topography of Terror", category: "History", lat: 52.5075, lng: 13.3816 },
  { id: 18, name: "Treptower Park", category: "Monuments", lat: 52.4862, lng: 13.4716 },
  { id: 19, name: "Tempelhofer Feld", category: "Nature", lat: 52.4732, lng: 13.4039 },
  { id: 20, name: "Hackescher Markt", category: "City Life", lat: 52.5221, lng: 13.4020 },

  // (разширено до 40+ реални точки)
  { id: 21, name: "Humboldt University", category: "Culture", lat: 52.5186, lng: 13.3930 },
  { id: 22, name: "Bebelplatz", category: "History", lat: 52.5164, lng: 13.3938 },
  { id: 23, name: "Nikolaiviertel", category: "Old Town", lat: 52.5169, lng: 13.4070 },
  { id: 24, name: "Berlin Hauptbahnhof", category: "Transport", lat: 52.5251, lng: 13.3694 },
  { id: 25, name: "Olympiastadion", category: "Sports", lat: 52.5147, lng: 13.2395 },
  { id: 26, name: "Mauerpark", category: "Nature", lat: 52.5413, lng: 13.4081 },
  { id: 27, name: "Kreuzberg District", category: "City Life", lat: 52.4986, lng: 13.4033 },
  { id: 28, name: "Kaiser Wilhelm Memorial Church", category: "History", lat: 52.5048, lng: 13.3359 },
  { id: 29, name: "Sony Center", category: "Modern", lat: 52.5101, lng: 13.3724 },
  { id: 30, name: "Haus der Kulturen", category: "Culture", lat: 52.5208, lng: 13.3679 },
  { id: 31, name: "Spree River Walk", category: "Nature", lat: 52.5200, lng: 13.4050 },
  { id: 32, name: "RAW Gelände", category: "Street Art", lat: 52.5039, lng: 13.4502 },
  { id: 33, name: "Görlitzer Park", category: "Nature", lat: 52.4968, lng: 13.4351 },
  { id: 34, name: "Berlin Wall Trail", category: "History", lat: 52.5200, lng: 13.4100 },
  { id: 35, name: "Prenzlauer Berg", category: "City Life", lat: 52.5389, lng: 13.4245 },
  { id: 36, name: "Weißensee Lake", category: "Nature", lat: 52.5522, lng: 13.4680 },
  { id: 37, name: "Spandau Fortress", category: "History", lat: 52.5361, lng: 13.2044 },
  { id: 38, name: "Teufelsberg", category: "Hidden", lat: 52.4986, lng: 13.2416 },
  { id: 39, name: "Olympic Village", category: "History", lat: 52.5140, lng: 13.2490 },
  { id: 40, name: "Berlin Dungeon", category: "Entertainment", lat: 52.5180, lng: 13.4020 }
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

/* ── STATE ── */
let dirFilter = "all";
let currentCity = "berlin";
let activeAttractions = cities.berlin.attractions;

/* ─────────────────────────────
   CITY SWITCHER (HAMBURGER MENU)
────────────────────────────── */

function toggleCityMenu() {
  document.getElementById("city-menu")?.classList.toggle("active");
}

function switchCity(cityKey) {
  if (!cities[cityKey]) return;

  currentCity = cityKey;
  activeAttractions = cities[cityKey].attractions;

  // update explore
  renderExplore();

  // update map
  if (leafletMap) {
    leafletMap.setView(
      cities[cityKey].center,
      cities[cityKey].zoom
    );

    // remove old markers
    mapMarkers.forEach(m => leafletMap.removeLayer(m.marker));
    mapMarkers = [];

    // add new markers
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

  // close menu
  document.getElementById("city-menu")?.classList.remove("active");

  console.log("Switched city:", cityKey);
}

/* ─────────────────────────────
   HELPER
────────────────────────────── */

function getActiveAttractions() {
  return activeAttractions || [];
}

/* ─────────────────────────────
   EXPLORE FIX (IMPORTANT)
────────────────────────────── */

function renderExplore() {
  const inputEl = document.getElementById('dir-search-input');
  const q = (inputEl?.value || '').trim().toLowerCase();

  const data = getActiveAttractions();

  const filtered = data.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ =
      !q ||
      p.name.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q));

    return matchCat && matchQ;
  });

  const grid = document.getElementById('dir-grid');
  if (!grid) return;

  grid.innerHTML = filtered.map((p, i) => `
    <div class="place-card" onclick="goToPlace(${p.id})">
      <div class="place-card-header">
        <div>
          <span class="place-card-cat">${p.category}</span>
          <div class="place-card-name">${p.name}</div>
        </div>
      </div>
      <div class="place-card-body">
        <div class="place-card-footer">${currentCity}</div>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────
   MAP FIX
────────────────────────────── */

function renderMapList(list) {
  const data = list || getActiveAttractions();
  const container = document.getElementById('map-places-list');
  if (!container) return;

  container.innerHTML = data.map(p => `
    <div class="map-place-item"
         id="map-item-${p.id}"
         onclick="selectPlace(${p.id})">
      <div>
        <div>${p.name}</div>
        <div>${p.category}</div>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────
   NAV MAP SELECT FIX
────────────────────────────── */

function selectPlace(id) {
  const p = activeAttractions.find(x => x.id === id);
  if (!p) return;

  selectedPlaceId = id;

  if (leafletMap) {
    leafletMap.setView([p.lat, p.lng], 16);

    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }

  highlightSidebarItem(id);
}

/* ─────────────────────────────
   INITIAL STATE
────────────────────────────── */

window.addEventListener('DOMContentLoaded', () => {
  activeAttractions = cities[currentCity].attractions;
});
