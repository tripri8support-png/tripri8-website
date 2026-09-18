import { MessageCircle, Phone } from "lucide-react";
import { phoneLink, whatsappLink } from "@/data/site";

export function WhatsappFab() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <a
        href={phoneLink()}
        aria-label="Call TripRi8 on 7339492005"
        className="inline-flex items-center gap-2 rounded-full border border-primary bg-background px-4 py-3 text-sm font-semibold text-primary shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
      >
        <Phone className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">Call us</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with TripRi8 on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
