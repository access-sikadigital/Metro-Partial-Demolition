import type { Img, ServicePageContent, ServiceSlug } from "@/lib/pages/types";

/**
 * Content for the Demo Bros strip-out template (`StripOutPage`).
 *
 * The hero, services, scope, process, FAQs and final CTA are Metro's current
 * page copy (src/lib/pages/*). Pricing, the asbestos band, "the part nobody
 * explains", guarantees and the reviews title are Metro's pre-rewrite copy
 * (commit 91fe2c1), with PLACEHOLDER figures from @/lib/db/placeholder-content.
 *
 * Shared sections (trust strip, stats, before/after, audiences, reviews,
 * service area) read their data straight from the shared modules.
 */

/** Keys for the icon disc beside each hero point. */
export type HeroPointIcon =
  | "hammer"
  | "layers"
  | "building"
  | "package"
  | "bath"
  | "droplets"
  | "warehouse"
  | "truck"
  | "fence";

/** Keys for the guarantee card icons (Metro's pre-rewrite icon names). */
export type GuaranteeIcon = "yardstick" | "builder" | "flashlight" | "tools" | "helmet" | "tipper";

export interface StripOutContent {
  slug: ServiceSlug;

  hero: Omit<ServicePageContent["hero"], "points"> & {
    points: { icon: HeroPointIcon; label: string }[];
  };

  pricing: {
    eyebrow: string;
    title: string;
    lede: string;
    /** `from` is a starting price ("$…") or the honest "quoted on the job". */
    table: { job: string; from: string }[];
    note: string;
    close: string;
    closeEmphasis: string;
  };

  /** Shown where Demo Bros has "What moves the price". */
  scope: ServicePageContent["scope"];

  services: ServicePageContent["services"] & {
    lede?: string;
    items: (ServicePageContent["services"]["items"][number] & { price?: string | null })[];
  };

  process: ServicePageContent["process"];

  /** The charcoal asbestos band. */
  asbestos: {
    eyebrow: string;
    title: string;
    body: string[];
    points: string[];
  };

  /** "The part nobody explains" — the photo stands in for Demo Bros' video. */
  nobodyExplains: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    points: string[];
    image: Img;
  };

  guarantees: {
    eyebrow: string;
    title: string;
    description: string;
    items: { icon: GuaranteeIcon; title: string; detail: string }[];
  };

  reviewsTitle: string;

  faqs: ServicePageContent["faqs"];

  finalCta: ServicePageContent["finalCta"] & { body?: string };
}
