/**
 * Content shape for the Demo Bros "house demolition" replica template
 * (src/components/db/HouseDemolitionPage.tsx), used by /partial-demolition and
 * /house-demolition. One object per page, in src/lib/db-content/.
 *
 * Plain, serialisable data only: it is passed from the server route to the
 * client component as a prop.
 *
 * Every field maps to one section of the Demo Bros page, in its order:
 * Hero → TrustStrip → TrustStats → BeforeAfter → Price → Audiences → Timeline →
 * Included → CompareQuotes → Process → Asbestos → Builders → Guarantee →
 * Reviews → ServiceArea → Faqs → FinalCta.
 */
import type { Img, ServiceSlug } from "@/lib/pages/types";
import type { BeforeAfterPair } from "@/lib/before-after";
import type { Testimonial } from "@/lib/db/placeholder-content";

/** Lucide icon keys the hero tick list can use (resolved in the component). */
export type HeroBulletIcon = "layers" | "bricks" | "shield" | "home" | "file" | "plug";

/** Lucide icon keys for the trust stats row. */
export type TrustStatId = "rating" | "quote" | "liability" | "crew";

/** Lucide icon keys for the guarantee cards (Metro's original icon names). */
export type GuaranteeIcon = "yardstick" | "helmet" | "builder" | "tools" | "tipper";

export interface HouseDemolitionContent {
  slug: ServiceSlug;

  hero: {
    eyebrow: string;
    /** H1 = titleTop + " " + titleRibbon; the ribbon gets the hand-drawn underline. */
    titleTop: string;
    titleRibbon: string;
    sub: string;
    bullets: { icon: HeroBulletIcon; label: string }[];
    imageDesktop: string;
    imageMobile: string;
  };

  trustStats: { id: TrustStatId; value: string; label: string }[];

  beforeAfter: {
    eyebrow: string;
    title: string;
    pairs: BeforeAfterPair[];
  };

  pricing: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Column headings of the price table. */
    tableHead: { job: string; from: string };
    table: { job: string; how: string; from: string }[];
    note: string;
    close: string;
    closeEmphasis: string;
  };

  /** Shown in the Price section where Demo Bros has "What moves the price". */
  scope: { eyebrow: string; title: string; body: string[] };

  /** Metro's "What we take down" list, shown inside the same Price card. */
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; detail: string }[];
  };

  audiences: {
    title: string;
    items: { icon: "home" | "builder" | "developer"; label: string }[];
  };

  timeline: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: {
      n: string;
      title: string;
      /** Duration chip on the photo tile (desktop). */
      when?: string;
      detail: string;
      /** One-line version for the phone row; falls back to `detail`. */
      short?: string;
      image: string;
      imageAlt: string;
    }[];
  };

  included: {
    eyebrow: string;
    title: string;
    lede: string;
    /**
     * Docket header, left, after the item count: "{total} {headlineAfterCount}".
     * A string, not a function — this object crosses the server → client
     * boundary as a prop, so it has to stay plain data.
     */
    headlineAfterCount: string;
    /** Docket header, right. */
    subline: string;
    groups: { label: string; items: { item: string; means: string }[] }[];
    close: string;
  };

  compare: {
    eyebrow: string;
    title: string;
    body: string[];
    /** Card header label. */
    cardLabel: string;
    /** Each point is "Head. Rest of the sentence" — split on the first ". ". */
    points: string[];
    close: string;
  };

  process: {
    eyebrow: string;
    title: string;
    steps: { n: string; title: string; detail: string }[];
  };

  asbestos: {
    eyebrow: string;
    title: string;
    body: string[];
    points: string[];
    image: Img;
  };

  builders: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    image: Img;
    /** Line under the photo. */
    caption: string;
  };

  guarantee: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: GuaranteeIcon; title: string; detail: string }[];
  };

  reviews: { title: string; items: Testimonial[] };

  serviceArea: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string;
    /** The map-pin line under the copy. */
    tag: string;
  };

  faqs: { eyebrow: string; title: string; items: { q: string; a: string }[] };

  finalCta: { title: string; lede: string; body: string; fine: string };
}
