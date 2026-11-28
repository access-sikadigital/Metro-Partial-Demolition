/**
 * Before/after pairs shown on every service page, straight under the hero
 * (the Demo Bros position). The same four pairs on every page.
 *
 * Each image is ONE photo holding both halves side by side — before on the
 * left, after on the right; the "Before"/"After" chips are drawn by the site.
 * The photos are illustrative, so they're labelled by job type only (no
 * suburb, no "recent job"). Swap in Metro's own before/after photos under the
 * same file names when they're supplied.
 */
import type { ServiceSlug } from "./pages/types";

export interface BeforeAfterPair {
  id: string;
  label: string;
  note: string;
  /** Combined side-by-side image (before left, after right). */
  image: string;
  /** Separate photos: when both are set the card becomes a drag-to-compare slider. */
  before?: string;
  after?: string;
  /** Service pages this pair suits. Pages only show pairs that match the job. */
  pages: ServiceSlug[];
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "kitchen",
    label: "Kitchen strip out",
    note: "Cupboards, benchtop, splashback and floor out, services capped",
    image: "/images/before-after/kitchen-strip-out.jpg",
    pages: ["strip-out", "kitchen-demolition"],
  },
  {
    id: "bathroom",
    label: "Bathroom strip out",
    note: "Tiles back to render, bath and vanity out, pipes capped",
    image: "/images/before-after/bathroom-strip-out.jpg",
    pages: ["strip-out", "bathroom-demolition"],
  },
  {
    id: "wall",
    label: "Wall removal",
    note: "Kitchen and living opened into one, ceiling propped",
    image: "/images/before-after/wall-removal.jpg",
    pages: ["partial-demolition", "house-demolition", "strip-out", "kitchen-demolition"],
  },
  {
    id: "shed",
    label: "Shed & slab removal",
    note: "Shed down, slab broken out, ground left level",
    image: "/images/before-after/shed-and-slab.jpg",
    pages: ["partial-demolition", "house-demolition", "garage-shed-driveway-removal"],
  },
];

/**
 * Metro's own job photos (shared by Metro on WhatsApp, gathered by Vicky),
 * shown as drag sliders. Live on John's go-ahead (27 Nov). They still load
 * from Vicky's photo preview. When the original files arrive, commit them
 * under public/images/before-after/ and point these paths at them.
 */
const VICKY = "https://metro-project-photo-preview.madebyvicky.chatgpt.site";
const PARTIAL: ServiceSlug[] = ["partial-demolition", "house-demolition"];
const metroPairs: BeforeAfterPair[] = [
  {
    id: "deck",
    label: "Deck removal",
    note: "Timber deck and frame out, ground cleared",
    image: `${VICKY}/deck-removal-after-preview.webp`,
    before: `${VICKY}/deck-removal-before-preview.webp`,
    after: `${VICKY}/deck-removal-after-preview.webp`,
    pages: PARTIAL,
  },
  {
    id: "granny-flat",
    label: "Granny flat removal",
    note: "Structure down and the site cleared",
    image: `${VICKY}/granny-flat-removal-after-preview.webp`,
    before: `${VICKY}/granny-flat-removal-before-preview.webp`,
    after: `${VICKY}/granny-flat-removal-after-preview.webp`,
    pages: PARTIAL,
  },
  {
    id: "shed",
    label: "Shed removal",
    note: "Shed down and taken away, ground left clear",
    image: `${VICKY}/shed-removal-after-preview.webp`,
    before: `${VICKY}/shed-removal-before-preview.webp`,
    after: `${VICKY}/shed-removal-after-preview.webp`,
    pages: [...PARTIAL, "garage-shed-driveway-removal"],
  },
  {
    id: "brick-garage",
    label: "Brick garage demolition",
    note: "Brick garage down, rubble removed",
    image: `${VICKY}/brick-garage-demolition-after-preview.webp`,
    before: `${VICKY}/brick-garage-demolition-before-preview.webp`,
    after: `${VICKY}/brick-garage-demolition-after-preview.webp`,
    pages: [...PARTIAL, "garage-shed-driveway-removal"],
  },
  {
    id: "kitchen-window",
    label: "Kitchen strip-out",
    note: "Cabinets, benchtops and splashback out",
    image: `${VICKY}/kitchen-beside-window-after-preview.webp`,
    before: `${VICKY}/kitchen-beside-window-before-preview.webp`,
    after: `${VICKY}/kitchen-beside-window-after-preview.webp`,
    pages: ["strip-out", "kitchen-demolition"],
  },
  {
    id: "kitchen-island",
    label: "Island kitchen strip-out",
    note: "Island, cabinets and benchtops out",
    image: `${VICKY}/kitchen-with-island-after-preview.webp`,
    before: `${VICKY}/kitchen-with-island-before-preview.webp`,
    after: `${VICKY}/kitchen-with-island-after-preview.webp`,
    pages: ["strip-out", "kitchen-demolition"],
  },
  {
    id: "bathroom-wall",
    label: "Bathroom wall strip-out",
    note: "Tiles and lining off the wall",
    image: `${VICKY}/metro-3053-preview.webp`,
    before: `${VICKY}/metro-3054-preview.webp`,
    after: `${VICKY}/metro-3053-preview.webp`,
    pages: ["strip-out", "bathroom-demolition"],
  },
  {
    id: "shopfront",
    label: "Shopfront strip-out",
    note: "Fit-out removed back to an empty shell",
    image: `${VICKY}/metro-3055-preview.webp`,
    before: `${VICKY}/metro-3056-preview.webp`,
    after: `${VICKY}/metro-3055-preview.webp`,
    pages: ["strip-out"],
  },
];

/**
 * Rubbish removal: AI-generated illustrations made with ChatGPT (John, 28 Nov),
 * cropped to remove the CBD skyline. Labelled as AI on every card. Replace with
 * Metro's own rubbish before/afters when they arrive.
 */
const AI_NOTE = "AI-generated illustration, not a Metro job";
const rubbishPairs: BeforeAfterPair[] = (
  [
    ["hard-rubbish", "Hard rubbish clear-out"],
    ["garage", "Garage clean-out"],
    ["green-waste", "Yard and green waste"],
    ["reno-waste", "Renovation waste"],
  ] as const
).map(([id, label]) => ({
  id: `rubbish-${id}`,
  label,
  note: AI_NOTE,
  image: `/images/before-after/rubbish-${id}-after.jpg`,
  before: `/images/before-after/rubbish-${id}-before.jpg`,
  after: `/images/before-after/rubbish-${id}-after.jpg`,
  pages: ["rubbish-removal"],
}));

/**
 * Only the pairs that match the page's job (John, 26 Nov: before/after must be
 * relevant to the page). The section hides itself when a page has none.
 *
 * Still needed: rear-of-house and deck/driveway pairs for partial demolition,
 * and hard rubbish, garage/shed clean-out, yard, brick and concrete, and
 * renovation-waste pairs for rubbish removal.
 */
export function beforeAfterFor(page: ServiceSlug): BeforeAfterPair[] {
  return [...metroPairs, ...rubbishPairs].filter((p) => p.pages.includes(page));
}

/** Grid that keeps one, two or three cards centred and large, four in a row. */
export function beforeAfterGrid(count: number): string {
  if (count <= 1) return "mx-auto max-w-md grid-cols-1";
  if (count === 2) return "mx-auto max-w-4xl grid-cols-2";
  if (count === 3) return "mx-auto max-w-6xl grid-cols-2 lg:grid-cols-3";
  return "mx-auto max-w-7xl grid-cols-2 lg:grid-cols-4";
}
