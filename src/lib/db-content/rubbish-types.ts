/**
 * Content shape for the Demo Bros rubbish-removal replica page
 * (src/components/db/RubbishRemovalPage.tsx). Plain data only, so it can be
 * passed from the server route to the client component.
 */
import type { BeforeAfterPair } from "@/lib/before-after";
import type { Testimonial } from "@/lib/db/placeholder-content";
import type { Img, ServiceSlug } from "@/lib/pages/types";

export interface RubbishRemovalContent {
  slug: ServiceSlug;

  hero: {
    eyebrow: string;
    /** The H1 is titleTop + " " + titleRibbon; the ribbon gets the hand-drawn swoosh. */
    titleTop: string;
    titleRibbon: string;
    sub: string;
    /** `icon` keys a lucide icon in the page component. */
    points: { icon: string; label: string }[];
    imageDesktop: string;
    imageMobile: string;
  };

  /** `id` keys the icon; "rating" renders the Google mark and stars. */
  trustStats: { id: string; value: string; unit: string; label: string }[];

  beforeAfter: {
    eyebrow: string;
    title: string;
    description?: string;
    pairs: BeforeAfterPair[];
  };

  pricing: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Panel labels: the two group headings and the "From" column header. */
    labels: { starting: string; from: string; onJob: string };
    /** Rows whose `from` starts with "$" are starting prices; the rest are priced on the job. */
    table: { job: string; how: string; from: string }[];
    note: string;
    /** "What moves the price" panel — Metro's current scope copy. */
    scope: { title: string; body: string[] };
    close: string;
    closeEmphasis: string;
  };

  services: {
    eyebrow: string;
    title: string;
    lede?: string;
    items: {
      slug: string;
      title: string;
      /** Phone label; falls back to `title`. */
      shortTitle?: string;
      detail: string;
      image: Img;
      imagePosition?: string;
      price?: string | null;
      /** Optional deep-link id on the card. */
      anchor?: string;
    }[];
  };

  audiences: {
    title: string;
    /** `icon` keys a lucide icon: home, builder, developer. */
    items: { icon: string; label: string }[];
  };

  process: {
    eyebrow: string;
    title: string;
    steps: {
      n: string;
      title: string;
      detail: string;
      /** Phone line; falls back to `detail`. */
      short?: string;
      image: string;
      alt: string;
    }[];
  };

  heavyStuff: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    points: string[];
    image: Img;
  };

  hoarding: {
    eyebrow: string;
    title: string;
    body: string[];
    points: string[];
    close?: string;
    image: Img;
  };

  builders: {
    eyebrow: string;
    title: string;
    lead: string;
    body?: string;
    points: string[];
    image: Img;
    /** The credential strip under the photo. */
    credential: string;
  };

  guarantee: {
    eyebrow: string;
    title: string;
    description: string;
    /** `icon` keys a lucide icon: yardstick, barrow, shovel, tipper. */
    items: { icon: string; title: string; detail: string }[];
  };

  reviews: {
    title: string;
    items: Testimonial[];
  };

  serviceArea: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string;
    /** The coverage line with the map pin. */
    coverage: string;
  };

  faqs: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };

  finalCta: {
    title: string;
    lede: string;
    body?: string;
    fine?: string;
  };
}
