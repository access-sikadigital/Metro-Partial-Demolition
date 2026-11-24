/**
 * VERSION 2 (branch v2/demobros-layout, preview only): the three main service
 * pages in the Demo Bros service-page layout (go.demobros.com.au/house-demolition,
 * /strip-out, /rubbish-removal), at the same length.
 *
 * Every heading and paragraph from the copy files comes straight from the v1
 * content (`base`), in the copy's order. The extra Demo Bros sections carry
 * short claim-free text written from the same copy. Before/after and reviews
 * are placeholder slots until Metro supplies real photos and Google reviews;
 * the price table says "Quoted on the job" until Metro confirms any prices.
 */
import { partialDemolition } from "./partial-demolition";
import { rubbishRemoval } from "./rubbish-removal";
import { stripOut } from "./strip-out";
import type { ServicePageContent } from "./types";

export type V2Section =
  | "strip"
  | "stats"
  | "beforeAfter"
  | "services"
  | "price"
  | "audiences"
  | "timeline"
  | "included"
  | "compare"
  | "process"
  | "feature"
  | "feature2"
  | "builders"
  | "guarantee"
  | "reviews"
  | "area"
  | "faqs";

type Feature = { eyebrow: string; title: string; body: string[]; points: string[]; image: string };

export interface V2Page {
  base: ServicePageContent;
  order: V2Section[];
  /** The phrase in the H1 drawn with the hand underline. */
  mark: string;
  strip: string[];
  stats: { icon: string; value: string; label: string }[];
  beforeAfter: { eyebrow: string; title: string; pairs: { label: string; note: string }[] };
  price: {
    factorsTitle: string;
    factors: string[];
    table: { job: string; how: string }[];
    close: string;
  };
  audiences: { title: string; items: { icon: string; label: string }[] };
  included?: {
    eyebrow: string;
    title: string;
    lede: string;
    groups: { label: string; items: { item: string; means: string }[] }[];
    close: string;
  };
  compare?: { eyebrow: string; title: string; body: string[]; points: string[] };
  process: {
    eyebrow: string;
    title: string;
    steps: { n: string; title: string; detail: string }[];
  };
  feature: Feature;
  feature2?: Feature;
  builders?: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    image: string;
    note: string;
  };
  guarantee: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: string; title: string; detail: string }[];
  };
  area: { eyebrow: string; title: string; lede: string; body: string };
}

/* Shared between pages: the home page's four scope points (01-Home copy). */
const SCOPE_POINTS = {
  eyebrow: "How we scope it",
  title: "A clear scope from the first conversation",
  description: "What you can expect before anything is booked.",
  items: [
    {
      icon: "keep",
      title: "Show us what stays",
      detail: "Point out floors, rooms, finishes or structures that need to be kept.",
    },
    {
      icon: "file",
      title: "Get the scope in writing",
      detail:
        "See what removal, waste and handover are included, so you can compare quotes on the same basis.",
    },
    {
      icon: "calendar",
      title: "Plan around the next trade",
      detail: "Share your builder’s target date and any access constraints early.",
    },
    {
      icon: "camera",
      title: "Start with what you have",
      detail:
        "A suburb and a short description are enough to start. Photos or plans help if you have them.",
    },
  ],
};

const AREA = {
  eyebrow: "Where we work",
  title: "Across Melbourne",
  lede: "Partial demolition, strip-outs and rubbish removal across Melbourne.",
  body: "Include your suburb or postcode and we’ll confirm availability for your job.",
};

const STATS = (service: string) => [
  { icon: "map", value: "Melbourne", label: "Where we work" },
  { icon: "tools", value: service, label: "What this page covers" },
  { icon: "file", value: "In writing", label: "Scope agreed before booking" },
  { icon: "camera", value: "Photos", label: "Help us quote the job" },
];

/* ============================ PARTIAL DEMOLITION ============================ */
/* Demo Bros /house-demolition order, with the copy's service cards added. */

const partialV2: V2Page = {
  base: partialDemolition,
  mark: "what you’re keeping",
  order: [
    "strip",
    "stats",
    "beforeAfter",
    "services",
    "price",
    "audiences",
    "timeline",
    "included",
    "compare",
    "process",
    "feature",
    "builders",
    "guarantee",
    "reviews",
    "area",
    "faqs",
  ],
  strip: [
    "Rear sections & extensions",
    "Selected walls",
    "Retained areas agreed up front",
    "Handover agreed up front",
  ],
  stats: STATS("Partial demo"),
  beforeAfter: {
    eyebrow: "Before and after",
    title: "Part of the house out. The rest ready for the build.",
    pairs: [
      { label: "Rear extension → cut line ready", note: "Metro job photo to come" },
      { label: "Wall out → opening ready", note: "Metro job photo to come" },
      { label: "Rooms stripped → ready for the builder", note: "Metro job photo to come" },
    ],
  },
  price: {
    factorsTitle: "What moves the price",
    factors: [
      "The connection to the existing building",
      "Site access",
      "What needs to stay",
      "The amount of material to remove",
    ],
    table: [
      { job: "Rear extensions and additions", how: "Cut line defined with your builder" },
      { job: "Selected walls and openings", how: "Structural details clarified first" },
      { job: "Internal demolition", how: "Scoped alongside the demolition" },
      { job: "Adjoining concrete or structures", how: "Slab, deck or outbuilding" },
    ],
    close: "Photos and marked-up plans help identify what needs to be priced.",
  },
  audiences: {
    title: "Who we work with",
    items: [
      { icon: "home", label: "Homeowners" },
      { icon: "builder", label: "Builders" },
      { icon: "renovator", label: "Renovators" },
      { icon: "fitout", label: "Fit-out teams" },
    ],
  },
  included: {
    eyebrow: "Your quote",
    title: "What your quote should show",
    lede: "Everything below should be clear before you book, so you and your builder know where the work stops.",
    groups: [
      {
        label: "The demolition",
        items: [
          { item: "Sections to be removed", means: "Exactly what comes down" },
          { item: "Areas to be retained", means: "The structure and finishes you’re keeping" },
          { item: "The agreed handover condition", means: "What the next trade walks into" },
        ],
      },
      {
        label: "On site",
        items: [
          { item: "Access", means: "How the crew gets in and the material gets out" },
          { item: "Temporary protection", means: "For the parts of the house that stay" },
          { item: "Waste removal", means: "Where the material goes" },
        ],
      },
      {
        label: "Who does what",
        items: [
          { item: "Work assigned to your builder", means: "Agreed before you book" },
          { item: "Work assigned to another trade", means: "So nothing falls between quotes" },
          { item: "Items to be clarified", means: "Permits, services or suspect materials" },
        ],
      },
    ],
    close:
      "Access, temporary protection, waste removal and any work assigned to your builder or another trade should be clear before you book.",
  },
  compare: {
    eyebrow: "Comparing quotes",
    title: "Compare quotes on the same basis",
    body: [
      "Two partial demolition quotes can describe very different jobs. Before you compare the numbers, check that both show the same sections removed, the same areas retained and the same handover condition.",
    ],
    points: [
      "The cut line. Where the old and new work meet, defined with your builder.",
      "Retained areas. The rooms, floors and finishes that need to stay.",
      "Handover. The condition the next trade will walk into.",
      "Waste. Whether removal is included in the scope.",
    ],
  },
  process: {
    eyebrow: "What to send",
    title: "Start with what you have",
    steps: [
      { n: "01", title: "Your suburb", detail: "So we can confirm availability for your job." },
      {
        n: "02",
        title: "A few photos",
        detail: "A wide shot of the part that’s coming down and the access to it.",
      },
      {
        n: "03",
        title: "Marked-up plans",
        detail: "Show what comes down and what stays, if you have them.",
      },
      {
        n: "04",
        title: "Engineering information",
        detail: "For selected walls or openings, send anything you already have.",
      },
      {
        n: "05",
        title: "Your builder’s target date",
        detail: "So the scope can be planned around the next trade.",
      },
      {
        n: "06",
        title: "Anything to flag",
        detail: "Permit conditions, live services or suspect materials you know about.",
      },
    ],
  },
  feature: {
    eyebrow: "Before work is booked",
    title: "Permits, services and suspect materials",
    body: [
      "Flag any plans, permit conditions, live services or suspect materials you know about. We’ll identify what needs clarification before work is booked and who is responsible for each item.",
    ],
    points: [
      "Plans and permit conditions",
      "Live services",
      "Suspected asbestos or other suspect materials",
      "Who is responsible for each item",
    ],
    image: "/images/process/04-disconnections.jpg",
  },
  builders: {
    eyebrow: "For builders",
    title: "Working with your builder",
    lead: "Builders can send marked-up plans, access notes and their handover date.",
    points: [
      "Share where the old and new work meet",
      "Agree the cut line before the scope is finalised",
      "Confirm what’s removed and what’s left in place",
      "Plan the handover around your next trade",
    ],
    image: "/images/sections/house-clean-cut.jpg",
    note: "Marked-up plans · access notes · handover date",
  },
  guarantee: SCOPE_POINTS,
  area: AREA,
};

/* ================================ STRIP-OUTS ================================ */
/* Demo Bros /strip-out order. */

const stripV2: V2Page = {
  base: stripOut,
  mark: "Get the space ready for the next trade.",
  order: [
    "strip",
    "stats",
    "beforeAfter",
    "services",
    "price",
    "audiences",
    "process",
    "timeline",
    "feature",
    "feature2",
    "guarantee",
    "reviews",
    "area",
    "faqs",
  ],
  strip: [
    "Kitchens & bathrooms",
    "Tiles & floors",
    "Office & retail defits",
    "Surfaces you keep, marked in the scope",
  ],
  stats: STATS("Strip-outs"),
  beforeAfter: {
    eyebrow: "Before and after",
    title: "Same room. Ready for the next trade.",
    pairs: [
      { label: "Kitchen → cleared for the installer", note: "Metro job photo to come" },
      { label: "Bathroom → ready for the tiler", note: "Metro job photo to come" },
      { label: "Office → handed back", note: "Metro job photo to come" },
    ],
  },
  price: {
    factorsTitle: "What moves the price",
    factors: [
      "How much material comes out",
      "The condition the space must be left in",
      "How the crew can get the waste out",
      "Stairs, lifts and restricted loading areas",
    ],
    table: [
      {
        job: "Kitchens, bathrooms and laundries",
        how: "Agreed cabinetry, fixtures, tiles or flooring",
      },
      { job: "Tiles and floor coverings", how: "On their own or as part of a strip-out" },
      { job: "Multi-room interior strip-outs", how: "From a room list or marked-up plans" },
      { job: "Office and retail defits", how: "From the defit schedule or landlord’s scope" },
    ],
    close: "Stairs, lifts and restricted loading areas can change the scope.",
  },
  audiences: {
    title: "Who we work with",
    items: [
      { icon: "home", label: "Homeowners" },
      { icon: "builder", label: "Builders" },
      { icon: "fitout", label: "Fit-out teams" },
      { icon: "office", label: "Office & retail" },
    ],
  },
  process: {
    eyebrow: "What to send",
    title: "What helps us scope a strip-out",
    steps: [
      { n: "01", title: "The rooms", detail: "Which rooms, tiles, fittings or floors need to go." },
      {
        n: "02",
        title: "What stays",
        detail: "Mark anything you want to keep in the photos or plans.",
      },
      {
        n: "03",
        title: "Access details",
        detail: "Stairs, lifts, loading areas and building rules.",
      },
      {
        n: "04",
        title: "Your handover date",
        detail: "When your installer, tiler or landlord needs the space.",
      },
      {
        n: "05",
        title: "Plans or schedules",
        detail: "Marked-up drawings, a room list or a landlord’s schedule.",
      },
      {
        n: "06",
        title: "The finish you need",
        detail: "What your flooring or tiling contractor needs afterwards.",
      },
    ],
  },
  feature: {
    eyebrow: "Office and retail",
    title: "Working to a handover date",
    body: [
      "Include the deadline, building rules, lift access and allowed work hours. We’ll confirm what can be scheduled once the scope is clear.",
    ],
    points: [
      "Defit schedule or landlord’s scope",
      "Loading access",
      "Permitted working hours",
      "The date the space needs to be handed back",
    ],
    image: "/images/services/commercial.jpg",
  },
  feature2: {
    eyebrow: "Tiles and floors",
    title: "Booked on its own or with the strip-out",
    body: [
      "Send the rooms, surfaces and approximate area. Let us know the finish your flooring or tiling contractor needs afterwards.",
    ],
    points: [
      "Which rooms and surfaces",
      "Approximate area",
      "The finish your next trade needs",
      "Anything that needs to stay",
    ],
    image: "/images/sections/strip-out-ready-for-tiler.jpg",
  },
  guarantee: SCOPE_POINTS,
  area: AREA,
};

/* ============================== RUBBISH REMOVAL ============================== */
/* Demo Bros /rubbish-removal order. */

const rubbishV2: V2Page = {
  base: rubbishRemoval,
  mark: "We do the lifting.",
  order: [
    "strip",
    "stats",
    "beforeAfter",
    "services",
    "price",
    "audiences",
    "timeline",
    "process",
    "feature",
    "feature2",
    "builders",
    "guarantee",
    "reviews",
    "area",
    "faqs",
  ],
  strip: [
    "Household clear-outs",
    "Renovation debris",
    "Building waste",
    "Loading scoped from where it sits",
  ],
  stats: STATS("Rubbish removal"),
  beforeAfter: {
    eyebrow: "Before and after",
    title: "The load gone. The space back.",
    pairs: [
      { label: "Garage → cleared", note: "Metro job photo to come" },
      { label: "Renovation debris → gone", note: "Metro job photo to come" },
      { label: "Yard → clear", note: "Metro job photo to come" },
    ],
  },
  price: {
    factorsTitle: "What moves the price",
    factors: ["Volume", "Weight", "Material", "How far it needs to be carried"],
    table: [
      { job: "Household rubbish and clear-outs", how: "Furniture, items or piles" },
      { job: "Renovation and building waste", how: "Timber, plasterboard, tiles or mixed debris" },
      { job: "Brick, concrete and heavier loads", how: "Listed separately, assessed by size" },
      { job: "Yard clear-outs", how: "Branches, green waste and outdoor items" },
    ],
    close:
      "A photo of the entire pile and a note about stairs, parking or lift access help us quote the work.",
  },
  audiences: {
    title: "Who we work with",
    items: [
      { icon: "home", label: "Homeowners" },
      { icon: "builder", label: "Builders" },
      { icon: "renovator", label: "Renovators" },
      { icon: "estate", label: "Estate clear-outs" },
    ],
  },
  process: {
    eyebrow: "What to send",
    title: "What helps us quote the load",
    steps: [
      {
        n: "01",
        title: "A photo of the whole pile",
        detail: "One wide shot showing everything that needs to go.",
      },
      { n: "02", title: "Where it’s sitting", detail: "We can scope loading from that location." },
      {
        n: "03",
        title: "The materials",
        detail: "List anything heavy, dense or restricted separately.",
      },
      { n: "04", title: "Access", detail: "Stairs, gates, parking or lift access." },
      { n: "05", title: "What you’re keeping", detail: "Point out anything that stays." },
      { n: "06", title: "Your suburb", detail: "So we can confirm availability." },
    ],
  },
  feature: {
    eyebrow: "Heavier loads",
    title: "Bricks, concrete and tiles",
    body: [
      "Tell us which materials you have and roughly how much. The weight and access affect how the removal is priced.",
      "If a slab, deck or structure is still in place, mention it so we can discuss the demolition as part of your enquiry.",
    ],
    points: [
      "List dense materials separately",
      "Show the approximate pile size",
      "Mention any slab, deck or structure still in place",
    ],
    image: "/images/sections/rubbish-concrete-load.jpg",
  },
  feature2: {
    eyebrow: "Clear-outs",
    title: "Garages, estates and whole rooms",
    body: [
      "If you’re clearing a garage, deceased estate or whole rooms, point out anything you’re keeping.",
    ],
    points: [
      "Point out anything you’re keeping",
      "Tell us where it’s sitting",
      "Flag stairs, lifts or a longer carry",
    ],
    image: "/images/services/estates.jpg",
  },
  builders: {
    eyebrow: "For builders",
    title: "Building-site waste",
    lead: "Builders can share the preferred loading point and the date the area needs to be clear.",
    points: [
      "Timber, plasterboard, tiles or mixed debris",
      "The preferred loading point",
      "The date the area needs to be clear",
      "Any suspect or restricted materials listed separately",
    ],
    image: "/images/services/sites.jpg",
    note: "Loading point · clear-by date · materials list",
  },
  guarantee: SCOPE_POINTS,
  area: AREA,
};

export const V2_PAGES = {
  "/partial-demolition": partialV2,
  "/strip-out": stripV2,
  "/rubbish-removal": rubbishV2,
} as const;
