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
export interface BeforeAfterPair {
  id: string;
  label: string;
  note: string;
  image: string;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "kitchen",
    label: "Kitchen strip out",
    note: "Cupboards, benchtop, splashback and floor out, services capped",
    image: "/images/before-after/kitchen-strip-out.jpg",
  },
  {
    id: "bathroom",
    label: "Bathroom strip out",
    note: "Tiles back to render, bath and vanity out, pipes capped",
    image: "/images/before-after/bathroom-strip-out.jpg",
  },
  {
    id: "wall",
    label: "Wall removal",
    note: "Kitchen and living opened into one, ceiling propped",
    image: "/images/before-after/wall-removal.jpg",
  },
  {
    id: "shed",
    label: "Shed & slab removal",
    note: "Shed down, slab broken out, ground left level",
    image: "/images/before-after/shed-and-slab.jpg",
  },
];
