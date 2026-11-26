import { IS_PREVIEW, PREVIEW_PHONE } from "./preview";

// Shared content for Metro Partial Demolition.
//
// One main page ("/") that routes visitors to dedicated landing pages, each
// with its own hero form, FAQs and thank-you URL, plus /contact. Google Ads ad
// group → page map is in docs/google-ads/01-campaign-build.md.
//
//   /partial-demolition            → src/lib/pages/partial-demolition.ts
//   /strip-out                     → src/lib/pages/strip-out.ts
//   /kitchen-demolition            → src/lib/pages/kitchen-bathroom.ts
//   /bathroom-demolition           → src/lib/pages/kitchen-bathroom.ts
//   /garage-shed-driveway-removal  → src/lib/pages/garage-shed-driveway.ts
//   /rubbish-removal               → src/lib/pages/rubbish-removal.ts
//   /house-demolition              → src/lib/pages/house-demolition.ts (not in ads at launch)
//
// ┌──────────────────────── WAITING ON METRO ────────────────────────┐
// │ Nothing here claims a fact Metro hasn't confirmed. Until it does: │
// │   · SITE.phone is empty, so every call button and tel: link hides │
// │   · SITE.email is empty, so the footer shows no email             │
// │   · TRUST.reviewsVerified is false, so no rating or reviews show  │
// │   · no prices, guarantees, licences or turnaround promises        │
// └───────────────────────────────────────────────────────────────────┘

/** Metro's real number (the GoHighLevel tracking number), once bought. */
// Billy (Metro founder) mobile, from John 26 Nov. Swap for the GHL tracking
// number once it's bought so calls are tracked.
const METRO_PHONE = { phone: "0410 894 567" as string, phoneHref: "tel:+61410894567" as string };

/** Preview deploys fall back to a placeholder so the call buttons can be reviewed. */
const PHONE = METRO_PHONE.phone === "" && IS_PREVIEW ? PREVIEW_PHONE : METRO_PHONE;

export const SITE = {
  name: "Metro Partial Demolition",
  shortName: "Metro",
  /** Metro's number: set METRO_PHONE above. Placeholder on preview deploys only. */
  phone: PHONE.phone as string,
  /** Matching tel: link, e.g. "tel:+6139xxxxxxx". */
  phoneHref: PHONE.phoneHref as string,
  /** Metro's enquiries address, once confirmed. */
  email: "" as string,
};

/** True only once SITE.phone holds Metro's verified number. Gates every call button. */
export const hasPhone = SITE.phone !== "" && SITE.phoneHref !== "";

/**
 * Google rating. Nothing shows until `reviewsVerified` is true, `rating` and
 * `reviewCount` are Metro's real Google figures and `googleReviewsUrl` points
 * at its Google Business Profile.
 */
export const TRUST = {
  rating: "" as string,
  reviewCount: 0 as number,
  reviewsVerified: false as boolean,
  googleReviewsUrl: "" as string,
};

/** One button label, used everywhere. */
export const CTA_LABEL = "Get a free quote";

/** The line under the main buttons (John, 23 Nov). Confirm the 24 hours with Metro. */
export const CTA_SUBLINE = "Free quote within 24 hours. No obligation.";

/* ============================== QUOTE FORM ============================== */

export const quoteForm = {
  submitting: "Sending your request…",
  error: "We couldn't send your request. Please try again.",
  fine: "We’ll use your details to get in touch about this job.",
  detailsPrompt:
    "Which rooms, structures or materials need to go? Include a target date or any access restrictions you already know about.",
  photoPrompt:
    "A wide photo of the job helps us see what’s involved. If there are stairs, a narrow gate or a shared driveway, a photo of the access also helps.",
};

/**
 * The heading and prompt shown above the quote form (hero card and modal) on
 * each page. Pages not listed use the home page's.
 */
export const FORM_COPY: Record<string, { heading: string; prompt: string }> = {
  "/": {
    heading: "Get a free demolition or strip-out quote",
    prompt: "What needs to come out, and what are you keeping?",
  },
  "/partial-demolition": {
    heading: "Get a quote for your partial demolition",
    prompt:
      "Which part is coming down? Tell us what needs to stay and whether you have any marked-up plans.",
  },
  "/strip-out": {
    heading: "Get a quote for your strip-out",
    prompt:
      "Tell us which rooms, tiles, fittings or floors need to go. Add access details or a handover date if you have one.",
  },
  "/kitchen-demolition": {
    heading: "Get a quote for your kitchen strip-out",
    prompt:
      "Tell us which cabinets, benchtops, tiles or appliances need to go, and when your installer needs the room.",
  },
  "/bathroom-demolition": {
    heading: "Get a quote for your bathroom strip-out",
    prompt:
      "Tell us which fixtures, tiles or floors need to go, and when your plumber or tiler needs the room.",
  },
  "/garage-shed-driveway-removal": {
    heading: "Get a quote for your garage, shed or driveway removal",
    prompt:
      "Tell us what’s coming out, roughly how big it is, and any paving, fences or access routes you’re keeping.",
  },
  "/house-demolition": {
    heading: "Get a quote for your demolition",
    prompt:
      "Which part is coming down? Tell us what needs to stay and whether you have any marked-up plans.",
  },
  "/rubbish-removal": {
    heading: "Get a rubbish removal quote",
    prompt:
      "Tell us what’s in the load and where it is. Add a photo showing the full pile, plus any stairs, gates or loading restrictions.",
  },
  "/contact": {
    heading: "Get a free quote",
    prompt:
      "Tell us what needs to come out, what you want to keep and when you need the work. If you’re working to a builder’s start date or a lease handover, include the date in your notes.",
  },
};

export function formCopyFor(pathname: string) {
  return FORM_COPY[pathname.replace(/\/$/, "") || "/"] ?? FORM_COPY["/"];
}

/** Shown on the thank-you pages, keyed by the thank-you page's `source`. */
export const THANK_YOU_COPY = {
  heading: "Thanks, we’ve received your quote request.",
  general: "We’ll review your job details and get in touch about the next step.",
  "partial-demolition":
    "We’ll review what needs to come down and what you’re keeping. Keep any plans and your builder’s preferred handover date handy.",
  "strip-out":
    "We’ll review the rooms or surfaces you want stripped out. Keep any room lists, access notes or defit plans handy.",
  "rubbish-removal":
    "We’ll review the type of rubbish and where it needs to be loaded from. Keep a photo of the full load handy.",
} as const;

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
  { value: "not-sure", label: "Not sure yet" },
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
  "/contact": "Contact Page",
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

/* ============================ MAIN PAGE (HUB) ============================ */

/** The main page ("/"), from the 01-Home copy. */
export const hub = {
  meta: {
    title: "Partial Demolition & Strip-Outs Melbourne | Metro",
    description:
      "Planning a renovation or extension? Metro Partial Demolition handles selective demolition, internal strip-outs and rubbish removal across Melbourne. Get a free quote.",
  },
  hero: {
    eyebrow: "Metro · Melbourne",
    titleTop: "Partial demolition, strip-outs",
    titleRibbon: "and rubbish removal in Melbourne",
    sub: "Taking out a rear extension, stripping an old kitchen or clearing a pile of building waste? Tell us what needs to go and where the job is. We’ll quote the work.",
    points: [
      "Rear of house and extensions",
      "Wall removal",
      "Kitchen, bathroom and laundry strip-outs",
      "Tile and floor removal",
      "Garages, sheds and driveways",
      "Rubbish and site waste",
    ],
    secondary: "See our services",
  },
  showcase: {
    eyebrow: "Our services",
    title: "What needs to come out?",
    description: "Three ways we help. Tap through for examples and a free quote.",
  },
  scope: {
    eyebrow: "How we scope it",
    title: "A clear scope from the first conversation",
    items: [
      {
        icon: "helmet",
        title: "Show us what stays.",
        detail: "Point out floors, rooms, finishes or structures that need to be kept.",
      },
      {
        icon: "yardstick",
        title: "Get the scope in writing.",
        detail:
          "See what removal, waste and handover are included, so you can compare quotes on the same basis.",
      },
      {
        icon: "builder",
        title: "Plan around the next trade.",
        detail: "Share your builder’s target date and any access constraints early.",
      },
      {
        icon: "floor-plan",
        title: "Start with what you have.",
        detail:
          "A suburb and a short description are enough to start. Photos or plans help if you have them.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Get a free quote",
    title: "Let’s scope the first stage of your project",
    lede: "Tell us where the job is and what you want removed. We’ll review the details and get in touch about your quote.",
  },
};

/**
 * The three main service pages, as the home page presents them. `path` is a
 * real route in this app, so the links navigate with no full reload.
 */
export const servicePages = [
  {
    path: "/partial-demolition",
    n: "01",
    icon: "excavator",
    title: "Partial Demolition",
    short: "Partial demolition",
    question: "An extension or structural renovation",
    blurb: "Rear extensions, decks, sheds and driveways, with the rest of the house left standing.",
    linkLabel: "View partial demolition",
    image: "/images/services/wall-removal.jpg",
  },
  {
    path: "/strip-out",
    n: "02",
    icon: "sledgehammer",
    title: "Strip-Outs",
    short: "Strip-outs",
    question: "A new kitchen, bathroom or fit-out",
    blurb: "Kitchens, bathrooms and commercial interiors, cleared for the next trade.",
    linkLabel: "View strip-outs",
    image: "/images/services/kitchen-strip-out-card.jpg",
  },
  {
    path: "/rubbish-removal",
    n: "03",
    icon: "tipper",
    title: "Rubbish Removal",
    short: "Rubbish removal",
    question: "A clear site without the tip runs",
    blurb: "Household junk and renovation waste. We load it and take it away.",
    linkLabel: "View rubbish removal",
    image: "/images/services/renovation-rubbish-card.jpg",
  },
];

/* ============================ AUDIENCES ============================ */

export const audiences = {
  title: "Who we work with",
  body: "Homeowners, builders, developers and government. Send photos or plans and we’ll quote the job.",
  items: [
    { icon: "home", label: "Homeowners" },
    { icon: "builder", label: "Builders" },
    { icon: "developer", label: "Developers" },
    { icon: "government", label: "Government" },
  ],
} as const;

/* ============================== FOOTER ============================== */

export const footer = {
  blurb:
    "Metro Partial Demolition · Partial demolition, strip-outs and rubbish removal across Melbourne.",
};

/* ============================ QUOTE MODAL ============================ */

/** The modal's left panel: the same four scope points as the home page. */
export const modalBenefits = hub.scope.items.map((i) => ({ lead: i.title, rest: i.detail }));
