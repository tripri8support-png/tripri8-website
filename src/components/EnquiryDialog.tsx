import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { brandButton } from "@/lib/ui";
import { phoneLink, site, whatsappLink } from "@/data/site";
import { submitEnquiry, type EnquiryPayload } from "@/lib/enquiries";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  subject?: string | undefined;
}

export function EnquiryDialog({ open, onOpenChange, subject }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  useEffect(() => {
    if (open) setStatus("idle");
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload: EnquiryPayload = {
      type: "trip-enquiry",
      subject: subject ?? "General enquiry",
      fields: Object.fromEntries(form.entries()) as Record<string, string>,
    };
    setStatus("sending");
    await submitEnquiry(payload);
    setStatus("done");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
        {status === "done" ? (
          <div className="py-6 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
              <Check className="size-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">Enquiry received</h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Thank you for reaching out to TripRi8. Our travel team will review your details and
              get back to you with a plan and pricing, usually within one working day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a className={brandButton({ variant: "outline", size: "sm" })} href={phoneLink()}>
                Call {site.phone}
              </a>
              <a
                className={brandButton({ variant: "primary", size: "sm" })}
                href={whatsappLink(
                  `Hi TripRi8, I just sent an enquiry about ${subject ?? "a trip"}.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
              <button
                className={brandButton({ variant: "outline", size: "sm" })}
                onClick={() => onOpenChange(false)}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Enquire about this trip</DialogTitle>
              <DialogDescription>
                {subject ? `${subject} — ` : ""}share a few details and we will send you a plan with
                pricing.
              </DialogDescription>
            </DialogHeader>
            <form className="mt-2 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="enq-name">Name</Label>
                <Input id="enq-name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="enq-phone">Phone</Label>
                  <Input id="enq-phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="enq-email">Email</Label>
                  <Input id="enq-email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="enq-date">Travel date</Label>
                  <Input id="enq-date" name="travelDate" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="enq-travellers">Travellers</Label>
                  <Input
                    id="enq-travellers"
                    name="travellers"
                    type="number"
                    min={1}
                    defaultValue={2}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="enq-message">Anything we should know?</Label>
                <Textarea
                  id="enq-message"
                  name="message"
                  rows={3}
                  placeholder="Preferred stay, activities, budget range…"
                />
              </div>
              <button
                className={brandButton({ size: "md" })}
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : null}
                Send enquiry
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Prefer to talk? Call {site.phone} or message us on WhatsApp.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
