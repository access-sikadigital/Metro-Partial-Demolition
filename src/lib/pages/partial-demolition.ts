import type { ServicePageContent } from "./types";

/**
 * /partial-demolition, from the 02-Partial-Demolition copy.
 *
 * Ad groups that land here: Partial Demolition, Extension Demolition, Brand.
 * Preselected service: partial-demolition (DEFAULT_SERVICES in site-data.ts).
 */
export const partialDemolition: ServicePageContent = {
  slug: "partial-demolition",
  meta: {
    title: "Partial Demolition Melbourne | Walls & Extensions | Metro",
    description:
      "Get a quote for partial demolition in Melbourne. Scope an old extension, rear section or selected walls around the parts of your property you plan to keep.",
  },

  hero: {
    eyebrow: "Partial demolition · Melbourne",
    titleTop: "Partial demolition in Melbourne",
    titleRibbon: "that protects what you’re keeping",
    sub: "Taking out the back of a house, removing an old extension or opening up a room? Metro scopes the demolition around the structure and finishes you’re keeping, so you and your builder know where the work stops and what the next trade will walk into.",
    points: [
      "Rear-of-house and extension demolition",
      "Selected internal walls and building sections",
      "Retained areas, access and handover discussed up front",
    ],
    imageDesktop: "/images/hero/partial-demolition-desktop.jpg",
    imageMobile: "/images/hero/partial-demolition-mobile.jpg",
  },

  services: {
    eyebrow: "What we take down",
    title: "Take down the part that’s in the way",
    items: [
      {
        slug: "rear-extensions",
        icon: "excavator",
        title: "Rear extensions and additions",
        detail:
          "Remove an outdated addition or rear section to make room for a new extension. Share where the old and new work meet so we can define the cut line with your builder.",
        image: { src: "/images/services/rear-of-house.jpg", alt: "" },
      },
      {
        slug: "walls-openings",
        icon: "bricks",
        title: "Selected walls and openings",
        detail:
          "Planning a larger opening or a new layout? Tell us what’s changing and send any drawings you have. We’ll flag where structural details need to be clarified before the scope is finalised.",
        image: { src: "/images/services/wall-removal.jpg", alt: "" },
      },
      {
        slug: "internal-demolition",
        icon: "sledgehammer",
        title: "Internal demolition",
        detail:
          "Removing finishes, fittings or several rooms as part of the wider job? Include them in the enquiry so they can be scoped alongside the demolition.",
        image: { src: "/images/services/internal-strip-out.jpg", alt: "" },
      },
      {
        slug: "concrete-structures",
        icon: "tipper",
        title: "Adjoining concrete or structures",
        detail:
          "Mention any slab, deck or outbuilding to be removed as part of the job, and any paving or access routes you’re keeping.",
        image: { src: "/images/services/concrete.jpg", alt: "" },
      },
    ],
  },

  scope: {
    eyebrow: "Your quote",
    title: "Know where the demolition stops",
    body: [
      "A quote should show the sections to be removed, the areas to be retained and the agreed handover condition. Access, temporary protection, waste removal and any work assigned to your builder or another trade should be clear before you book.",
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "From marked-up plans to handover",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Share the scope.",
        detail: "Send your suburb, photos or plans and your builder’s target date.",
        image: "/images/process/01-tell-us.jpg",
      },
      {
        n: "02",
        icon: "helmet",
        title: "Confirm how the work fits together.",
        detail: "Review retained areas, access, structural information and any prerequisites.",
        image: "/images/process/05-protect.jpg",
      },
      {
        n: "03",
        icon: "shovel",
        title: "Agree on the handover.",
        detail:
          "Confirm what’s removed, what’s left in place and when the next trade can take over.",
        image: "/images/process/11-handover-outside.jpg",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQs",
    title: "Questions before you book",
    items: [
      {
        q: "How much does partial demolition cost?",
        a: "It depends on the connection to the existing building, site access, what needs to stay and the amount of material to remove. Photos and marked-up plans help identify what needs to be priced.",
      },
      {
        q: "Can you remove a load-bearing wall?",
        a: "Send the plans or any engineering information you already have. We’ll review what needs to be confirmed before structural work can be included in the quote.",
      },
      {
        q: "Can we stay in the house?",
        a: "Tell us which rooms need to remain in use. Access, services and separation from the work area will affect whether staying is practical during the job.",
      },
      {
        q: "What about permits, services or suspected asbestos?",
        a: "Flag any plans, permit conditions, live services or suspect materials you know about. We’ll identify what needs clarification before work is booked and who is responsible for each item.",
      },
    ],
  },

  finalCta: {
    title: "Give your builder a clear demolition scope",
    lede: "Send the plans or a few photos and tell us what the build needs next.",
  },
};
