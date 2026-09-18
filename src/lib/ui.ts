import { cva } from "class-variance-authority";

/** Brand button styles. Colors come from design tokens only. */
export const brandButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-gradient-brand text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        outline:
          "border border-primary/30 bg-background text-primary hover:-translate-y-0.5 hover:border-primary/60 hover:bg-accent",
        onDark:
          "glass-dark text-midnight-foreground hover:-translate-y-0.5 hover:bg-primary/40",
        ghost: "text-primary hover:bg-accent",
      },
      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);
