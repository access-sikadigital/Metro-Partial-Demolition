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
 * PLACEHOLDER — SAMPLE REVIEWS ONLY (Vicky's design handoff, 26 Nov).
 *
 * Drafted for the mock-up, not written by customers. They render on preview
 * deploys only (wrapped in <Unconfirmed>), labelled "Sample review" with no
 * Google mark. Replace with verified customer quotes, with permission, and
 * add Google attribution only for reviews traceable to Metro's listing.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Sample review",
    role: "Rear extension",
    quote:
      "We needed the old extension down before our builder could start. Billy walked around the back with us and marked out exactly where the work would stop.",
    rating: 5,
    pages: ["partial-demolition", "house-demolition", "garage-shed-driveway-removal"],
  },
  {
    name: "Sample review",
    role: "Deck removal",
    quote:
      "The deck was right against our back door, so access was my main concern. The crew explained how they’d get the timber out through the side gate.",
    rating: 5,
    pages: ["partial-demolition", "house-demolition", "garage-shed-driveway-removal"],
  },
  {
    name: "Sample review",
    role: "Shed removal",
    quote:
      "I wanted the shed gone but still needed the slab. That detail was written into the quote, and the slab was there ready for me to use afterwards.",
    rating: 5,
    pages: ["partial-demolition", "house-demolition", "garage-shed-driveway-removal"],
  },
  {
    name: "Sample review",
    role: "Veranda removal",
    quote:
      "We were keeping the paving under the veranda. It was good being able to point that out to the same person who talked us through the job.",
    rating: 5,
    pages: ["partial-demolition", "house-demolition", "garage-shed-driveway-removal"],
  },
  {
    name: "Sample review",
    role: "Kitchen",
    quote:
      "The cabinets and splashback had to go, but we wanted to keep the timber floor. Billy went through it with us before the crew started taking the kitchen apart.",
    rating: 5,
    pages: ["strip-out", "kitchen-demolition", "bathroom-demolition"],
  },
  {
    name: "Sample review",
    role: "Bathroom",
    quote:
      "Our tiler had given us a list of what needed to come out. We sent it over with a few photos, and Metro quoted against that list. Made the handover easy.",
    rating: 5,
    pages: ["strip-out", "kitchen-demolition", "bathroom-demolition"],
  },
  {
    name: "Sample review",
    role: "Flooring",
    quote:
      "We’d pulled up a corner of the old flooring and realised it was a bigger job than we thought. The crew took care of the rest, including the stubborn bits around the doorways.",
    rating: 5,
    pages: ["strip-out", "kitchen-demolition", "bathroom-demolition"],
  },
  {
    name: "Sample review",
    role: "Shop fit-out",
    quote:
      "Our landlord wanted the counters and display fittings removed. We could see from the quote what Metro would take out and what we needed to leave in the shop.",
    rating: 5,
    pages: ["strip-out", "kitchen-demolition", "bathroom-demolition"],
  },
  {
    name: "Sample review",
    role: "Household furniture",
    quote:
      "The old sofa was too awkward for us to get down the front steps. I sent a photo of the doorway as well as the sofa, so the crew knew what to expect.",
    rating: 5,
    pages: ["rubbish-removal"],
  },
  {
    name: "Sample review",
    role: "Garage clean-out",
    quote:
      "Half the garage was rubbish and half was stuff we were keeping. They checked the two piles with me before loading up. I appreciated that.",
    rating: 5,
    pages: ["rubbish-removal"],
  },
  {
    name: "Sample review",
    role: "Yard clean-up",
    quote:
      "The pile was behind the shed, a fair way from the driveway. They collected it from there, which saved me dragging everything out to the kerb.",
    rating: 5,
    pages: ["rubbish-removal"],
  },
  {
    name: "Sample review",
    role: "Renovation waste",
    quote:
      "We had timber offcuts, plasterboard and broken tiles left after the kitchen reno. Being able to send photos of the whole pile made getting a quote straightforward.",
    rating: 5,
    pages: ["rubbish-removal"],
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
  // Live builds get no sample reviews at all, not even in the page payload.
  if (!IS_PREVIEW) return [];
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
