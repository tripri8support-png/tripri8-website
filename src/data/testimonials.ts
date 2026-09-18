export interface Testimonial {
  name: string;
  trip: string;
  review: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aparna Menon",
    trip: "Munnar Escape",
    review:
      "Everything was arranged before we reached — stay, cab and even the sunrise point timing. We only had to enjoy the trip.",
    rating: 5,
  },
  {
    name: "Rohit Shetty",
    trip: "Dandeli Adventure",
    review:
      "Rafting and the riverside stay were well planned. The team kept us updated on timings a day in advance.",
    rating: 5,
  },
  {
    name: "Sneha Iyer",
    trip: "Ooty Weekend",
    review:
      "Booked a short weekend plan for six of us. Clear pricing, no last minute changes, comfortable travel.",
    rating: 4,
  },
  {
    name: "Fahad Rahman",
    trip: "College group trip to Vagamon",
    review:
      "We were 34 students. Buses, food and camping were handled properly and the coordination was calm throughout.",
    rating: 5,
  },
  {
    name: "Divya Krishnan",
    trip: "Coorg Getaway",
    review:
      "They adjusted the itinerary when we wanted a slower day. Felt like planning with someone who knows the place.",
    rating: 5,
  },
  {
    name: "Arjun Prakash",
    trip: "Gokarna Coastal Escape",
    review:
      "Good stay near the beach and a sensible route plan. Would travel with TripRi8 again for a longer trip.",
    rating: 4,
  },
];
