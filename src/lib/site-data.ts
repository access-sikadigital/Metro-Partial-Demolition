import type { ServiceSlug } from "./pages/types";

// Shared content for Metro Partial Demolition.
//
// Same shape as the Demo Bros project: one main landing page ("/") that routes
// visitors to dedicated landing pages, each with its own hero form, pricing,
// process, FAQs and thank-you URL. Google Ads ad group → page map is in
// docs/google-ads/01-campaign-build.md.
//
//   /partial-demolition            → src/lib/pages/partial-demolition.ts
//   /strip-out                     → src/lib/pages/strip-out.ts
//   /kitchen-demolition            → src/lib/pages/kitchen-bathroom.ts
//   /bathroom-demolition           → src/lib/pages/kitchen-bathroom.ts
//   /garage-shed-driveway-removal  → src/lib/pages/garage-shed-driveway.ts
//   /rubbish-removal               → src/lib/pages/rubbish-removal.ts
//   /house-demolition              → src/lib/pages/house-demolition.ts (not in ads at launch)
//
// This file holds what every page shares: business facts, prices, the quote
// form options, the main-page (hub) content, reviews and the footer.
//
// ┌──────────────────────── CONFIRM BEFORE LAUNCH ────────────────────────┐
// │ Nothing below was supplied in the brand pack, so every business fact is │
// │ a PLACEHOLDER that must be confirmed with the client before go-live:     │
// │   · SITE.phone / phoneHref / email                                       │
// │   · TRUST — Google rating, review count, liability cover, licence        │
// │   · PRICING — every "from" price                                         │
// │   · testimonials — sample copy only; replace with real Google reviews    │
// │ Search this repo for "PLACEHOLDER" to find each one.                     │
// └──────────────────────────────────────────────────────────────────────────┘

export const SITE = {
  name: "Metro Partial Demolition",
  shortName: "Metro",
  // PLACEHOLDER — client phone number.
  phone: "1300 000 000",
  phoneHref: "tel:1300000000",
  // PLACEHOLDER — client email address.
  email: "info@metropartialdemolition.com.au",
};

/** PLACEHOLDER — trust claims, used in heroes, ticker, stats, modal, footer and JSON-LD. */
export const TRUST = {
  rating: "4.9",
  reviewCount: 48,
  liability: "$20M",
  licence: "Licensed & insured",
} as const;

/**
 * PLACEHOLDER — every price the site quotes, in one place. Change a number here
 * and every hero, price table, service card, FAQ and final CTA follows.
 */
export const PRICING = {
  // Demolition
  wall: "$1,500",
  outbuilding: "$1,200",
  smallHouse: "$15,000",
  // Strip outs
  kitchen: "$800",
  bathroom: "$1,200",
  laundry: "$800",
  // Rubbish removal
  minLoad: "$99",
  trailer: "$150",
  halfTruck: "$290",
  fullTruck: "$550",
} as const;

/** One button label, used everywhere. */
export const CTA_LABEL = "Get a free quote";

/* ============================== QUOTE FORM ============================== */

export const quoteForm = {
  title: "Get your fixed price",
  lede: "Tell us about the job. Itemised, in writing, within 24 hours.",
  fine: "Free, itemised, no obligation. One quote, one follow-up.",
  fineEmphasis: "We don't chase you.",
};

/** "What do you need done?" — multi-select. `value` is what travels to GHL. */
export const quoteServiceOptions = [
  { value: "partial-demolition", label: "Partial demolition" },
  { value: "strip-out", label: "Strip out" },
  { value: "kitchen-demolition", label: "Kitchen removal or demolition" },
  { value: "bathroom-demolition", label: "Bathroom demolition" },
  { value: "extension-demolition", label: "Extension demolition" },
  { value: "garage-demolition", label: "Garage demolition" },
  { value: "shed-demolition", label: "Shed demolition" },
  { value: "driveway-removal", label: "Driveway removal" },
  { value: "rubbish-removal", label: "Rubbish removal" },
  { value: "tile-removal", label: "Tile removal" },
  // Catch-all, so a job that doesn't fit the list still comes through as a lead.
  { value: "other", label: "Something else" },
];

/** Kept for the server function, which labels a timing value if one is sent. */
export const timingOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "within-2-weeks", label: "Within 2 weeks" },
  { value: "within-1-month", label: "Within 1 month" },
  { value: "more-than-1-month", label: "More than 1 month" },
  { value: "not-sure", label: "Not sure yet" },
];

/**
 * Each landing page has its own thank-you URL, so ad platforms can count a
 * conversion per service. The quote form (inline or in the modal) picks the
 * right one from the page it was submitted on.
 */
export const THANK_YOU_PATHS: Record<string, string> = {
  "/partial-demolition": "/thank-you-partial-demolition",
  "/house-demolition": "/thank-you-house-demolition",
  "/strip-out": "/thank-you-strip-out",
  "/kitchen-demolition": "/thank-you-kitchen-demolition",
  "/bathroom-demolition": "/thank-you-bathroom-demolition",
  "/garage-shed-driveway-removal": "/thank-you-garage-shed-driveway",
  "/rubbish-removal": "/thank-you-rubbish-removal",
};

export function thankYouPathFor(pathname: string): string {
  return THANK_YOU_PATHS[pathname.replace(/\/$/, "")] ?? "/thank-you";
}

/**
 * The `source` value sent to GoHighLevel with each lead, so GHL workflows can
 * tell which landing page a lead came from. Same labels as the Demo Bros build.
 * Anything not listed (the hub at "/") falls back to the generic label.
 */
export const LEAD_SOURCES: Record<string, string> = {
  "/partial-demolition": "Partial Demolition Landing Page",
  "/house-demolition": "House Demolition Landing Page",
  "/strip-out": "Strip-Out Landing Page",
  "/kitchen-demolition": "Kitchen Demolition Landing Page",
  "/bathroom-demolition": "Bathroom Demolition Landing Page",
  "/garage-shed-driveway-removal": "Garage Shed Driveway Landing Page",
  "/rubbish-removal": "Rubbish Removal Landing Page",
};

export function leadSourceFor(pathname: string): string {
  return LEAD_SOURCES[pathname.replace(/\/$/, "")] ?? "Website Landing Page Quote Form";
}

/**
 * Services ticked in the quote form when it loads on each landing page, so the
 * visitor has one less field to fill and GHL gets a clean service tag. They
 * can still change it.
 */
export const DEFAULT_SERVICES: Record<string, string[]> = {
  "/partial-demolition": ["partial-demolition"],
  "/strip-out": ["strip-out"],
  "/kitchen-demolition": ["kitchen-demolition"],
  "/bathroom-demolition": ["bathroom-demolition"],
  "/rubbish-removal": ["rubbish-removal"],
};

export function defaultServicesFor(pathname: string): string[] {
  return DEFAULT_SERVICES[pathname.replace(/\/$/, "")] ?? [];
}

/* ============================ SHARED CLAIMS ============================ */

export const tickerClaims = [
  `${TRUST.rating} ★ Google rating`,
  "Fixed price in 24 hours",
  `${TRUST.liability} public liability`,
  "In-house asbestos removal",
  "One crew, start to finish",
  "Skip & clean-up included",
];

export const stats = [
  { value: TRUST.rating, unit: "★", label: "Google rating" },
  { value: "24", unit: "h", label: "Itemised price in writing" },
  { value: TRUST.liability, unit: "", label: "Public liability" },
  { value: "1", unit: "crew", label: "Quote to handover" },
];

/* ============================ MAIN PAGE (HUB) ============================ */

/**
 * The main landing page is a hub: its job is to send each visitor to the right
 * service page, fast. General headline, three big doors, and enough proof
 * (stats, reviews, guarantees) that they trust the door they pick.
 */
export const hub = {
  hero: {
    eyebrow: "Metro · Melbourne demolition",
    lines: ["Partial demolition.", "Strip-outs."],
    ribbon: "Rubbish removal.",
    sub: "One Melbourne crew for the part of the job nobody else wants to do. Fixed, itemised price in writing within 24 hours — and the part you're keeping stays protected.",
    pick: "Pick your job",
  },
  showcase: {
    eyebrow: "Our services",
    title: "What do you need done?",
    lede: "Three ways we help. Tap through for pricing, the full process and a fast, fixed quote.",
  },
  why: {
    eyebrow: "Why Metro",
    title: "Whatever the job, the same four promises.",
  },
  finalCta: {
    eyebrow: "Ready when you are",
    title: "Get your fixed price.",
    lede: "Pick your service, or just tell us about the job. Itemised number in writing within 24 hours — free, no obligation, and it doesn't move after that.",
  },
};

/**
 * The three dedicated landing pages, as the hub presents them. `path` is a real
 * route in this app, so the links navigate instantly with no full reload.
 */
export const servicePages = [
  {
    path: "/partial-demolition",
    n: "01",
    icon: "excavator",
    title: "Partial Demolition",
    short: "Partial demolition",
    blurb:
      "Rear-of-house and extension demolition, wall removals, garages, sheds and driveways — the part you're keeping stays propped and protected.",
    covers: ["Rear-of-house & extensions", "Wall removal", "Garages, sheds & driveways"],
    from: `Walls from ${PRICING.wall}`,
    image: "/images/excavator-wall.jpg",
    imageAlt: "An excavator taking down a brick wall",
  },
  {
    path: "/strip-out",
    n: "02",
    icon: "sledgehammer",
    title: "Strip-Outs",
    short: "Strip-outs",
    blurb:
      "Kitchens, bathrooms, laundries and whole interiors back to the frame — usually in a day, so your trades start the next morning.",
    covers: ["Kitchen, bathroom & laundry", "Internal strip outs", "Office & retail defits"],
    from: `Kitchens from ${PRICING.kitchen}`,
    image: "/images/breaker-wall.jpg",
    imageAlt: "A worker breaking out an internal brick wall with a jackhammer",
  },
  {
    path: "/rubbish-removal",
    n: "03",
    icon: "tipper",
    title: "Rubbish Removal",
    short: "Rubbish removal",
    blurb:
      "Household junk to concrete and whole-house clear-outs. We're a demolition crew, so nothing's too heavy — and you don't lift a thing.",
    covers: ["Household & hard rubbish", "Concrete, brick & sheds", "Deceased estates & hoarding"],
    from: `From ${PRICING.minLoad}`,
    image: "/images/crew-shovel.jpg",
    imageAlt: "A crew member in a hard hat shovelling waste into a skip",
  },
];

/** Promises that hold across every service — used on the hub. */
export const sharedGuarantees = [
  {
    icon: "yardstick",
    title: "The number doesn't move",
    detail:
      "Itemised and in writing within 24 hours. The price we wrote down is the price you pay.",
  },
  {
    icon: "helmet",
    title: "What stays, stays protected",
    detail:
      "Floors covered, services isolated, anything we're not touching propped and sealed off.",
  },
  {
    icon: "builder",
    title: "Asbestos handled in-house",
    detail:
      "Our own licensed crew removes it, inside the price — no second contractor, no extra week.",
  },
  {
    icon: "tipper",
    title: "Gone, swept, photographed",
    detail: "Skip and tip runs are on us. We leave it swept and photograph the handover.",
  },
];

/* ============================ AUDIENCES ============================ */

export const audiences = {
  eyebrow: "Who we work with",
  title: "Jobs like yours, every week.",
  items: [
    {
      icon: "stairs",
      label: "Homeowners",
      detail:
        "Renovations, extensions and clear-outs — often while the family is still living there.",
    },
    {
      icon: "builder",
      label: "Builders",
      detail:
        "Demolition and clean-ups sequenced to your program, so your trades roll straight on.",
    },
    {
      icon: "floor-plan",
      label: "Architects & designers",
      detail: "Your drawings and your cut line, to the millimetre — with photos at every stage.",
    },
    {
      icon: "tower-crane",
      label: "Developers",
      detail: "Knock-downs and staged works across multiple sites, quoted tender-ready.",
    },
  ],
};

/* ============================== REVIEWS ============================== */

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  /** Which landing pages show this review. The hub shows them all. */
  pages: ServiceSlug[];
};

/**
 * PLACEHOLDER — SAMPLE REVIEWS ONLY.
 *
 * Illustrative copy written for the design build. These are NOT real reviews
 * and must be replaced with verified Google reviews (with the reviewer's real
 * name) before the site goes live.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "Rear extension, Brunswick",
    quote:
      "They took the back half of our house off while we were still living in the front. Everything was propped and sealed off properly, and the price on the quote was exactly what we paid.",
    rating: 5,
    pages: ["partial-demolition", "house-demolition"],
  },
  {
    name: "Daniel M.",
    role: "Builder, Moonee Ponds",
    quote:
      "We give Metro the cut line and the date, and that's the last we think about it. Quote's itemised, crew's on time, and the site's swept when our framers arrive.",
    rating: 5,
    pages: ["house-demolition", "strip-out"],
  },
  {
    name: "Priya R.",
    role: "Kitchen & wall removal, Hawthorn",
    quote:
      "Kitchen out and the wall to the dining room gone in two days. They found asbestos in the old splashback and just dealt with it — no surprise invoice.",
    rating: 5,
    pages: ["kitchen-demolition", "partial-demolition", "strip-out", "house-demolition"],
  },
  {
    name: "Tom W.",
    role: "Garage demolition, Coburg",
    quote:
      "Old brick garage and the slab under it, gone in a day. Neighbours were told in advance and the driveway was left cleaner than it's been in years.",
    rating: 5,
    pages: ["garage-shed-driveway-removal", "house-demolition", "rubbish-removal"],
  },
  {
    name: "Elena V.",
    role: "Bathroom strip out, St Kilda",
    quote:
      "Third-floor unit with one tiny lift and they still had it stripped by knock-off. Floors and hallway covered the whole way. Couldn't fault them.",
    rating: 5,
    pages: ["bathroom-demolition", "strip-out"],
  },
  {
    name: "Marcus L.",
    role: "Architect, Fitzroy",
    quote:
      "Worked to our drawings to the millimetre and photographed every stage. That documentation alone saves us hours with clients.",
    rating: 5,
    pages: ["house-demolition", "strip-out"],
  },
  {
    name: "Jenny H.",
    role: "Deceased estate, Essendon",
    quote:
      "Clearing Mum's house was the part I'd been dreading. They went room by room, set aside every photo and document, and never once rushed us.",
    rating: 5,
    pages: ["rubbish-removal"],
  },
  {
    name: "Chris P.",
    role: "Backyard clear-out, Reservoir",
    quote:
      "Two other companies knocked back the old concrete path and the half-collapsed shed. Metro quoted it, took the lot in one visit and swept up after.",
    rating: 5,
    pages: ["rubbish-removal"],
  },
  {
    name: "Aisha N.",
    role: "Office defit, Melbourne CBD",
    quote:
      "End-of-lease make good on a tight deadline. Partitions, carpet and ceiling tiles out over a weekend, and the landlord signed it off first inspection.",
    rating: 5,
    pages: ["strip-out", "rubbish-removal"],
  },
];

/** Pages that borrow another page's reviews rather than having their own tags. */
const REVIEW_FALLBACK: Partial<Record<ServiceSlug, ServiceSlug>> = {
  "partial-demolition": "house-demolition",
  "kitchen-demolition": "strip-out",
  "bathroom-demolition": "strip-out",
  "garage-shed-driveway-removal": "house-demolition",
};

export function reviewsFor(page: ServiceSlug) {
  const own = testimonials.filter((t) => t.pages.includes(page));
  const fallback = REVIEW_FALLBACK[page];
  const borrowed = fallback
    ? testimonials.filter((t) => t.pages.includes(fallback) && !own.includes(t))
    : [];
  return [...own, ...borrowed].slice(0, 6);
}

/* =========================== SERVICE AREA =========================== */

export const serviceArea = {
  eyebrow: "Where we work",
  title: "Melbourne wide — and the rest of Victoria too.",
  lede: "Most of our work is Melbourne metro — every suburb, inner and outer, north and south of the river. But we cover the whole state: the Peninsula, Geelong and the Surf Coast, Ballarat, Bendigo, Gippsland and the north-east.",
  body: "Tell us where the job is and we'll tell you when we can be there — usually in the same reply as the price.",
  regions: [
    "Inner Melbourne",
    "Northern suburbs",
    "Western suburbs",
    "Eastern suburbs",
    "Bayside & south-east",
    "Mornington Peninsula",
    "Geelong & Surf Coast",
    "Regional Victoria",
  ],
};

/* ============================== FOOTER ============================== */

export const footer = {
  blurb:
    "Melbourne demolition specialists. We take out the part you don't want — and look after the part you're keeping.",
  coverage:
    "House and partial demolition, strip-outs and rubbish removal across Melbourne — every suburb, inner and outer — plus the Peninsula, Geelong, Ballarat, Bendigo and regional Victoria.",
  legal: `${TRUST.licence} · ${TRUST.liability} public liability`,
};

/* ============================ QUOTE MODAL ============================ */

export const modalBenefits = [
  { lead: "Fixed price in writing", rest: "within 24 hours, and it doesn't move after that" },
  { lead: "What stays, stays protected", rest: "floors covered, services isolated" },
  { lead: "Asbestos removed by our own crew", rest: "inside the price, not on top of it" },
  { lead: "Skip, rubbish and clean-up included", rest: "no variation at the end" },
];
