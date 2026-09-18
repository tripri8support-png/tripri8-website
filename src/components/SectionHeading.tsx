import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left", onDark = false }: Props) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`label-eyebrow ${onDark ? "text-primary-foreground/70" : "text-primary"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl ${
          onDark ? "text-midnight-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            onDark ? "text-midnight-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
