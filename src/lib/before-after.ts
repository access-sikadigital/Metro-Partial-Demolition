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
  image: string;
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
    pages: [
      "partial-demolition",
      "house-demolition",
      "garage-shed-driveway-removal",
      "rubbish-removal",
    ],
  },
];

/**
 * Four pairs for a page: the ones that match its job first, then the rest to
 * fill the row, so the section never looks half-empty. Rubbish removal has
 * only one matching pair so far: it needs garage, yard and room clear-out
 * photos. When those arrive, add them here and they'll lead.
 */
export function beforeAfterFor(page: ServiceSlug, count = 4): BeforeAfterPair[] {
  const matched = beforeAfterPairs.filter((p) => p.pages.includes(page));
  const rest = beforeAfterPairs.filter((p) => !p.pages.includes(page));
  return [...matched, ...rest].slice(0, count);
}
