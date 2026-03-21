/* ── DATA ── */
const places = [
  {
    id: 1, name: "Cathedral of the Assumption", category: "Tourist Place",
    description: "One of Bulgaria's largest cathedrals, consecrated in 1886. Its soaring neo-Byzantine domes dominate the Varna skyline and the interior is covered in spectacular frescoes and golden iconostases.",
    city: "Varna", lat: 43.2042, lng: 27.9163,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Varna_-_Cathedral_%281%29.jpg/800px-Varna_-_Cathedral_%281%29.jpg"
  },
  {
    id: 2, name: "Sea Garden", category: "Tourist Place",
    description: "An 80-hectare coastal park along the Black Sea established in the 1880s. Home to the Dolphinarium, Summer Theatre, Naval Museum, and miles of beautiful seaside walkways.",
    city: "Varna", lat: 43.2108, lng: 27.9333,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Varna_sea_garden.jpg/1280px-Varna_sea_garden.jpg"
  },
  {
    id: 3, name: "Archaeological Museum", category: "Tourist Place",
    description: "Houses the world's oldest processed gold treasure — the Varna Chalcolithic Necropolis collection, dating to 4600–4200 BC. An essential visit for anyone interested in ancient history.",
    city: "Varna", lat: 43.2089, lng: 27.9167,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Varna_Archaeological_Museum.jpg/800px-Varna_Archaeological_Museum.jpg"
  },
  {
    id: 4, name: "Roman Thermae", category: "Tourist Place",
    description: "The largest ancient Roman baths on the Balkan Peninsula, built in the 2nd–3rd century AD. The ruins cover 7,000 sq metres and still stand nearly 20 metres high in places.",
    city: "Varna", lat: 43.2081, lng: 27.9126,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Roman_Thermae_-_Varna_-_panoramio.jpg/800px-Roman_Thermae_-_Varna_-_panoramio.jpg"
  },
  {
    id: 5, name: "Euxinograd Palace", category: "Tourist Place",
    description: "A stunning Bulgarian royal residence set in a 120-hectare park on the Black Sea coast, built in 1882. Famous for its French-style gardens and award-winning estate winery.",
    city: "Varna", lat: 43.2583, lng: 27.9017,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Evksinograd_2.jpg/800px-Evksinograd_2.jpg"
  },
  {
    id: 6, name: "Varna Dolphinarium", category: "Tourist Place",
    description: "The oldest and largest dolphinarium in Bulgaria, open since 1984. Located in the Sea Garden, it hosts daily dolphin and seal performances in a spectacular Black Sea setting.",
    city: "Varna", lat: 43.2170, lng: 27.9390,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Varna_Dolphinarium_exterior.jpg/800px-Varna_Dolphinarium_exterior.jpg"
  },
  {
    id: 7, name: "Varna Farmers Market", category: "Local Business",
    description: "A vibrant daily open-air market in the heart of the city where local producers sell seasonal vegetables, artisan cheeses, honey, dried herbs, and traditional Bulgarian crafts.",
    city: "Varna", lat: 43.2097, lng: 27.9174,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Varna_Central_Market.jpg/800px-Varna_Central_Market.jpg"
  },
];



/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

// Planner state
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
  const valid = ['home', 'directory', 'map', 'blog', 'plan'];
  if (valid.includes(h)) navigate(h);
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
  const filtered = places.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  const grid = document.getElementById('dir-grid');
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="dir-empty">No places found. Try a different search or filter.</div>';
    return;
  }
  grid.innerHTML = filtered.map((p, i) => {
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
    places.forEach(p => {
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
  const filtered = places.filter(p => {
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
  const data = list || places;
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
  const p = places.find(x => x.id === id);
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



/* ── AI PLANNER ── */
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

async function generatePlan() {
  if (planInterests.size === 0) {
    showError('Please select at least one interest.');
    return;
  }
  hideError();

  const btn = document.getElementById('plan-btn');
  const loading = document.getElementById('plan-loading');
  const result = document.getElementById('plan-result');

  btn.disabled = true;
  loading.classList.add('visible');
  result.classList.remove('visible');

  const interestMap = {
    history: 'Historical Sites (Cathedral of the Assumption, Roman Thermae, Archaeological Museum)',
    food: 'Local food markets and traditional Bulgarian cuisine spots (Varna Farmers Market and local taverns)',
    culture: 'Cultural Events & Venues (Sea Garden Summer Theatre, Dolphinarium, Varna Farmers Market)',
    romantic: 'Romantic Spots (Euxinograd Palace & vineyard, Sea Garden sunset walk, Black Sea clifftop)',
    views: 'Scenic Views (Sea Garden clifftop, Black Sea coast, Euxinograd gardens, Cathedral Square)',
  };

  const selectedInterests = [...planInterests].map(k => interestMap[k]).join('\n- ');
  const diffText = planDiff === 'relaxed' ? 'Relaxed (2–3 places per day, lots of free time and rest)'
    : planDiff === 'moderate' ? 'Moderate (4–5 places per day, balanced pace)'
    : 'Intensive (6+ places per day, maximum coverage)';

  const placesContext = places.map(p => `- ${p.name} (${p.category}): ${p.description}`).join('\n');

  const now = new Date();
  const monthName = now.toLocaleString('en-US', { month: 'long' });
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const seasonInfo = month >= 6 && month <= 8
    ? `SUMMER (${monthName}): Peak season in Varna. Hot weather (28–35°C), packed beaches, beach bars and clubs fully open, outdoor concerts and festivals active, Sea Garden buzzing day and night. Prioritise early morning visits to popular sites to beat the heat and crowds. Heavily favour outdoor, seaside, and beach experiences.`
    : month >= 9 && month <= 11
    ? `AUTUMN (${monthName}): Shoulder season. Warm and pleasant (15–22°C), far fewer tourists, sea still warm enough for swimming in September–October. Most attractions open, beach bars closing by October. Great for walking, cultural tourism, and dining. Balance outdoor and indoor recommendations.`
    : month >= 12 || month <= 2
    ? `WINTER (${monthName}): Off-season. Cold weather (2–8°C), very few tourists, many seasonal beach venues closed. The city is peaceful and authentic. Focus heavily on indoor experiences: museums, restaurants, wine bars, cafés, the Cathedral, Roman Thermae. The Sea Garden is beautiful for a quiet walk but beach activities are off the table.`
    : `SPRING (${monthName}): Early season. Mild weather (10–18°C), low crowds, most attractions open. Sea Garden coming to life, some beach venues reopening. Perfect for cultural tourism with comfortable outdoor exploration. A good balance of indoor and outdoor activities.`;

  const prompt = `You are an expert AI travel guide for Varna, Bulgaria. Respond only in English.

IMPORTANT: All prices MUST be shown in Euros (€). Use current ${year} approximate prices.

CURRENT SEASON CONTEXT — adapt all recommendations accordingly:
${seasonInfo}

Places available in our directory:
${placesContext}

The visitor wants a trip plan for Varna:
- Number of days: ${planDays}
- Pace: ${diffText}
- Interests:
- ${selectedInterests}

Create a detailed day-by-day itinerary (Day 1, Day 2, etc.) using places from the directory and supplementing with additional Varna recommendations suited to the current season.

For each day include: Morning, Lunch, Afternoon, and Evening sections. Include practical tips — transport, opening hours, approximate prices in Euros (€), what to wear, and insider seasonal advice (e.g. best beach in summer, cosy wine bar in winter, etc.).

Format using HTML: use <h2> for each day title, <h3> for time-of-day sections, <p> for descriptions, <ul><li> for tips. Write in a warm, inspiring, expert tone. Complete ALL ${planDays} days without cutting off.

CRITICAL: You must complete every single day. Keep each day to 2–3 sentences per section maximum — do not over-explain. For ${planDays} days, budget your output carefully so you never run out of space before the final day.`;

  try {
   const RENDER_URL = "https://zuirhbackend.onrender.com";

const response = await fetch(`${RENDER_URL}/api/ai`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt })
});

    if (!response.ok) {
      if (response.status === 429) throw new Error('rate_limit');
      throw new Error('api_error');
    }

    const data = await response.json();
    const text = data.content.map(c => c.text || '').join('');

    document.getElementById('plan-result-body').innerHTML = text;
    document.getElementById('plan-result-meta').textContent =
      `${planDays} ${planDays === 1 ? 'day' : 'days'} · ${planDiff.charAt(0).toUpperCase() + planDiff.slice(1)} pace · ${planInterests.size} interest${planInterests.size !== 1 ? 's' : ''} · ${monthName} ${year}`;

    result.classList.add('visible');
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });

  } catch (err) {
    if (err.message === 'rate_limit') {
      showError('Too many requests — please wait 15–20 seconds and try again.');
    } else {
      showError('Something went wrong while generating your plan. Please try again.');
    }
    console.error(err);
  } finally {
    btn.disabled = false;
    loading.classList.remove('visible');
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

/* ── INIT ── */
renderDirectory();
renderBlog();
updateDays(2);

const h = window.location.hash.replace('#', '');
if (['home','directory','map','blog','plan'].includes(h)) navigate(h);
