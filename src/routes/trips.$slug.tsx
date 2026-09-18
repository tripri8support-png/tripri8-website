import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BedDouble, Bus, CalendarDays, Check, MapPin, Utensils, X } from "lucide-react";
import { getTrip, trips } from "@/data/trips";
import { brandButton } from "@/lib/ui";
import { Reveal } from "@/components/Reveal";
import { TripCard } from "@/components/TripCard";
import { useEnquiry } from "@/components/EnquiryProvider";
import { whatsappLink } from "@/data/site";

export const Route = createFileRoute("/trips/$slug")({
  loader: ({ params }) => {
    const trip = getTrip(params.slug);
    if (!trip) throw notFound();
    return { trip };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Trip not found | TripRi8" }, { name: "robots", content: "noindex" }] };
    }
    const { trip } = loaderData;
    const title = `${trip.title} — ${trip.days}D/${trip.nights}N ${trip.stateName} Trip | TripRi8`;
    return {
      meta: [
        { title },
        { name: "description", content: trip.short },
        { property: "og:title", content: title },
        { property: "og:description", content: trip.overview.slice(0, 155) },
      ],
    };
  },
  component: TripDetail,
  notFoundComponent: TripNotFound,
});

function TripNotFound() {
  return (
    <div className="container-page py-40 text-center">
      <h1 className="text-3xl font-extrabold">We couldn't find that trip</h1>
      <p className="mt-4 text-sm text-muted-foreground">It may have been renamed or is no longer listed.</p>
      <Link to="/trips" className={`${brandButton({ size: "md" })} mt-8`}>
        Browse all trips
      </Link>
    </div>
  );
}

function TripDetail() {
  const { trip } = Route.useLoaderData();
  const { openEnquiry } = useEnquiry();
  const related = trips.filter((t) => t.slug !== trip.slug && t.state === trip.state).slice(0, 3);

  const logistics = [
    { Icon: BedDouble, label: "Accommodation", value: trip.accommodation },
    { Icon: Utensils, label: "Food", value: trip.food },
    { Icon: Bus, label: "Transportation", value: trip.transportation },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight pt-28 pb-16 sm:pt-32 sm:pb-20">
        <img src={trip.image} alt={trip.imageAlt} className="absolute inset-0 size-full object-cover" />
        <div className="veil-hero absolute inset-0" aria-hidden="true" />
        <div className="container-page relative">
          <Reveal className="max-w-3xl">
            <Link
              to="/trips"
              className="inline-flex items-center gap-2 text-sm font-semibold text-midnight-foreground/75 hover:text-midnight-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> All trips
            </Link>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-midnight-foreground sm:text-5xl lg:text-6xl">
              {trip.title}
            </h1>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-midnight-foreground/80">
              <li className="flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" /> {trip.destination}, {trip.stateName}
              </li>
              <li className="flex items-center gap-2">
                <CalendarDays className="size-4" aria-hidden="true" /> {trip.days} days / {trip.nights} nights
              </li>
              <li className="font-semibold text-midnight-foreground">
                From ₹{trip.priceFrom.toLocaleString("en-IN")} per person
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className={brandButton({ size: "lg" })} onClick={() => openEnquiry(trip.title)}>
                Enquire about this trip
              </button>
              <a
                href={whatsappLink(`Hi TripRi8, I'm interested in the ${trip.title} trip.`)}
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

      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.7fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Overview</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{trip.overview}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trip.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-2xl border bg-card p-4 text-sm shadow-soft">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Day-wise itinerary</h2>
            <ol className="mt-8 space-y-6 border-l pl-6">
              {trip.itinerary.map((day) => (
                <li key={day.day} className="relative">
                  <span className="absolute -left-[calc(1.5rem+0.6rem)] mt-1.5 size-3 rounded-full bg-gradient-brand" aria-hidden="true" />
                  <p className="label-eyebrow text-primary">Day {day.day}</p>
                  <h3 className="mt-2 text-lg font-bold">{day.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{day.detail}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Stay, food and travel</h2>
            <div className="mt-8 grid gap-4">
              {logistics.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 rounded-2xl border bg-card p-5 shadow-soft">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Gallery</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trip.gallery.map((g) => (
                <img
                  key={g.src + g.alt}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
                />
              ))}
            </div>
          </Reveal>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="rounded-3xl border bg-card p-7 shadow-lift">
              <p className="label-eyebrow text-primary">Activities</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {trip.activities.map((a) => (
                  <li key={a} className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                    {a}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-sm font-bold">Inclusions</h2>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {trip.inclusions.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-sm font-bold">Exclusions</h2>
              <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                {trip.exclusions.map((i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>

              <button className={`${brandButton({ size: "md" })} mt-8 w-full`} onClick={() => openEnquiry(trip.title)}>
                Enquire now
              </button>
            </div>
          </Reveal>
        </aside>
      </div>

      {related.length ? (
        <section className="bg-lavender py-16 lg:py-24">
          <div className="container-page">
            <h2 className="text-2xl font-extrabold sm:text-3xl">More trips in {trip.stateName}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.07}>
                  <TripCard trip={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
