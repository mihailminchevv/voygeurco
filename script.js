/* ─────────────────────────────
   GLOBAL STATE (MULTI-CITY ENGINE)
────────────────────────────── */

let leafletMap = null;
let mapMarkers = [];

let planDays = 2;
let planDiff = 'moderate';
let planInterests = new Set();

const planCache = new Map();

/* ─────────────────────────────
   CITY INIT
────────────────────────────── */

function getCityKey() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("city");

  if (fromUrl && cities[fromUrl]) return fromUrl;

  const fromBody = document.body.dataset.city;
  if (fromBody && cities[fromBody]) return fromBody;

  return null;
}

/* ─────────────────────────────
   CITIES DATA (UNCHANGED)
────────────────────────────── */

const cities = {
  berlin: {
    center: [52.5200, 13.4050],
    zoom: 13,
    attractions: [
     // PRUSSIAN & IMPERIAL LANDMARKS
  { id: 1,  name: "Brandenburg Gate",                      category: "Prussian Landmarks",  description: "The definitive symbol of Berlin and Prussian neoclassical architecture.",                          city: "Berlin", lat: 52.5163, lng: 13.3777, image: "https://wikimedia.org" },
  { id: 2,  name: "Reichstag (The Dome)",                  category: "Prussian Landmarks",  description: "The seat of the German Parliament with Foster's iconic glass dome.",                               city: "Berlin", lat: 52.5186, lng: 13.3761, image: "https://wikimedia.org" },
  { id: 3,  name: "Charlottenburg Palace",                 category: "Prussian Landmarks",  description: "The largest royal palace in Berlin, built by the Hohenzollern dynasty.",                          city: "Berlin", lat: 52.5211, lng: 13.2958, image: "https://wikimedia.org" },
  { id: 4,  name: "Berlin State Opera",                    category: "Prussian Landmarks",  description: "Prussian cultural heart on the historic Unter den Linden boulevard.",                             city: "Berlin", lat: 52.5170, lng: 13.3946, image: "https://wikimedia.org" },
  { id: 5,  name: "Museum Island",                         category: "Prussian Landmarks",  description: "A unique ensemble of five museums, a UNESCO World Heritage site.",                                city: "Berlin", lat: 52.5169, lng: 13.3995, image: "https://wikimedia.org" },
  { id: 6,  name: "The Column of Victory",                 category: "Prussian Landmarks",  description: "Siegessäule — a monument to the Prussian military triumphs.",                                    city: "Berlin", lat: 52.5145, lng: 13.3501, image: "https://wikimedia.org" },
  { id: 7,  name: "Unter den Linden",                      category: "Prussian Landmarks",  description: "The royal boulevard leading from the City Palace to the Brandenburg Gate.",                       city: "Berlin", lat: 52.5168, lng: 13.3887, image: "https://wikimedia.org" },
  { id: 8,  name: "Gendarmenmarkt",                        category: "Prussian Landmarks",  description: "Arguably Berlin's most beautiful square, home to the Konzerthaus.",                              city: "Berlin", lat: 52.5136, lng: 13.3927, image: "https://wikimedia.org" },
  { id: 9,  name: "Humboldt University",                   category: "Prussian Landmarks",  description: "The prestigious university where Einstein and Hegel once taught.",                                city: "Berlin", lat: 52.5180, lng: 13.3934, image: "https://wikimedia.org" },
  { id: 10, name: "Bebelplatz",                            category: "Prussian Landmarks",  description: "Historical square known for the 1933 Nazi book burning memorial.",                                city: "Berlin", lat: 52.5164, lng: 13.3938, image: "https://wikimedia.org" },

  // BERLIN WALL & COLD WAR SITES
  { id: 11, name: "Checkpoint Charlie",                    category: "Berlin Wall Sites",   description: "Famous crossing point between East and West Berlin.",                                             city: "Berlin", lat: 52.5074, lng: 13.3904, image: "https://wikimedia.org" },
  { id: 12, name: "Berlin Wall at Potsdamer Platz",        category: "Berlin Wall Sites",   description: "Original segments of the Wall in the modern heart of Berlin.",                                   city: "Berlin", lat: 52.5094, lng: 13.3765, image: "https://wikimedia.org" },
  { id: 13, name: "Gedenkstätte Berliner Mauer",           category: "Berlin Wall Sites",   description: "The central memorial site of German division at Bernauer Straße.",                               city: "Berlin", lat: 52.5351, lng: 13.3904, image: "https://wikimedia.org" },
  { id: 14, name: "Bornholmer Straße",                     category: "Berlin Wall Sites",   description: "The border crossing where the Wall first fell in 1989.",                                         city: "Berlin", lat: 52.5546, lng: 13.3985, image: "https://wikimedia.org" },
  { id: 15, name: "Stasi Museum",                          category: "Berlin Wall Sites",   description: "Former HQ of the GDR secret police, focused on surveillance history.",                           city: "Berlin", lat: 52.5144, lng: 13.4875, image: "https://wikimedia.org" },
  { id: 16, name: "Glienicke Bridge",                      category: "Berlin Wall Sites",   description: "The Bridge of Spies, used for Cold War agent exchanges.",                                        city: "Berlin", lat: 52.4133, lng: 13.0903, image: "https://wikimedia.org" },
  { id: 17, name: "Old Ghost Stations",                    category: "Berlin Wall Sites",   description: "Subway stations that were sealed off during the division of the city.",                          city: "Berlin", lat: 52.5152, lng: 13.3885, image: "https://wikimedia.org" },
  { id: 18, name: "Checkpoint Charlie Museum",             category: "Berlin Wall Sites",   description: "Dedicated to the history of the wall and escape attempts.",                                      city: "Berlin", lat: 52.5076, lng: 13.3912, image: "https://wikimedia.org" },
  { id: 19, name: "Berlin Wall Museum",                    category: "Berlin Wall Sites",   description: "Exhibitions detailing the political and social impact of the Wall.",                             city: "Berlin", lat: 52.5049, lng: 13.3762, image: "https://wikimedia.org" },

  // TOTALITARIAN SCARS
  { id: 20, name: "Fuhrer's Bunker Site",                  category: "Totalitarian Scars",  description: "The silent site of the subterranean shelter marking the end of WWII.",                           city: "Berlin", lat: 52.5125, lng: 13.3752, image: "https://wikimedia.org" },
  { id: 21, name: "Soviet Soldier Tomb",                   category: "Totalitarian Scars",  description: "Massive memorial in Treptower Park for the fallen Soviet soldiers.",                             city: "Berlin", lat: 52.4862, lng: 13.4716, image: "https://wikimedia.org" },
  { id: 22, name: "Olympiastadion",                        category: "Totalitarian Scars",  description: "Built for the 1936 Olympics, an architectural colossus.",                                       city: "Berlin", lat: 52.5147, lng: 13.2395, image: "https://wikimedia.org" },
  { id: 23, name: "Schwerbelastungskörper",                category: "Totalitarian Scars",  description: "12,000-ton concrete cylinder used to test Berlin's ground for Germania.",                       city: "Berlin", lat: 52.4842, lng: 13.3711, image: "https://wikimedia.org" },
  { id: 24, name: "Wilhelmstraße",                         category: "Totalitarian Scars",  description: "Former political center of the Nazi regime and government ministries.",                          city: "Berlin", lat: 52.5106, lng: 13.3833, image: "https://wikimedia.org" },
  { id: 25, name: "Flakturm Humboldthain",                 category: "Totalitarian Scars",  description: "The remains of a massive anti-aircraft tower surviving WWII.",                                  city: "Berlin", lat: 52.5458, lng: 13.3816, image: "https://wikimedia.org" },
  { id: 26, name: "Gasometer Schöneberg",                  category: "Totalitarian Scars",  description: "An industrial icon marking the skyline, tied to technical history.",                             city: "Berlin", lat: 52.4811, lng: 13.3556, image: "https://wikimedia.org" },

  // HIDDEN GEMS & SECRET PARKS
  { id: 27, name: "Pfaueninsel",                           category: "Hidden Gems",         description: "Peacock Island — a romantic royal retreat accessible by ferry.",                                 city: "Berlin", lat: 52.4333, lng: 13.1283, image: "https://wikimedia.org" },
  { id: 28, name: "Körnerpark",                            category: "Hidden Gems",         description: "A hidden neo-baroque park resembling a French palace garden.",                                   city: "Berlin", lat: 52.4719, lng: 13.4367, image: "https://wikimedia.org" },
  { id: 29, name: "Bücherwald",                            category: "Hidden Gems",         description: "The Book Forest — a street library built into tree trunks.",                                    city: "Berlin", lat: 52.5414, lng: 13.4116, image: "https://wikimedia.org" },
  { id: 30, name: "Dorotheenstadt Cemetery",               category: "Hidden Gems",         description: "Final resting place of Hegel and Brecht; an intellectual center.",                              city: "Berlin", lat: 52.5283, lng: 13.3844, image: "https://wikimedia.org" },
  { id: 31, name: "Literaturhaus Berlin",                  category: "Hidden Gems",         description: "A historic villa dedicated to literary heritage on Fasanenstraße.",                             city: "Berlin", lat: 52.5028, lng: 13.3275, image: "https://wikimedia.org" },
  { id: 32, name: "Café Einstein Stammhaus",               category: "Hidden Gems",         description: "Traditional Viennese coffee house in an elegant Berlin villa.",                                 city: "Berlin", lat: 52.5015, lng: 13.3495, image: "https://wikimedia.org" },

  // TECH & ARTS MUSEUMS
  { id: 33, name: "German Museum of Technology",           category: "Tech & Arts Museums", description: "A vast museum of rail, aerospace, and maritime engineering.",                                    city: "Berlin", lat: 52.4986, lng: 13.3775, image: "https://wikimedia.org" },
  { id: 34, name: "Samurai Museum",                        category: "Tech & Arts Museums", description: "The first museum in Europe dedicated exclusively to Samurai art.",                               city: "Berlin", lat: 52.5261, lng: 13.3936, image: "https://wikimedia.org" },
  { id: 35, name: "Körperwelten Museum",                   category: "Tech & Arts Museums", description: "The Body Worlds exhibition exploring human anatomy at Alexanderplatz.",                         city: "Berlin", lat: 52.5219, lng: 13.4132, image: "https://wikimedia.org" },
  { id: 36, name: "Museum of Musical Instruments",         category: "Tech & Arts Museums", description: "Houses a strategic collection of instruments from the 16th century.",                           city: "Berlin", lat: 52.5108, lng: 13.3708, image: "https://wikimedia.org" },
  { id: 37, name: "DDR Museum",                            category: "Tech & Arts Museums", description: "Interactive museum focusing on daily life in East Germany.",                                    city: "Berlin", lat: 52.5194, lng: 13.4022, image: "https://wikimedia.org" },
  { id: 38, name: "Berlin Zoo",                            category: "Tech & Arts Museums", description: "Germany's oldest zoo, housing a vast array of species.",                                        city: "Berlin", lat: 52.5079, lng: 13.3378, image: "https://wikimedia.org" },
  { id: 39, name: "Berlin Aquarium",                       category: "Tech & Arts Museums", description: "A biodiversity-rich aquarium located next to the Zoo.",                                         city: "Berlin", lat: 52.5050, lng: 13.3400, image: "https://wikimedia.org" },
  { id: 40, name: "German Museum",                         category: "Tech & Arts Museums", description: "Deutsches Museum Berlin, focused on modern technical culture.",                                 city: "Berlin", lat: 52.5212, lng: 13.4110, image: "https://wikimedia.org" },
  { id: 41, name: "German Museum of Technology (Aviation)",category: "Tech & Arts Museums", description: "The aerospace wing of the technology museum.",                                                  city: "Berlin", lat: 52.4988, lng: 13.3780, image: "https://wikimedia.org" },
  { id: 42, name: "Museum Island (Pergamon)",              category: "Tech & Arts Museums", description: "Home to the Pergamon Altar and the Ishtar Gate.",                                               city: "Berlin", lat: 52.5210, lng: 13.3965, image: "https://wikimedia.org" }
]
  },

   paris: {
  center: [48.8566, 2.3522],
  zoom: 13,
  attractions: [
    // ICONIC LANDMARKS
    { id: 1, name: "Eiffel Tower", category: "Iconic Landmarks", description: "Iron lattice tower and global symbol of Paris.", city: "Paris", lat: 48.8584, lng: 2.2945, image: "https://wikimedia.org" },
    { id: 2, name: "Louvre Museum", category: "Iconic Landmarks", description: "World’s largest art museum and home of Mona Lisa.", city: "Paris", lat: 48.8606, lng: 2.3376, image: "https://wikimedia.org" },
    { id: 3, name: "Arc de Triomphe", category: "Iconic Landmarks", description: "Triumphal arch honoring French military victories.", city: "Paris", lat: 48.8738, lng: 2.2950, image: "https://wikimedia.org" },
    { id: 4, name: "Champs-Élysées", category: "Iconic Landmarks", description: "Famous avenue connecting Arc de Triomphe and Place de la Concorde.", city: "Paris", lat: 48.8698, lng: 2.3076, image: "https://wikimedia.org" },
    { id: 5, name: "Notre-Dame Cathedral", category: "Iconic Landmarks", description: "Gothic cathedral on Île de la Cité.", city: "Paris", lat: 48.8529, lng: 2.3500, image: "https://wikimedia.org" },
    { id: 6, name: "Sainte-Chapelle", category: "Iconic Landmarks", description: "Gothic chapel with stained glass windows.", city: "Paris", lat: 48.8554, lng: 2.3450, image: "https://wikimedia.org" },
    { id: 7, name: "Sacré-Cœur Basilica", category: "Iconic Landmarks", description: "White basilica on Montmartre hill.", city: "Paris", lat: 48.8867, lng: 2.3431, image: "https://wikimedia.org" },
    { id: 8, name: "Palace of Versailles", category: "Iconic Landmarks", description: "Former royal palace of Louis XIV.", city: "Paris", lat: 48.8049, lng: 2.1204, image: "https://wikimedia.org" },
    { id: 9, name: "Place de la Concorde", category: "Iconic Landmarks", description: "Historic square between Champs-Élysées and Tuileries.", city: "Paris", lat: 48.8656, lng: 2.3211, image: "https://wikimedia.org" },
    { id: 10, name: "Pont Alexandre III", category: "Iconic Landmarks", description: "Decorative bridge over the Seine.", city: "Paris", lat: 48.8637, lng: 2.3131, image: "https://wikimedia.org" },

    // HISTORIC PARIS
    { id: 11, name: "Latin Quarter", category: "Historic Districts", description: "Historic student and intellectual district.", city: "Paris", lat: 48.8493, lng: 2.3469, image: "https://wikimedia.org" },
    { id: 12, name: "Île Saint-Louis", category: "Historic Districts", description: "Quiet historic island in the Seine.", city: "Paris", lat: 48.8527, lng: 2.3580, image: "https://wikimedia.org" },
    { id: 13, name: "Place des Vosges", category: "Historic Districts", description: "Oldest planned square in Paris.", city: "Paris", lat: 48.8556, lng: 2.3659, image: "https://wikimedia.org" },
    { id: 14, name: "Le Marais", category: "Historic Districts", description: "Historic district with medieval streets.", city: "Paris", lat: 48.8590, lng: 2.3622, image: "https://wikimedia.org" },
    { id: 15, name: "Panthéon", category: "Historic Districts", description: "Neoclassical mausoleum of French greats.", city: "Paris", lat: 48.8462, lng: 2.3460, image: "https://wikimedia.org" },
    { id: 16, name: "Conciergerie", category: "Historic Districts", description: "Former royal palace and prison.", city: "Paris", lat: 48.8554, lng: 2.3450, image: "https://wikimedia.org" },

    // MUSEUMS
    { id: 17, name: "Musée d'Orsay", category: "Museums", description: "Impressionist art in a former train station.", city: "Paris", lat: 48.8600, lng: 2.3266, image: "https://wikimedia.org" },
    { id: 18, name: "Centre Pompidou", category: "Museums", description: "Modern art museum with exposed structure design.", city: "Paris", lat: 48.8606, lng: 2.3522, image: "https://wikimedia.org" },
    { id: 19, name: "Musée Rodin", category: "Museums", description: "Sculptures by Auguste Rodin.", city: "Paris", lat: 48.8556, lng: 2.3157, image: "https://wikimedia.org" },
    { id: 20, name: "Musée de l'Orangerie", category: "Museums", description: "Monet’s Water Lilies collection.", city: "Paris", lat: 48.8638, lng: 2.3226, image: "https://wikimedia.org" },
    { id: 21, name: "Musée Picasso", category: "Museums", description: "Works of Pablo Picasso.", city: "Paris", lat: 48.8599, lng: 2.3625, image: "https://wikimedia.org" },
    { id: 22, name: "Musée de Cluny", category: "Museums", description: "Medieval history museum.", city: "Paris", lat: 48.8505, lng: 2.3449, image: "https://wikimedia.org" },

    // PARKS & RELAX
    { id: 23, name: "Luxembourg Gardens", category: "Parks", description: "Historic gardens in central Paris.", city: "Paris", lat: 48.8462, lng: 2.3372, image: "https://wikimedia.org" },
    { id: 24, name: "Tuileries Garden", category: "Parks", description: "Park between Louvre and Place de la Concorde.", city: "Paris", lat: 48.8635, lng: 2.3270, image: "https://wikimedia.org" },
    { id: 25, name: "Parc des Buttes-Chaumont", category: "Parks", description: "Dramatic cliffs and bridges park.", city: "Paris", lat: 48.8809, lng: 2.3810, image: "https://wikimedia.org" },
    { id: 26, name: "Bois de Boulogne", category: "Parks", description: "Large forest park on Paris west side.", city: "Paris", lat: 48.8638, lng: 2.2522, image: "https://wikimedia.org" },
    { id: 27, name: "Bois de Vincennes", category: "Parks", description: "Largest park in Paris.", city: "Paris", lat: 48.8282, lng: 2.4335, image: "https://wikimedia.org" },
    { id: 28, name: "Canal Saint-Martin", category: "Parks", description: "Trendy canal with cafés.", city: "Paris", lat: 48.8708, lng: 2.3654, image: "https://wikimedia.org" },

    // EXTRA CULTURE / NEIGHBORHOODS
    { id: 29, name: "Montmartre Streets", category: "Neighborhoods", description: "Historic artistic district.", city: "Paris", lat: 48.8867, lng: 2.3431, image: "https://wikimedia.org" },
    { id: 30, name: "Galeries Lafayette", category: "Shopping", description: "Luxury department store with dome architecture.", city: "Paris", lat: 48.8738, lng: 2.3320, image: "https://wikimedia.org" },
    { id: 31, name: "Opéra Garnier", category: "Architecture", description: "19th century opera house.", city: "Paris", lat: 48.8719, lng: 2.3316, image: "https://wikimedia.org" },
    { id: 32, name: "Rue de Rivoli", category: "Streets", description: "Historic shopping street.", city: "Paris", lat: 48.8606, lng: 2.3410, image: "https://wikimedia.org" },
    { id: 33, name: "Île de la Cité", category: "Historic Districts", description: "Island in the Seine with Notre-Dame.", city: "Paris", lat: 48.8550, lng: 2.3470, image: "https://wikimedia.org" },
    { id: 34, name: "Shakespeare and Company", category: "Literature", description: "Famous English-language bookstore.", city: "Paris", lat: 48.8526, lng: 2.3470, image: "https://wikimedia.org" },
    { id: 35, name: "Rue Cler Market", category: "Food Markets", description: "Traditional Paris food street market.", city: "Paris", lat: 48.8580, lng: 2.3040, image: "https://wikimedia.org" },
    { id: 36, name: "Marché Bastille", category: "Food Markets", description: "Large open-air market.", city: "Paris", lat: 48.8530, lng: 2.3690, image: "https://wikimedia.org" },
    { id: 37, name: "La Défense", category: "Modern Paris", description: "Business district with skyscrapers.", city: "Paris", lat: 48.8919, lng: 2.2380, image: "https://wikimedia.org" },
    { id: 38, name: "Petit Palais", category: "Museums", description: "Fine arts museum near Champs-Élysées.", city: "Paris", lat: 48.8660, lng: 2.3130, image: "https://wikimedia.org" },
    { id: 39, name: "Grand Palais", category: "Architecture", description: "Historic exhibition hall.", city: "Paris", lat: 48.8662, lng: 2.3125, image: "https://wikimedia.org" },
    { id: 40, name: "Pont Neuf", category: "Bridges", description: "Oldest standing bridge over the Seine.", city: "Paris", lat: 48.8571, lng: 2.3419, image: "https://wikimedia.org" },
    { id: 41, name: "Sainte-Anne Street", category: "Food", description: "Famous Japanese street food area.", city: "Paris", lat: 48.8665, lng: 2.3350, image: "https://wikimedia.org" },
    { id: 42, name: "Rue Mouffetard", category: "Historic Streets", description: "One of the oldest streets in Paris.", city: "Paris", lat: 48.8422, lng: 2.3506, image: "https://wikimedia.org" }
  ]
   }
};


/* ─────────────────────────────
   CITY SETTER (FIX - WAS MISSING)
────────────────────────────── */

function setCity(cityKey) {
  const city = cities[cityKey];

  if (!city) {
    console.error("City not found:", cityKey);
    return;
  }

  renderExplore(city);
  initMap(city);
}

/* ─────────────────────────────
   CITY GENERATOR
────────────────────────────── */

function generateCity(name, lat, lng) {
  return {
    center: [lat, lng],
    zoom: 13,
    attractions: Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      name: `${name} Place ${i + 1}`,
      category: "Landmarks",
      lat: lat + (Math.random() - 0.5) * 0.05,
      lng: lng + (Math.random() - 0.5) * 0.05
    }))
  };
}

/* ─────────────────────────────
   EXPLORE GRID
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
   MAP
────────────────────────────── */

function initMap(city) {
  const container = document.getElementById("leaflet-map");

  // FIX: no map pages or missing container
  if (!container || !city) return;

  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
    mapMarkers = [];
  }

  leafletMap = L.map(container).setView(city.center, city.zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(leafletMap);

  mapMarkers = city.attractions.map(p =>
    L.marker([p.lat, p.lng])
      .addTo(leafletMap)
      .bindPopup(`<b>${p.name}</b><br>${p.category}`)
  );

  renderMapList(city);
}

/* ─────────────────────────────
   MAP LIST
────────────────────────────── */

function renderMapList(city) {
  const list = document.getElementById("map-list");
  if (!list) return;

  list.innerHTML = city.attractions.map(p => `
    <div class="map-item">
      <b>${p.name}</b><br>
      <small>${p.category}</small>
    </div>
  `).join("");
}

/* ─────────────────────────────
   NAVIGATION
────────────────────────────── */

function navigate(page) {
  const pages = document.querySelectorAll('.page');
  const target = document.getElementById('page-' + page);

  if (!target) return;

  pages.forEach(p => p.classList.remove('active'));
  target.classList.add('active');

  if (page === 'blog' && typeof loadBlog === 'function') {
    loadBlog();
  }
}

/* ─────────────────────────────
   AI FORMAT FIX
────────────────────────────── */

function formatAI(text) {
  const days = text.split(/Day\s+\d+:/g).filter(Boolean);

  return days.map((day, i) => {
    const places = day.trim().split(/\n\d+\.\s+/).filter(Boolean);

    return `
      <div class="ai-day-card">
        <div class="ai-day-title">Day ${i + 1}</div>
        <div class="ai-places">
          ${places.map(p => `<div class="ai-place">${p}</div>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ─────────────────────────────
   PROMPT ENGINE
────────────────────────────── */

function buildPrompt(city) {
  const interests = [...planInterests].join(', ');

  return `
You are a travel itinerary engine.

CITY: ${city}
DAYS: ${planDays}
PACE: ${planDiff}
INTERESTS: ${interests}

Return structured itinerary with multiple places per day.
`;
}

/* ─────────────────────────────
   INIT (FIXED - NO CRASH)
────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const cityKey = params.get("city") || "berlin";

  // FIX: never crash whole app
  if (!cities[cityKey]) {
    console.error("No valid city found in URL, fallback to berlin");
    setCity("berlin");
    return;
  }

  setCity(cityKey);
});
