/**
 * Server-only. Resolves every "/images/…" path in a page's content against
 * what is actually in /public, at build time.
 *
 * The content files already point at the photos being produced (hero/,
 * process/, before-after/, sections/). Until a file exists:
 *   - if it has a FALLBACK below, the current photo is used instead;
 *   - otherwise the path becomes "" and the component draws a branded
 *     placeholder in the same space.
 * Dropping the finished photo into /public/images and redeploying is all it
 * takes to swap it in — no code change.
 */
import { existsSync } from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

/** Planned photo → the photo shown until it arrives. */
const FALLBACK: Record<string, string> = {
  // Heroes
  "/images/hero/partial-demolition-desktop.jpg": "/images/hero/house-demolition-desktop.jpg",
  "/images/hero/partial-demolition-mobile.jpg": "/images/hero/house-demolition-mobile.jpg",
  "/images/hero/kitchen-demolition-desktop.jpg": "/images/hero/strip-out-desktop.jpg",
  "/images/hero/kitchen-demolition-mobile.jpg": "/images/hero/strip-out-mobile.jpg",
  "/images/hero/bathroom-demolition-desktop.jpg": "/images/hero/strip-out-desktop.jpg",
  "/images/hero/bathroom-demolition-mobile.jpg": "/images/hero/strip-out-mobile.jpg",
  "/images/hero/garage-shed-driveway-desktop.jpg": "/images/hero/house-demolition-desktop.jpg",
  "/images/hero/garage-shed-driveway-mobile.jpg": "/images/hero/house-demolition-mobile.jpg",
  // "The part nobody explains" photo pairs
  "/images/sections/house-what-stays-up.jpg": "/images/excavator-sky.jpg",
  "/images/sections/house-clean-cut.jpg": "/images/excavator-wall.jpg",
  "/images/sections/strip-out-ready-for-tiler.jpg": "/images/breaker-wall.jpg",
  "/images/sections/strip-out-made-safe.jpg": "/images/jackhammer-slab.jpg",
  "/images/sections/rubbish-heavy-lift.jpg": "/images/crew-shovel.jpg",
  "/images/sections/rubbish-concrete-load.jpg": "/images/loader-overhead.jpg",
  "/images/sections/garage-slab-break.jpg": "/images/jackhammer-slab.jpg",
  "/images/sections/garage-slab-mesh.jpg": "/images/loader-overhead.jpg",
  "/images/sections/where-we-work.jpg": "/images/excavator-sky.jpg",
};

/*
 * Only files that were FOUND are remembered. Caching "missing" too meant a
 * long-running dev server kept showing placeholders for photos added after it
 * first rendered the page, until it was restarted.
 */
const found = new Set<string>();
function exists(src: string): boolean {
  if (found.has(src)) return true;
  const hit = existsSync(path.join(PUBLIC_DIR, src));
  if (hit) found.add(src);
  return hit;
}

/** One path: itself if present, else its fallback if present, else "". */
export function resolveImage(src: string): string {
  if (exists(src)) return src;
  const fb = FALLBACK[src];
  return fb && exists(fb) ? fb : "";
}

/** Deep-copies plain content data, resolving every "/images/…" string in it. */
export function resolveImages<T>(value: T): T {
  if (typeof value === "string") {
    return (value.startsWith("/images/") ? resolveImage(value) : value) as T;
  }
  if (Array.isArray(value)) return value.map((v) => resolveImages(v)) as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = resolveImages(v);
    return out as T;
  }
  return value;
}
