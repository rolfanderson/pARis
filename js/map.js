/****** Map ******/
var map;

var personal = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Hydda_Full = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

map = L.map("map", {
  zoom: 16,
  center: [48.855146979616755, 2.3400771585357916],
  layers: [Hydda_Full],
  zoomControl: false,
  scrollWheelZoom: true,
  attributionControl: false
});

var marker =

  L.marker([48.8511124, 2.3443902]).addTo(map).bindPopup("Cluny - La Sorbonne Metro Stop");

  L.marker([48.851020700000035, 2.344658400000071]).addTo(map).bindPopup("Jardin Médiéval du Musée de Cluny");

  L.marker([48.84912150000001, 2.3431831999999986]).addTo(map).bindPopup("Defense de Déposer Des Bicyclettes");

  L.marker([48.8488356, 2.3419278999999733]).addTo(map).bindPopup("A Avgvste Comte Statue");

  L.marker([48.85006670000003, 2.3425849999999855]).addTo(map).bindPopup("St. Michel Bus Stop");

  L.marker([48.850316399999976, 2.344046800000001]).addTo(map).bindPopup("Musee National du Moyen Age");

  L.marker([48.8514866, 2.3458332000000155]).addTo(map).bindPopup("Square André Lefèvre");

  L.marker([48.852090200000035, 2.3461631000000125]).addTo(map).bindPopup("Rue Saint Jacques");

  L.marker([48.85284910000001, 2.3465278999999555]).addTo(map).bindPopup("Honneur Aux Déenseurs plaque");

  L.marker([48.8532709, 2.3433012000000417]).addTo(map).bindPopup("Bicycle Sign at the Crosswalk of Place Saint Michel");

  L.marker([48.85335740000002, 2.3423918999999387]).addTo(map).bindPopup("Restaurant Spécíalítés Franco Irlandaíses");

  L.marker([48.85334329999999, 2.3412975999999617]).addTo(map).bindPopup("École maternelle");

  L.marker([48.85380740000002, 2.338505400000031]).addTo(map).bindPopup("Le Buci sign? Check the Trigger");

  L.marker([48.85394510000001, 2.3369873000000325]).addTo(map).bindPopup("Mosiac - Bar du Marche");

  L.marker([48.85420810000001, 2.336947000000009]).addTo(map).bindPopup("Boissonnerie Mosaic");

  L.marker([48.85338120000002, 2.341986899999938]).addTo(map).bindPopup("Sortie Cinema");

  L.marker([48.854674800000005, 2.3363180000000057]).addTo(map).bindPopup("Antique Door Handle at 3 Rue Jacob");

  L.marker([48.8553596, 2.3342903000000206]).addTo(map).bindPopup("Librairie - 27 Rue Jacob");

  L.marker([48.85565520000001, 2.3341133000000127]).addTo(map).bindPopup("LaDuree Macaroons");

  L.marker([48.85650760000001, 2.334538400000042]).addTo(map).bindPopup("École de Arts - Atlier Populaire");

  L.marker([48.85628350000001, 2.334369400000014]).addTo(map).bindPopup("School of Medicine");

  L.marker([48.85700349999998, 2.33488710000006]).addTo(map).bindPopup("Objets D'Art");

  L.marker([48.85714460000001,2.3351070000001073]).addTo(map).bindPopup("Snake Door Handle - 5 Rue Bonaparte");

  L.marker([48.85762640000001,2.335353800000007]).addTo(map).bindPopup("Café des Beaux Arts");

  L.marker([48.857753499999994,2.337118700000019]).addTo(map).bindPopup("A la memorie de Vercors plaque - Ponts de Arts Bridge");

  L.marker([48.85921640000001,2.3378241000000344]).addTo(map).bindPopup("Quai François Mitterrand 1er Arrt.");

  L.marker([48.85949170000002,2.3362683999999945]).addTo(map).bindPopup("Musée du Louvre");

  L.marker([48.8597705,2.3350775000000112]).addTo(map).bindPopup("Parking/Bicycle sign");

  L.marker([48.858807,2.3327171999999337]).addTo(map).bindPopup("Pont du Carrousel");

  L.marker([48.858002299999995,2.3329424999999446]).addTo(map).bindPopup("RATP");

  L.marker([48.85685169999999,2.332100300000093]).addTo(map).bindPopup("B.I. - 100 marker");

  L.marker([48.85642460000001,2.3318213000000014]).addTo(map).bindPopup("Bieres a La Pression");

  L.marker([48.8546846,2.330753800000025]).addTo(map).bindPopup("L'angle de boulevard Saint-Germain");

  L.marker([x,y]).addTo(map).bindPopup("popup");
