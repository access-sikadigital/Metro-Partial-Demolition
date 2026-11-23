/**
 * Everything one service landing page needs. Each page is a data file of this
 * shape rendered by <ServicePage>, in this order: hero (with the quote form),
 * services, scope, process, FAQs, closing call to action.
 *
 * The form heading and prompt for each page live in FORM_COPY (site-data.ts),
 * so the hero card and the quote modal always show the same words.
 */

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
  slug: ServiceSlug;
  meta: { title: string; description: string };

  hero: {
    /** Service and location, e.g. "Partial demolition · Melbourne". */
    eyebrow: string;
    /** The H1 is titleTop + " " + titleRibbon, read as one sentence. */
    titleTop: string;
    titleRibbon: string;
    sub: string;
    /** The hero tick list. */
    points: string[];
    imageDesktop: string;
    imageMobile: string;
  };

  services: {
    eyebrow: string;
    title: string;
    items: {
      slug: string;
      icon: string;
      title: string;
      detail: string;
      /** Illustrative photo of the kind of job (4:3), not a Metro job photo. */
      image: Img;
    }[];
  };

  /** What the quote covers and what moves the price. */
  scope: {
    eyebrow: string;
    title: string;
    body: string[];
  };

  process: {
    eyebrow: string;
    title: string;
    steps: { n: string; icon: string; title: string; detail: string; image?: string }[];
  };

  faqs: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };

  finalCta: {
    title: string;
    lede: string;
  };
}
