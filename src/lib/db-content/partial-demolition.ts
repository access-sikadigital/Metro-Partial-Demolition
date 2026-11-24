/**
 * /partial-demolition content for the Demo Bros "house demolition" replica
 * template (src/components/db/HouseDemolitionPage.tsx).
 *
 * Same sourcing rules as ./house-demolition.ts, which holds the sections both
 * pages share:
 *   1. The current Metro page (src/lib/pages/partial-demolition.ts), verbatim,
 *      by reference: hero, services, scope, process, FAQs and final CTA.
 *   2. Metro's pre-rewrite copy (commit 91fe2c1, lib/pages/partial-demolition.ts,
 *      which spread house-demolition): pricing, included, timeline, reviews
 *      title, final CTA body. Asbestos, builders and guarantees came from the
 *      house page there, and still do here.
 *   3. Shared placeholders (src/lib/db/placeholder-content.ts).
 *
 * PLACEHOLDER figures (rating, prices, liability, reviews) are unverified —
 * see placeholder-content.ts.
 */
import { partialDemolition as page } from "@/lib/pages/partial-demolition";
import { PLACEHOLDER_TRUST, PRICING, reviewsFor } from "@/lib/db/placeholder-content";
import {
  TIMELINE_IMAGES,
  asbestos,
  audiencesContent,
  beforeAfter,
  builders,
  compare,
  finalCtaFine,
  guarantee,
  houseDemolitionContent,
  includedHeader,
  serviceAreaContent,
  trustStats,
} from "./house-demolition";
import type { HouseDemolitionContent } from "./house-types";

export const partialDemolitionContent: HouseDemolitionContent = {
  slug: "partial-demolition",

  hero: {
    eyebrow: page.hero.eyebrow,
    titleTop: page.hero.titleTop,
    titleRibbon: page.hero.titleRibbon,
    sub: page.hero.sub,
    bullets: [
      { icon: "layers", label: page.hero.points[0] },
      { icon: "bricks", label: page.hero.points[1] },
      { icon: "shield", label: page.hero.points[2] },
    ],
    imageDesktop: page.hero.imageDesktop,
    imageMobile: page.hero.imageMobile,
  },

  trustStats,
  beforeAfter,

  pricing: {
    ...houseDemolitionContent.pricing,
    title: "What partial demolition actually costs in Melbourne.",
    table: [
      {
        job: "Non-structural wall removal",
        how: "Stud or plasterboard wall, one room",
        from: PRICING.wall,
      },
      { job: "Garage, shed or carport", how: "Single, clear access", from: PRICING.outbuilding },
      {
        job: "Kitchen or bathroom strip out",
        how: "Back to the frame, rubbish gone",
        from: PRICING.kitchen,
      },
      {
        job: "Load-bearing wall removal",
        how: "Propped, to your engineer's detail",
        from: "Quoted on the job",
      },
      {
        job: "Rear-of-house or extension demolition",
        how: "Cut line, propping and sealing",
        from: "Quoted on the job",
      },
      {
        job: "Anything with asbestos",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "The bottom three vary too much for a starting number to mean anything, so we don't invent one. They're priced properly, in writing, within 24 hours.",
  },

  scope: page.scope,

  services: {
    eyebrow: page.services.eyebrow,
    title: page.services.title,
    items: page.services.items.map((s) => ({ title: s.title, detail: s.detail })),
  },

  audiences: audiencesContent,

  timeline: {
    eyebrow: "How long it takes",
    title: "From first call to a site your builder can start on.",
    lede: "The demolition is usually the short part. If your job needs a permit, that sets the start date — so we get it moving the day you say yes.",
    steps: [
      {
        n: "01",
        title: "Quote",
        when: "Within 24 hours",
        detail: "Itemised and fixed, off your photos or a site visit.",
        image: TIMELINE_IMAGES[0],
        imageAlt: "",
      },
      {
        n: "02",
        title: "Permits, if needed",
        when: "Told at the quote",
        detail: "Many partial jobs don't need one. If yours does, we coordinate it.",
        image: TIMELINE_IMAGES[1],
        imageAlt: "",
      },
      {
        n: "03",
        title: "Asbestos out",
        when: "1–2 days",
        detail: "Done before the demolition starts, not around it.",
        image: TIMELINE_IMAGES[2],
        imageAlt: "",
      },
      {
        n: "04",
        title: "Demolition",
        when: "1 day to 1 week",
        detail: "A wall or garage is usually a day. Rear-of-house is generally inside a week.",
        image: TIMELINE_IMAGES[3],
        imageAlt: "",
      },
      {
        n: "05",
        title: "Handover",
        when: "Same week",
        detail: "Sealed, swept, photographed. Your builder starts.",
        image: TIMELINE_IMAGES[4],
        imageAlt: "",
      },
    ],
  },

  included: {
    eyebrow: "What's included",
    title: "What's in the price.",
    lede: "Everything below is in the number we quote you. Hold your other quotes against this list — anything here that isn't in theirs is a cost that turns up later.",
    ...includedHeader,
    groups: [
      {
        label: "Before we start",
        items: [
          { item: "Permits, where needed", means: "We tell you at the quote and coordinate them" },
          { item: "Asbestos assessment", means: "Before the quote is final, not on the day" },
          { item: "Neighbour notification", means: "In writing, before the noise starts" },
          { item: "Cut line agreed", means: "Marked out with you and your builder" },
        ],
      },
      {
        label: "Protecting what stays",
        items: [
          { item: "Temporary propping", means: "Under any roof or wall that's staying" },
          { item: "Service isolation", means: "Power, gas and water where they cross the cut" },
          {
            item: "Dust screens & floor protection",
            means: "For the rooms you're still living in",
          },
          { item: "Weather-sealed junction", means: "Before we leave site" },
        ],
      },
      {
        label: "On site & handover",
        items: [
          { item: "Licensed asbestos removal", means: "By our own crew, disposed of properly" },
          { item: "Demolition to the cut line", means: "Not a brick past it" },
          { item: "All waste removed", means: "Sorted and recycled where we can" },
          { item: "Swept & photographed", means: "Ready for your builder" },
        ],
      },
    ],
    close:
      "If something genuinely sits outside that — a big tree needing an arborist, a retaining wall on the boundary — we price it as its own line and show it to you before you sign. What we don't do is leave it off the quote and mention it later.",
  },

  compare,

  process: {
    eyebrow: page.process.eyebrow,
    title: page.process.title,
    steps: page.process.steps.map((s) => ({ n: s.n, title: s.title, detail: s.detail })),
  },

  asbestos,
  builders,
  guarantee,

  reviews: {
    title: `${PLACEHOLDER_TRUST.rating} stars from renovations and extensions across Melbourne.`,
    items: reviewsFor("partial-demolition"),
  },

  serviceArea: serviceAreaContent,

  faqs: page.faqs,

  finalCta: {
    title: page.finalCta.title,
    lede: page.finalCta.lede,
    body: `Walls from ${PRICING.wall}. Garages and sheds from ${PRICING.outbuilding}. What stays, stays protected.`,
    fine: finalCtaFine,
  },
};
