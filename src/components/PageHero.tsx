import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}

/** Shared compact hero used by every inner page. */
export function PageHero({ eyebrow, title, subtitle, image, imageAlt, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-midnight pt-28 pb-16 sm:pt-32 sm:pb-20">
      <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" />
      <div className="veil-hero absolute inset-0" aria-hidden="true" />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <p className="label-eyebrow text-midnight-foreground/70">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-midnight-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-midnight-foreground/75 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
