/* ─────────────────────────────
   CITIES DATA ENGINE (5 cities)
────────────────────────────── */

const cities = ["Berlin", "Paris", "Rome", "London", "Barcelona"];

let currentCity = "Berlin";

const data = {

/* ───────── BERLIN ───────── */
Berlin: [
  { id: 1, name: "Brandenburg Gate", category: "Landmarks", lat: 52.5163, lng: 13.3777 },
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
],


/* ───────── PARIS ───────── */
Paris: Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  name: "Paris Place " + (i + 1),
  category: "Landmarks",
  lat: 48.8566 + Math.random() * 0.05,
  lng: 2.3522 + Math.random() * 0.05
})),

/* ───────── ROME ───────── */
Rome: Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  name: "Rome Site " + (i + 1),
  category: "History",
  lat: 41.9028 + Math.random() * 0.05,
  lng: 12.4964 + Math.random() * 0.05
})),

/* ───────── LONDON ───────── */
London: Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  name: "London Spot " + (i + 1),
  category: "Landmarks",
  lat: 51.5074 + Math.random() * 0.05,
  lng: -0.1278 + Math.random() * 0.05
})),

/* ───────── BARCELONA ───────── */
Barcelona: Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  name: "Barcelona Place " + (i + 1),
  category: "Architecture",
  lat: 41.3851 + Math.random() * 0.05,
  lng: 2.1734 + Math.random() * 0.05
}))
};


/* ───────── HELPERS ───────── */

function getAttractions() {
  return data[currentCity];
}

function setCity(city) {
  currentCity = city;
  renderExplore();
  renderMap();
}

/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

/* ── About us  ── */
function navigate(page) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(p => p.classList.remove("active"));

  document.getElementById("page-" + page).classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ── NAVIGATION ── */
function navigate(page) {
  // 1. Деактивираме всички страници
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // 2. Активираме целевата страница
  const targetPage = document.getElementById('page-' + page);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    console.error("Page not found: page-" + page);
    return;
  }

  // 3. Управляваме активния nav линк
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  window.scrollTo(0, 0);

  // 4. Безопасно изпълнение на функциите при навигация
  try {
    if (page === 'explore' && typeof renderExplore === 'function') renderExplore();
    if (page === 'map'     && typeof initMap      === 'function') initMap();
    // ✅ Добавено renderBlog
    if (page === 'blog'    && typeof renderBlog   === 'function') renderBlog();
  } catch (e) {
    console.error("Error loading page content:", e);
  }

  window.location.hash = page;
}

/* ── ЕДИНСТВЕН DOMContentLoaded ── */
window.addEventListener('DOMContentLoaded', () => {
  // ✅ Премахнати дублираните listener-и — само един
  renderFilterPills();
  renderExplore();

  const hash = window.location.hash.replace('#', '');
  if (hash) {
    navigate(hash);
  } else {
    navigate('home');
  }
});

/* ── EXPLORE ── */
function renderFilterPills() {
  const categories = [...new Set(attractions.map(p => p.category))];
  const container = document.querySelector('#page-explore .filter-pills');
  if (!container) return;

  container.innerHTML = `
    <div class="pill active" data-filter="all" onclick="setDirFilter('all')">All</div>
    ${categories.map(cat => `
      <div class="pill" data-filter="${cat}" onclick="setDirFilter('${cat}')">${cat}</div>
    `).join('')}
  `;
}

function setDirFilter(f) {
  // ✅ Обновяваме dirFilter променливата
  dirFilter = f;

  document.querySelectorAll('#page-explore .pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === f);
  });

  renderExplore();
}

function goToPlace(id) {
  navigate('map');
  setTimeout(() => selectPlace(id), 300);
}

function renderExplore() {
  const inputEl = document.getElementById('dir-search-input');
  const q = (inputEl?.value || '').trim().toLowerCase();

  const filtered = attractions.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ   = !q ||
                     p.name.toLowerCase().includes(q) ||
                     (p.description && p.description.toLowerCase().includes(q));
    return matchCat && matchQ;
  });

  const grid = document.getElementById('dir-grid');
  if (!grid) return;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="dir-empty">We couldn't find places. Please try again.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    const catClass = p.category ? p.category.toLowerCase().replace(/\s+/g, '-') : 'general';
    const image    = p.image || 'https://placeholder.com';

    return `
      <div class="place-card" onclick="goToPlace('${p.id}')">
        <div class="place-card-img" style="background-image: url('${image}')"></div>
        <div class="place-card-header">
          <div>
            <span class="place-card-cat cat-${catClass}">${p.category}</span>
            <div class="place-card-name">${p.name}</div>
          </div>
          <span class="place-card-number">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <div class="place-card-body">
          <p class="place-card-desc">${p.description || ''}</p>
          <div class="place-card-footer">${p.city || 'Berlin'}</div>
        </div>
      </div>`;
  }).join('');
}

/* ── MAP ── */
function getMarkerColor(cat) {
  switch (cat) {
    case 'Prussian Landmarks':  return '#1A2F45';
    case 'Berlin Wall Sites':   return '#E8C000';
    case 'Totalitarian Scars':  return '#c9a84c';
    case 'Hidden Gems':         return '#b0a8e8';
    case 'Tech & Arts Museums': return '#5dcaa5';
    default:                    return '#999';
  }
}

function createMarkerIcon(cat) {
  const color = getMarkerColor(cat);
  return L.divIcon({
    html: `<svg width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6 0 0 6 0 14c0 10 14 22 14 22s14-12 14-22C28 6 22 0 14 0z" fill="${color}"/>
      <circle cx="14" cy="14" r="5" fill="white"/>
    </svg>`,
    className: '',
    iconSize: [28, 36],
    iconAnchor: [14, 36]
  });
}

function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;

  setTimeout(() => {
    leafletMap = L.map('leaflet-map').setView([52.5200, 13.4050], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(leafletMap);

    attractions.forEach(p => {
      const marker = L.marker([p.lat, p.lng], { icon: createMarkerIcon(p.category) })
        .addTo(leafletMap)
        .bindPopup(`<b>${p.name}</b><br>${p.category}`)
        .on('click', () => highlightSidebarItem(p.id));

      mapMarkers.push({ id: p.id, marker, place: p });
    });

    renderMapList();
  }, 200);
}

function renderMapList(list) {
  const data      = list || attractions;
  const container = document.getElementById('map-places-list');
  if (!container) return;

  container.innerHTML = data.map(p => {
    const dotClass = p.category.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `
      <div class="map-place-item ${selectedPlaceId === p.id ? 'selected' : ''}"
           id="map-item-${p.id}"
           onclick="selectPlace(${p.id})">
        <div class="map-place-dot ${dotClass}"></div>
        <div>
          <div>${p.name}</div>
          <div>${p.category}</div>
        </div>
      </div>`;
  }).join('');
}

function selectPlace(id) {
  const p = attractions.find(x => x.id === id);
  if (!p) return;

  selectedPlaceId = id;

  if (leafletMap) {
    leafletMap.setView([p.lat, p.lng], 16);
    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }

  highlightSidebarItem(id);
}

function highlightSidebarItem(id) {
  document.querySelectorAll('.map-place-item').forEach(el => el.classList.remove('selected'));
  const el = document.getElementById('map-item-' + id);
  if (el) el.classList.add('selected');
}

/* ── PLAN ── */
let planDays = 2;
let planDiff = 'moderate';
let planInterests = new Set();

function updateDays(val) {
  planDays = parseInt(val);
  const pct = ((val - 1) / 6 * 100).toFixed(1);
  const slider = document.getElementById('days-slider');
  slider.style.setProperty('--pct', pct + '%');
  document.getElementById('days-display').textContent = val == 1 ? '1 day' : val + ' days';
  document.querySelectorAll('.days-tick').forEach((t, i) => t.classList.toggle('active', i + 1 == val));
}

function setDays(val) {
  document.getElementById('days-slider').value = val;
  updateDays(val);
}

function setDiff(d) {
  planDiff = d;
  ['relaxed', 'moderate', 'intensive'].forEach(opt => {
    document.getElementById('diff-' + opt).classList.toggle('selected', opt === d);
  });
}

function toggleInterest(key) {
  const el = document.getElementById('int-' + key);
  if (planInterests.has(key)) {
    planInterests.delete(key);
    el.classList.remove('selected');
  } else {
    planInterests.add(key);
    el.classList.add('selected');
  }
}

function showError(msg) {
  const el = document.getElementById('plan-error');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('visible');
}

function hideError() {
  const el = document.getElementById('plan-error');
  if (!el) return;
  el.classList.remove('visible');
}

async function generatePlan() {
  hideError();

  if (!planInterests.size) {
    showError("Please select at least one interest.");
    return;
  }

  const loading = document.getElementById('plan-loading');
  const resultBox = document.getElementById('plan-result');
  const btn = document.getElementById('plan-btn');

  if (loading) loading.classList.add('visible');
  if (resultBox) resultBox.classList.remove('visible');
  if (btn) btn.disabled = true;

  const interests = [...planInterests].join(', ');

  const prompt = `
You are a travel guide for Berlin, Germany.
Create a ${planDays}-day itinerary.

Interests: ${interests}
Pace: ${planDiff}

Format clearly with Day 1, Day 2 etc.
Include short explanations for each place.
Write in English.
`;

  try {
    const response = await fetch('https://zuirhbackend.onrender.com/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    console.log("Frontend response:", data);

    if (!response.ok) {
      showError(data.error || "Server error");
      return;
    }

    if (!data.result) {
      showError("AI returned empty response");
      return;
    }

    const output = document.getElementById('plan-results');

    if (output) {
      output.innerHTML = data.result.replace(/\n/g, '<br>');
    }

    const meta = document.getElementById('plan-result-meta');
    if (meta) {
      meta.textContent =
        `${planDays} ${planDays === 1 ? 'day' : 'days'} · ${planDiff} pace · ${interests}`;
    }

    if (resultBox) resultBox.classList.add('visible');

  } catch (err) {
    console.error("Frontend error:", err);
    showError("Could not connect to server");
  } finally {
    if (loading) loading.classList.remove('visible');
    if (btn) btn.disabled = false;
  }
}
