/**
 * /house-demolition content for the Demo Bros "house demolition" replica
 * template (src/components/db/HouseDemolitionPage.tsx).
 *
 * Sources, in priority order:
 *   1. The current Metro page (src/lib/pages/house-demolition.ts), verbatim,
 *      by reference: hero, services, scope, process, FAQs and final CTA.
 *   2. Metro's pre-rewrite copy (commit 91fe2c1, lib/pages/house-demolition.ts),
 *      verbatim: pricing, included, timeline, callout → asbestos, builders,
 *      guarantees, reviews title, final CTA body. TRUST/PRICING now come from
 *      the shared placeholders.
 *   3. Shared placeholders (src/lib/db/placeholder-content.ts).
 *   4. Where Metro has no wording at all, the Demo Bros string with the name
 *      swapped, each marked `COPY: from Demo Bros — needs Metro copy`.
 *
 * PLACEHOLDER figures (rating, prices, liability, reviews) are unverified —
 * see placeholder-content.ts.
 */
import { houseDemolition as page } from "@/lib/pages/house-demolition";
import { audiences } from "@/lib/site-data";
import { beforeAfterFor } from "@/lib/before-after";
import {
  previewOnly,
  PLACEHOLDER_TRUST,
  PRICING,
  reviewsFor,
  serviceArea,
  stats,
  tickerClaims,
} from "@/lib/db/placeholder-content";
import type { HouseDemolitionContent, TrustStatId } from "./house-types";

/* ------------------- shared with /partial-demolition ------------------- */

const STAT_IDS: TrustStatId[] = ["rating", "quote", "liability", "crew"];

/** The placeholder `stats`, in the Demo Bros value/label shape. */
export const trustStats: HouseDemolitionContent["trustStats"] = stats.map((s, i) => ({
  id: STAT_IDS[i] ?? "rating",
  // The rating draws its own stars, so the "★" unit is dropped there.
  value: i === 0 ? s.value : s.unit.length > 1 ? `${s.value} ${s.unit}` : `${s.value}${s.unit}`,
  label: s.label,
}));

/** Metro's current before/after heading (Sections.tsx BeforeAfter). */
export const beforeAfter: HouseDemolitionContent["beforeAfter"] = {
  eyebrow: "Before and after",
  title: "Before we start. After we leave.",
  pairs: beforeAfterFor("partial-demolition"),
};

/** Metro's pre-rewrite price-table column headings. */
export const pricingTableHead = { job: "The job", from: "Starts from" };

export const audiencesContent: HouseDemolitionContent["audiences"] = {
  title: audiences.title,
  items: audiences.items.map((a) => ({ icon: a.icon, label: a.label })),
};

/* Timeline photos: the pre-rewrite process photos, matched to each stage. */
export const TIMELINE_IMAGES = [
  "/images/process/03-price-in-writing.jpg",
  "/images/process/04-disconnections.jpg",
  "/images/services/asbestos.jpg",
  "/images/process/07-it-comes-down.jpg",
  "/images/process/11-handover-outside.jpg",
];

export const includedHeader = {
  // COPY: from Demo Bros — needs Metro copy
  headlineAfterCount: "inclusions, one fixed price",
  // COPY: from Demo Bros — needs Metro copy
  subline: "Every line below is already in your number",
};

/** No Metro wording for this section exists in any source. */
export const compare: HouseDemolitionContent["compare"] = {
  // COPY: from Demo Bros — needs Metro copy
  eyebrow: "Comparing quotes",
  // COPY: from Demo Bros — needs Metro copy
  title: "Three quotes, thousands apart. Here's what's actually different.",
  body: [
    // COPY: from Demo Bros — needs Metro copy
    "If you've collected quotes already, you'll have noticed the spread. Two contractors, same house, and twelve thousand dollars between them.",
    // COPY: from Demo Bros — needs Metro copy
    "It's almost never the labour or the machine. It's what each quote quietly leaves out — and you only find out once the job has started and you've got no leverage left.",
  ],
  // COPY: from Demo Bros — needs Metro copy
  cardLabel: "What gets left out",
  points: [
    // COPY: from Demo Bros — needs Metro copy
    "The permit. Some quotes assume you're organising it. Some assume you already have",
    // COPY: from Demo Bros — needs Metro copy
    "Disconnections. Four services, four separate applications, and telecommunications is the one that gets missed",
    // COPY: from Demo Bros — needs Metro copy
    "Asbestos. A quote written without an assessment on a pre-1990 house is a quote that will be revised",
    // COPY: from Demo Bros — needs Metro copy
    "The slab. “Demolition” sometimes means the house comes down and the concrete stays in the ground. Your builder will find out for you, later",
    // COPY: from Demo Bros — needs Metro copy
    "Levelling and fill. A cleared block and a level block are not the same thing",
    // COPY: from Demo Bros — needs Metro copy
    "Waste. Tip fees on a house are thousands, and “excluding disposal” is a real line in real quotes",
  ],
  // COPY: from Demo Bros — needs Metro copy
  close:
    "Ours is itemised on purpose. Put it next to the other two and you can see exactly where the difference is. If someone's cheaper because they've left the slab in the ground, you deserve to know that before you sign — not after.",
};

/** Pre-rewrite `callout`, plus the pre-rewrite asbestos service photo. */
export const asbestos: HouseDemolitionContent["asbestos"] = {
  eyebrow: "Built before 1990?",
  title: "The one thing that turns a two-day job into a three-week one.",
  body: [
    "If your place went up before 1990, asbestos was a standard building material — wall sheeting, eaves, old vinyl underlay, the fibro in the laundry. Most demolition crews hit it and stop, because it isn't something they handle.",
    "Then you're waiting on someone else's calendar, paying a second contractor, and your builder has quietly moved on to another job.",
    "We take it out ourselves. We look for it before we quote, our own licensed crew removes it, and it sits inside the price you already agreed to.",
  ],
  points: [
    "Identified before the quote, not discovered halfway through",
    "Removed safely by our own licensed crew, disposed of properly",
    "In the number from the start, never added later",
  ],
  image: {
    src: "/images/services/asbestos.jpg",
    alt: "Asbestos crew in coveralls and respirators lowering a whole fibro sheet onto plastic sheeting",
  },
};

export const builders: HouseDemolitionContent["builders"] = {
  eyebrow: "Builders & developers",
  title: "Working to a program, not a weekend.",
  lead: "Knock-down rebuilds, extensions and staged works across Melbourne, sequenced so your slab, framers and roofers never wait on us.",
  points: [
    "Tender-ready itemised quotes you can drop straight into a feasibility",
    "Program dates committed to and held — your slab pour doesn't move",
    "SWMS, inductions and a documented safety system on every site",
    previewOnly(
      `${PLACEHOLDER_TRUST.licence}, ${PLACEHOLDER_TRUST.liability} public liability, certificates on file`,
    ) || "Insurance details supplied with the quote",
    "Multiple sites staged so your trades roll from one to the next",
  ],
  image: {
    src: "/images/audiences/builders.jpg",
    alt: "A builder and the Metro crew lead going through the program on site",
  },
  // COPY: from Demo Bros — needs Metro copy
  caption: "SWMS and inductions on every site · program dates held",
};

export const guarantee: HouseDemolitionContent["guarantee"] = {
  eyebrow: "Fixed price guarantee",
  title: "The number doesn't move.",
  description: "No day-rate creep. No variation at the end. No phone call halfway through the job.",
  items: [
    {
      icon: "yardstick",
      title: "If we read the job wrong, that's ours to wear",
      detail:
        "We quoted it. Getting it right was our job, not yours. The price we wrote down is the price you pay.",
    },
    {
      icon: "helmet",
      title: "What stays, stays undamaged",
      detail:
        "The part you're keeping is propped, protected and sealed. That's in the scope, not a favour.",
    },
    {
      icon: "builder",
      title: "Asbestos is in the number, not on top of it",
      detail:
        "Our own crew removes it, so it doesn't add a contractor to your job or a week to your timeline.",
    },
    {
      icon: "tools",
      title: "One crew, start to finish",
      detail:
        "Nobody gets subcontracted on the morning. The team that quoted you is the team that turns up.",
    },
  ],
};

export const serviceAreaContent: HouseDemolitionContent["serviceArea"] = {
  eyebrow: serviceArea.eyebrow,
  title: serviceArea.title,
  lede: serviceArea.lede,
  body: serviceArea.body,
  // COPY: from Demo Bros — needs Metro copy
  tag: "Melbourne metro and Victoria wide",
};

/** The final CTA's small print: the first three placeholder ticker claims. */
export const finalCtaFine = tickerClaims.slice(0, 3).join(" · ");

/* ------------------------------ this page ------------------------------ */

export const houseDemolitionContent: HouseDemolitionContent = {
  slug: "house-demolition",

  hero: {
    eyebrow: page.hero.eyebrow,
    titleTop: page.hero.titleTop,
    titleRibbon: page.hero.titleRibbon,
    sub: page.hero.sub,
    bullets: [
      { icon: "home", label: page.hero.points[0] },
      { icon: "bricks", label: page.hero.points[1] },
      { icon: "shield", label: page.hero.points[2] },
    ],
    imageDesktop: page.hero.imageDesktop,
    imageMobile: page.hero.imageMobile,
  },

  trustStats,
  beforeAfter,

  pricing: {
    eyebrow: "Up-front pricing",
    title: "What demolition actually costs in Melbourne.",
    lede: "Nobody publishes this, which is exactly why it's hard to tell whether you're being quoted fairly. Here's where ours starts.",
    tableHead: pricingTableHead,
    table: [
      {
        job: "Non-structural wall removal",
        how: "Stud or plasterboard wall, one room",
        from: PRICING.wall,
      },
      { job: "Garage, shed or carport", how: "Single, clear access", from: PRICING.outbuilding },
      {
        job: "Small house or unit",
        how: "2 bedrooms, clear access, no asbestos",
        from: PRICING.smallHouse,
      },
      {
        job: "Load-bearing wall removal",
        how: "Propped, to your engineer's detail",
        from: "Quoted on the job",
      },
      {
        job: "Rear-of-house demolition",
        how: "Cut line, propping and sealing",
        from: "Quoted on the job",
      },
      {
        job: "Large or double-storey home",
        how: "More house, more machine time",
        from: "Quoted on the job",
      },
      {
        job: "Anything with asbestos",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "The bottom four vary too much for a starting number to mean anything, so we don't invent one. They're priced properly, in writing, within 24 hours.",
    close: "All of that is priced before you commit, not discovered when the machine is on site.",
    closeEmphasis: "Whatever number comes back, that's the number.",
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
    title: "From first call to a block your builder can start on.",
    lede: "The demolition itself is the short part. The approvals set your start date — so the sooner they're moving, the sooner your build does.",
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
        title: "Permits & disconnections",
        when: "4–6 weeks",
        detail: "The longest part, and it's on us — council and all four services running at once.",
        image: TIMELINE_IMAGES[1],
        imageAlt: "",
      },
      {
        n: "03",
        title: "Asbestos out",
        when: "1–2 days",
        detail: "Done before the machine arrives, not around it.",
        image: TIMELINE_IMAGES[2],
        imageAlt: "",
      },
      {
        n: "04",
        title: "Demolition",
        when: "2–4 days",
        detail: "Partial works or a standard single-storey home.",
        image: TIMELINE_IMAGES[3],
        imageAlt: "",
      },
      {
        n: "05",
        title: "Handover",
        when: "Same week",
        detail: "Clean, level, photographed. Your builder starts.",
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
          { item: "Demolition permit", means: "We coordinate the application, not you" },
          { item: "Asset protection permit", means: "Kerb, footpath and nature strip covered" },
          { item: "Asbestos assessment", means: "Before the quote is final, not on the day" },
          { item: "Neighbour notification", means: "In writing, before the noise starts" },
        ],
      },
      {
        label: "All four disconnections",
        items: [
          { item: "Power", means: "Arranged and confirmed before we start" },
          { item: "Gas", means: "Arranged and confirmed before we start" },
          { item: "Water", means: "Arranged and confirmed before we start" },
          { item: "Telecommunications", means: "The one most quotes forget" },
        ],
      },
      {
        label: "On site & handover",
        items: [
          { item: "Licensed asbestos removal", means: "By our own crew, disposed of properly" },
          { item: "Propping & protection", means: "For anything that's staying" },
          { item: "All waste removed", means: "Sorted and recycled where we can" },
          { item: "Block levelled & photographed", means: "Clean, level, ready for your builder" },
        ],
      },
    ],
    close:
      "If something on your block genuinely sits outside that — a pool, a big tree needing an arborist, a retaining wall on the boundary — we price it as its own line and show it to you before you sign. What we don't do is leave it off the quote and mention it later.",
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
    title: `${PLACEHOLDER_TRUST.rating} stars from homeowners and builders across Melbourne.`,
    items: reviewsFor("house-demolition"),
  },

  serviceArea: serviceAreaContent,

  faqs: page.faqs,

  finalCta: {
    title: page.finalCta.title,
    lede: page.finalCta.lede,
    body: previewOnly(
      `Walls from ${PRICING.wall}. Garages from ${PRICING.outbuilding}. Permits and disconnections handled.`,
    ),
    fine: finalCtaFine,
  },
};
