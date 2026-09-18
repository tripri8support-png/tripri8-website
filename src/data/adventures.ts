import { img } from "./images";

export type Difficulty = "Easy" | "Moderate" | "Challenging";

export interface Adventure {
  name: string;
  region: string;
  difficulty: Difficulty;
  description: string;
  image: string;
  imageAlt: string;
}

export const adventures: Adventure[] = [
  {
    name: "White Water Rafting",
    region: "Dandeli, Karnataka",
    difficulty: "Moderate",
    description: "Grade II–III rapids on the Kali river with trained guides and full safety gear.",
    image: img.serviceAdventure,
    imageAlt: "Rafting through rapids on a forest river in Dandeli",
  },
  {
    name: "Kayaking",
    region: "Dandeli & Alleppey",
    difficulty: "Easy",
    description: "Calm-water paddling through backwaters and river bends at first light.",
    image: img.alleppey,
    imageAlt: "Calm backwaters lined with coconut palms at sunset",
  },
  {
    name: "Zipline",
    region: "Vagamon & Coorg",
    difficulty: "Easy",
    description: "Valley crossings on high lines with a clear view over the hills.",
    image: img.vagamon,
    imageAlt: "Green meadow hills with pine forest and low cloud in Vagamon",
  },
  {
    name: "Trekking",
    region: "Munnar, Wayanad, Chikmagalur",
    difficulty: "Challenging",
    description: "Sunrise summit treks and forest trails, from short climbs to full-day routes.",
    image: img.heroGhats,
    imageAlt: "Layered misty mountains of the Western Ghats at sunrise",
  },
  {
    name: "Camping",
    region: "Wayanad & Coorg",
    difficulty: "Easy",
    description: "Hilltop tents, bonfire evenings and clear night skies away from town lights.",
    image: img.camping,
    imageAlt: "Tents glowing beside a bonfire under a starry sky on a hilltop",
  },
  {
    name: "Jeep Safari",
    region: "Wayanad & Valparai",
    difficulty: "Moderate",
    description: "Off-road estate and forest-edge routes to viewpoints you cannot drive to.",
    image: img.tamilnadu,
    imageAlt: "Mountain road curving through forest at sunrise",
  },
  {
    name: "Boating",
    region: "Thekkady & Kodaikanal",
    difficulty: "Easy",
    description: "Lake boating in the early hours when the water is still and quiet.",
    image: img.kodaikanal,
    imageAlt: "Still lake surrounded by misty pine forest at dawn",
  },
  {
    name: "Wildlife Experiences",
    region: "Thekkady & Dandeli",
    difficulty: "Easy",
    description: "Guided nature walks and reserve visits with local naturalists.",
    image: img.karnataka,
    imageAlt: "Dense green plantation and forest valley in Karnataka",
  },
  {
    name: "Waterfalls",
    region: "Wayanad, Coorg, Valparai",
    difficulty: "Moderate",
    description: "Short forest walks to monsoon-fed falls, planned around safe water levels.",
    image: img.waterfall,
    imageAlt: "Tall waterfall falling into a rainforest gorge",
  },
  {
    name: "Scenic Trails",
    region: "Across South India",
    difficulty: "Easy",
    description: "Slow road journeys along ghat sections built for stopping, not rushing.",
    image: img.ctaRoad,
    imageAlt: "Highway curving through mountains at dusk",
  },
];
