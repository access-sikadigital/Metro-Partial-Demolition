import { PRICING, SITE, TRUST } from "../site-data";
import { houseDemolition } from "./house-demolition";
import type { ServicePageContent } from "./types";

/**
 * /partial-demolition — Metro's core Google Ads page.
 *
 * Ad groups that land here: Partial Demolition, Extension Demolition, Brand.
 * Keywords: partial demolition melbourne / company / services / contractor,
 * partial house demolition melbourne, extension demolition melbourne,
 * metro partial demolition.
 *
 * Built off the house-demolition page, with full knock-downs moved to the
 * bottom so the page matches "partial" intent first.
 */
export const partialDemolition: ServicePageContent = {
  ...houseDemolition,
  slug: "partial-demolition",
  meta: {
    title: `Partial Demolition Melbourne | ${SITE.name}`,
    description: `Melbourne partial demolition: rear-of-house and extension demolition, wall removals from ${PRICING.wall}, garages and sheds from ${PRICING.outbuilding}. The part you're keeping stays propped and protected. Fixed price in writing within 24 hours.`,
  },

  hero: {
    eyebrow: "Partial demolition · Melbourne",
    titleTop: "Partial demolition, Melbourne.",
    titleRibbon: "Keep the rest standing.",
    sub: "Rear-of-house and extension demolition, wall removals, garages and sheds. We prop and protect the part you're keeping, handle permits and asbestos, and send a fixed, itemised price in writing within 24 hours.",
    bullets: [
      { icon: "helmet", label: "Propping and protection before anything comes down" },
      { icon: "bricks", label: `Wall removals from ${PRICING.wall}` },
      { icon: "floor-plan", label: "Permits and service isolations handled" },
      { icon: "builder", label: "Asbestos removed by our own licensed crew" },
    ],
    imageDesktop: "/images/hero/partial-demolition-desktop.jpg",
    imageMobile: "/images/hero/partial-demolition-mobile.jpg",
  },

  services: {
    eyebrow: "What we take down",
    title: "The part you don't want. Nothing else.",
    lede: "Not on the list? If it's attached to the building and you want it gone, tell us what it is.",
    items: [
      {
        slug: "rear-of-house",
        image: {
          src: "/images/services/rear-of-house.jpg",
          alt: "Rear extension removed and the junction wall sealed with a heavy tarp, house still standing",
        },
        icon: "excavator",
        title: "Rear-of-house & extension demolition",
        detail:
          "The back half comes off, the front half stays lived-in. Cut line set out, roof and walls propped, the junction weather-sealed before we leave.",
        price: null,
      },
      {
        slug: "wall-removal",
        image: {
          src: "/images/services/wall-removal.jpg",
          alt: "Wall opened between kitchen and living room, ceiling held on temporary steel props",
        },
        icon: "bricks",
        title: "Wall removal",
        detail:
          "Opening up a kitchen or knocking two rooms into one. Load-bearing walls are propped and coordinated with your engineer before anything moves.",
        price: `From ${PRICING.wall}`,
      },
      {
        slug: "internal-strip-out",
        image: {
          src: "/images/services/internal-strip-out.jpg",
          alt: "Room stripped back to the timber frame, debris bagged and the floor swept",
        },
        icon: "sledgehammer",
        title: "Internal demolition & strip out",
        detail:
          "Kitchens, bathrooms, ceilings, floors or whole rooms back to the frame, ready for your builder.",
        price: `From ${PRICING.kitchen}`,
      },
      {
        slug: "outbuildings",
        image: {
          src: "/images/services/outbuildings.jpg",
          alt: "Crew lifting the boards off an old timber deck under a pergola",
        },
        icon: "dozer",
        title: "Garages, sheds, carports & decks",
        detail:
          "Brick garages, carports, old sheds and rotten decks. Taken down, slab out if you want it, nothing left behind.",
        price: `From ${PRICING.outbuilding}`,
      },
      {
        slug: "concrete",
        image: {
          src: "/images/services/concrete.jpg",
          alt: "Mini excavator breaking up an old concrete driveway while dust is hosed down",
        },
        icon: "tipper",
        title: "Driveway, path & slab removal",
        detail:
          "Driveways, paths, patios and old slabs cut, broken and carted away, with the ground left level for what comes next.",
        price: null,
      },
      {
        slug: "asbestos",
        image: {
          src: "/images/services/asbestos.jpg",
          alt: "Asbestos crew in coveralls and respirators lowering a whole fibro sheet onto plastic sheeting",
        },
        icon: "builder",
        title: "Asbestos removal",
        detail:
          "Assessed before we quote, removed by our own licensed crew, disposed of properly — inside the same fixed price.",
        price: null,
      },
    ],
  },

  pricing: {
    ...houseDemolition.pricing,
    title: "What partial demolition actually costs in Melbourne.",
    table: [
      {
        job: "Non-structural wall removal",
        how: "Stud or plasterboard wall, one room",
        from: PRICING.wall,
      },
      { job: "Garage, shed or carport", how: "Single, clear access", from: PRICING.outbuilding },
      {
        job: "Kitchen or bathroom strip out",
        how: "Back to the frame, rubbish gone",
        from: PRICING.kitchen,
      },
      {
        job: "Load-bearing wall removal",
        how: "Propped, to your engineer's detail",
        from: "Quoted on the job",
      },
      {
        job: "Rear-of-house or extension demolition",
        how: "Cut line, propping and sealing",
        from: "Quoted on the job",
      },
      {
        job: "Anything with asbestos",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "The bottom three vary too much for a starting number to mean anything, so we don't invent one. They're priced properly, in writing, within 24 hours.",
  },

  included: {
    eyebrow: "What's included",
    title: "What's in the price.",
    lede: "Everything below is in the number we quote you. Hold your other quotes against this list — anything here that isn't in theirs is a cost that turns up later.",
    groups: [
      {
        label: "Before we start",
        items: [
          { item: "Permits, where needed", means: "We tell you at the quote and coordinate them" },
          { item: "Asbestos assessment", means: "Before the quote is final, not on the day" },
          { item: "Neighbour notification", means: "In writing, before the noise starts" },
          { item: "Cut line agreed", means: "Marked out with you and your builder" },
        ],
      },
      {
        label: "Protecting what stays",
        items: [
          { item: "Temporary propping", means: "Under any roof or wall that's staying" },
          { item: "Service isolation", means: "Power, gas and water where they cross the cut" },
          {
            item: "Dust screens & floor protection",
            means: "For the rooms you're still living in",
          },
          { item: "Weather-sealed junction", means: "Before we leave site" },
        ],
      },
      {
        label: "On site & handover",
        items: [
          { item: "Licensed asbestos removal", means: "By our own crew, disposed of properly" },
          { item: "Demolition to the cut line", means: "Not a brick past it" },
          { item: "All waste removed", means: "Sorted and recycled where we can" },
          { item: "Swept & photographed", means: "Ready for your builder" },
        ],
      },
    ],
    close:
      "If something genuinely sits outside that — a big tree needing an arborist, a retaining wall on the boundary — we price it as its own line and show it to you before you sign. What we don't do is leave it off the quote and mention it later.",
  },

  timeline: {
    eyebrow: "How long it takes",
    title: "From first call to a site your builder can start on.",
    lede: "The demolition is usually the short part. If your job needs a permit, that sets the start date — so we get it moving the day you say yes.",
    steps: [
      {
        n: "01",
        title: "Quote",
        when: "Within 24 hours",
        detail: "Itemised and fixed, off your photos or a site visit.",
      },
      {
        n: "02",
        title: "Permits, if needed",
        when: "Told at the quote",
        detail: "Many partial jobs don't need one. If yours does, we coordinate it.",
      },
      {
        n: "03",
        title: "Asbestos out",
        when: "1–2 days",
        detail: "Done before the demolition starts, not around it.",
      },
      {
        n: "04",
        title: "Demolition",
        when: "1 day to 1 week",
        detail: "A wall or garage is usually a day. Rear-of-house is generally inside a week.",
      },
      {
        n: "05",
        title: "Handover",
        when: "Same week",
        detail: "Sealed, swept, photographed. Your builder starts.",
      },
    ],
    close:
      "Tell us the date your builder wants the site and we'll work back from it — or tell you straight away if it can't be done, while there's still time to move things around.",
  },

  reviewsTitle: `${TRUST.rating} stars from renovations and extensions across Melbourne.`,

  faqs: {
    eyebrow: "Questions we get every week",
    title: "Straight answers, starting with the one everybody asks.",
    items: [
      {
        q: "What does partial demolition cost?",
        a: `Non-structural walls start at ${PRICING.wall} and garages or sheds at ${PRICING.outbuilding}. Rear-of-house and extension demolition, load-bearing walls and anything with asbestos vary too much for a starting number, so we quote those on the job. Either way you get an itemised figure in writing within 24 hours, and that figure is what you pay.`,
      },
      {
        q: "Can we keep living in the house during a partial demolition?",
        a: "Usually, yes. We seal off the part being demolished with dust screens, keep a safe path in and out, and isolate only the services that cross the cut line. We'll tell you at the quote if there's a day or two you'd be better off out.",
      },
      {
        q: "Can you remove a load-bearing wall?",
        a: "Yes. We prop the structure above before anything comes out and work to your engineer's detail for the beam or lintel that replaces it. If you don't have an engineer yet, we can point you to one.",
      },
      {
        q: "Do I need a permit for partial demolition?",
        a: "It depends on what's coming down and where. Many internal and outbuilding jobs don't need one; rear-of-house and structural work often does. We tell you which yours is when we quote, and coordinate it if it's needed.",
      },
      {
        q: "Do you handle asbestos?",
        a: "We do it ourselves rather than bringing someone else in. Anything pre-1990 is assessed before we quote, removed by our own licensed crew, disposed of properly, and it sits inside the same fixed price.",
      },
      {
        q: "How long does it take?",
        a: "A non-structural wall or garage is usually a day. A rear-of-house or extension demolition is generally inside a week once any permit is through. You get the dates with the quote.",
      },
      {
        q: "Do you do full house demolition too?",
        a: `Yes — permits, all four disconnections, asbestos and a level block, from ${PRICING.smallHouse} for a small house. Most of our work is partial, which is why we're set up to protect what stays.`,
      },
      {
        q: "Are you insured?",
        a: `${TRUST.licence} with ${TRUST.liability} public liability. Certificates on request before we start.`,
      },
    ],
  },

  finalCta: {
    title: "Get your fixed price.",
    lede: "Tell us what's coming down and what's staying. We'll send an itemised number in writing within 24 hours. Free, no obligation, and it doesn't move after that.",
    body: `Walls from ${PRICING.wall}. Garages and sheds from ${PRICING.outbuilding}. What stays, stays protected.`,
  },
};
