import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { logoUrl } from "@/data/images";
import { brandButton } from "@/lib/ui";
import { useEnquiry } from "./EnquiryProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { openEnquiry } = useEnquiry();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const onHero = pathname === "/";
  const solid = scrolled || menuOpen || !onHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass-panel border-b shadow-soft" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.brand} home`}>
          <img src={logoUrl} alt="TripRi8 logo" width={48} height={48} className="size-11 object-contain" />
          <span className="hidden sm:block">
            <span className={`block text-base font-extrabold leading-none ${solid ? "text-foreground" : "text-midnight-foreground"}`}>
              TripRi8
            </span>
            <span className={`label-eyebrow mt-1 block text-[0.6rem] ${solid ? "text-primary" : "text-midnight-foreground/70"}`}>
              Travel &amp; Tours
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  solid
                    ? "text-muted-foreground hover:bg-accent hover:text-primary"
                    : "text-midnight-foreground/85 hover:bg-primary/25 hover:text-midnight-foreground"
                } ${pathname === link.to ? (solid ? "text-primary" : "text-midnight-foreground") : ""}`}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            className={`${brandButton({ variant: solid ? "primary" : "onDark", size: "sm" })} hidden md:inline-flex`}
            onClick={() => openEnquiry("Plan your trip")}
          >
            Plan Your Trip
          </button>
          <button
            className={`inline-flex size-11 items-center justify-center rounded-full transition-colors xl:hidden ${
              solid ? "text-foreground hover:bg-accent" : "text-midnight-foreground hover:bg-primary/25"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t bg-background xl:hidden">
          <ul className="container-page grid gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <button className={`${brandButton({ size: "md" })} w-full`} onClick={() => openEnquiry("Plan your trip")}>
                Plan Your Trip
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
