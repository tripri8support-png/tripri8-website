export const site = {
  name: "TripRi8",
  brand: "TripRi8 | Travel & Tours",
  tagline: "Explore • Plan • Travel • Repeat",
  regions: ["Kerala", "Karnataka", "Tamil Nadu"],
  phone: "7339492005",
  phoneIntl: "+917339492005",
  whatsapp: "917339492005",
  email: "tripri8.support@gmail.com",
  website: "tripri8.com",
} as const;

export const whatsappLink = (message = "Hi TripRi8, I'd like to plan a trip.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const phoneLink = () => `tel:${site.phoneIntl}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Destinations", to: "/destinations" },
  { label: "Trips", to: "/trips" },
  { label: "Group Tours", to: "/group-tours" },
  { label: "Custom Trip", to: "/custom-trips" },
  { label: "About & Contact", to: "/about" },
] as const;
