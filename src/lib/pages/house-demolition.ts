import { PRICING, SITE, TRUST } from "../site-data";
import { beforeAfter } from "./before-after";
import type { ServicePageContent } from "./types";

/** /house-demolition — partial, rear-of-house and full house demolition. */
export const houseDemolition: ServicePageContent = {
  slug: "house-demolition",
  beforeAfter: beforeAfter("wall", "shed", "kitchen"),
  meta: {
    title: `House & Partial Demolition Melbourne | ${SITE.name}`,
    description: `Melbourne house and partial demolition. Rear-of-house and extension demolition, wall removals from ${PRICING.wall}, full knock-down rebuilds. Permits, disconnections and asbestos handled. Fixed price in writing within 24 hours.`,
  },

  hero: {
    eyebrow: "House & partial demolition · Melbourne",
    titleTop: "Take out what you don't want.",
    titleRibbon: "Keep the rest standing.",
    sub: "Rear-of-house demolition, wall removals and full knock-down rebuilds. Permits, disconnections and asbestos handled — and a fixed, itemised price in writing within 24 hours.",
    bullets: [
      { icon: "bricks", label: `Wall removals from ${PRICING.wall}` },
      { icon: "helmet", label: "Propping and protection before anything comes down" },
      { icon: "floor-plan", label: "Permits and all four disconnections handled" },
      { icon: "builder", label: "Asbestos removed by our own licensed crew" },
    ],
    imageDesktop: "/images/hero/partial-demolition-desktop.jpg",
    imageMobile: "/images/hero/partial-demolition-mobile.jpg",
  },

  services: {
    eyebrow: "What we take down",
    title: "Partial or the whole house.",
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
        slug: "full-house",
        image: {
          src: "/images/services/full-house.jpg",
          alt: "Block cleared and levelled after a full house demolition, excavator and tipper on site",
        },
        icon: "demolition-machine",
        title: "Full house demolition",
        detail:
          "House down, block clean and level, ready for the slab. Permits, all four disconnections and waste handled.",
        price: `From ${PRICING.smallHouse}`,
      },
      {
        slug: "outbuildings",
        image: {
          src: "/images/services/outbuildings.jpg",
          alt: "Crew lifting the boards off an old timber deck under a pergola",
        },
        icon: "dozer",
        title: "Garages, sheds, decks & pergolas",
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
        title: "Concrete, driveway & slab removal",
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
    eyebrow: "Up-front pricing",
    title: "What demolition actually costs in Melbourne.",
    lede: "Nobody publishes this, which is exactly why it's hard to tell whether you're being quoted fairly. Here's where ours starts.",
    table: [
      {
        job: "Non-structural wall removal",
        how: "Stud or plasterboard wall, one room",
        from: PRICING.wall,
      },
      { job: "Garage, shed or carport", how: "Single, clear access", from: PRICING.outbuilding },
      {
        job: "Small house or unit",
        how: "2 bedrooms, clear access, no asbestos",
        from: PRICING.smallHouse,
      },
      {
        job: "Load-bearing wall removal",
        how: "Propped, to your engineer's detail",
        from: "Quoted on the job",
      },
      {
        job: "Rear-of-house demolition",
        how: "Cut line, propping and sealing",
        from: "Quoted on the job",
      },
      {
        job: "Large or double-storey home",
        how: "More house, more machine time",
        from: "Quoted on the job",
      },
      {
        job: "Anything with asbestos",
        how: "Assessed first, then priced",
        from: "Quoted after assessment",
      },
    ],
    note: "The bottom four vary too much for a starting number to mean anything, so we don't invent one. They're priced properly, in writing, within 24 hours.",
    factorsTitle: "What moves the price",
    factors: [
      "How much is coming down, and whether anything structural is involved",
      "Asbestos — anything pre-1990 gets assessed first; it's the biggest variable on an older house",
      "Access — a narrow street, a tight side boundary or overhead power change the machine and method",
      "How much propping and protection the part you're keeping needs",
      "What else is on the block — pool, driveway, big trees, retaining walls",
    ],
    close: "All of that is priced before you commit, not discovered when the machine is on site.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  feature: {
    eyebrow: "The part nobody explains",
    title: "The hard part of partial demolition isn't what comes down. It's what stays up.",
    lead: "Anyone with a machine can knock a building over. Taking half of one away is a different job.",
    body: [
      "The roof you're keeping still needs holding up. The wall you're keeping still has power running through it. The family you're keeping is probably still living in the front rooms.",
      "So before anything comes down, we prop what needs propping, isolate the services that cross the cut line, and seal off the part of the house you're keeping. It's slower than pulling it over. It's also the reason there's still a house when we leave.",
    ],
    points: [
      "Cut line marked out and agreed with you and your builder first",
      "Temporary propping under any roof or wall that's staying",
      "Power, gas and water isolated where they cross the cut line",
      "Dust screens, floor protection and a weather-sealed junction",
    ],
    tag: "What stays, stays.",
    imageMain: {
      src: "/images/sections/house-what-stays-up.jpg",
      alt: "Inside the house, the opening where the extension came off held on steel props, the living room covered and kept",
    },
    imageDetail: {
      src: "/images/sections/house-clean-cut.jpg",
      alt: "A clean saw cut along a chalk line through the brickwork where the extension met the house",
    },
  },

  included: {
    eyebrow: "What's included",
    title: "What's in the price.",
    lede: "Everything below is in the number we quote you. Hold your other quotes against this list — anything here that isn't in theirs is a cost that turns up later.",
    groups: [
      {
        label: "Before we start",
        items: [
          { item: "Demolition permit", means: "We coordinate the application, not you" },
          { item: "Asset protection permit", means: "Kerb, footpath and nature strip covered" },
          { item: "Asbestos assessment", means: "Before the quote is final, not on the day" },
          { item: "Neighbour notification", means: "In writing, before the noise starts" },
        ],
      },
      {
        label: "All four disconnections",
        items: [
          { item: "Power", means: "Arranged and confirmed before we start" },
          { item: "Gas", means: "Arranged and confirmed before we start" },
          { item: "Water", means: "Arranged and confirmed before we start" },
          { item: "Telecommunications", means: "The one most quotes forget" },
        ],
      },
      {
        label: "On site & handover",
        items: [
          { item: "Licensed asbestos removal", means: "By our own crew, disposed of properly" },
          { item: "Propping & protection", means: "For anything that's staying" },
          { item: "All waste removed", means: "Sorted and recycled where we can" },
          { item: "Block levelled & photographed", means: "Clean, level, ready for your builder" },
        ],
      },
    ],
    close:
      "If something on your block genuinely sits outside that — a pool, a big tree needing an arborist, a retaining wall on the boundary — we price it as its own line and show it to you before you sign. What we don't do is leave it off the quote and mention it later.",
  },

  timeline: {
    eyebrow: "How long it takes",
    title: "From first call to a block your builder can start on.",
    lede: "The demolition itself is the short part. The approvals set your start date — so the sooner they're moving, the sooner your build does.",
    steps: [
      {
        n: "01",
        title: "Quote",
        when: "Within 24 hours",
        detail: "Itemised and fixed, off your photos or a site visit.",
      },
      {
        n: "02",
        title: "Permits & disconnections",
        when: "4–6 weeks",
        detail: "The longest part, and it's on us — council and all four services running at once.",
      },
      {
        n: "03",
        title: "Asbestos out",
        when: "1–2 days",
        detail: "Done before the machine arrives, not around it.",
      },
      {
        n: "04",
        title: "Demolition",
        when: "2–4 days",
        detail: "Partial works or a standard single-storey home.",
      },
      {
        n: "05",
        title: "Handover",
        when: "Same week",
        detail: "Clean, level, photographed. Your builder starts.",
      },
    ],
    close:
      "Tell us the date your builder wants the site and we'll work back from it — or tell you straight away if it can't be done, while there's still time to move things around.",
  },

  process: {
    eyebrow: "How it works",
    title: "Six steps. You know the price before anything moves.",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Tell us about the job",
        image: "/images/process/01-tell-us.jpg",
        detail:
          "Send the form with a few photos, or call. Bigger or trickier jobs get a free site visit.",
      },
      {
        n: "02",
        icon: "yardstick",
        title: "Your number, in writing",
        image: "/images/process/03-price-in-writing.jpg",
        detail:
          "Itemised, within 24 hours, with every inclusion listed line by line. Nothing to sign.",
      },
      {
        n: "03",
        icon: "water-pipes",
        title: "Approvals & disconnections",
        image: "/images/process/04-disconnections.jpg",
        detail: "Permits, power, gas, water and telecoms. You don't chase anyone.",
      },
      {
        n: "04",
        icon: "helmet",
        title: "We protect what stays",
        image: "/images/process/05-protect.jpg",
        detail: "Propping in, services isolated, dust screens up, neighbours notified.",
      },
      {
        n: "05",
        icon: "excavator",
        title: "It comes down",
        image: "/images/process/07-it-comes-down.jpg",
        detail: "Exactly to the cut line. Dust controlled, materials separated for recycling.",
      },
      {
        n: "06",
        icon: "shovel",
        title: "Cleared, sealed, photographed",
        image: "/images/process/11-handover-outside.jpg",
        detail: "Waste gone, ground level, handover documented so there's nothing to argue about.",
      },
    ],
  },

  callout: {
    eyebrow: "Built before 1990?",
    title: "The one thing that turns a two-day job into a three-week one.",
    body: [
      "If your place went up before 1990, asbestos was a standard building material — wall sheeting, eaves, old vinyl underlay, the fibro in the laundry. Most demolition crews hit it and stop, because it isn't something they handle.",
      "Then you're waiting on someone else's calendar, paying a second contractor, and your builder has quietly moved on to another job.",
      "We take it out ourselves. We look for it before we quote, our own licensed crew removes it, and it sits inside the price you already agreed to.",
    ],
    points: [
      "Identified before the quote, not discovered halfway through",
      "Removed safely by our own licensed crew, disposed of properly",
      "In the number from the start, never added later",
    ],
  },

  builders: {
    eyebrow: "Builders & developers",
    title: "Working to a program, not a weekend.",
    lead: "Knock-down rebuilds, extensions and staged works across Melbourne, sequenced so your slab, framers and roofers never wait on us.",
    points: [
      "Tender-ready itemised quotes you can drop straight into a feasibility",
      "Program dates committed to and held — your slab pour doesn't move",
      "SWMS, inductions and a documented safety system on every site",
      `${TRUST.licence}, ${TRUST.liability} public liability, certificates on file`,
      "Multiple sites staged so your trades roll from one to the next",
    ],
    image: {
      src: "/images/audiences/builders.jpg",
      alt: "A builder and the Metro crew lead going through the program on site",
    },
  },

  guarantees: {
    eyebrow: "Fixed price guarantee",
    title: "The number doesn't move.",
    description:
      "No day-rate creep. No variation at the end. No phone call halfway through the job.",
    items: [
      {
        icon: "yardstick",
        title: "If we read the job wrong, that's ours to wear",
        detail:
          "We quoted it. Getting it right was our job, not yours. The price we wrote down is the price you pay.",
      },
      {
        icon: "helmet",
        title: "What stays, stays undamaged",
        detail:
          "The part you're keeping is propped, protected and sealed. That's in the scope, not a favour.",
      },
      {
        icon: "builder",
        title: "Asbestos is in the number, not on top of it",
        detail:
          "Our own crew removes it, so it doesn't add a contractor to your job or a week to your timeline.",
      },
      {
        icon: "tools",
        title: "One crew, start to finish",
        detail:
          "Nobody gets subcontracted on the morning. The team that quoted you is the team that turns up.",
      },
    ],
    image: {
      src: "/images/audiences/homeowners.jpg",
      alt: "The Metro crew lead walking homeowners through the job outside their house",
    },
  },

  reviewsTitle: `${TRUST.rating} stars from homeowners and builders across Melbourne.`,

  faqs: {
    eyebrow: "Questions we get every week",
    title: "Straight answers, starting with the one everybody asks.",
    items: [
      {
        q: "What does demolition cost?",
        a: `Non-structural walls start at ${PRICING.wall}, garages and sheds at ${PRICING.outbuilding}, and a small house at ${PRICING.smallHouse}. Load-bearing walls, rear-of-house demolition, larger homes and anything with asbestos vary too much for a starting number to be useful, so we quote those on the job. Either way you get an itemised figure in writing within 24 hours, and that figure is what you pay.`,
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
        q: "Do I need a permit?",
        a: "For a full house demolition, yes — and for many partial and structural jobs. We coordinate the demolition permit, the asset protection permit and the council side. We'll tell you exactly which yours needs when we quote.",
      },
      {
        q: "Who arranges the disconnections?",
        a: "We do — power, gas, water and telecommunications, all four, running at the same time as the permits rather than one after another.",
      },
      {
        q: "Do you handle asbestos?",
        a: "We do it ourselves rather than bringing someone else in. Anything pre-1990 is assessed before we quote, removed by our own licensed crew, disposed of properly, and it sits inside the same fixed price.",
      },
      {
        q: "How long does it take?",
        a: "A non-structural wall or garage is usually a day. A rear-of-house demolition is generally inside a week. A full house is 2–4 days on site once permits and disconnections are through, which is typically 4–6 weeks.",
      },
      {
        q: "Are you insured?",
        a: `${TRUST.licence} with ${TRUST.liability} public liability. Certificates on request before we start.`,
      },
    ],
  },

  finalCta: {
    title: "Get your fixed price.",
    lede: "Tell us what's coming down and we'll send an itemised number in writing within 24 hours. Free, no obligation, and it doesn't move after that.",
    body: `Walls from ${PRICING.wall}. Garages from ${PRICING.outbuilding}. Permits and disconnections handled.`,
  },
};
