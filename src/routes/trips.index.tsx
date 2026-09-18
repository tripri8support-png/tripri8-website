import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { states } from "@/data/destinations";
import { trips } from "@/data/trips";
import { img } from "@/data/images";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TripCard } from "@/components/TripCard";

export const Route = createFileRoute("/trips/")({
  head: () => ({
    meta: [
      { title: "Trip Packages Across South India | TripRi8" },
      {
        name: "description",
        content:
          "Browse ready-to-book trip packages across Kerala, Karnataka and Tamil Nadu with day-wise itineraries, inclusions and starting prices.",
      },
      { property: "og:title", content: "Trip Packages Across South India | TripRi8" },
      {
        property: "og:description",
        content: "Weekend escapes and longer journeys with clear itineraries and honest pricing.",
      },
    ],
  }),
  component: TripsIndex,
});

const filters = [{ slug: "all", name: "All trips" }, ...states.map((s) => ({ slug: s.slug, name: s.name }))];

function TripsIndex() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? trips : trips.filter((t) => t.state === active);

  return (
    <>
      <PageHero
        eyebrow="Trips"
        title="Itineraries you can book today"
        subtitle="Each trip below is fully planned — stays, travel, food and activities. Pick one as it is, or ask us to reshape it around your dates."
        image={img.heroGhats}
        imageAlt="Misty layered mountains of the Western Ghats at sunrise"
      />

      <section className="container-page py-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter trips by state">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                aria-pressed={active === f.slug}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active === f.slug
                    ? "bg-gradient-brand text-primary-foreground shadow-soft"
                    : "border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((trip, i) => (
            <Reveal key={trip.slug} delay={(i % 3) * 0.07}>
              <TripCard trip={trip} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
