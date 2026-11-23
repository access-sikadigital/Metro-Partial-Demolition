import { PRICING, SITE, TRUST } from "../site-data";
import type { ServicePageContent } from "./types";

/** /strip-out — kitchen, bathroom, laundry, internal and commercial strip outs. */
export const stripOut: ServicePageContent = {
  slug: "strip-out",
  meta: {
    title: `Melbourne Strip Outs from ${PRICING.kitchen} | ${SITE.name}`,
    description: `Melbourne strip out specialists. Kitchens from ${PRICING.kitchen}, bathrooms from ${PRICING.bathroom}, cleared in a day. Itemised price in writing within 24 hours, and it doesn't move.`,
  },

  hero: {
    eyebrow: "Strip-outs · Melbourne",
    titleTop: `Strip outs from ${PRICING.kitchen}.`,
    titleRibbon: "Cleared in a day.",
    sub: `Kitchens from ${PRICING.kitchen}, bathrooms from ${PRICING.bathroom}. Out in a day, so your tiler starts the next morning. Fixed price in writing within 24 hours — free, itemised, and we don't chase you.`,
    bullets: [
      {
        icon: "sledgehammer",
        label: `Kitchens from ${PRICING.kitchen}, bathrooms from ${PRICING.bathroom}`,
      },
      { icon: "tape-measure", label: "Kitchens, bathrooms and laundries cleared in a day" },
      { icon: "builder", label: "Asbestos handled in-house — no third contractor" },
      { icon: "tipper", label: "Skip, rubbish and clean-up included" },
    ],
    imageDesktop: "/images/hero/strip-out-desktop.jpg",
    imageMobile: "/images/hero/strip-out-mobile.jpg",
  },

  services: {
    eyebrow: "What we take out",
    title: "Find the job that sounds like yours.",
    lede: "Not on the list? We still take it out. Tell us what it is.",
    items: [
      {
        slug: "kitchen-bathroom-laundry",
        image: {
          src: "/images/services/kitchen-bathroom-laundry.jpg",
          alt: "Kitchen stripped back with cabinets out, plumbing capped and the floor protected",
        },
        icon: "sledgehammer",
        title: "Kitchen, bathroom & laundry strip out",
        detail:
          "Cabinets, benchtop, splashback, tiles, fittings, the lot. In at seven, out by knock-off, so your tiler starts the next morning.",
        price: `From ${PRICING.kitchen}`,
      },
      {
        slug: "internal-strip-out",
        image: {
          src: "/images/services/internal-strip-out.jpg",
          alt: "Room stripped back to the timber frame, debris bagged and the floor swept",
        },
        icon: "floor-plan",
        title: "Internal strip out",
        detail:
          "One room or the whole house back to the frame — walls, ceilings, floors. We'll tell you up front whether yours is a day or a week.",
        price: null,
      },
      {
        slug: "wall-tile-removal",
        image: {
          src: "/images/services/wall-tile-removal.jpg",
          alt: "Worker chipping old bathroom wall tiles off with a demolition hammer",
        },
        icon: "bricks",
        title: "Wall & tile removal",
        detail:
          "Non-structural walls, wall and floor tiles, render and sheeting. If it's attached and you want it gone, ask.",
        price: `From ${PRICING.wall}`,
      },
      {
        slug: "commercial",
        image: {
          src: "/images/services/commercial.jpg",
          alt: "Office defit at dusk with ceiling tiles out and partitions coming down",
        },
        icon: "tower-crane",
        title: "Office & retail defits",
        detail:
          "Partitions, ceilings, carpet and joinery out for end-of-lease make good or a new fit-out — after hours if the building needs it.",
        price: null,
      },
      {
        slug: "floors",
        image: {
          src: "/images/services/floors.jpg",
          alt: "Worker scraping old floor tiles back to the concrete slab",
        },
        icon: "trowel",
        title: "Floor coverings & screed",
        detail:
          "Tiles, vinyl, carpet, floating floors and old screed lifted, ready for the new floor to go straight down.",
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
          "Assessed before we quote, removed by our own licensed crew and disposed of properly — inside the same price.",
        price: null,
      },
    ],
  },

  pricing: {
    eyebrow: "Up-front pricing",
    title: "Get an idea of what it costs before we even call you back.",
    lede: "Most people want a rough number before they pick up the phone. Fair enough. Here's where our prices start.",
    table: [
      {
        job: "Kitchen strip out",
        how: "Cabinets, benchtop, splashback, tiles",
        from: PRICING.kitchen,
      },
      {
        job: "Bathroom strip out",
        how: "Fixtures, tiles, screed, services capped",
        from: PRICING.bathroom,
      },
      { job: "Laundry strip out", how: "Tub, cabinetry, wall tiles", from: PRICING.laundry },
      {
        job: "Kitchen and bathroom together",
        how: "One crew, one day where it fits",
        from: "Quoted on the job",
      },
      { job: "Internal strip out", how: "One room to the whole house", from: "Quoted on the job" },
      {
        job: "Office or retail defit",
        how: "Partitions, ceilings, floors",
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
      "How much is coming out, and whether the floor comes up with it",
      "Access — stairs, a narrow side gate, a third-floor unit with one lift",
      "Whether anything pre-1990 needs testing first",
      "How much rubbish there is once it's all on the ground",
      "Whether anything structural is involved",
    ],
    close: "All of that gets priced up front, not discovered afterwards.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  feature: {
    eyebrow: "The part nobody explains",
    title: "Everyone talks about the renovation. Nobody tells you what comes first.",
    lead: "You've picked the tiles. Your builder's booked. The quote's signed.",
    body: [
      "Then someone mentions the old bathroom has to come out before any of it can start — and suddenly there's a job nobody planned for, and nobody budgeted for, sitting between you and the room you actually want.",
      "That job's ours. One day. Bare walls, skip gone, floor swept. Your trades walk in the next morning and get straight to work.",
    ],
    points: [
      "Bare walls and a swept floor, not a pile in the middle of the room",
      "The floorboards and staircase you're keeping, covered the whole way",
      "Services capped and made safe for your plumber and sparky",
      "A finish date you can give your builder with a straight face",
    ],
    tag: "Out in a day.",
    imageMain: {
      src: "/images/breaker-wall.jpg",
      alt: "A demolition worker breaking out an internal brick wall with a jackhammer",
    },
    imageDetail: {
      src: "/images/jackhammer-slab.jpg",
      alt: "A jackhammer breaking up a tiled concrete floor",
    },
  },

  process: {
    eyebrow: "How it works",
    title: "Six steps. You know the price before anything moves.",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Tell us what's coming out",
        detail: "Submit the form and attach a few photos for a faster, more accurate quote.",
      },
      {
        n: "02",
        icon: "tape-measure",
        title: "Free site inspection, if needed",
        detail: "On bigger jobs we come out and scope it properly, at no cost.",
      },
      {
        n: "03",
        icon: "yardstick",
        title: "Your number, in writing",
        detail: "Itemised, within 24 hours. Free, and nothing to sign.",
      },
      {
        n: "04",
        icon: "helmet",
        title: "We protect what stays",
        detail: "Floor protection down, barriers up, services isolated.",
      },
      {
        n: "05",
        icon: "sledgehammer",
        title: "We strip it out",
        detail: "Load-bearing checked before anything structural moves. Waste loaded as we go.",
      },
      {
        n: "06",
        icon: "shovel",
        title: "Swept and photographed",
        detail: "Bare walls, clean floor, photographed at handover. Your trades walk straight in.",
      },
    ],
  },

  callout: {
    eyebrow: "Built before 1990?",
    title: "The one thing that turns a one-day job into a three-week one.",
    body: [
      "If your place went up before 1990, asbestos was standard building material — in the wall sheeting, the eaves, the old vinyl underlay. Most strip-out crews hit it and stop, because it isn't something they handle.",
      "Then you're waiting on someone else's calendar, paying a second contractor, and your tiler has quietly moved on to another job.",
      "We take it out ourselves. We look for it before we quote, our own crew removes it safely, and it sits inside the price you already agreed to.",
    ],
    points: [
      "Identified before the quote, not discovered halfway through",
      "Removed safely by our own crew and disposed of properly",
      "In the number from the start, never added later",
    ],
  },

  builders: {
    eyebrow: "Builders & trades",
    title: "Why builders keep calling.",
    lead: "Renovation strip outs and commercial defits sequenced to your program, so your trades never stand around waiting on demo.",
    points: [
      "Kitchens, bathrooms and laundries cleared in a day, finish date with the quote",
      "Itemised quotes you can pass straight to your client",
      "SWMS, inductions and a documented safety system on every site",
      `${TRUST.licence}, ${TRUST.liability} public liability, certificates on file`,
      "After-hours work for occupied commercial buildings",
    ],
    image: {
      src: "/images/site-hoarding.jpg",
      alt: "Metro Partial Demolition site hoarding reading Work in Progress",
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
        icon: "builder",
        title: "Asbestos is in the number, not on top of it",
        detail:
          "We remove it ourselves, so it doesn't add a contractor to your job or a week to your timeline.",
      },
      {
        icon: "flashlight",
        title: "Handover photographed",
        detail:
          "Swept, cleared and photographed when we leave, so there's never an argument about the state we left it in.",
      },
      {
        icon: "tools",
        title: "One crew, start to finish",
        detail:
          "Nobody gets subcontracted on the morning. The team that quoted you is the team that turns up.",
      },
    ],
    image: {
      src: "/images/business-cards.jpg",
      alt: "Metro Partial Demolition business cards on steel mesh",
    },
  },

  reviewsTitle: `${TRUST.rating} stars from renovations across Melbourne.`,

  faqs: {
    eyebrow: "Questions we get every week",
    title: "Straight answers, starting with the one everybody asks.",
    items: [
      {
        q: "What does a strip out cost?",
        a: `Kitchens start at ${PRICING.kitchen}, bathrooms at ${PRICING.bathroom} and laundries at ${PRICING.laundry}. What moves it is how much is coming out, whether the floor comes up, how hard the access is, and whether anything pre-1990 needs testing first. Full internal strip outs and defits vary too much for a starting number, so we quote those on the job — in writing, within 24 hours.`,
      },
      {
        q: "How long does it take?",
        a: "A kitchen, bathroom or laundry is cleared in a day. A small internal demo, same. A full internal strip out is usually inside a week. You get the finish date with the quote, so you can book your trades around it.",
      },
      {
        q: "Do you handle asbestos?",
        a: "We do it ourselves rather than bringing someone else in. Anything pre-1990 gets looked at before we quote, removed safely by our own crew, disposed of properly, and it sits inside the same fixed price.",
      },
      {
        q: "Do I need a permit?",
        a: "For internal strip outs, usually not. For anything structural, yes — and we handle the application. We'll tell you which yours is when we quote.",
      },
      {
        q: "Do you take the rubbish away?",
        a: "Yes, always, and it's in the fixed price. Skip hire and tip runs are ours, not yours. Anything that can be recycled, is.",
      },
      {
        q: "What about the parts of the house I'm keeping?",
        a: "Floor protection goes down and barriers go up before the first tile comes off. The hallway, floorboards and staircase you're keeping are covered the whole way. We photograph the handover so there's nothing to argue about later.",
      },
      {
        q: "Can you work to my builder's start date?",
        a: "That's the normal way we work. Tell us when your trades are booked and we'll clear it before then — or tell you straight away if we can't, while you've still got time to sort something out.",
      },
      {
        q: "Are you insured?",
        a: `${TRUST.licence} with ${TRUST.liability} public liability. Certificates on request before we start.`,
      },
    ],
  },

  finalCta: {
    title: "Get your fixed price.",
    lede: "Tell us what's coming out and we'll send an itemised number in writing within 24 hours. Free, no obligation, and it doesn't move after that.",
    body: `Kitchens from ${PRICING.kitchen}. Bathrooms from ${PRICING.bathroom}. Most rooms cleared in a day.`,
  },
};
