import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Loader2 } from "lucide-react";
import { img } from "@/data/images";
import { site, whatsappLink } from "@/data/site";
import { brandButton } from "@/lib/ui";
import { submitEnquiry } from "@/lib/enquiries";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/group-tours")({
  head: () => ({
    meta: [
      { title: "Group Tours & College Trips in South India | TripRi8" },
      {
        name: "description",
        content:
          "Group tours for colleges, offices, families and friend circles across Kerala, Karnataka and Tamil Nadu — transport, stays, food and coordination handled.",
      },
      { property: "og:title", content: "Group Tours & College Trips | TripRi8" },
      {
        property: "og:description",
        content: "Buses, stays, meals, activities and an on-ground coordinator for groups of any size.",
      },
    ],
  }),
  component: GroupTours,
});

const audiences = [
  {
    title: "College & school groups",
    body: "Batch trips with clear headcounts, staged departures, verified stays and a coordinator travelling with you.",
  },
  {
    title: "Office & team outings",
    body: "Weekend resorts, team activities and travel timed around working hours, with a single invoice.",
  },
  {
    title: "Family & friends circles",
    body: "Larger groups sharing houseboats, estate stays or villas, with meals and travel sorted together.",
  },
];

const included = [
  "Buses or tempo travellers with ghat-experienced drivers",
  "Group stays with verified rooms and hot water",
  "Meals planned to the group's food preferences",
  "Activity bookings with safety gear and guides",
  "On-ground coordinator through the trip",
  "Transparent per-head pricing before you commit",
];

function GroupTours() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    await submitEnquiry({
      type: "group-trip",
      subject: "Group tour enquiry",
      fields: Object.fromEntries(form.entries()) as Record<string, string>,
    });
    setStatus("done");
  }

  return (
    <>
      <PageHero
        eyebrow="Group Tours"
        title="Big groups, zero chaos"
        subtitle="We have run trips for college batches, offices and large families. Transport, stays, food and activities are handled as one plan with one point of contact."
        image={img.serviceGroup}
        imageAlt="Large group of travellers gathered at a hill station viewpoint at sunrise"
      >
        <a
          className={brandButton({ variant: "onDark", size: "lg" })}
          href={whatsappLink("Hi TripRi8, I'd like a quote for a group tour.")}
          target="_blank"
          rel="noreferrer"
        >
          Get a group quote
        </a>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <SectionHeading eyebrow="Who we plan for" title="Groups of every kind" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <article className="h-full rounded-3xl border bg-card p-7 shadow-soft">
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-midnight py-16 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            onDark
            eyebrow="What's covered"
            title="Everything the group needs"
            subtitle="Costs are shared per head and confirmed in writing before any booking is made."
          />
          <Reveal>
            <ul className="grid gap-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-midnight-foreground/80">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary-foreground" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Request a quote"
              title="Tell us about your group"
              subtitle="Share the basics and we'll send a per-head quote with the full plan."
            />
            <p className="mt-6 text-sm text-muted-foreground">
              For groups above 40 travellers, call {site.phone} directly — it is faster than a form.
            </p>
          </div>

          <Reveal>
            <div className="rounded-3xl border bg-card p-6 shadow-lift sm:p-8">
              {status === "done" ? (
                <div className="py-8 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                    <Check className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">Enquiry received</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    We'll work out the logistics and send you a per-head quote shortly.
                  </p>
                  <a
                    className={`${brandButton({ size: "sm" })} mt-6`}
                    href={whatsappLink("Hi TripRi8, I just sent a group tour enquiry.")}
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
                      <Label htmlFor="gt-name">Contact person</Label>
                      <Input id="gt-name" name="name" required autoComplete="name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gt-org">College / company (optional)</Label>
                      <Input id="gt-org" name="organisation" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="gt-phone">Phone</Label>
                      <Input id="gt-phone" name="phone" type="tel" required autoComplete="tel" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gt-email">Email</Label>
                      <Input id="gt-email" name="email" type="email" required autoComplete="email" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="grid gap-2">
                      <Label htmlFor="gt-size">Group size</Label>
                      <Input id="gt-size" name="groupSize" type="number" min={6} defaultValue={20} required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gt-days">Days</Label>
                      <Input id="gt-days" name="days" type="number" min={1} defaultValue={3} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="gt-date">Preferred date</Label>
                      <Input id="gt-date" name="travelDate" type="date" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="gt-destination">Destination in mind</Label>
                    <Input id="gt-destination" name="destination" placeholder="e.g. Coorg, Munnar, Gokarna" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="gt-notes">Anything else we should plan for?</Label>
                    <Textarea
                      id="gt-notes"
                      name="notes"
                      rows={4}
                      placeholder="Boarding points, food preferences, budget per head, activities…"
                    />
                  </div>
                  <button className={brandButton({ size: "md" })} type="submit" disabled={status === "sending"}>
                    {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
                    Request group quote
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
