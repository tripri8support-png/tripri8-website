import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { states } from "@/data/destinations";
import { trips } from "@/data/trips";
import { img } from "@/data/images";
import { brandButton } from "@/lib/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TripCard } from "@/components/TripCard";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations in Kerala, Karnataka & Tamil Nadu | TripRi8" },
      {
        name: "description",
        content:
          "Explore the hill stations, backwaters, beaches and forests we cover across Kerala, Karnataka and Tamil Nadu.",
      },
      { property: "og:title", content: "Destinations in Kerala, Karnataka & Tamil Nadu | TripRi8" },
      {
        property: "og:description",
        content: "Munnar, Vagamon, Alleppey, Coorg, Gokarna, Dandeli, Ooty, Kodaikanal and more.",
      },
    ],
  }),
  component: Destinations,
});

function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Three states, endless routes"
        subtitle="From tea hills and backwaters to coastlines and rainforest rivers — here is where we travel, and what each place is best for."
        image={img.karnataka}
        imageAlt="Green plantation valley in Karnataka with hills beyond"
      />

      {states.map((state, index) => (
        <section
          key={state.slug}
          id={state.slug}
          className={`scroll-mt-24 py-20 lg:py-28 ${index % 2 === 1 ? "bg-lavender" : ""}`}
        >
          <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <img
                  src={state.image}
                  alt={state.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] size-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="label-eyebrow text-primary">Destination</p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">{state.name}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{state.description}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {state.places.map((place) => (
                  <li key={place.name} className="rounded-2xl border bg-card p-4 shadow-soft">
                    <span className="flex items-center gap-2 text-sm font-bold">
                      <MapPin className="size-4 text-primary" aria-hidden="true" />
                      {place.name}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">{place.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="container-page mt-14">
            <h3 className="text-lg font-bold">Trips in {state.name}</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trips
                .filter((trip) => trip.state === state.slug)
                .map((trip, i) => (
                  <Reveal key={trip.slug} delay={(i % 3) * 0.07}>
                    <TripCard trip={trip} />
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-page py-16 text-center">
        <Reveal>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Not sure where to go?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us the vibe — hills, water, wildlife or quiet — and we will suggest the right place for your dates.
          </p>
          <Link to="/custom-trips" className={`${brandButton({ size: "lg" })} mt-8`}>
            Build a custom trip
          </Link>
        </Reveal>
      </section>
    </>
  );
}
