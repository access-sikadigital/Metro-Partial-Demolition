import { PRICING, SITE, TRUST } from "../site-data";
import { houseDemolition } from "./house-demolition";
import type { ServicePageContent } from "./types";

/**
 * /garage-shed-driveway-removal — backyard demolition.
 *
 * Ad groups that land here: Garage Demolition, Shed Demolition, Driveway Removal.
 * Keywords: garage demolition melbourne / near me, shed demolition melbourne,
 * shed removal melbourne, driveway removal melbourne, concrete driveway removal.
 *
 * Different buyer from partial demolition: usually a homeowner clearing the
 * yard, not a renovation. Smaller job, lower price, faster decision.
 */
export const garageShedDriveway: ServicePageContent = {
  slug: "garage-shed-driveway-removal",
  meta: {
    title: `Garage, Shed & Driveway Removal Melbourne | ${SITE.name}`,
    description: `Garage and shed demolition from ${PRICING.outbuilding}, plus concrete driveway, path and slab removal across Melbourne. Slab out, asbestos handled, ground left level. Fixed price in writing within 24 hours.`,
  },

  hero: {
    eyebrow: "Garage, shed & driveway removal · Melbourne",
    titleTop: `Garages and sheds from ${PRICING.outbuilding}.`,
    titleRibbon: "Slab and all, gone in a day.",
    sub: "Old garages, sheds, carports and cracked concrete driveways taken down, broken up and carted away. Asbestos handled, ground left level. Fixed price in writing within 24 hours.",
    bullets: [
      { icon: "dozer", label: `Garages, sheds and carports from ${PRICING.outbuilding}` },
      { icon: "tipper", label: "Concrete driveways, paths and slabs removed" },
      { icon: "builder", label: "Old fibro sheds? Asbestos removed by our own crew" },
      { icon: "shovel", label: "Waste gone, ground left level and swept" },
    ],
    imageDesktop: "/images/hero/house-demolition-desktop.jpg",
    imageMobile: "/images/hero/house-demolition-mobile.jpg",
  },

  services: {
    eyebrow: "What we take out",
    title: "Find the job that sounds like yours.",
    lede: "Not on the list? If it's in the yard and you want it gone, tell us what it is.",
    items: [
      {
        slug: "garage",
        image: {
          src: "/images/services/outbuildings.jpg",
          alt: "Crew taking down an old timber structure in a backyard",
        },
        icon: "dozer",
        title: "Garage demolition",
        detail:
          "Brick, timber or steel, single or double. Roof, walls and slab out, power isolated first, nothing left behind.",
        price: `From ${PRICING.outbuilding}`,
      },
      {
        slug: "shed",
        image: {
          src: "/images/services/heavy.jpg",
          alt: "Heavy demolition waste loaded for removal",
        },
        icon: "sledgehammer",
        title: "Shed & carport removal",
        detail:
          "Garden sheds, workshops, carports and pergolas dismantled and taken away — contents too, if you want.",
        price: `From ${PRICING.outbuilding}`,
      },
      {
        slug: "driveway",
        image: {
          src: "/images/services/concrete.jpg",
          alt: "Mini excavator breaking up an old concrete driveway while dust is hosed down",
        },
        icon: "tipper",
        title: "Concrete driveway removal",
        detail:
          "Cut, broken out and carted away, with the base left level and ready for the new driveway to go straight down.",
        price: null,
      },
      {
        slug: "slabs",
        image: {
          src: "/images/jackhammer-slab.jpg",
          alt: "A jackhammer breaking up a concrete slab",
        },
        icon: "bricks",
        title: "Paths, patios & old slabs",
        detail:
          "Garage slabs, paths, patios and footings broken up and removed, so the yard is ready for what comes next.",
        price: null,
      },
      {
        slug: "decks",
        image: {
          src: "/images/services/yard.jpg",
          alt: "Backyard being cleared and waste loaded into a wheelbarrow",
        },
        icon: "barrow",
        title: "Decks, pergolas & yard clear-outs",
        detail:
          "Rotten decks, old pergolas and whatever's piled up behind them. Lifted, loaded and gone.",
        price: null,
      },
      {
        slug: "asbestos",
        image: {
          src: "/images/services/asbestos.jpg",
          alt: "Asbestos crew in coveralls and respirators lowering a whole fibro sheet onto plastic sheeting",
        },
        icon: "builder",
        title: "Asbestos sheds & garages",
        detail:
          "Fibro sheds and garages are common on older blocks. Assessed before we quote and removed by our own licensed crew.",
        price: null,
      },
    ],
  },

  pricing: {
    eyebrow: "Up-front pricing",
    title: "What it costs, before you pick up the phone.",
    lede: "Here's where our prices start. Send a couple of photos and we'll firm it up in writing within 24 hours.",
    table: [
      { job: "Garage, shed or carport", how: "Single, clear access", from: PRICING.outbuilding },
      {
        job: "Double garage or brick garage",
        how: "Slab and footings out",
        from: "Quoted on the job",
      },
      {
        job: "Concrete driveway removal",
        how: "Cut, broken out, base left level",
        from: "Quoted on the job",
      },
      {
        job: "Paths, patios & old slabs",
        how: "Priced by area and thickness",
        from: "Quoted on the job",
      },
      {
        job: "Fibro shed or garage (asbestos)",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "Concrete is priced by area, thickness and access, so a starting number would be a guess. Send photos and a rough size and we'll price it properly.",
    factorsTitle: "What moves the price",
    factors: [
      "Size of the building, and whether the slab and footings come out too",
      "Concrete area and thickness, and whether it's reinforced",
      "Access — can a machine get down the side, or is it all by hand?",
      "Asbestos — anything fibro or pre-1990 gets assessed first",
      "Power or water running to the shed or garage that needs isolating",
    ],
    close: "All of that is priced before you commit, not discovered when we're on site.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  feature: {
    eyebrow: "Why a demolition crew",
    title: "Most rubbish guys stop at the slab. That's where we start.",
    lead: "Taking a shed apart is the easy bit. The concrete under it is what gets knocked back.",
    body: [
      "Garages and sheds come with a slab, footings, maybe power, and on older blocks, fibro sheeting. Most rubbish removal and handyman crews quote the walls and roof, then leave you with a slab you can't do anything with.",
      "We're a demolition crew with the machine and the licence for the rest of it. Walls, roof, slab, footings, asbestos — one crew, one price, one visit where it fits.",
    ],
    points: [
      "Power to the shed or garage isolated before we start",
      "Slab and footings broken out, not left behind",
      "Fences, gardens and the house protected on the way in and out",
      "Ground left level and swept, ready for what's next",
    ],
    tag: "Slab and all.",
    imageMain: {
      src: "/images/jackhammer-slab.jpg",
      alt: "A jackhammer breaking up a concrete slab",
    },
    imageDetail: {
      src: "/images/loader-overhead.jpg",
      alt: "A loader moving demolition waste, seen from above",
    },
  },

  process: {
    eyebrow: "How it works",
    title: "Five steps. You know the price before anything moves.",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Send a few photos",
        detail: "Use the form or call. A photo of the structure and the access is usually enough.",
      },
      {
        n: "02",
        icon: "yardstick",
        title: "Your number, in writing",
        detail: "Itemised, within 24 hours. Free, and nothing to sign.",
      },
      {
        n: "03",
        icon: "helmet",
        title: "We protect what stays",
        detail: "Power isolated, fences and gardens protected, neighbours told.",
      },
      {
        n: "04",
        icon: "excavator",
        title: "It comes down",
        detail: "Structure, slab and footings out. Waste loaded as we go.",
      },
      {
        n: "05",
        icon: "shovel",
        title: "Level, swept, photographed",
        detail: "Ground left level and photographed at handover.",
      },
    ],
  },

  callout: {
    eyebrow: "Old shed or garage?",
    title: "If it's fibro, don't touch it. Call us.",
    body: [
      "A lot of sheds, garages and carports in Melbourne went up when asbestos sheeting was standard. Breaking it up yourself, or letting someone without a licence do it, is how it ends up in the air and in your yard.",
      "We look for it before we quote, our own licensed crew removes it, and it sits inside the price you already agreed to.",
    ],
    points: [
      "Identified before the quote, not discovered halfway through",
      "Removed safely by our own licensed crew, disposed of properly",
      "In the number from the start, never added later",
    ],
  },

  builders: houseDemolition.builders,

  guarantees: houseDemolition.guarantees,

  reviewsTitle: `${TRUST.rating} stars from backyards across Melbourne.`,

  faqs: {
    eyebrow: "Questions we get every week",
    title: "Straight answers, starting with the one everybody asks.",
    items: [
      {
        q: "How much does garage or shed demolition cost?",
        a: `A single garage, shed or carport with clear access starts at ${PRICING.outbuilding}. Brick and double garages, slabs, and anything with asbestos are quoted on the job. Send a couple of photos and you'll have an itemised price in writing within 24 hours.`,
      },
      {
        q: "How much does driveway removal cost?",
        a: "It depends on the area, the thickness, whether it's reinforced and how a machine gets in. Send photos and a rough length and width, and we'll price it in writing within 24 hours.",
      },
      {
        q: "Does the slab come out too?",
        a: "If you want it to, yes — slab and footings broken out and taken away, ground left level. If you're keeping the slab for something new, tell us and we'll leave it clean.",
      },
      {
        q: "My shed is fibro. Is that a problem?",
        a: "Not for us. Anything that might be asbestos is assessed before we quote and removed by our own licensed crew, inside the same price. Please don't break it up yourself first.",
      },
      {
        q: "Do I need a permit to demolish a garage or shed?",
        a: "Most small outbuildings don't need one, but some do depending on size, council and heritage overlays. We'll tell you when we quote and handle it if it's needed.",
      },
      {
        q: "Can you take the rubbish inside it too?",
        a: "Yes. Contents, the structure and the slab can all go in the same visit. Tell us what's in there when you send photos.",
      },
      {
        q: "How long does it take?",
        a: "Most single garages and sheds are done in a day. Driveways and larger slabs are usually one to two days depending on size and access.",
      },
      {
        q: "Are you insured?",
        a: `${TRUST.licence} with ${TRUST.liability} public liability. Certificates on request before we start.`,
      },
    ],
  },

  finalCta: {
    title: "Get your fixed price.",
    lede: "Send a couple of photos and we'll send an itemised number in writing within 24 hours. Free, no obligation, and it doesn't move after that.",
    body: `Garages and sheds from ${PRICING.outbuilding}. Driveways and slabs out. Ground left level.`,
  },
};
