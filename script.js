/* ── DATA ── */
const attractions = [
  // PRUSSIAN & IMPERIAL LANDMARKS
  { id: 1, name: "Brandenburg Gate", category: "Prussian Landmarks", description: "The definitive symbol of Berlin and Prussian neoclassical architecture.", city: "Berlin", lat: 52.5163, lng: 13.3777, image: "https://wikimedia.org" },
  { id: 2, name: "Reichstag (The Dome)", category: "Prussian Landmarks", description: "The seat of the German Parliament with Foster's iconic glass dome.", city: "Berlin", lat: 52.5186, lng: 13.3761, image: "https://wikimedia.org" },
  { id: 3, name: "Charlottenburg Palace", category: "Prussian Landmarks", description: "The largest royal palace in Berlin, built by the Hohenzollern dynasty.", city: "Berlin", lat: 52.5211, lng: 13.2958, image: "https://wikimedia.org" },
  { id: 4, name: "Berlin State Opera", category: "Prussian Landmarks", description: "Prussian cultural heart on the historic Unter den Linden boulevard.", city: "Berlin", lat: 52.5170, lng: 13.3946, image: "https://wikimedia.org" },
  { id: 5, name: "Museum Island", category: "Prussian Landmarks", description: "A unique ensemble of five museums, a UNESCO World Heritage site.", city: "Berlin", lat: 52.5169, lng: 13.3995, image: "https://wikimedia.org" },
  { id: 6, name: "The Column of Victory", category: "Prussian Landmarks", description: "Siegessäule — a monument to the Prussian military triumphs.", city: "Berlin", lat: 52.5145, lng: 13.3501, image: "https://wikimedia.org" },
  { id: 7, name: "Unter den Linden", category: "Prussian Landmarks", description: "The royal boulevard leading from the City Palace to the Brandenburg Gate.", city: "Berlin", lat: 52.5168, lng: 13.3887, image: "https://wikimedia.org" },
  { id: 8, name: "Gendarmenmarkt", category: "Prussian Landmarks", description: "Arguably Berlin's most beautiful square, home to the Konzerthaus.", city: "Berlin", lat: 52.5136, lng: 13.3927, image: "https://wikimedia.org" },
  { id: 9, name: "Humboldt University", category: "Prussian Landmarks", description: "The prestigious university where Einstein and Hegel once taught.", city: "Berlin", lat: 52.5180, lng: 13.3934, image: "https://wikimedia.org" },
  { id: 10, name: "Bebelplatz", category: "Prussian Landmarks", description: "Historical square known for the 1933 Nazi book burning memorial.", city: "Berlin", lat: 52.5164, lng: 13.3938, image: "https://wikimedia.org" },

  // BERLIN WALL & COLD WAR SITES
  { id: 11, name: "Checkpoint Charlie", category: "Berlin Wall Sites", description: "Famous crossing point between East and West Berlin.", city: "Berlin", lat: 52.5074, lng: 13.3904, image: "https://wikimedia.org" },
  { id: 12, name: "Berlin Wall at Potsdamer Platz", category: "Berlin Wall Sites", description: "Original segments of the Wall in the modern heart of Berlin.", city: "Berlin", lat: 52.5094, lng: 13.3765, image: "https://wikimedia.org" },
  { id: 13, name: "Gedenkstätte Berliner Mauer", category: "Berlin Wall Sites", description: "The central memorial site of German division at Bernauer Straße.", city: "Berlin", lat: 52.5351, lng: 13.3904, image: "https://wikimedia.org" },
  { id: 14, name: "Bornholmer Straße", category: "Berlin Wall Sites", description: "The border crossing where the Wall first fell in 1989.", city: "Berlin", lat: 52.5546, lng: 13.3985, image: "https://wikimedia.org" },
  { id: 15, name: "Stasi Museum", category: "Berlin Wall Sites", description: "Former HQ of the GDR secret police, focused on surveillance history.", city: "Berlin", lat: 52.5144, lng: 13.4875, image: "https://wikimedia.org" },
  { id: 16, name: "Glienicke Bridge", category: "Berlin Wall Sites", description: "The Bridge of Spies, used for Cold War agent exchanges.", city: "Berlin", lat: 52.4133, lng: 13.0903, image: "https://wikimedia.org" },
  { id: 17, name: "Old Ghost Stations", category: "Berlin Wall Sites", description: "Subway stations that were sealed off during the division of the city.", city: "Berlin", lat: 52.5152, lng: 13.3885, image: "https://wikimedia.org" },
  { id: 18, name: "Checkpoint Charlie Museum", category: "Berlin Wall Sites", description: "Dedicated to the history of the wall and escape attempts.", city: "Berlin", lat: 52.5076, lng: 13.3912, image: "https://wikimedia.org" },
  { id: 19, name: "Berlin Wall Museum", category: "Berlin Wall Sites", description: "Exhibitions detailing the political and social impact of the Wall.", city: "Berlin", lat: 52.5049, lng: 13.3762, image: "https://wikimedia.org" },

  // TOTALITARIAN SCARS
  { id: 20, name: "Fuhrer’s Bunker Site", category: "Totalitarian Scars", description: "The silent site of the subterranean shelter marking the end of WWII.", city: "Berlin", lat: 52.5125, lng: 13.3752, image: "https://wikimedia.org" },
  { id: 21, name: "Soviet Soldier Tomb", category: "Totalitarian Scars", description: "Massive memorial in Treptower Park for the fallen Soviet soldiers.", city: "Berlin", lat: 52.4862, lng: 13.4716, image: "https://wikimedia.org" },
  { id: 22, name: "Olympiastadion", category: "Totalitarian Scars", description: "Built for the 1936 Olympics, an architectural colossus.", city: "Berlin", lat: 52.5147, lng: 13.2395, image: "https://wikimedia.org" },
  { id: 23, name: "Schwerbelastungskörper", category: "Totalitarian Scars", description: "12,000-ton concrete cylinder used to test Berlin's ground for Germania.", city: "Berlin", lat: 52.4842, lng: 13.3711, image: "https://wikimedia.org" },
  { id: 24, name: "Wilhelmstraße", category: "Totalitarian Scars", description: "Former political center of the Nazi regime and government ministries.", city: "Berlin", lat: 52.5106, lng: 13.3833, image: "https://wikimedia.org" },
  { id: 25, name: "Flakturm Humboldthain", category: "Totalitarian Scars", description: "The remains of a massive anti-aircraft tower surviving WWII.", city: "Berlin", lat: 52.5458, lng: 13.3816, image: "https://wikimedia.org" },
  { id: 26, name: "Gasometer Schöneberg", category: "Totalitarian Scars", description: "An industrial icon marking the skyline, tied to technical history.", city: "Berlin", lat: 52.4811, lng: 13.3556, image: "https://wikimedia.org" },

  // HIDDEN GEMS & SECRET PARKS
  { id: 27, name: "Pfaueninsel", category: "Hidden Gems", description: "Peacock Island — a romantic royal retreat accessible by ferry.", city: "Berlin", lat: 52.4333, lng: 13.1283, image: "https://wikimedia.org" },
  { id: 28, name: "Körnerpark", category: "Hidden Gems", description: "A hidden neo-baroque park resembling a French palace garden.", city: "Berlin", lat: 52.4719, lng: 13.4367, image: "https://wikimedia.org" },
  { id: 29, name: "Bücherwald", category: "Hidden Gems", description: "The Book Forest — a street library built into tree trunks.", city: "Berlin", lat: 52.5414, lng: 13.4116, image: "https://wikimedia.org" },
  { id: 30, name: "Dorotheenstadt Cemetery", category: "Hidden Gems", description: "Final resting place of Hegel and Brecht; an intellectual center.", city: "Berlin", lat: 52.5283, lng: 13.3844, image: "https://wikimedia.org" },
  { id: 31, name: "Literaturhaus Berlin", category: "Hidden Gems", description: "A historic villa dedicated to literary heritage on Fasanenstraße.", city: "Berlin", lat: 52.5028, lng: 13.3275, image: "https://wikimedia.org" },
  { id: 32, name: "Café Einstein Stammhaus", category: "Hidden Gems", description: "Traditional Viennese coffee house in an elegant Berlin villa.", city: "Berlin", lat: 52.5015, lng: 13.3495, image: "https://wikimedia.org" },

  // TECH & ARTS MUSEUMS
  { id: 33, name: "German Museum of Technology", category: "Tech & Arts Museums", description: "A vast museum of rail, aerospace, and maritime engineering.", city: "Berlin", lat: 52.4986, lng: 13.3775, image: "https://wikimedia.org" },
  { id: 34, name: "Samurai Museum", category: "Tech & Arts Museums", description: "The first museum in Europe dedicated exclusively to Samurai art.", city: "Berlin", lat: 52.5261, lng: 13.3936, image: "https://wikimedia.org" },
  { id: 35, name: "Körperwelten Museum", category: "Tech & Arts Museums", description: "The Body Worlds exhibition exploring human anatomy at Alexanderplatz.", city: "Berlin", lat: 52.5219, lng: 13.4132, image: "https://wikimedia.org" },
  { id: 36, name: "Museum of Musical Instruments", category: "Tech & Arts Museums", description: "Houses a strategic collection of instruments from the 16th century.", city: "Berlin", lat: 52.5108, lng: 13.3708, image: "https://wikimedia.org" },
  { id: 37, name: "DDR Museum", category: "Tech & Arts Museums", description: "Interactive museum focusing on daily life in East Germany.", city: "Berlin", lat: 52.5194, lng: 13.4022, image: "https://wikimedia.org" },
  { id: 38, name: "Berlin Zoo", category: "Tech & Arts Museums", description: "Germany's oldest zoo, housing a vast array of species.", city: "Berlin", lat: 52.5079, lng: 13.3378, image: "https://wikimedia.org" },
  { id: 39, name: "Berlin Aquarium", category: "Tech & Arts Museums", description: "A biodiversity-rich aquarium located next to the Zoo.", city: "Berlin", lat: 52.5050, lng: 13.3400, image: "https://wikimedia.org" },
  { id: 40, name: "German Museum", category: "Tech & Arts Museums", description: "Deutsches Museum Berlin, focused on modern technical culture.", city: "Berlin", lat: 52.5212, lng: 13.4110, image: "https://wikimedia.org" },
  { id: 41, name: "German Museum of Technology (Aviation)", category: "Tech & Arts Museums", description: "The aerospace wing of the technology museum.", city: "Berlin", lat: 52.4988, lng: 13.3780, image: "https://wikimedia.org" },
  { id: 42, name: "Museum Island (Pergamon)", category: "Tech & Arts Museums", description: "Home to the Pergamon Altar and the Ishtar Gate.", city: "Berlin", lat: 52.5210, lng: 13.3965, image: "https://wikimedia.org" }
];
/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

/* ── NAVIGATION ── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  document.getElementById('page-' + page).classList.add('active');

  const navLink = document.querySelector(`[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  window.scrollTo(0, 0);

  if (page === 'explore') renderExplore();
  if (page === 'map') initMap();

  window.location.hash = page;
}

window.addEventListener('hashchange', () => {
  const h = window.location.hash.replace('#', '') || 'home';
  if (['home', 'explore', 'map', 'blog', 'create'].includes(h)) {
    navigate(h);
  }
});

/* ── EXPLORE ── */
function setDirFilter(f) {
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
  const q = (document.getElementById('dir-search-input')?.value || '').toLowerCase();

  const filtered = attractions.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const grid = document.getElementById('dir-grid');

  if (!filtered.length) {
    grid.innerHTML = `<div class="dir-empty">No places found.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    const catClass = p.category.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const image = p.image && p.image.startsWith('http') ? p.image : 'https://via.placeholder.com/800x600';

    return `
      <div class="place-card" onclick="goToPlace(${p.id})">
        <div class="place-card-img" style="background-image: url('${image}')"></div>
        <div class="place-card-header">
          <div>
            <span class="place-card-cat ${catClass}">${p.category}</span>
            <div class="place-card-name">${p.name}</div>
          </div>
          <span class="place-card-number">${String(i + 1).padStart(2, '0')}</span>
        </div>
        <div class="place-card-body">
          <p class="place-card-desc">${p.description}</p>
          <div class="place-card-footer">${p.city}</div>
        </div>
      </div>`;
  }).join('');
}

/* ── MAP ── */
function getMarkerColor(cat) {
  switch (cat) {
    case 'Prussian Landmarks': return '#1A2F45';
    case 'Berlin Wall Sites': return '#E8C000';
    case 'Totalitarian Scars': return '#c9a84c';
    case 'Hidden Gems': return '#b0a8e8';
    case 'Tech & Arts Museums': return '#5dcaa5';
    default: return '#999';
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
    leafletMap = L.map('leaflet-map').setView([52.5200, 13.4050], 13); // Berlin

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
  const data = list || attractions;
  const container = document.getElementById('map-places-list');

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

function generatePlan() {
  if (!planInterests.size) {
    alert("Select at least one interest");
    return;
  }

  const interestMap = {
    history: ['Prussian Landmarks', 'Berlin Wall Sites', 'Totalitarian Scars'],
    romantic: ['Romantic Places'],
    scenic: ['Scenic Places'],
    food: ['Local Food & Drinks'],
    hidden: ['Hidden Gems']
  };

  let filtered = attractions.filter(p =>
    [...planInterests].some(key => interestMap[key]?.includes(p.category))
  );

  filtered = filtered.sort(() => Math.random() - 0.5);

  const plan = Array.from({ length: planDays }, () => []);
  filtered.forEach((place, i) => plan[i % planDays].push(place));

  const container = document.getElementById('plan-results');
  container.innerHTML = plan.map((day, i) => `
    <div>
      <h3>Day ${i + 1}</h3>
      <ul>
        ${day.map(p => `<li>${p.name}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}
