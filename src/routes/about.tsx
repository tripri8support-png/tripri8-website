import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { img } from "@/data/images";
import { site, whatsappLink } from "@/data/site";
import { brandButton } from "@/lib/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact | TripRi8" },
      {
        name: "description",
        content:
          "TripRi8 plans curated trips, group tours and custom journeys across Kerala, Karnataka and Tamil Nadu with local knowledge and honest pricing.",
      },
      { property: "og:title", content: "About & Contact | TripRi8" },
      {
        property: "og:description",
        content: "Who we are, how we plan, and why travellers keep coming back.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Explore", text: "We keep finding new roads, stays and viewpoints, so your trip does not look like everyone else's." },
  { title: "Plan", text: "Every itinerary is built around real distances, road conditions and the time you actually have." },
  { title: "Travel", text: "Once you set off, one coordinator stays with you on call from pick-up to drop-off." },
  { title: "Repeat", text: "Most of our travellers come back — usually with more friends and a longer plan." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About & Contact"
        title="Travel planned by people who know these roads"
        subtitle={`${site.brand} — ${site.tagline}`}
        image={img.vagamon}
        imageAlt="Green meadow hills with pine forest and low cloud in Vagamon"
      />

      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={img.serviceCustom}
              alt="Traveller planning a route on a hill road"
              loading="lazy"
              className="aspect-[4/3] size-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="label-eyebrow text-primary">Our story</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Built out of too many good road trips</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              TripRi8 started with a small group of friends who spent every long weekend somewhere in the Western
              Ghats — a tea estate in Munnar, a riverside camp in Dandeli, a quiet beach near Gokarna. People kept
              asking us to plan the same trip for them.
            </p>
            <p>
              Today we do that full time. We plan and run trips across Kerala, Karnataka and Tamil Nadu for couples,
              families, friend groups and college batches — from two-day escapes to longer journeys stitched across
              several districts.
            </p>
            <p>
              We are not a booking portal. Every plan is written by someone who has driven the route, stayed at the
              property and knows which viewpoint is worth the early alarm.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-lavender py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="Explore • Plan • Travel • Repeat" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="h-full rounded-3xl border bg-card p-7 shadow-soft">
                  <span className="text-3xl font-extrabold text-gradient-brand">{`0${i + 1}`}</span>
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's plan your next journey" />
            <div className="mt-8 space-y-4">
              <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft hover:-translate-y-0.5 transition-transform">
                <Phone className="size-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft hover:-translate-y-0.5 transition-transform">
                <Mail className="size-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{site.email}</span>
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft hover:-translate-y-0.5 transition-transform">
                <MessageCircle className="size-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{site.website}</span>
              </div>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border bg-card p-6 shadow-lift sm:p-8">
              <h3 className="text-2xl font-bold">Questions we get asked a lot</h3>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12 text-center">
          <Link to="/custom-trips" className={brandButton({ size: "lg" })}>
            Plan Your Trip
          </Link>
        </Reveal>
      </section>
    </>
  );
}
