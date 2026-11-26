/**
 * /kitchen-demolition on the Demo Bros strip-out template.
 *
 * Inherits every /strip-out section; the hero, services, FAQs and final CTA
 * are Metro's current kitchen copy (src/lib/pages/kitchen-bathroom.ts), and
 * the price table, reviews title and final CTA body are its pre-rewrite copy
 * (commit 91fe2c1) with PLACEHOLDER figures.
 */
import { kitchenDemolition as page } from "@/lib/pages/kitchen-bathroom";
import { previewOnly, PLACEHOLDER_TRUST, PRICING } from "@/lib/db/placeholder-content";
import { stripOutContent } from "./strip-out";
import type { HeroPointIcon, StripOutContent } from "./strip-out-types";

const HERO_ICONS: HeroPointIcon[] = ["hammer", "layers", "package"];

export const kitchenDemolitionContent: StripOutContent = {
  ...stripOutContent,
  slug: page.slug,

  hero: {
    ...page.hero,
    points: page.hero.points.map((label, i) => ({ label, icon: HERO_ICONS[i] ?? "hammer" })),
  },

  pricing: {
    ...stripOutContent.pricing,
    title: "What kitchen demolition costs in Melbourne.",
    table: [
      { job: "Kitchen demolition", from: PRICING.kitchen },
      { job: "Kitchen + bathroom together", from: "Quoted on the job" },
      { job: "Kitchen + wall removal", from: "Quoted on the job" },
      { job: "Floor tiles & screed", from: "Quoted on the job" },
      { job: "Anything with asbestos", from: "Quoted after assessment" },
    ],
    note: "The bottom four vary too much for a starting number to mean anything. Send photos and they're priced properly, in writing, within 24 hours.",
  },

  services: { ...stripOutContent.services, ...page.services },

  reviewsTitle: `${PLACEHOLDER_TRUST.rating} stars from kitchen renovations across Melbourne.`,

  faqs: page.faqs,

  finalCta: {
    ...page.finalCta,
    body: previewOnly(`Kitchens from ${PRICING.kitchen}. Out in a day. Rubbish gone.`),
  },
};
