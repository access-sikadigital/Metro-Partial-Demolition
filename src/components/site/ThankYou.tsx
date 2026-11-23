"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import { SITE, THANK_YOU_COPY, hasPhone } from "@/lib/site-data";
import { takePendingLead } from "@/lib/conversion";
import { CtaButton } from "./CtaButton";
import { BrandIcon } from "./Brand";

/**
 * Shown after a successful quote submission. Each landing page redirects to
 * its OWN thank-you URL (/thank-you, /thank-you-house-demolition, …) so ad
 * platforms can fire a distinct conversion per service; on mount it also
 * pushes `generate_lead` to the GTM dataLayer, tagged with the form source,
 * lead id and hashed email/phone — once per submission, never on refresh.
 */
/** Which confirmation message each thank-you page shows. */
const MESSAGE_FOR: Record<string, string> = {
  "partial-demolition": THANK_YOU_COPY["partial-demolition"],
  "strip-out": THANK_YOU_COPY["strip-out"],
  "kitchen-demolition": THANK_YOU_COPY["strip-out"],
  "bathroom-demolition": THANK_YOU_COPY["strip-out"],
  "rubbish-removal": THANK_YOU_COPY["rubbish-removal"],
};

export function ThankYou({ source, homePath = "/" }: { source: string; homePath?: string }) {
  const message = MESSAGE_FOR[source] ?? THANK_YOU_COPY.general;
  useEffect(() => {
    const lead = takePendingLead();
    // Refresh or direct visit: no new lead, so no conversion.
    if (lead === null) return;
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(
      lead === "unknown"
        ? { event: "generate_lead", form_location: source }
        : {
            event: "generate_lead",
            form_location: source,
            lead_id: lead.lead_id,
            service: lead.service,
            user_data: {
              sha256_email_address: lead.sha256_email_address,
              sha256_phone_number: lead.sha256_phone_number,
            },
          },
    );
  }, [source]);

  return (
    <section className="relative flex min-h-[72vh] items-center overflow-hidden bg-paper py-20">
      <div
        aria-hidden
        className="pattern-dots absolute top-10 right-0 h-48 w-56 opacity-50 [--dot-color:var(--concrete)]"
      />
      <BrandIcon
        name="excavator"
        className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 text-ink/[0.04]"
      />
      <div className="container-wide relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chamfer mx-auto flex h-20 w-20 items-center justify-center bg-hivis text-ink [--cut:18px]">
            <Check className="h-10 w-10" strokeWidth={3} />
          </span>
          <p className="eyebrow mt-8 [--eyebrow-color:var(--graphite)]">Request received</p>
          <h1 className="font-display mt-4 text-[1.8rem] text-ink sm:text-4xl">
            {THANK_YOU_COPY.heading}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {message}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {hasPhone && (
              <CtaButton href={SITE.phoneHref} icon="phone">
                Call Metro
              </CtaButton>
            )}
            <CtaButton to={homePath} variant="outlineDark">
              {homePath === "/" ? "Back to Home" : "Back to the page"}
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
