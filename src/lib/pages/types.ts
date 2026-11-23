/**
 * Everything one service landing page needs. Each page is a data file of this
 * shape rendered by <ServicePage>; optional blocks are simply left out.
 */
import type { BeforeAfterPair } from "./before-after";

export type Img = { src: string; alt: string };

/** Every service landing page route (without the leading slash). */
export type ServiceSlug =
  | "partial-demolition"
  | "house-demolition"
  | "strip-out"
  | "kitchen-demolition"
  | "bathroom-demolition"
  | "garage-shed-driveway-removal"
  | "rubbish-removal";

export interface ServicePageContent {
  /** Route slug, also the key used to pick reviews. */
  slug: ServiceSlug;
  meta: { title: string; description: string };

  /**
   * Before/after pairs shown straight after the stats (Demo Bros order).
   * Leave out for pages with no relevant pair. A pair whose photo isn't in
   * /public yet renders as a branded placeholder of the same size.
   */
  beforeAfter?: BeforeAfterPair[];

  hero: {
    eyebrow: string;
    titleTop: string;
    titleRibbon: string;
    sub: string;
    /** `icon` names a brand icon in /public/icons. */
    bullets: { icon: string; label: string }[];
    imageDesktop: string;
    imageMobile: string;
  };

  /** "What we take out / what we clear" — the service router. */
  services: {
    eyebrow: string;
    title: string;
    lede: string;
    items: {
      slug: string;
      icon: string;
      title: string;
      detail: string;
      price: string | null;
      /** Card photo (4:3), in /public/images/services. */
      image: Img;
    }[];
  };

  pricing: {
    eyebrow: string;
    title: string;
    lede: string;
    table: { job: string; how: string; from: string }[];
    note: string;
    factorsTitle: string;
    factors: string[];
    close: string;
    closeEmphasis: string;
  };

  /** The dark, photo-led argument section ("the part nobody explains"). */
  feature: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    points: string[];
    tag: string;
    imageMain: Img;
    imageDetail: Img;
  };

  included?: {
    eyebrow: string;
    title: string;
    lede: string;
    groups: { label: string; items: { item: string; means: string }[] }[];
    close: string;
  };

  timeline?: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { n: string; title: string; when: string; detail: string }[];
    close: string;
  };

  process: {
    eyebrow: string;
    title: string;
    /** `image` is the card's background photo; steps without one use a placeholder. */
    steps: { n: string; icon: string; title: string; detail: string; image?: string }[];
  };

  /** The yellow band — asbestos on demolition pages, hoarding on rubbish. */
  callout: {
    eyebrow: string;
    title: string;
    body: string[];
    points: string[];
  };

  builders: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    image: Img;
  };

  guarantees: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: string; title: string; detail: string }[];
    image: Img;
  };

  reviewsTitle: string;

  faqs: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };

  finalCta: {
    title: string;
    lede: string;
    body: string;
  };
}
