import { PRICING, SITE, TRUST } from "../site-data";
import { stripOut } from "./strip-out";
import { beforeAfter } from "./before-after";
import type { ServicePageContent } from "./types";

/**
 * Kitchen and bathroom demolition pages. Same body as /strip-out, with the
 * hero, meta, service order, price table and FAQs matched to the search.
 * These clicks are the most expensive in the account (A$18–26), so message
 * match on the landing page matters more here than anywhere else.
 */

const [kbl, internal, wallTile, commercial, floors, asbestos] = stripOut.services.items;

/** /kitchen-demolition — ad group: Kitchen (removal / demolition). */
export const kitchenDemolition: ServicePageContent = {
  ...stripOut,
  slug: "kitchen-demolition",
  meta: {
    title: `Kitchen Demolition & Removal Melbourne from ${PRICING.kitchen} | ${SITE.name}`,
    description: `Kitchen demolition and removal across Melbourne from ${PRICING.kitchen}. Cabinets, benchtops, splashback and tiles out in a day, services capped, rubbish gone. Fixed price in writing within 24 hours.`,
  },
  hero: {
    eyebrow: "Kitchen demolition · Melbourne",
    titleTop: `Kitchen removal from ${PRICING.kitchen}.`,
    titleRibbon: "Out in a day.",
    sub: "Cabinets, benchtop, splashback, tiles and appliances out by knock-off, plumbing and power capped, rubbish gone. Your new kitchen goes in on schedule. Fixed price in writing within 24 hours.",
    bullets: [
      { icon: "sledgehammer", label: `Kitchen demolition from ${PRICING.kitchen}` },
      { icon: "tape-measure", label: "Out in a day, so your installer starts on time" },
      { icon: "water-pipes", label: "Plumbing and power capped and made safe" },
      { icon: "tipper", label: "Skip, rubbish and clean-up included" },
    ],
    imageDesktop: "/images/hero/kitchen-demolition-desktop.jpg",
    imageMobile: "/images/hero/kitchen-demolition-mobile.jpg",
  },
  services: {
    ...stripOut.services,
    title: "Just the kitchen, or the wall next to it too.",
    items: [
      {
        ...kbl,
        title: "Full kitchen demolition",
        detail:
          "Cabinets, benchtop, splashback, tiles, rangehood and appliances. In at seven, out by knock-off, services capped for your plumber and sparky.",
      },
      wallTile,
      floors,
      internal,
      asbestos,
      commercial,
    ],
  },
  pricing: {
    ...stripOut.pricing,
    title: "What kitchen demolition costs in Melbourne.",
    table: [
      {
        job: "Kitchen demolition",
        how: "Cabinets, benchtop, splashback, tiles",
        from: PRICING.kitchen,
      },
      {
        job: "Kitchen + bathroom together",
        how: "One crew, one day where it fits",
        from: "Quoted on the job",
      },
      {
        job: "Kitchen + wall removal",
        how: "Opening up to the living area",
        from: "Quoted on the job",
      },
      { job: "Floor tiles & screed", how: "Lifted back to the slab", from: "Quoted on the job" },
      {
        job: "Anything with asbestos",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "The bottom four vary too much for a starting number to mean anything. Send photos and they're priced properly, in writing, within 24 hours.",
  },
  reviewsTitle: `${TRUST.rating} stars from kitchen renovations across Melbourne.`,
  faqs: {
    ...stripOut.faqs,
    items: [
      {
        q: "How much does kitchen demolition cost?",
        a: `A standard kitchen starts at ${PRICING.kitchen}: cabinets, benchtop, splashback and wall tiles out, services capped, rubbish gone. What moves it is size, whether the floor comes up, stone benchtops, access, and whether anything pre-1990 needs testing. You get an itemised price in writing within 24 hours.`,
      },
      {
        q: "How long does a kitchen removal take?",
        a: "Most kitchens are out in a day. If a wall is coming out with it, or the floor tiles and screed, allow a second day. You get the finish date with the quote.",
      },
      {
        q: "Can I keep my appliances or cabinets?",
        a: "Yes. Tell us what's staying or being reused and we'll take it out carefully and set it aside instead of breaking it up.",
      },
      {
        q: "Who disconnects the plumbing and power?",
        a: "We cap and make safe what's needed to get the kitchen out, so the room is safe for your plumber and electrician to connect the new one.",
      },
      ...stripOut.faqs.items.filter((f) =>
        ["Do you handle asbestos?", "Do you take the rubbish away?", "Are you insured?"].includes(
          f.q,
        ),
      ),
    ],
  },
  finalCta: {
    ...stripOut.finalCta,
    body: `Kitchens from ${PRICING.kitchen}. Out in a day. Rubbish gone.`,
  },
};

/** /bathroom-demolition — ad group: Bathroom (demolition / strip out). */
export const bathroomDemolition: ServicePageContent = {
  ...stripOut,
  beforeAfter: beforeAfter("bathroom", "kitchen", "wall"),
  slug: "bathroom-demolition",
  meta: {
    title: `Bathroom Demolition Melbourne from ${PRICING.bathroom} | ${SITE.name}`,
    description: `Bathroom demolition and strip outs across Melbourne from ${PRICING.bathroom}. Tiles, screed, vanity, shower and bath out in a day, services capped, rubbish gone. Fixed price in writing within 24 hours.`,
  },
  hero: {
    eyebrow: "Bathroom demolition · Melbourne",
    titleTop: `Bathroom demolition from ${PRICING.bathroom}.`,
    titleRibbon: "Your tiler starts tomorrow.",
    sub: "Tiles, screed, vanity, shower, bath and toilet out in a day, services capped, the rest of the house covered. Fixed price in writing within 24 hours — free, itemised, and we don't chase you.",
    bullets: [
      { icon: "sledgehammer", label: `Bathroom strip outs from ${PRICING.bathroom}` },
      { icon: "trowel", label: "Wall and floor tiles back to the frame and slab" },
      { icon: "builder", label: "Asbestos sheeting handled by our own crew" },
      { icon: "tipper", label: "Skip, rubbish and clean-up included" },
    ],
    imageDesktop: "/images/hero/bathroom-demolition-desktop.jpg",
    imageMobile: "/images/hero/bathroom-demolition-mobile.jpg",
  },
  services: {
    ...stripOut.services,
    title: "One bathroom, or every wet area in the house.",
    items: [
      {
        ...kbl,
        title: "Bathroom & ensuite strip out",
        detail:
          "Vanity, shower, bath, toilet, wall and floor tiles and screed. Out in a day, services capped, ready for your plumber and waterproofer.",
        price: `From ${PRICING.bathroom}`,
      },
      wallTile,
      floors,
      asbestos,
      internal,
      commercial,
    ],
  },
  pricing: {
    ...stripOut.pricing,
    title: "What bathroom demolition costs in Melbourne.",
    table: [
      {
        job: "Bathroom strip out",
        how: "Fixtures, tiles, screed, services capped",
        from: PRICING.bathroom,
      },
      { job: "Laundry strip out", how: "Tub, cabinetry, wall tiles", from: PRICING.laundry },
      { job: "Ensuite + main bathroom", how: "One crew, one visit", from: "Quoted on the job" },
      {
        job: "Tile removal only",
        how: "Walls or floors, back to the frame",
        from: "Quoted on the job",
      },
      {
        job: "Fibro or pre-1990 sheeting",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "The bottom three vary too much for a starting number to mean anything. Send photos and they're priced properly, in writing, within 24 hours.",
  },
  reviewsTitle: `${TRUST.rating} stars from bathroom renovations across Melbourne.`,
  faqs: {
    ...stripOut.faqs,
    items: [
      {
        q: "How much does bathroom demolition cost?",
        a: `A standard bathroom starts at ${PRICING.bathroom}: fixtures, wall and floor tiles and screed out, services capped, rubbish gone. What moves it is size, how many layers of tile, whether there's a bath to come out, access (stairs, apartments) and whether anything pre-1990 needs testing. You get an itemised price in writing within 24 hours.`,
      },
      {
        q: "How long does a bathroom demolition take?",
        a: "Most bathrooms are out in a day, so your plumber or waterproofer can start the next morning. You get the finish date with the quote.",
      },
      {
        q: "Do you take the tiles back to the frame?",
        a: "Yes, unless you tell us otherwise. Wall tiles back to the frame, floor tiles and screed back to the slab or subfloor, ready for new waterproofing.",
      },
      {
        q: "Can you do an apartment bathroom?",
        a: "Yes. We book the lift, protect the common areas, and work within building hours. Tell us the floor and the access when you send photos.",
      },
      ...stripOut.faqs.items.filter((f) =>
        ["Do you handle asbestos?", "Do you take the rubbish away?", "Are you insured?"].includes(
          f.q,
        ),
      ),
    ],
  },
  finalCta: {
    ...stripOut.finalCta,
    body: `Bathrooms from ${PRICING.bathroom}. Out in a day. Your tiler starts tomorrow.`,
  },
};
