import { img } from "./images";

export type StateSlug = "kerala" | "karnataka" | "tamil-nadu";

export interface DestinationState {
  slug: StateSlug;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  places: { name: string; note: string }[];
}

export const states: DestinationState[] = [
  {
    slug: "kerala",
    name: "Kerala",
    description: "Green hills, misty valleys, backwaters and unforgettable escapes.",
    image: img.kerala,
    imageAlt: "Misty tea plantation terraces in the hills of Munnar, Kerala",
    places: [
      { name: "Munnar", note: "Tea hills and cool mornings" },
      { name: "Mankulam", note: "Tea estates and quiet valley roads" },
      { name: "Kanthalloor", note: "Green plains and misty mountain views" },
      { name: "Vagamon", note: "Meadows, pine forest and paragliding" },
      { name: "Wayanad", note: "Forest trails and waterfalls" },
      { name: "Alleppey", note: "Backwaters and houseboat stays" },
      { name: "Thekkady", note: "Wildlife and lake boating" },
      { name: "Varkala", note: "Cliff beaches and sunsets" },
    ],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    description: "Mountains, beaches, forests and adventure in one incredible state.",
    image: img.karnataka,
    imageAlt: "Coffee plantation valley in Coorg, Karnataka, with hills and coastline beyond",
    places: [
      { name: "Coorg", note: "Coffee estates and misty viewpoints" },
      { name: "Gokarna", note: "Quiet beaches and coastal treks" },
      { name: "Dandeli", note: "River rafting and kayaking" },
      { name: "Chikmagalur", note: "Peaks, streams and estate stays" },
      { name: "Udupi", note: "Temple town and seafood" },
      { name: "Mysore", note: "Heritage, palaces and markets" },
    ],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    description: "From hill stations to heritage destinations, discover Tamil Nadu differently.",
    image: img.tamilnadu,
    imageAlt: "Winding mountain road through eucalyptus forest near Ooty, Tamil Nadu",
    places: [
      { name: "Ooty", note: "Toy train and garden hills" },
      { name: "Kodaikanal", note: "Lake, pine forest and viewpoints" },
      { name: "Yercaud", note: "Quiet hill roads and orchards" },
      { name: "Valparai", note: "Tea estates and wildlife" },
      { name: "Mahabalipuram", note: "Shore temples and heritage" },
      { name: "Kanyakumari", note: "Sunrise and sunset on one shore" },
    ],
  },
];
