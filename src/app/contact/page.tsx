import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/ServicePage";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { FinalCtaBand } from "@/components/site/Sections";
import { FloatingContact } from "@/components/site/FloatingContact";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";

/**
 * /contact, from the 05-Contact-Us copy. Same hero, quote form and submission
 * flow as the landing pages; the form shows on phones too, and a lead from
 * here goes to the general /thank-you page with source "Contact Page".
 */
const TITLE = "Contact Metro Partial Demolition | Request a Quote";
const DESCRIPTION =
  "Contact Metro Partial Demolition for a Melbourne demolition, strip-out or rubbish removal quote. Tell us about your project, location and timing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const SERVICES = [
  {
    href: "/partial-demolition",
    label: "Partial demolition",
    rest: "for old extensions, selected walls or a section of a building.",
  },
  {
    href: "/strip-out",
    label: "Strip-outs",
    rest: "for kitchens, bathrooms, tiles or commercial interiors.",
  },
  {
    href: "/rubbish-removal",
    label: "Rubbish removal",
    rest: "for household clear-outs, renovation debris or building waste.",
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact Metro · Melbourne"
        titleTop="Tell us what"
        titleRibbon="you need removed"
        sub="Planning a renovation, getting a site ready for a builder, or clearing rubbish? Send us the suburb and a short description of the job. We’ll review the details and get in touch about your quote."
        imageDesktop="/images/hero/strip-out-desktop.jpg"
        imageMobile="/images/hero/strip-out-mobile.jpg"
        formOnMobile
      />

      <section className="bg-plaster py-16 sm:py-20 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            index="01"
            eyebrow="Next steps"
            title="What happens after you submit?"
            description="We’ll review what you’ve sent and contact you about the next step. We may ask for photos, plans or a closer look at the site so we can confirm what the quote should include."
          />
          <div>
            <SectionHeading
              index="02"
              eyebrow="Our services"
              title="Looking for a specific service?"
            />
            <Reveal>
              <ul className="mt-6 grid gap-3">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group chamfer flex items-start gap-3 bg-white p-4 ring-1 ring-ink/10 [--cut:12px] hover:ring-ink/30"
                    >
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-ink transition-transform group-hover:translate-x-0.5" />
                      <span className="text-[0.98rem] leading-relaxed text-muted-foreground">
                        <span className="font-bold text-ink underline-offset-4 group-hover:underline">
                          {s.label}
                        </span>{" "}
                        {s.rest}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCtaBand
        title="Tell us where the job is"
        lede="Include your suburb or postcode and we’ll confirm availability for your job."
      />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}
