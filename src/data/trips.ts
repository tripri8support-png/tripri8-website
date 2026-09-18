import { img } from "./images";
import type { StateSlug } from "./destinations";

export interface ItineraryDay {
  day: number;
  title: string;
  detail: string;
}

export interface Trip {
  slug: string;
  title: string;
  destination: string;
  state: StateSlug;
  stateName: string;
  days: number;
  nights: number;
  priceFrom: number;
  short: string;
  overview: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  activities: string[];
  accommodation: string;
  food: string;
  transportation: string;
  inclusions: string[];
  exclusions: string[];
  gallery: { src: string; alt: string }[];
}

const commonExclusions = [
  "Airfare and train tickets to the starting point",
  "Entry tickets and activity charges not listed under inclusions",
  "Personal expenses, shopping and tips",
  "Anything not mentioned under inclusions",
];

export const trips: Trip[] = [
  {
    slug: "munnar-escape",
    title: "Munnar Escape",
    destination: "Munnar",
    state: "kerala",
    stateName: "Kerala",
    days: 3,
    nights: 2,
    priceFrom: 6900,
    short: "Tea hills, viewpoints and cool mornings at a relaxed pace.",
    overview:
      "A short hill-station break built around early mornings and slow evenings. Expect tea estate roads, a sunrise viewpoint, a waterfall stop and enough free time to actually rest.",
    image: img.kerala,
    imageAlt: "Tea plantation terraces in the misty hills of Munnar, Kerala",
    highlights: ["Sunrise at Top Station", "Tea estate walk", "Attukad waterfalls", "Echo Point boating"],
    itinerary: [
      { day: 1, title: "Arrival and estate roads", detail: "Pick-up, drive into the hills, evening walk through the tea estates and check-in." },
      { day: 2, title: "Viewpoints and waterfalls", detail: "Early start for a sunrise viewpoint, then Mattupetty, Echo Point and Attukad falls." },
      { day: 3, title: "Slow morning and return", detail: "Breakfast, a short spice plantation visit and drop-off at your starting point." },
    ],
    activities: ["Sightseeing", "Photography", "Short trek", "Boating"],
    accommodation: "2 nights in a hill-view resort or estate stay, twin sharing.",
    food: "Daily breakfast and dinner at the stay. Lunch at local restaurants on route.",
    transportation: "Private AC vehicle for the full trip, with a driver familiar with ghat roads.",
    inclusions: ["2 nights stay", "Daily breakfast and dinner", "Private vehicle and driver", "Sightseeing as per itinerary", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.kerala, alt: "Tea terraces in Munnar" },
      { src: img.heroGhats, alt: "Misty Western Ghats at sunrise" },
      { src: img.waterfall, alt: "Waterfall in the Western Ghats" },
    ],
  },
  {
    slug: "mankulam-escape",
    title: "Mankulam Escape",
    destination: "Mankulam",
    state: "kerala",
    stateName: "Kerala",
    days: 3,
    nights: 2,
    priceFrom: 7200,
    short: "Tea estates, valley roads and slow mornings away from the crowds.",
    overview:
      "A quieter Kerala hill escape focused on scenic drives, lush estate roads and time to simply breathe in the cool air. It is ideal for people who want peace, viewpoints and an easy pace.",
    image: img.kerala,
    imageAlt: "Tea estate valley roads and misty hills around Mankulam, Kerala",
    highlights: ["Valley road drive", "Tea estate walks", "Sunrise viewpoint", "Quiet homestay evenings"],
    itinerary: [
      { day: 1, title: "Arrival and valley views", detail: "Check-in and relax as the plantation roads and mist settle around the property." },
      { day: 2, title: "Tea estates and viewpoints", detail: "Visit scenic lookouts, tea gardens and a short forest-drive loop across the valley." },
      { day: 3, title: "Leisure and return", detail: "Late breakfast, a final stroll and easy drop-off at the starting point." },
    ],
    activities: ["Sightseeing", "Photography", "Nature walk", "Relaxation"],
    accommodation: "2 nights in a quiet hillside stay or plantation homestay, twin sharing.",
    food: "Daily breakfast and dinner included.",
    transportation: "Private AC vehicle for the full trip with a driver familiar with hill routes.",
    inclusions: ["2 nights stay", "Daily breakfast and dinner", "Private vehicle and driver", "Sightseeing as per itinerary", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.kerala, alt: "Tea estate views in Mankulam" },
      { src: img.heroGhats, alt: "Misty hill road in the Western Ghats" },
      { src: img.waterfall, alt: "Small waterfall in a forested hill valley" },
    ],
  },
  {
    slug: "kanthalloor-bliss",
    title: "Kanthalloor Bliss",
    destination: "Kanthalloor",
    state: "kerala",
    stateName: "Kerala",
    days: 3,
    nights: 2,
    priceFrom: 7600,
    short: "Green plains, cool hills and the kind of landscapes that slow everything down.",
    overview:
      "Kanthalloor is a calm grassland-and-mountain region with broad views and fertile landscapes. This plan balances scenic drives, village walks and a very restful stay.",
    image: img.heroGhats,
    imageAlt: "Rolling green plains and misty mountain slopes in Kanthalloor, Kerala",
    highlights: ["Green valley vistas", "Village drive", "Scenic sunrise", "Farm and hill walks"],
    itinerary: [
      { day: 1, title: "Arrival and panoramic evening", detail: "Settle into a scenic stay and explore the nearby village and open views." },
      { day: 2, title: "Farm roads and hillside charm", detail: "Morning drive through the fields, quick viewpoints and a relaxed evening at the property." },
      { day: 3, title: "Morning reset and return", detail: "Slow breakfast, a final lookout stop and departure after a quiet final morning." },
    ],
    activities: ["Scenic drives", "Village walk", "Photography", "Leisure"],
    accommodation: "2 nights in a farmstay or hillside property, twin sharing.",
    food: "Breakfast and dinner included; local meal options available on request.",
    transportation: "Private AC vehicle for the full itinerary.",
    inclusions: ["2 nights stay", "Daily breakfast and dinner", "Private transport", "Local sightseeing", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.heroGhats, alt: "Open valley and misty mountains in Kanthalloor" },
      { src: img.kerala, alt: "Tea and crop fields under cloudy skies" },
      { src: img.waterfall, alt: "Fresh green hill scenery" },
    ],
  },
  {
    slug: "wayanad-forest-trail",
    title: "Wayanad Forest Trail",
    destination: "Wayanad",
    state: "kerala",
    stateName: "Kerala",
    days: 3,
    nights: 2,
    priceFrom: 7800,
    short: "Waterfalls, forest roads and a mix of adventure and calm in the hills.",
    overview:
      "Wayanad blends greenery, forest trails and wooded viewpoints in a way that feels refreshing and immersive without being intense. This trip balances scenic stops with a little adventure and a lot of rest.",
    image: img.heroGhats,
    imageAlt: "Forest-covered hills and waterfall route in Wayanad, Kerala",
    highlights: ["Waterfall stop", "Forest trails", "Sunrise lookout", "Cave and valley exploration"],
    itinerary: [
      { day: 1, title: "Arrival and forest edge", detail: "Check-in, stretch walk and an easy evening drive through the greener valley roads." },
      { day: 2, title: "Waterfalls and viewpoints", detail: "Explore scenic spots along the forest route and a lookout point before sunset." },
      { day: 3, title: "Nature morning and return", detail: "Early trail walk, breakfast and a final scenic drive back to the city." },
    ],
    activities: ["Trekking", "Waterfall visits", "Photography", "Forest drives"],
    accommodation: "2 nights in a forest-view stay or hill resort, twin sharing.",
    food: "Daily breakfast and dinner included with local options on route.",
    transportation: "Private AC vehicle for the full route and local transfers.",
    inclusions: ["2 nights stay", "Daily breakfast and dinner", "Private transport", "Forest route sightseeing", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.heroGhats, alt: "Wayanad hill road under cloud cover" },
      { src: img.waterfall, alt: "Waterfall in a forested valley" },
      { src: img.kerala, alt: "Tree-lined Kerala route amidst mist" },
    ],
  },
  {
    slug: "vagamon-adventure",
    title: "Vagamon Adventure",
    destination: "Vagamon",
    state: "kerala",
    stateName: "Kerala",
    days: 2,
    nights: 1,
    priceFrom: 4900,
    short: "Meadows, pine forest, ziplining and a night under open sky.",
    overview:
      "A compact weekend for people who would rather be outdoors. Rolling meadows, a pine forest walk, adventure activities in the afternoon and camping with a bonfire at night.",
    image: img.vagamon,
    imageAlt: "Green meadow hills and pine forest under low cloud in Vagamon",
    highlights: ["Meadow sunrise", "Pine forest trail", "Zipline and rope course", "Bonfire camping"],
    itinerary: [
      { day: 1, title: "Meadows and adventure park", detail: "Arrive by afternoon, meadow walk, zipline and rope activities, camp set-up and bonfire." },
      { day: 2, title: "Pine forest and return", detail: "Sunrise at the meadows, pine forest trail, breakfast and return journey." },
    ],
    activities: ["Zipline", "Trekking", "Camping", "Photography"],
    accommodation: "1 night in a tented camp with shared washrooms, or a homestay on request.",
    food: "Dinner, bonfire snacks and breakfast included.",
    transportation: "Shared tempo traveller or private vehicle depending on group size.",
    inclusions: ["1 night camping", "Dinner and breakfast", "Adventure activity charges", "Travel as per itinerary", "Trip coordinator on site"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.vagamon, alt: "Meadow hills of Vagamon" },
      { src: img.camping, alt: "Tents and bonfire under a starry sky" },
      { src: img.heroGhats, alt: "Layered hills at sunrise" },
    ],
  },
  {
    slug: "gokarna-coastal-escape",

    title: "Gokarna Coastal Escape",
    destination: "Gokarna",
    state: "karnataka",
    stateName: "Karnataka",
    days: 3,
    nights: 2,
    priceFrom: 7400,
    short: "Beach hopping, a coastal trek and long unhurried sunsets.",
    overview:
      "Quiet beaches instead of crowded ones. A coastal trek between coves, one boat ride, and evenings spent watching the sun drop into the Arabian Sea.",
    image: img.gokarna,
    imageAlt: "Rocky headland and palm trees on Gokarna beach at golden hour",
    highlights: ["Beach trek to Paradise Beach", "Kudle sunset point", "Boat ride along the coast", "Om Beach evening"],
    itinerary: [
      { day: 1, title: "Arrival and Kudle sunset", detail: "Check-in near the beach, evening at Kudle Beach for sunset." },
      { day: 2, title: "Coastal trek", detail: "Trek across Om, Half Moon and Paradise beaches with a boat ride back." },
      { day: 3, title: "Town walk and return", detail: "Morning at the beach, short town walk and departure." },
    ],
    activities: ["Beaches", "Trekking", "Photography", "Relaxation"],
    accommodation: "2 nights in a beach-side cottage or resort, twin sharing.",
    food: "Daily breakfast included. Other meals at coastal cafes and shacks.",
    transportation: "Private AC vehicle for transfers and local travel.",
    inclusions: ["2 nights stay", "Daily breakfast", "Boat ride", "Private vehicle and driver", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.gokarna, alt: "Gokarna beach at sunset" },
      { src: img.karnataka, alt: "Coastal plantation view in Karnataka" },
      { src: img.ctaRoad, alt: "Coastal highway at dusk" },
    ],
  },
  {
    slug: "dandeli-adventure",
    title: "Dandeli Adventure",
    destination: "Dandeli",
    state: "karnataka",
    stateName: "Karnataka",
    days: 3,
    nights: 2,
    priceFrom: 8200,
    short: "River rafting, kayaking and forest stays on the Kali river.",
    overview:
      "The most activity-heavy trip we run. Rafting on the Kali river, kayaking, a jeep safari through the reserve edge and riverside camping with proper safety cover.",
    image: img.serviceAdventure,
    imageAlt: "Rafting through rapids on a forest river in Dandeli",
    highlights: ["Grade II–III rafting", "Kayaking session", "Jeep safari", "Riverside camp night"],
    itinerary: [
      { day: 1, title: "Arrival and river walk", detail: "Check-in at a riverside camp, evening nature walk and briefing." },
      { day: 2, title: "Rafting and safari", detail: "Morning rafting stretch, kayaking after lunch, evening jeep safari." },
      { day: 3, title: "Coracle and return", detail: "Coracle ride, breakfast and return journey." },
    ],
    activities: ["Adventure", "Wildlife", "Camping", "Kayaking"],
    accommodation: "2 nights in riverside tents or forest resort rooms.",
    food: "All meals included from Day 1 dinner to Day 3 breakfast.",
    transportation: "Private vehicle for transfers, jeep for the safari.",
    inclusions: ["2 nights stay", "All meals as listed", "Rafting, kayaking and safari charges", "Safety equipment and guides", "Travel as per itinerary"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.serviceAdventure, alt: "Rafting on the Kali river" },
      { src: img.waterfall, alt: "Forest waterfall" },
      { src: img.camping, alt: "Riverside camping at night" },
    ],
  },
  {
    slug: "coorg-getaway",
    title: "Coorg Getaway",
    destination: "Coorg",
    state: "karnataka",
    stateName: "Karnataka",
    days: 3,
    nights: 2,
    priceFrom: 7100,
    short: "Coffee estates, misty viewpoints and quiet plantation stays.",
    overview:
      "A calm plantation trip. Coffee estate walks, Abbey Falls, a viewpoint sunrise and time to sit still with a filter coffee in hand.",
    image: img.karnataka,
    imageAlt: "Coffee plantation valley with hills in Coorg, Karnataka",
    highlights: ["Coffee estate walk", "Abbey Falls", "Raja's Seat sunset", "Dubare elephant camp"],
    itinerary: [
      { day: 1, title: "Arrival and sunset point", detail: "Drive in, check-in at a plantation stay, evening at Raja's Seat." },
      { day: 2, title: "Falls and estates", detail: "Abbey Falls, guided coffee estate walk and Dubare river camp visit." },
      { day: 3, title: "Golden temple and return", detail: "Namdroling monastery visit and return journey." },
    ],
    activities: ["Sightseeing", "Waterfalls", "Photography", "Relaxation"],
    accommodation: "2 nights in a plantation homestay or resort, twin sharing.",
    food: "Daily breakfast and dinner included.",
    transportation: "Private AC vehicle for the full trip.",
    inclusions: ["2 nights stay", "Daily breakfast and dinner", "Estate walk", "Private vehicle and driver", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.karnataka, alt: "Coorg plantation valley" },
      { src: img.waterfall, alt: "Abbey Falls in the monsoon" },
      { src: img.heroGhats, alt: "Misty hills at sunrise" },
    ],
  },
  {
    slug: "chikmagalur-escape",
    title: "Chikmagalur Escape",
    destination: "Chikmagalur",
    state: "karnataka",
    stateName: "Karnataka",
    days: 3,
    nights: 2,
    priceFrom: 6800,
    short: "Peaks, streams and estate roads with almost no crowds.",
    overview:
      "Hill roads, a peak sunrise at Mullayanagiri, stream stops and a coffee estate stay. Good for a first trek without a demanding climb.",
    image: img.heroGhats,
    imageAlt: "Misty layered hills of the Western Ghats at sunrise",
    highlights: ["Mullayanagiri sunrise", "Hebbe Falls", "Coffee estate stay", "Baba Budangiri drive"],
    itinerary: [
      { day: 1, title: "Arrival and estate evening", detail: "Check-in at an estate stay, short walk and evening at a viewpoint." },
      { day: 2, title: "Peak and falls", detail: "Sunrise at Mullayanagiri, Baba Budangiri drive and Hebbe Falls jeep ride." },
      { day: 3, title: "Stream stop and return", detail: "Morning stream visit, breakfast and return journey." },
    ],
    activities: ["Trekking", "Waterfalls", "Sightseeing", "Photography"],
    accommodation: "2 nights in a coffee estate stay, twin sharing.",
    food: "Daily breakfast and dinner included.",
    transportation: "Private vehicle plus jeep for the falls route.",
    inclusions: ["2 nights stay", "Daily breakfast and dinner", "Jeep charges for Hebbe Falls", "Private vehicle and driver", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.heroGhats, alt: "Sunrise over the Western Ghats" },
      { src: img.karnataka, alt: "Coffee estate greenery" },
      { src: img.waterfall, alt: "Hebbe Falls" },
    ],
  },
  {
    slug: "ooty-weekend",
    title: "Ooty Weekend",
    destination: "Ooty",
    state: "tamil-nadu",
    stateName: "Tamil Nadu",
    days: 2,
    nights: 1,
    priceFrom: 5200,
    short: "Toy train, garden walks and a cool weather weekend.",
    overview:
      "A classic hill-station weekend without rushing between ten spots. Toy train stretch, botanical gardens, lake evening and a tea factory visit.",
    image: img.tamilnadu,
    imageAlt: "Winding mountain road through eucalyptus forest near Ooty",
    highlights: ["Nilgiri toy train stretch", "Botanical gardens", "Ooty lake evening", "Tea factory visit"],
    itinerary: [
      { day: 1, title: "Arrival and gardens", detail: "Drive up, botanical gardens, lake evening and check-in." },
      { day: 2, title: "Toy train and return", detail: "Toy train stretch, tea factory visit and return journey." },
    ],
    activities: ["Sightseeing", "Photography", "Relaxation"],
    accommodation: "1 night in a town-centre hotel, twin sharing.",
    food: "Breakfast included. Other meals on your own.",
    transportation: "Private AC vehicle for the full trip.",
    inclusions: ["1 night stay", "Breakfast", "Private vehicle and driver", "Sightseeing as per itinerary"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.tamilnadu, alt: "Forest road near Ooty" },
      { src: img.kodaikanal, alt: "Misty pine forest and lake" },
      { src: img.heroGhats, alt: "Nilgiri hills at sunrise" },
    ],
  },
  {
    slug: "kodaikanal-escape",
    title: "Kodaikanal Escape",
    destination: "Kodaikanal",
    state: "tamil-nadu",
    stateName: "Tamil Nadu",
    days: 3,
    nights: 2,
    priceFrom: 6400,
    short: "Lake mornings, pine forest and cliff viewpoints.",
    overview:
      "Kodaikanal at a walking pace. Lake cycling in the morning, pine forest, Pillar Rocks and Dolphin's Nose with a stop for hot bajji on the way back.",
    image: img.kodaikanal,
    imageAlt: "Still lake surrounded by misty pine forest at dawn in Kodaikanal",
    highlights: ["Lake cycling", "Pine forest walk", "Pillar Rocks", "Dolphin's Nose trail"],
    itinerary: [
      { day: 1, title: "Arrival and lake evening", detail: "Drive up through the ghat road, lake evening and check-in." },
      { day: 2, title: "Viewpoints and forest", detail: "Pillar Rocks, Guna Cave, pine forest and Dolphin's Nose walk." },
      { day: 3, title: "Falls and return", detail: "Silver Cascade stop on the way down and return journey." },
    ],
    activities: ["Sightseeing", "Trekking", "Photography", "Relaxation"],
    accommodation: "2 nights in a hotel near the lake, twin sharing.",
    food: "Daily breakfast included.",
    transportation: "Private AC vehicle for the full trip.",
    inclusions: ["2 nights stay", "Daily breakfast", "Private vehicle and driver", "Sightseeing as per itinerary", "Trip coordinator on call"],
    exclusions: commonExclusions,
    gallery: [
      { src: img.kodaikanal, alt: "Kodaikanal lake in the mist" },
      { src: img.tamilnadu, alt: "Hill road through forest" },
      { src: img.waterfall, alt: "Silver Cascade falls" },
    ],
  },
];

export const getTrip = (slug: string) => trips.find((t) => t.slug === slug);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
