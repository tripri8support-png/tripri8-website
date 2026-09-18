import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { img } from "@/data/images";
import { faqs } from "@/data/faqs";
import { site, whatsappLink } from "@/data/site";
import { brandButton } from "@/lib/ui";
import { submitEnquiry } from "@/lib/enquiries";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TripRi8 | Travel & Tours in South India" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email TripRi8 to plan trips across Kerala, Karnataka and Tamil Nadu. We usually reply the same day.",
      },
      { property: "og:title", content: "Contact TripRi8 | Travel & Tours" },
      {
        property: "og:description",
        content: "Reach our travel team by phone, WhatsApp or email — same-day replies most days.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    await submitEnquiry({
      type: "contact",
      subject: "Contact form message",
      fields: Object.fromEntries(form.entries()) as Record<string, string>,
    });
    setStatus("done");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan something good"
        subtitle="Tell us where you want to go and when. We'll come back with a plan, a price and honest advice on the season."
        image={img.ctaRoad}
        imageAlt="Empty mountain road curving through green hills at golden hour"
      >
        <a
          className={brandButton({ variant: "onDark", size: "lg" })}
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
        >
          Message on WhatsApp
        </a>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Reach us" title="Talk to a real person" />
            <div className="mt-10 grid gap-4">
              <Reveal>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex items-start gap-4 rounded-3xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">Call us</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{site.phone}</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.06}>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-3xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <MessageCircle className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">WhatsApp</span>
                    <span className="mt-1 block text-sm text-muted-foreground">Quickest way to reach us</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.12}>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-4 rounded-3xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">Email</span>
                    <span className="mt-1 block break-all text-sm text-muted-foreground">{site.email}</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="flex items-start gap-4 rounded-3xl border bg-card p-6 shadow-soft">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold">Where we operate</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {site.regions.join(" · ")}
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="rounded-3xl border bg-card p-6 shadow-lift sm:p-8">
              {status === "done" ? (
                <div className="py-8 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                    <Check className="size-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold">Message sent</h2>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thanks for writing to TripRi8. We'll get back to you, usually within a working day.
                  </p>
                  <a
                    className={`${brandButton({ size: "sm" })} mt-6`}
                    href={whatsappLink("Hi TripRi8, I just sent a message through your website.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form className="grid gap-5" onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="c-name">Name</Label>
                      <Input id="c-name" name="name" required autoComplete="name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="c-phone">Phone</Label>
                      <Input id="c-phone" name="phone" type="tel" required autoComplete="tel" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-email">Email</Label>
                    <Input id="c-email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-subject">Subject</Label>
                    <Input id="c-subject" name="subject" placeholder="Trip enquiry, group quote, feedback…" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-message">Message</Label>
                    <Textarea id="c-message" name="message" rows={5} required />
                  </div>
                  <button className={brandButton({ size: "md" })} type="submit" disabled={status === "sending"}>
                    {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
                    Send message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-accent/40 py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading align="center" eyebrow="FAQs" title="Questions we get often" />
          <div className="mx-auto mt-12 max-w-3xl divide-y rounded-3xl border bg-card shadow-soft">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5">
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {faq.question}
                    <span className="mt-1 text-primary transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
