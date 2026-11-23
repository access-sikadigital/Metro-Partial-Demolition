"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { FloatingContact } from "./FloatingContact";
import { GoogleRatingSticky } from "./GoogleRatingSticky";
import { StickyMobileCta } from "./StickyMobileCta";
import { HazardBand, IconTile } from "./Brand";
import { Audiences, FinalCtaBand, QuoteCta } from "./Sections";
import { PageHero } from "./ServicePage";
import { hub, servicePages } from "@/lib/site-data";

/**
 * The main page, from the 01-Home copy: hero with the quote form, the three
 * service doors, how we scope a job, who we work with, and a closing call to
 * action with a link to /contact.
 */
export function HubPage() {
  const h = hub.hero;
  return (
    <>
      <PageHero
        eyebrow={h.eyebrow}
        titleTop={h.titleTop}
        titleRibbon={h.titleRibbon}
        sub={h.sub}
        imageDesktop="/images/services/internal-strip-out.jpg"
        imageMobile="/images/services/internal-strip-out.jpg"
        secondary={{ label: h.secondary, href: "#services" }}
        // The form heading belongs to the last section in the copy, so it
        // mustn't come before "What are you getting ready for?" as an h2.
        formHeadingAs="p"
      />
      <ServiceShowcase />
      <ScopePoints />
      <Audiences />
      <FinalCtaBand
        eyebrow={hub.finalCta.eyebrow}
        title={hub.finalCta.title}
        lede={hub.finalCta.lede}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <QuoteCta />
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-paper underline-offset-4 hover:text-hivis hover:underline"
          >
            Contact Metro
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </FinalCtaBand>
      <FloatingContact />
      <GoogleRatingSticky />
      <StickyMobileCta />
    </>
  );
}

/* ========================== SERVICE SHOWCASE ========================== */

function ServiceShowcase() {
  const s = hub.showcase;
  return (
    <section id="services" className="scroll-mt-20 bg-plaster py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <SectionHeading index="01" eyebrow={s.eyebrow} title={s.title} />

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {servicePages.map((p, i) => (
            <Reveal key={p.path} delay={i * 0.07}>
              {/* The whole card is the link; the "button" at its foot is a
                  styled span, since a link can't contain another link. */}
              <Link
                href={p.path}
                className="group chamfer flex h-full flex-col bg-white transition-transform duration-300 [--cut:26px] hover:-translate-y-1.5"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <span className="font-display absolute top-4 right-4 bg-ink px-2.5 py-1 text-sm text-hivis">
                    {p.n}
                  </span>
                  <IconTile name={p.icon} className="absolute bottom-4 left-5" />
                </div>
                <HazardBand className="h-1.5" />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl leading-tight text-ink sm:text-[1.3rem]">
                    {p.question}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <div className="mt-6 border-t border-ink/10 pt-5">
                    <span className="chamfer inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[0.75rem] font-bold tracking-[0.08em] text-paper uppercase transition-colors duration-300 [--cut:8px] group-hover:bg-hivis group-hover:text-ink">
                      {p.linkLabel}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ SCOPE POINTS ============================ */

function ScopePoints() {
  const s = hub.scope;
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <div className="container-wide relative">
        <SectionHeading index="02" tone="dark" eyebrow={s.eyebrow} title={s.title} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {s.items.map((g, i) => (
            <li key={g.title}>
              <Reveal
                delay={(i % 4) * 0.07}
                className="chamfer flex h-full flex-col bg-white/[0.05] p-6 ring-1 ring-white/10 [--cut:22px] sm:p-7"
              >
                <IconTile name={g.icon} />
                <p className="mt-6 text-[0.95rem] leading-relaxed text-paper/70">
                  <strong className="font-display block text-[1.05rem] leading-tight font-normal text-paper">
                    {g.title}
                  </strong>{" "}
                  <span className="mt-3 block">{g.detail}</span>
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
