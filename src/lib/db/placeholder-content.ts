/**
 * PLACEHOLDER CONTENT for the Demo Bros replica service pages.
 *
 * Metro's own wording for the sections removed in the 23 Nov copy rewrite,
 * restored verbatim from commit 91fe2c1 so every Demo Bros section can render.
 * NOTHING HERE IS VERIFIED: the Google rating and review count, sample reviews,
 * prices, liability/licence lines, ticker claims, stats and service area are
 * all placeholders. Replace each with Metro's real figures and approved copy
 * before Google Ads go live.
 */
import type { ServiceSlug } from "@/lib/pages/types";
import { IS_PREVIEW } from "@/lib/preview";

/** Text built on placeholder figures: shown on preview deploys, empty on the live site. */
export const previewOnly = (text: string) => (IS_PREVIEW ? text : "");

/** Google rating shown in the hero badge, reviews section and sticky badge. */
export const GOOGLE_RATING = {
  rating: 4.9,
  reviewCount: 48,
} as const;

/** Trust figures the restored copy interpolates. */
export const PLACEHOLDER_TRUST = {
  rating: "4.9",
  reviewCount: 48,
  liability: "$20M",
  licence: "Licensed & insured",
} as const;

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

export const tickerClaims = [
  `${PLACEHOLDER_TRUST.rating} ★ Google rating`,
  "Fixed price in 24 hours",
  `${PLACEHOLDER_TRUST.liability} public liability`,
  "In-house asbestos removal",
  "One crew, start to finish",
  "Skip & clean-up included",
];

export const stats = [
  { value: PLACEHOLDER_TRUST.rating, unit: "★", label: "Google rating" },
  { value: "24", unit: "h", label: "Itemised price in writing" },
  { value: PLACEHOLDER_TRUST.liability, unit: "", label: "Public liability" },
  { value: "1", unit: "crew", label: "Quote to handover" },
];

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
    role: "Builder, Fitzroy",
    quote:
      "Took out exactly what was on the plans and photographed every stage. That documentation alone saves us hours with our clients.",
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
