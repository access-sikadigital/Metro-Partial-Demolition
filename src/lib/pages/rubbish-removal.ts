import { PRICING, SITE, TRUST } from "../site-data";
import type { ServicePageContent } from "./types";

/** /rubbish-removal — household, heavy, site and estate clear-outs. */
export const rubbishRemoval: ServicePageContent = {
  slug: "rubbish-removal",
  meta: {
    title: `Rubbish Removal Melbourne from ${PRICING.minLoad} | ${SITE.name}`,
    description: `Melbourne rubbish removal from ${PRICING.minLoad}. Household junk, hard rubbish, concrete, garages and full house clear-outs. We're a demolition crew, so nothing's too heavy. Fixed price before we load.`,
  },

  hero: {
    eyebrow: "Rubbish removal · Melbourne",
    titleTop: `Rubbish removal from ${PRICING.minLoad}.`,
    titleRibbon: "We do the lifting.",
    sub: "Household junk, hard rubbish, concrete, whole garages and full house clear-outs. We're a demolition crew, so nothing's too heavy or too much. Fixed price before we load, and you don't touch a thing.",
    bullets: [
      { icon: "yardstick", label: "Fixed price before we load — no bill that grows on the day" },
      { icon: "bricks", label: "Concrete, brick, decks and sheds — not knocked back" },
      { icon: "barrow", label: "You don't lift, sort or carry anything" },
      { icon: "tipper", label: "Sorted and recycled where we can" },
    ],
    imageDesktop: "/images/hero/rubbish-removal-desktop.jpg",
    imageMobile: "/images/hero/rubbish-removal-mobile.jpg",
  },

  services: {
    eyebrow: "What we clear",
    title: "If it needs to go, we take it.",
    lede: "Not on the list? Tell us what it is — the answer is almost always yes.",
    items: [
      {
        slug: "household",
        image: {
          src: "/images/services/household.jpg",
          alt: "Two crew carrying an old armchair to the truck past a mattress and washing machine",
        },
        icon: "barrow",
        title: "Household & hard rubbish",
        detail:
          "Furniture, mattresses, whitegoods, boxes, the pile beside the shed. We lift it, load it and take it — nothing to the kerb.",
        price: `From ${PRICING.minLoad}`,
      },
      {
        slug: "clearouts",
        image: {
          src: "/images/services/clearouts.jpg",
          alt: "Garage half cleared, worker carrying boxes out to a skip in the driveway",
        },
        icon: "forklift",
        title: "Garage, shed & whole house clear-outs",
        detail:
          "Everything out, floor swept, ready for the next thing — moving, selling, renting, or just getting the garage back.",
        price: `From ${PRICING.halfTruck}`,
      },
      {
        slug: "yard",
        image: {
          src: "/images/services/yard.jpg",
          alt: "Overgrown backyard being cleared, green waste loaded into a wheelbarrow",
        },
        icon: "shovel",
        title: "Yard & garden clean-ups",
        detail:
          "Overgrown yards, green waste, old decking, broken concrete. Cleared back to usable ground, the lot taken with us.",
        price: null,
      },
      {
        slug: "heavy",
        image: {
          src: "/images/services/heavy.jpg",
          alt: "Skid-steer loading broken concrete and bricks into a tipper truck",
        },
        icon: "bricks",
        title: "Concrete, brick, decks & sheds",
        detail:
          "The stuff a rubbish ute turns down. We bring the gear, take it apart properly and carry it out.",
        price: null,
      },
      {
        slug: "estates",
        image: {
          src: "/images/services/estates.jpg",
          alt: "Crew member carefully packing a framed photo while the owner sorts keepsakes",
        },
        icon: "stairs",
        title: "Hoarding & deceased estates",
        detail:
          "Handled quietly, at your pace, with nothing thrown out without you saying so. More below.",
        price: null,
      },
      {
        slug: "sites",
        image: {
          src: "/images/services/sites.jpg",
          alt: "New build frame being cleaned up, offcuts loaded into a skip and the slab swept",
        },
        icon: "tipper",
        title: "Building site clean-ups",
        detail:
          "Construction and demolition waste cleared through the build or in one hit at the end, so the next trade walks onto a clear site.",
        price: null,
      },
    ],
  },

  pricing: {
    eyebrow: "Up-front pricing",
    title: "What it costs, before you pick up the phone.",
    lede: "Rubbish removal is priced on how much there is, how heavy it is and how far we carry it. Here's where ours starts.",
    table: [
      {
        job: "Minimum load",
        how: "A few items — a mattress, a couch, a fridge",
        from: PRICING.minLoad,
      },
      { job: "Trailer load", how: "A garage corner, a small clean-out", from: PRICING.trailer },
      { job: "Half truck load", how: "A full garage or a small yard", from: PRICING.halfTruck },
      {
        job: "Full truck load",
        how: "A big garage, a big yard, a small house",
        from: PRICING.fullTruck,
      },
      {
        job: "Whole house or deceased estate",
        how: "Room by room, everything out",
        from: "Quoted on the job",
      },
      {
        job: "Hoarding clean-up",
        how: "Staged over as long as it takes",
        from: "Quoted on the job",
      },
      {
        job: "Concrete, brick & site waste",
        how: "Priced by weight, like the tip",
        from: "Quoted on the job",
      },
    ],
    note: "The bottom three vary too much for a starting number to mean anything, so we don't invent one. They're priced properly, in writing, within 24 hours.",
    factorsTitle: "What moves the price",
    factors: [
      "How much there is — the honest answer, not the hopeful one",
      "How heavy it is. Concrete, brick, soil and tiles go by weight, because that's how the tip charges us",
      "Access — stairs, a long carry from the back yard, no truck parking out front",
      "Whether anything has to be taken apart before it can be carried out",
      "Whether anything needs sorting or specialist disposal",
    ],
    close: "All of that is priced up front, not discovered on the day.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  feature: {
    eyebrow: "The heavy stuff",
    title: "The stuff other rubbish guys won't take.",
    lead: "Most rubbish removal is two blokes and a ute. That works right up until it doesn't.",
    body: [
      "It's fine for boxes and a couch. It stops working the moment it's a concrete path, a brick barbecue, a deck that's still bolted down, or a shed that has to come apart before any of it can go anywhere.",
      "We're a demolition company. Taking heavy things apart safely and carrying them out is the actual job, every day. So the pile that got knocked back three times is the one we quote like anything else.",
    ],
    points: [
      "Concrete, brick, tiles and rubble — we've got the gear and the weight allowance",
      "Decks, sheds, carports and pergolas taken apart first, then removed",
      "Whole garages and whole houses, not one load at a time",
      "Asbestos handled in-house, not passed to another contractor",
    ],
    tag: "Nothing's too heavy.",
    imageMain: {
      src: "/images/crew-shovel.jpg",
      alt: "A crew member shovelling heavy waste into a skip bin",
    },
    imageDetail: {
      src: "/images/loader-overhead.jpg",
      alt: "A loader clearing broken concrete, seen from above",
    },
  },

  process: {
    eyebrow: "How it works",
    title: "Four steps. You know the price before we turn up.",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Tell us what needs to go",
        detail:
          "Send the form with a few photos, or call. Rough is fine — we'll ask if we need more.",
      },
      {
        n: "02",
        icon: "yardstick",
        title: "Your fixed price",
        detail: "In writing within 24 hours. Nothing to sign, nothing to pay up front.",
      },
      {
        n: "03",
        icon: "barrow",
        title: "We load it",
        detail: "From wherever it is — the yard, the garage, upstairs. You don't lift a thing.",
      },
      {
        n: "04",
        icon: "shovel",
        title: "Swept and gone",
        detail: "Space left clear and swept, waste sorted and recycled where we can.",
      },
    ],
  },

  callout: {
    eyebrow: "Hoarding & deceased estates",
    title: "Nothing leaves until you say so.",
    body: [
      "Clearing a house that's filled up over years isn't really a rubbish job, and we don't treat it like one.",
      "Most of the time someone rings about a parent who can't manage the house anymore, an estate that has to be emptied by a certain date, or a situation at home that got away from them quietly and has been hard to ask for help with.",
      "Nobody on our crew reacts, comments or makes anyone feel judged. We work room by room at whatever pace suits, and we check before anything goes.",
    ],
    points: [
      "You set the pace — one room, one weekend, or staged over weeks",
      "Photos, documents and anything that matters set aside for you, never binned",
      "Discreet — minimal noise and mess out the front, executors and family kept updated",
    ],
  },

  builders: {
    eyebrow: "Building sites",
    title: "Site cleared, next trade starts.",
    lead: "Construction and demolition waste removed across Melbourne — through the build or in one hit at the end.",
    points: [
      "Concrete, brick, timber, plasterboard and packaging — mixed loads are fine, we sort them",
      "Staged through the build or one clear at the end, whichever suits your program",
      "Broom-swept before handover, so the next trade starts on a clear floor",
      `SWMS on every job, ${TRUST.liability} public liability, inducted before we arrive`,
      "After-hours work where the site needs it",
    ],
    image: {
      src: "/images/site-hoarding.jpg",
      alt: "Metro Partial Demolition site hoarding reading Work in Progress",
    },
  },

  guarantees: {
    eyebrow: "Fixed price guarantee",
    title: "The price you're quoted is the price you pay.",
    description: "No bill that grows on the day. No surprise at the tip. No lifting for you.",
    items: [
      {
        icon: "yardstick",
        title: "If we read the load wrong, that's ours to wear",
        detail:
          "We quoted it off what you told us. If the scope genuinely changes we stop and tell you first — not after.",
      },
      {
        icon: "barrow",
        title: "You don't lift anything",
        detail:
          "Nothing needs moving to the kerb, bagging or sorting before we arrive. We come to where it is.",
      },
      {
        icon: "shovel",
        title: "Swept before we leave",
        detail: "The space is left clear and swept, not just emptied.",
      },
      {
        icon: "tipper",
        title: "Recycled where we can",
        detail:
          "Metal, timber, concrete, whitegoods and green waste sorted and diverted from landfill.",
      },
    ],
    image: {
      src: "/images/excavator-sky.jpg",
      alt: "An excavator arm and bucket against a clear sky",
    },
  },

  reviewsTitle: `${TRUST.rating} stars from clear-outs across Melbourne.`,

  faqs: {
    eyebrow: "Questions we get every week",
    title: "The questions we get asked most, starting with the big one.",
    items: [
      {
        q: "What does rubbish removal cost?",
        a: `It starts at ${PRICING.minLoad} for a minimum load, ${PRICING.trailer} for a trailer, ${PRICING.halfTruck} for half a truck and ${PRICING.fullTruck} for a full one. Concrete, brick, soil and tiles go by weight because that's how the tip charges us. You get a fixed price within 24 hours — and that's what you pay.`,
      },
      {
        q: "Do I need to move anything to the kerb first?",
        a: "No. We come to wherever it is — the back yard, the garage, upstairs, behind the shed. You don't lift, bag or sort anything.",
      },
      {
        q: "Do you take concrete, bricks and soil?",
        a: "Yes. Heavy material is normal work for us — we're a demolition crew, so we've got the gear and the weight allowance. It's priced by weight rather than volume.",
      },
      {
        q: "Can you take apart a deck, shed or carport too?",
        a: "Yes. We dismantle it properly first, then remove the lot. That's demolition work rather than rubbish removal, which is why most rubbish removalists say no and we don't.",
      },
      {
        q: "Do I need to be home?",
        a: "Not always. If everything's accessible and you're happy for us to go ahead off the quote, we can clear it and send you photos when it's done.",
      },
      {
        q: "Is there anything you can't take?",
        a: "Paint and chemicals, gas bottles and car batteries need specialist disposal. Tell us if any of that's in there and we'll point you to where it goes. Asbestos we handle ourselves.",
      },
      {
        q: "Can you clear a whole house or a deceased estate?",
        a: "Yes, and we do a lot of them. Room by room, at whatever pace suits, with anything that looks like it matters set aside for you rather than thrown out.",
      },
      {
        q: "Are you insured?",
        a: `${TRUST.licence} with ${TRUST.liability} public liability. Certificates on request before we start.`,
      },
    ],
  },

  finalCta: {
    title: "Get your fixed price.",
    lede: "Tell us what needs to go and we'll send back a fixed price within 24 hours. Free, no obligation, and it doesn't move after that.",
    body: `From ${PRICING.minLoad}. We do the lifting.`,
  },
};
