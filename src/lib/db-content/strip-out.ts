/**
 * /strip-out on the Demo Bros strip-out template.
 *
 * Current Metro copy (src/lib/pages/strip-out.ts) for the hero, services,
 * scope, process, FAQs and final CTA. Everything else is Metro's pre-rewrite
 * copy from commit 91fe2c1, verbatim, with TRUST/PRICING swapped for the
 * PLACEHOLDER figures — none of it is verified yet.
 */
import { stripOut as page } from "@/lib/pages/strip-out";
import { previewOnly, PLACEHOLDER_TRUST, PRICING } from "@/lib/db/placeholder-content";
import type { HeroPointIcon, StripOutContent } from "./strip-out-types";

const HERO_ICONS: HeroPointIcon[] = ["package", "bath", "droplets", "layers", "hammer"];

export const stripOutContent: StripOutContent = {
  slug: page.slug,

  hero: {
    ...page.hero,
    points: page.hero.points.map((label, i) => ({ label, icon: HERO_ICONS[i] ?? "hammer" })),
  },

  pricing: {
    eyebrow: "Up-front pricing",
    title: "Get an idea of what it costs before we even call you back.",
    lede: "Most people want a rough number before they pick up the phone. Fair enough. Here's where our prices start.",
    table: [
      { job: "Kitchen strip out", from: PRICING.kitchen },
      { job: "Bathroom strip out", from: PRICING.bathroom },
      { job: "Laundry strip out", from: PRICING.laundry },
      { job: "Kitchen and bathroom together", from: "Quoted on the job" },
      { job: "Internal strip out", from: "Quoted on the job" },
      { job: "Office or retail defit", from: "Quoted on the job" },
      { job: "Anything with asbestos", from: "Quoted after assessment" },
    ],
    note: "The bottom four vary too much for a starting number to mean anything, so we don't invent one. They're priced properly, in writing, within 24 hours.",
    close: "All of that gets priced up front, not discovered afterwards.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  scope: page.scope,

  services: {
    ...page.services,
    lede: "Not on the list? We still take it out. Tell us what it is.",
  },

  process: page.process,

  asbestos: {
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

  nobodyExplains: {
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
    image: {
      src: "/images/sections/strip-out-ready-for-tiler.jpg",
      alt: "A bathroom stripped back to render and slab, swept and ready for the tiler",
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
  },

  reviewsTitle: `${PLACEHOLDER_TRUST.rating} stars from renovations across Melbourne.`,

  faqs: page.faqs,

  finalCta: {
    ...page.finalCta,
    body: previewOnly(
      `Kitchens from ${PRICING.kitchen}. Bathrooms from ${PRICING.bathroom}. Most rooms cleared in a day.`,
    ),
  },
};
