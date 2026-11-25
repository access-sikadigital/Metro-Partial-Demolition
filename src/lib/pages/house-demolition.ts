import { partialDemolition } from "./partial-demolition";
import type { ServicePageContent } from "./types";

/**
 * /house-demolition — not in ads at launch. The /partial-demolition page with
 * a hero and meta for whole-house searches. No copy file covers this route,
 * so the wording follows 02-Partial-Demolition and makes no price, timing or
 * credential claims.
 */
export const houseDemolition: ServicePageContent = {
  ...partialDemolition,
  slug: "house-demolition",
  meta: {
    title: "House & Partial Demolition Melbourne | Metro",
    description:
      "Get a free quote for house or partial demolition in Melbourne. Tell us what needs to come down, what you’re keeping and when your builder needs the site.",
  },
  hero: {
    ...partialDemolition.hero,
    eyebrow: "House demolition · Melbourne",
    titleTop: "House and partial demolition in Melbourne.",
    titleRibbon: "Scoped around your build.",
    sub: "Clearing a whole house, or just the part that’s in the way? Tell us what needs to come down, what needs to stay and when your builder needs the site. We’ll help you work out the scope from there.",
    points: [
      "Whole-house and rear-of-house demolition",
      "Selected walls and building sections",
      "Retained areas, access and handover discussed up front",
    ],
  },
  finalCta: {
    title: "Give your builder a clear demolition scope",
    lede: "Send the plans or a few photos and tell us what the build needs next.",
  },
};
