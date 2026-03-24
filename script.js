/* ── DATA ── */
const attractions = [
  { id: 1, name: "Cathedral of the Assumption", category: "Tourist Place", description: "One of Bulgaria's largest cathedrals, consecrated in 1886. Its soaring neo-Byzantine domes dominate the Varna skyline and the interior is covered in spectacular frescoes and golden iconostases.", city: "Varna", lat: 43.2078, lng: 27.9147, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Varna_-_Cathedral_%281%29.jpg/800px-Varna_-_Cathedral_%281%29.jpg" },
  { id: 2, name: "Sea Garden", category: "Tourist Place", description: "An 80‑hectare coastal park along the Black Sea established in the 1880s. Home to the Dolphinarium, Summer Theatre, Naval Museum, and miles of beautiful seaside walkways.", city: "Varna", lat: 43.2113, lng: 27.9173, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Varna_sea_garden.jpg/1280px-Varna_sea_garden.jpg" },
  { id: 3, name: "Archaeological Museum", category: "Tourist Place", description: "Houses the world's oldest processed gold treasure — the Varna Chalcolithic Necropolis collection, dating to 4600–4200 BC. An essential visit for anyone interested in ancient history.", city: "Varna", lat: 43.2067, lng: 27.9128, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Varna_Archaeological_Museum.jpg/800px-Varna_Archaeological_Museum.jpg" },
  { id: 4, name: "Roman Thermae", category: "Tourist Place", description: "The largest ancient Roman baths on the Balkan Peninsula, built in the 2nd–3rd century AD. The ruins cover 7,000 sq metres and still stand nearly 20 metres high in places.", city: "Varna", lat: 43.2072, lng: 27.9120, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Roman_Thermae_-_Varna_-_panoramio.jpg/800px-Roman_Thermae_-_Varna_-_panoramio.jpg" },
  { id: 5, name: "Euxinograd Palace", category: "Tourist Place", description: "A stunning Bulgarian royal residence set in a large park on the Black Sea coast, built in 1882. Famous for its French‑style gardens and award‑winning estate winery.", city: "Varna", lat: 43.2592, lng: 27.9051, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Evksinograd_2.jpg/800px-Evksinograd_2.jpg" },
  { id: 6, name: "Varna Dolphinarium", category: "Tourist Place", description: "The oldest and largest dolphinarium in Bulgaria, open since 1984. Located in the Sea Garden, it hosts daily dolphin and seal performances in a spectacular Black Sea setting.", city: "Varna", lat: 43.2155, lng: 27.9181, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Varna_Dolphinarium_exterior.jpg/800px-Varna_Dolphinarium_exterior.jpg" },
  { id: 7, name: "Varna Farmers Market", category: "Local Business", description: "A vibrant daily open‑air market in the heart of the city where local producers sell seasonal vegetables, artisan cheeses, honey, dried herbs, and traditional Bulgarian crafts.", city: "Varna", lat: 43.2090, lng: 27.9133, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Varna_Central_Market.jpg/800px-Varna_Central_Market.jpg" },
  { id: 8, name: "Aladzha Monastery", category: "Hidden Gem", description: "A medieval Orthodox cave monastery in the forest near Varna, with serene surroundings and historical significance.", city: "Varna", lat: 43.3031, lng: 27.9311, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aladzha_monastery.jpg/800px-Aladzha_monastery.jpg" },
  { id: 9, name: "Butterfly House Varna", category: "Hidden Gem", description: "A special museum with live butterflies in a beautiful garden. Quiet and colorful, perfect for families and photography.", city: "Varna", lat: 43.2121, lng: 27.9169, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Butterfly_House_Varna.jpg/800px-Butterfly_House_Varna.jpg" },
  { id: 10, name: "Retro Museum Varna", category: "Hidden Gem", description: "A small museum showcasing retro cars, motorcycles, and 20th-century memorabilia. Off the standard tourist track.", city: "Varna", lat: 43.2075, lng: 27.9112, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Retro_Museum_Varna.jpg/800px-Retro_Museum_Varna.jpg" },
  { id: 11, name: "Sea Casino Varna", category: "Hidden Gem", description: "Historic building in the Sea Garden hosting exhibitions, concerts, and cultural events. Offers a great view of the sea.", city: "Varna", lat: 43.2110, lng: 27.9170, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Varna_Sea_Casino.jpg/800px-Varna_Sea_Casino.jpg" },
  { id: 12, name: "Asparuhov Park & Bridge", category: "Hidden Gem", description: "A scenic park and bridge offering panoramic views and peaceful walking trails, away from the main tourist crowds.", city: "Varna", lat: 43.1905, lng: 27.9298, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Asparuhov_Bridge_Varna.jpg/800px-Asparuhov_Bridge_Varna.jpg" }
];
/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

let planDays = 2;
let planDiff = 'moderate';
let planInterests = new Set(['history', 'food']);

/* ── NAVIGATION ── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const navLink = document.querySelector('[data-page="' + page + '"]');
  if (navLink) navLink.classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'directory') renderDirectory();
  if (page === 'map') initMap();
  if (page === 'blog') renderBlog();
  window.location.hash = page;
}

window.addEventListener('hashchange', () => {
  const h = window.location.hash.replace('#', '') || 'home';
  if (['home', 'directory', 'map', 'blog', 'plan'].includes(h)) navigate(h);
});

/* ── DIRECTORY ── */
function setDirFilter(f) {
  dirFilter = f;
  document.querySelectorAll('#page-directory .pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === f);
  });
  renderDirectory();
}

function renderDirectory() {
  const q = (document.getElementById('dir-search-input').value || '').toLowerCase();
  const filtered = attractions.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  const grid = document.getElementById('dir-grid');
  if (!filtered.length) {
    grid.innerHTML = '<div class="dir-empty">No places found. Try a different search or filter.</div>';
    return;
  }
  grid.innerHTML = filtered.map((p,i) => {
    const catClass = p.category === 'Tourist Place' ? 'cat-tourist' : p.category === 'Cafe' ? 'cat-cafe' : p.category === 'Restaurant' ? 'cat-restaurant' : 'cat-business';
    return `<div class="place-card" onclick="navigate('map'); setTimeout(() => selectPlace(${p.id}), 400)">
      <div class="place-card-img" style="background-image: url('${p.image}'), linear-gradient(135deg, #1a2f45 0%, #0d1b2a 100%)"></div>
      <div class="place-card-header">
        <div><span class="place-card-cat ${catClass}">${p.category}</span><div class="place-card-name">${p.name}</div></div>
        <span class="place-card-number">${String(i+1).padStart(2,'0')}</span>
      </div>
      <div class="place-card-body">
        <p class="place-card-desc">${p.description}</p>
        <div class="place-card-footer">
          <svg viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          ${p.city}, Bulgaria
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── MAP ── */
function getMarkerColor(cat) {
  return cat === 'Tourist Place' ? '#c9a84c' : cat === 'Cafe' ? '#5dcaa5' : cat === 'Restaurant' ? '#e07a55' : '#b0a8e8';
}

function createMarkerIcon(cat) {
  const color = getMarkerColor(cat);
  return L.divIcon({
    className: '',
    html: `<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.27 0 0 6.27 0 14c0 9.9 14 22 14 22S28 23.9 28 14C28 6.27 21.73 0 14 0z" fill="${color}"/><circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/></svg>`,
    iconSize: [28,36], iconAnchor: [14,36], popupAnchor: [0,-36]
  });
}

function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;
  setTimeout(() => {
    leafletMap = L.map('leaflet-map').setView([43.2141, 27.9212], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(leafletMap);
    attractions.forEach(p => {
      const marker = L.marker([p.lat, p.lng], { icon: createMarkerIcon(p.category) })
        .addTo(leafletMap)
        .bindPopup(`<div class="custom-popup-name">${p.name}</div><div class="custom-popup-cat" style="color:${getMarkerColor(p.category)}">${p.category}</div><div class="custom-popup-desc">${p.description.substring(0,100)}…</div>`, { maxWidth: 240 })
        .on('click', () => highlightSidebarItem(p.id));
      mapMarkers.push({ id: p.id, marker, place: p });
    });
    renderMapList();
  }, 200);
}

function setMapFilter(f) {
  mapFilter = f;
  document.querySelectorAll('#page-map .map-pill').forEach(p => p.classList.toggle('active', p.dataset.filter === f));
  filterMapPlaces();
}

function filterMapPlaces() {
  const q = (document.getElementById('map-search-input').value || '').toLowerCase();
  const filtered = attractions.filter(p => {
    const matchCat = mapFilter === 'all' || p.category === mapFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  mapMarkers.forEach(({ id, marker }) => {
    const visible = filtered.some(p => p.id === id);
    if (visible) { if (!leafletMap.hasLayer(marker)) marker.addTo(leafletMap); }
    else { if (leafletMap.hasLayer(marker)) leafletMap.removeLayer(marker); }
  });
  document.getElementById('map-count').textContent = `${filtered.length} place${filtered.length !== 1 ? 's' : ''} shown`;
  renderMapList(filtered);
}

function renderMapList(list) {
  const data = list || attractions;
  const container = document.getElementById('map-places-list');
  container.innerHTML = data.map(p => {
    const dotClass = p.category === 'Tourist Place' ? 'dot-tourist' : p.category === 'Cafe' ? 'dot-cafe' : p.category === 'Restaurant' ? 'dot-restaurant' : 'dot-business';
    return `<div class="map-place-item${selectedPlaceId === p.id ? ' selected' : ''}" id="map-item-${p.id}" onclick="selectPlace(${p.id})">
      <div class="map-place-dot ${dotClass}"></div>
      <div class="map-place-info"><div class="map-place-name">${p.name}</div><div class="map-place-cat">${p.category}</div></div>
    </div>`;
  }).join('');
}

function selectPlace(id) {
  const p = attractions.find(x => x.id === id);
  if (!p) return;
  selectedPlaceId = id;
  if (leafletMap) {
    leafletMap.setView([p.lat, p.lng], 16, { animate: true });
    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }
  document.getElementById('map-selected-name').textContent = p.name;
  document.getElementById('map-selected-coords').textContent = `${p.lat.toFixed(4)}° N, ${p.lng.toFixed(4)}° E`;
  highlightSidebarItem(id);
}

function highlightSidebarItem(id) {
  selectedPlaceId = id;
  document.querySelectorAll('.map-place-item').forEach(el => el.classList.remove('selected'));
  const el = document.getElementById('map-item-' + id);
  if (el) { el.classList.add('selected'); el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
}

/* ── AI PLANNER FUNCTIONS ── */
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
  ['relaxed','moderate','intensive'].forEach(opt => {
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
  el.textContent = msg;
  el.classList.add('visible');
}

function hideError() {
  document.getElementById('plan-error').classList.remove('visible');
}
