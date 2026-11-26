/**
 * /bathroom-demolition on the Demo Bros strip-out template.
 *
 * Inherits every /strip-out section; the hero, services, FAQs and final CTA
 * are Metro's current bathroom copy (src/lib/pages/kitchen-bathroom.ts), and
 * the price table, reviews title and final CTA body are its pre-rewrite copy
 * (commit 91fe2c1) with PLACEHOLDER figures.
 */
import { bathroomDemolition as page } from "@/lib/pages/kitchen-bathroom";
import { previewOnly, PLACEHOLDER_TRUST, PRICING } from "@/lib/db/placeholder-content";
import { stripOutContent } from "./strip-out";
import type { HeroPointIcon, StripOutContent } from "./strip-out-types";

const HERO_ICONS: HeroPointIcon[] = ["bath", "layers", "droplets"];

export const bathroomDemolitionContent: StripOutContent = {
  ...stripOutContent,
  slug: page.slug,

  hero: {
    ...page.hero,
    points: page.hero.points.map((label, i) => ({ label, icon: HERO_ICONS[i] ?? "hammer" })),
  },

  pricing: {
    ...stripOutContent.pricing,
    title: "What bathroom demolition costs in Melbourne.",
    table: [
      { job: "Bathroom strip out", from: PRICING.bathroom },
      { job: "Laundry strip out", from: PRICING.laundry },
      { job: "Ensuite + main bathroom", from: "Quoted on the job" },
      { job: "Tile removal only", from: "Quoted on the job" },
      { job: "Fibro or pre-1990 sheeting", from: "Quoted after assessment" },
    ],
    note: "The bottom three vary too much for a starting number to mean anything. Send photos and they're priced properly, in writing, within 24 hours.",
  },

  services: { ...stripOutContent.services, ...page.services },

  reviewsTitle: `${PLACEHOLDER_TRUST.rating} stars from bathroom renovations across Melbourne.`,

  faqs: page.faqs,

  finalCta: {
    ...page.finalCta,
    body: previewOnly(
      `Bathrooms from ${PRICING.bathroom}. Out in a day. Your tiler starts tomorrow.`,
    ),
  },
};
