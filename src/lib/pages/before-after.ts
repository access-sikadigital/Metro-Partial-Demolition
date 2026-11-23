/**
 * Before / after pairs, the same idea as the Demo Bros "Same room, one day
 * apart" section. Each image is ONE photo holding both halves side by side
 * (before on the left, after on the right); the labels are drawn by the site.
 *
 * Labelled by job type only — no suburb or "recent job" wording — because
 * the first set is illustrative. Swap in Metro's own before/after photos
 * (same file names) as soon as they're supplied.
 */
export interface BeforeAfterPair {
  id: "kitchen" | "bathroom" | "wall" | "shed";
  label: string;
  note: string;
  image: string;
}

const PAIRS: Record<BeforeAfterPair["id"], BeforeAfterPair> = {
  kitchen: {
    id: "kitchen",
    label: "Kitchen strip out",
    note: "Cupboards, benchtop, splashback and floor out, services capped",
    image: "/images/before-after/kitchen-strip-out.jpg",
  },
  bathroom: {
    id: "bathroom",
    label: "Bathroom strip out",
    note: "Tiles back to render, bath and vanity out, pipes capped",
    image: "/images/before-after/bathroom-strip-out.jpg",
  },
  wall: {
    id: "wall",
    label: "Wall removal",
    note: "Kitchen and living opened into one, ceiling propped",
    image: "/images/before-after/wall-removal.jpg",
  },
  shed: {
    id: "shed",
    label: "Shed & slab removal",
    note: "Shed down, slab broken out, ground left level",
    image: "/images/before-after/shed-and-slab.jpg",
  },
};

/** The pairs a page shows, most relevant first. */
export function beforeAfter(...ids: BeforeAfterPair["id"][]): BeforeAfterPair[] {
  return ids.map((id) => PAIRS[id]);
}
