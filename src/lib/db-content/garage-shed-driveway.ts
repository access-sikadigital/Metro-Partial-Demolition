/**
 * /garage-shed-driveway-removal on the Demo Bros strip-out template.
 *
 * Current Metro copy (src/lib/pages/garage-shed-driveway.ts) for the hero,
 * services, scope, process, FAQs and final CTA. Everything else is Metro's
 * pre-rewrite copy from commit 91fe2c1, verbatim (its guarantees pointed at
 * the old house-demolition ones), with PLACEHOLDER figures — none verified.
 */
import { garageShedDriveway as page } from "@/lib/pages/garage-shed-driveway";
import { previewOnly, PLACEHOLDER_TRUST, PRICING } from "@/lib/db/placeholder-content";
import type { HeroPointIcon, StripOutContent } from "./strip-out-types";

const HERO_ICONS: HeroPointIcon[] = ["warehouse", "truck", "fence"];

export const garageShedDrivewayContent: StripOutContent = {
  slug: page.slug,

  hero: {
    ...page.hero,
    points: page.hero.points.map((label, i) => ({ label, icon: HERO_ICONS[i] ?? "hammer" })),
  },

  pricing: {
    eyebrow: "Up-front pricing",
    title: "What it costs, before you pick up the phone.",
    lede: "Here's where our prices start. Send a couple of photos and we'll firm it up in writing within 24 hours.",
    table: [
      { job: "Garage, shed or carport", from: PRICING.outbuilding },
      { job: "Double garage or brick garage", from: "Quoted on the job" },
      { job: "Concrete driveway removal", from: "Quoted on the job" },
      { job: "Paths, patios & old slabs", from: "Quoted on the job" },
      { job: "Fibro shed or garage (asbestos)", from: "Quoted after assessment" },
    ],
    note: "Concrete is priced by area, thickness and access, so a starting number would be a guess. Send photos and a rough size and we'll price it properly.",
    close: "All of that is priced before you commit, not discovered when we're on site.",
    closeEmphasis: "Whatever number comes back, that's the number.",
  },

  scope: page.scope,

  services: {
    ...page.services,
    lede: "Not on the list? If it's in the yard and you want it gone, tell us what it is.",
  },

  process: page.process,

  asbestos: {
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

  nobodyExplains: {
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
    image: {
      src: "/images/sections/garage-slab-break.jpg",
      alt: "Mini excavator breaking out an old concrete slab where a shed stood",
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
  },

  reviewsTitle: `${PLACEHOLDER_TRUST.rating} stars from backyards across Melbourne.`,

  faqs: page.faqs,

  finalCta: {
    ...page.finalCta,
    body: previewOnly(
      `Garages and sheds from ${PRICING.outbuilding}. Driveways and slabs out. Ground left level.`,
    ),
  },
};
