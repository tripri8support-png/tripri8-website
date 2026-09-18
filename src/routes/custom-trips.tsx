import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Loader2 } from "lucide-react";
import { img } from "@/data/images";
import { states } from "@/data/destinations";
import { site, whatsappLink } from "@/data/site";
import { brandButton } from "@/lib/ui";
import { submitEnquiry } from "@/lib/enquiries";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/custom-trips")({
  head: () => ({
    meta: [
      { title: "Custom Trip Planning in South India | TripRi8" },
      {
        name: "description",
        content:
          "Tell us your dates, budget and travel style and we build a private itinerary across Kerala, Karnataka and Tamil Nadu.",
      },
      { property: "og:title", content: "Custom Trip Planning in South India | TripRi8" },
      {
        property: "og:description",
        content: "A private itinerary built around your dates, budget and pace — not a fixed package.",
      },
    ],
  }),
  component: CustomTrips,
});

const steps = [
  { title: "Share your idea", body: "Dates, number of travellers, budget range and the kind of places you enjoy." },
  { title: "We draft a plan", body: "A day-by-day route with stays, travel time, activities and clear pricing." },
  { title: "Refine together", body: "Swap a stay, add a trek, stretch a day — we revise until it feels right." },
  { title: "Travel", body: "Confirmed bookings, a driver who knows the roads and support on call throughout." },
];

const styles = ["Relaxed", "Balanced", "Adventure-heavy", "Honeymoon", "Family", "Friends group"];

function CustomTrips() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    await submitEnquiry({
      type: "custom-trip",
      subject: "Custom trip request",
      fields: Object.fromEntries(form.entries()) as Record<string, string>,
    });
    setStatus("done");
  }

  return (
    <>
      <PageHero
        eyebrow="Custom Trips"
        title="A trip shaped around you"
        subtitle="No fixed departure, no rushed checklist. Tell us how you like to travel and we build the route, stays and pace around it."
        image={img.serviceCustom}
        imageAlt="Traveller planning a route on a map beside a hillside viewpoint"
      >
        <a
          className={brandButton({ variant: "onDark", size: "lg" })}
          href={whatsappLink("Hi TripRi8, I'd like a custom trip plan.")}
          target="_blank"
          rel="noreferrer"
        >
          Talk on WhatsApp
        </a>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading eyebrow="How it works" title="Four simple steps" />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08}>
              <li className="flex gap-5">
                <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-base font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-accent/40 py-16 lg:py-24">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Plan with us"
              title="Tell us about your trip"
              subtitle="Fill this in and our travel team will come back with a draft itinerary and pricing, usually within a working day."
            />
            <div className="mt-8 rounded-3xl border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold">Prefer talking it through?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Call {site.phone} or email {site.email}. We reply the same day, most days.
              </p>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border bg-card p-6 shadow-lift sm:p-8">
              {status === "done" ? (
                <div className="py-8 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                    <Check className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">Request received</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for the details. We'll put together a draft plan and get back to you shortly.
                  </p>
                  <a
                    className={`${brandButton({ size: "sm" })} mt-6`}
                    href={whatsappLink("Hi TripRi8, I just sent a custom trip request.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="ct-name">Name</Label>
                      <Input id="ct-name" name="name" required autoComplete="name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="ct-phone">Phone</Label>
                      <Input id="ct-phone" name="phone" type="tel" required autoComplete="tel" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ct-email">Email</Label>
                    <Input id="ct-email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="grid gap-2">
                      <Label htmlFor="ct-date">Start date</Label>
                      <Input id="ct-date" name="startDate" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="ct-days">Days</Label>
                      <Input id="ct-days" name="days" type="number" min={1} defaultValue={3} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="ct-travellers">Travellers</Label>
                      <Input id="ct-travellers" name="travellers" type="number" min={1} defaultValue={2} />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="ct-region">Preferred region</Label>
                      <select
                        id="ct-region"
                        name="region"
                        className="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        <option value="">Not sure yet</option>
                        {states.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="ct-style">Travel style</Label>
                      <select
                        id="ct-style"
                        name="style"
                        className="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      >
                        {styles.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ct-budget">Budget per person (optional)</Label>
                    <Input id="ct-budget" name="budget" placeholder="e.g. ₹8,000 – ₹12,000" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ct-notes">What would make this trip perfect?</Label>
                    <Textarea
                      id="ct-notes"
                      name="notes"
                      rows={4}
                      placeholder="Places you've bookmarked, activities you want, food preferences, anything to avoid…"
                    />
                  </div>
                  <button className={brandButton({ size: "md" })} type="submit" disabled={status === "sending"}>
                    {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
                    Request my itinerary
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
