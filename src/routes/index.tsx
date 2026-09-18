import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Map, ShieldCheck, Star, Wallet } from "lucide-react";
import { img } from "@/data/images";
import { site, whatsappLink } from "@/data/site";
import { states } from "@/data/destinations";
import { trips } from "@/data/trips";
import { testimonials } from "@/data/testimonials";
import { brandButton } from "@/lib/ui";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TripCard } from "@/components/TripCard";
import { useEnquiry } from "@/components/EnquiryProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TripRi8 | Trips, Group Tours & Custom Travel in South India" },
      {
        name: "description",
        content:
          "Plan curated trips across Kerala, Karnataka and Tamil Nadu — hill stations, backwaters, beaches and custom itineraries arranged end to end by TripRi8.",
      },
      { property: "og:title", content: "TripRi8 | Trips, Group Tours & Custom Travel in South India" },
      {
        property: "og:description",
        content: "Curated trips, custom itineraries and college group tours across South India.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    title: "Custom Trip Planning",
    text: "Tell us your dates, budget and pace. We build the itinerary around you, not around a template.",
    image: img.serviceCustom,
    alt: "Traveller planning a route with a map on a hill road",
    to: "/custom-trips" as const,
  },
  {
    title: "Group & College Tours",
    text: "Buses, stays, food, activities and on-ground coordination for student and corporate groups.",
    image: img.serviceGroup,
    alt: "Large group of young travellers on a hill viewpoint",
    to: "/group-tours" as const,
  },
  {
    title: "Private Itinerary Planning",
    text: "Tell us your dates and vibe, and we build a route that matches your pace, budget and travel style.",
    image: img.serviceCustom,
    alt: "Traveller planning a route with a map on a hill road",
    to: "/custom-trips" as const,
  },
];

const whyUs = [
  { Icon: Map, title: "Local expertise", text: "We travel these routes ourselves and plan around real road and weather conditions." },
  { Icon: Wallet, title: "Transparent pricing", text: "Clear inclusions and exclusions before you pay. No surprise add-ons on the road." },
  { Icon: HeartHandshake, title: "Personal coordination", text: "One coordinator on call for your whole trip, from pick-up to drop-off." },
  { Icon: ShieldCheck, title: "Safety first", text: "Vetted stays, experienced drivers and certified guides for every activity." },
];

function Home() {
  const { openEnquiry } = useEnquiry();
  const featured = trips.slice(0, 6);

  return (
    <>
      <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-midnight">
        <img
          src={img.heroGhats}
          alt="Layered misty mountains of the Western Ghats at sunrise"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="veil-hero absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-28">
          <Reveal className="max-w-3xl">
            <p className="label-eyebrow text-midnight-foreground/75">{site.tagline}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] text-midnight-foreground sm:text-6xl lg:text-7xl">
              South India, planned properly.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-midnight-foreground/80 sm:text-lg">
              Hill stations, backwaters, coastlines and forests across Kerala, Karnataka and Tamil Nadu — curated
              itineraries, honest pricing and someone on call the whole way.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button className={brandButton({ size: "lg" })} onClick={() => openEnquiry("Plan your trip")}>
                Plan Your Trip <ArrowRight className="size-4" aria-hidden="true" />
              </button>
              <Link to="/trips" className={brandButton({ variant: "onDark", size: "lg" })}>
                Explore Trips
              </Link>
            </div>
            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-midnight-foreground/15 pt-8">
              {[
                { k: "3", v: "States covered" },
                { k: "20+", v: "Destinations" },
                { k: "100%", v: "Custom plans" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl font-extrabold text-midnight-foreground sm:text-4xl">{s.k}</dt>
                  <dd className="mt-1 text-xs text-midnight-foreground/65 sm:text-sm">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways to travel with us"
          subtitle="Whether you want a plan built from scratch, a big group handled for you, or a weekend of adventure — start here."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link
                to={s.to}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-lavender py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Destinations" title="Where we travel" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {states.map((state, i) => (
              <Reveal key={state.slug} delay={i * 0.08}>
                <Link
                  to="/destinations"
                  hash={state.slug}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                >
                  <img
                    src={state.image}
                    alt={state.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="veil-image absolute inset-0" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="text-2xl font-extrabold text-midnight-foreground">{state.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-midnight-foreground/75">{state.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Popular trips" title="Ready-to-book itineraries" />
          <Reveal>
            <Link to="/trips" className={brandButton({ variant: "outline", size: "md" })}>
              View all trips
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((trip, i) => (
            <Reveal key={trip.slug} delay={(i % 3) * 0.08}>
              <TripCard trip={trip} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <SectionHeading eyebrow="Why TripRi8" title="Planned by people who travel here" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="h-full rounded-3xl border bg-card p-7 shadow-soft">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-lavender py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Travellers" title="What our travellers say" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 6).map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl border bg-card p-7 shadow-soft">
                  <div className="flex gap-1" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-current text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{t.review}”
                  </blockquote>
                  <figcaption className="mt-6 border-t pt-5">
                    <span className="block text-sm font-bold">{t.name}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{t.trip}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-midnight">
        <img
          src={img.ctaRoad}
          alt="Highway curving through mountains at dusk"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="veil-hero absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-24 text-center lg:py-32">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-midnight-foreground sm:text-5xl">
              Your next trip starts with one message.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-midnight-foreground/75 sm:text-lg">
              Send us your dates and we will come back with a plan, a price and a route worth driving.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button className={brandButton({ size: "lg" })} onClick={() => openEnquiry("Plan your trip")}>
                Plan Your Trip
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className={brandButton({ variant: "onDark", size: "lg" })}
              >
                WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
