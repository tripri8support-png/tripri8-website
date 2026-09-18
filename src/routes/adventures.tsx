import { createFileRoute } from "@tanstack/react-router";
import { adventures } from "@/data/adventures";
import { img } from "@/data/images";
import { brandButton } from "@/lib/ui";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useEnquiry } from "@/components/EnquiryProvider";

export const Route = createFileRoute("/adventures")({
  head: () => ({
    meta: [
      { title: "Adventure Activities in South India | TripRi8" },
      {
        name: "description",
        content:
          "Rafting, kayaking, trekking, camping, ziplining, jeep safaris and wildlife experiences across Kerala, Karnataka and Tamil Nadu.",
      },
      { property: "og:title", content: "Adventure Activities in South India | TripRi8" },
      {
        property: "og:description",
        content: "Guided adventures with proper safety gear and experienced local teams.",
      },
    ],
  }),
  component: Adventures,
});

const difficultyStyles: Record<string, string> = {
  Easy: "bg-accent text-accent-foreground",
  Moderate: "bg-secondary text-secondary-foreground",
  Challenging: "bg-gradient-brand text-primary-foreground",
};

function Adventures() {
  const { openEnquiry } = useEnquiry();

  return (
    <>
      <PageHero
        eyebrow="Adventures"
        title="Add a little adrenaline"
        subtitle="Every activity below is run with trained local teams, proper safety gear and a plan that accounts for season and water levels."
        image={img.serviceAdventure}
        imageAlt="Rafting through rapids on a forest river in Dandeli"
      >
        <button className={brandButton({ size: "lg" })} onClick={() => openEnquiry("Adventure experience")}>
          Enquire about adventures
        </button>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adventures.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${difficultyStyles[a.difficulty]}`}
                  >
                    {a.difficulty}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold">{a.name}</h2>
                  <p className="mt-1 text-xs font-medium text-primary">{a.region}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                  <button
                    className={`${brandButton({ variant: "outline", size: "sm" })} mt-6 w-full`}
                    onClick={() => openEnquiry(a.name)}
                  >
                    Enquire
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
