import { createFileRoute } from "@tanstack/react-router";
import { About } from "./about";

export const Route = createFileRoute("/about-contact")({
  head: () => ({
    meta: [
      { title: "About & Contact | TripRi8" },
      {
        name: "description",
        content:
          "TripRi8 plans curated trips, group tours and custom journeys across Kerala, Karnataka and Tamil Nadu with local knowledge and honest pricing.",
      },
    ],
  }),
  component: About,
});
