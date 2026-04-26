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

  paris: generateCity("Paris", 48.8566, 2.3522),
  rome: generateCity("Rome", 41.9028, 12.4964),
  london: generateCity("London", 51.5074, -0.1278),
  barcelona: generateCity("Barcelona", 41.3851, 2.1734)
};

/* helper (НЕ ПИПАМ) */
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
   INIT CITY PAGE
────────────────────────────── */

function initCity(cityKey) {
  const city = cities[cityKey];
  if (!city) return;

  renderExplore(city);
  initMap(city);
}

/* ─────────────────────────────
   EXPLORE
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
   MAP INIT (FIXED)
────────────────────────────── */

function initMap(city) {

  // FIX: ако вече има карта → унищожи я
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
    mapMarkers = [];
  }

  leafletMap = L.map("leaflet-map").setView(city.center, city.zoom);

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
   MAP ACTION
────────────────────────────── */

function goToPlace(lat, lng) {
  if (!leafletMap) return;
  leafletMap.setView([lat, lng], 16);
}
