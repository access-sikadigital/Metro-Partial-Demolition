/**
 * /rubbish-removal content for the Demo Bros replica layout
 * (src/components/db/RubbishRemovalPage.tsx).
 *
 * Sources, in priority order:
 *   1. Metro's current page copy (src/lib/pages/rubbish-removal.ts) — hero,
 *      services, scope, process, FAQs, final CTA. Read straight from that file
 *      so the two never drift.
 *   2. Metro's pre-rewrite copy (commit 91fe2c1), restored verbatim — pricing,
 *      heavy stuff, hoarding, builders, guarantee, reviews title.
 *   3. Shared placeholders (src/lib/db/placeholder-content.ts) — trust strip,
 *      stats, reviews, service area. NOTHING there is verified.
 * Strings marked `COPY: from Demo Bros` had no Metro wording in any source.
 */
import { beforeAfterFor } from "@/lib/before-after";
import {
  previewOnly,
  PLACEHOLDER_TRUST,
  PRICING,
  reviewsFor,
  serviceArea,
  stats,
} from "@/lib/db/placeholder-content";
import { rubbishRemoval as current } from "@/lib/pages/rubbish-removal";
import { audiences } from "@/lib/site-data";
import type { RubbishRemovalContent } from "./rubbish-types";

/** Icon keys for the placeholder stats, in the order `stats` lists them. */
const STAT_IDS = ["rating", "turnaround", "liability", "crew"];

/** Icon keys for the current hero points, in order. */
const HERO_POINT_ICONS = ["home", "home", "site", "weight", "site"];

export const rubbishRemovalContent: RubbishRemovalContent = {
  slug: "rubbish-removal",

  hero: {
    eyebrow: current.hero.eyebrow,
    titleTop: current.hero.titleTop,
    titleRibbon: current.hero.titleRibbon,
    sub: current.hero.sub,
    points: current.hero.points.map((label, i) => ({
      icon: HERO_POINT_ICONS[i] ?? "check",
      label,
    })),
    imageDesktop: current.hero.imageDesktop,
    imageMobile: current.hero.imageMobile,
  },

  trustStats: stats.map((s, i) => ({ id: STAT_IDS[i] ?? "rating", ...s })),

  beforeAfter: {
    // Metro's own before/after heading (components/site/Sections.tsx).
    eyebrow: "Before and after",
    // These pairs are AI illustrations (John, 28 Nov), so the heading and
    // description must not present them as Metro's own jobs.
    title: "What a clear-out looks like",
    description:
      "AI-generated illustrations of the jobs we take on, not photos of Metro jobs. Drag the divider to compare.",
    pairs: beforeAfterFor("rubbish-removal"),
  },

  pricing: {
    eyebrow: "Up-front pricing",
    title: "What it costs, before you pick up the phone.",
    lede: "Rubbish removal is priced on how much there is, how heavy it is and how far we carry it. Here's where ours starts.",
    labels: {
      starting: "Starting prices", // COPY: from Demo Bros — needs Metro copy
      from: "From", // COPY: from Demo Bros — needs Metro copy
      onJob: "Priced on the job", // COPY: from Demo Bros — needs Metro copy
    },
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
    // Metro's current scope copy, in the "what moves the price" panel.
    scope: { title: current.scope.title, body: current.scope.body },
    close: "All of that is priced up front, not discovered on the day.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  services: {
    eyebrow: current.services.eyebrow,
    title: current.services.title,
    items: current.services.items.map(({ slug, title, detail, image }) => ({
      slug,
      title,
      detail,
      image,
    })),
  },

  audiences: {
    title: audiences.title,
    items: audiences.items.map((a) => ({ icon: a.icon, label: a.label })),
  },

  process: {
    eyebrow: current.process.eyebrow,
    title: current.process.title,
    steps: current.process.steps.map(({ n, title, detail, image }) => ({
      n,
      title,
      detail,
      image: image ?? "",
      alt: "",
    })),
  },

  heavyStuff: {
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
    image: {
      src: "/images/sections/rubbish-heavy-lift.jpg",
      alt: "Two crew carrying an old couch out to the truck",
    },
  },

  hoarding: {
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
    image: {
      src: "/images/services/estates.jpg",
      alt: "Crew member carefully packing a framed photo while the owner sorts keepsakes",
    },
  },

  builders: {
    eyebrow: "Building sites",
    title: "Site cleared, next trade starts.",
    lead: "Construction and demolition waste removed across Melbourne — through the build or in one hit at the end.",
    points: [
      "Concrete, brick, timber, plasterboard and packaging — mixed loads are fine, we sort them",
      "Staged through the build or one clear at the end, whichever suits your program",
      "Broom-swept before handover, so the next trade starts on a clear floor",
      previewOnly(
        `SWMS on every job, ${PLACEHOLDER_TRUST.liability} public liability, inducted before we arrive`,
      ) || "SWMS on every job, inducted before we arrive",
      "After-hours work where the site needs it",
    ],
    image: {
      src: "/images/audiences/builders.jpg",
      alt: "A builder and the Metro crew lead going through the program on site",
    },
    credential: "SWMS on every job · inducted before we arrive", // COPY: from Demo Bros — needs Metro copy
  },

  guarantee: {
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
  },

  reviews: {
    title: `${PLACEHOLDER_TRUST.rating} stars from clear-outs across Melbourne.`,
    items: reviewsFor("rubbish-removal"),
  },

  serviceArea: {
    eyebrow: serviceArea.eyebrow,
    title: serviceArea.title,
    lede: serviceArea.lede,
    body: serviceArea.body,
    coverage: "Melbourne metro and Victoria wide", // COPY: from Demo Bros — needs Metro copy
  },

  faqs: current.faqs,

  finalCta: {
    title: current.finalCta.title,
    lede: current.finalCta.lede,
  },
};
