import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import type { Trip } from "@/data/trips";

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <Link
      to="/trips/$slug"
      params={{ slug: trip.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.imageAlt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
          {trip.stateName}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-foreground">{trip.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{trip.short}</p>
        <dl className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">Destination</dt>
            <dd>{trip.destination}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarDays className="size-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">Duration</dt>
            <dd>
              {trip.days}D / {trip.nights}N
            </dd>
          </div>
        </dl>
        <div className="mt-5 flex items-center justify-between border-t pt-5">
          <p className="text-sm text-muted-foreground">
            From <span className="text-lg font-bold text-foreground">₹{trip.priceFrom.toLocaleString("en-IN")}</span>
          </p>
          <span className="text-sm font-semibold text-primary group-hover:underline">View trip</span>
        </div>
      </div>
    </Link>
  );
}
