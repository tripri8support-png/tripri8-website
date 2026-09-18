import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone, Youtube, Globe } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { logoUrl } from "@/data/images";
import { states } from "@/data/destinations";

export function Footer() {
  return (
    <footer className="bg-midnight text-midnight-foreground">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="TripRi8 logo" width={56} height={56} loading="lazy" className="size-14 object-contain" />
            <span>
              <span className="block text-lg font-extrabold leading-none">TripRi8</span>
              <span className="label-eyebrow mt-1 block text-[0.6rem] text-midnight-foreground/70">Travel &amp; Tours</span>
            </span>
          </div>
          <p className="mt-6 text-sm text-midnight-foreground/70">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-midnight-foreground/60">
            Curated journeys, group tours and custom travel experiences across Kerala, Karnataka and Tamil Nadu.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                title={`${label} — coming soon`}
                aria-label={`${label} — coming soon`}
                className="inline-flex size-10 items-center justify-center rounded-full border border-midnight-foreground/15 text-midnight-foreground/60"
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="label-eyebrow text-midnight-foreground/60">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-midnight-foreground/75 transition-colors hover:text-midnight-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Destinations">
          <h2 className="label-eyebrow text-midnight-foreground/60">Destinations</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {states.map((state) => (
              <li key={state.slug}>
                <Link
                  to="/destinations"
                  hash={state.slug}
                  className="text-midnight-foreground/75 transition-colors hover:text-midnight-foreground"
                >
                  {state.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-eyebrow text-midnight-foreground/60">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a className="flex items-center gap-3 text-midnight-foreground/75 hover:text-midnight-foreground" href={`tel:${site.phoneIntl}`}>
                <Phone className="size-4" aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a className="flex items-center gap-3 text-midnight-foreground/75 hover:text-midnight-foreground" href={`mailto:${site.email}`}>
                <Mail className="size-4" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-midnight-foreground/75">
              <Globe className="size-4" aria-hidden="true" /> {site.website}
            </li>
          </ul>
          <p className="mt-6 text-sm text-midnight-foreground/60">Kerala | Karnataka | Tamil Nadu</p>
        </div>
      </div>

      <div className="border-t border-midnight-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-midnight-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 TripRi8. All rights reserved.</p>
          <p>{site.brand}</p>
        </div>
      </div>
    </footer>
  );
}
