import type { ServicePageContent } from "./types";

/**
 * /strip-out, from the 03-Strip-Outs copy.
 *
 * Ad groups that land here: Strip Out, Tile Removal.
 * Preselected service: strip-out (DEFAULT_SERVICES in site-data.ts).
 */
export const stripOut: ServicePageContent = {
  slug: "strip-out",
  meta: {
    title: "Strip-Outs Melbourne | Internal Demolition & Defits | Metro",
    description:
      "Get a free quote for internal strip-outs in Melbourne. Clear kitchens, bathrooms, tiles, floors or commercial interiors for the next stage of your project.",
  },

  hero: {
    eyebrow: "Strip-outs · Melbourne",
    titleTop: "Internal strip-outs in Melbourne.",
    // John, 26 Nov call: lead with price and speed.
    titleRibbon: "From $800. Cleared in a day.",
    sub: "We remove old cabinetry, fixtures, tiles and flooring from homes, shops and offices. Tell us what your builder needs cleared before the fit-out starts.",
    points: [
      "Kitchen strip-outs",
      "Bathroom strip-outs",
      "Laundry strip-outs",
      "Wall and tile removal",
      "Floor coverings",
    ],
    imageDesktop: "/images/hero/strip-out-desktop.jpg",
    imageMobile: "/images/hero/strip-out-mobile.jpg",
  },

  services: {
    eyebrow: "What we strip out",
    title: "Strip the space back as far as your project needs",
    items: [
      {
        slug: "kitchen-bathroom-laundry",
        icon: "sledgehammer",
        title: "Kitchens, bathrooms and laundries",
        detail:
          "Remove agreed cabinetry, fixtures, tiles or flooring. For a single-room job, tell us which fittings and finishes need to go and when your installer or tiler needs the room.",
        image: { src: "/images/services/kitchen-bathroom-laundry.jpg", alt: "" },
      },
      {
        slug: "tiles-floors",
        icon: "trowel",
        title: "Tiles and floor coverings",
        detail:
          "Tell us which rooms and surfaces are affected and what finish your next trade needs. Tile or floor removal can be scoped on its own or as part of a broader strip-out.",
        image: { src: "/images/services/floors.jpg", alt: "" },
      },
      {
        slug: "multi-room",
        icon: "floor-plan",
        title: "Multi-room interior strip-outs",
        detail:
          "Send a room list or marked-up plans so we can see what comes out and where adjoining areas need to remain intact.",
        image: { src: "/images/services/internal-strip-out.jpg", alt: "" },
      },
      {
        slug: "commercial",
        icon: "tower-crane",
        title: "Office and retail defits",
        detail:
          "Send the defit schedule, landlord’s scope or fit-out plans. Include loading access, permitted working hours and the date the space needs to be handed back.",
        image: { src: "/images/services/commercial.jpg", alt: "" },
      },
    ],
  },

  scope: {
    eyebrow: "Your quote",
    title: "Price it around the handover you need",
    body: [
      "A quote depends on how much material comes out, the condition the space must be left in, and how the crew can get the waste out. Stairs, lifts and restricted loading areas can change the scope.",
    ],
  },

  process: {
    eyebrow: "How it works",
    title: "Seven steps. You know the price before anything moves.",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Tell us what’s coming out",
        detail: "Send the form with a few photos, or call us.",
        image: "/images/process/01-tell-us.jpg",
      },
      {
        n: "02",
        icon: "tape-measure",
        title: "Site inspection, if it needs one",
        detail: "On bigger jobs we come out and measure up first.",
        image: "/images/process/02-site-inspection.jpg",
      },
      {
        n: "03",
        icon: "floor-plan",
        title: "Your free quote, in writing",
        detail: "Itemised, so you can see exactly what’s included.",
        image: "/images/process/03-price-in-writing.jpg",
      },
      {
        n: "04",
        icon: "helmet",
        title: "We protect what stays",
        detail: "Floors covered, doorways sealed, services isolated.",
        image: "/images/process/05-protect.jpg",
      },
      {
        n: "05",
        icon: "sledgehammer",
        title: "We strip it out",
        detail: "Cabinets, fixtures, tiles and floors in your scope come out.",
        image: "/images/process/06-strip-it-out.jpg",
      },
      {
        n: "06",
        icon: "tipper",
        title: "Waste gone",
        detail: "We load it and take it away.",
        image: "/images/process/08-waste-gone.jpg",
      },
      {
        n: "07",
        icon: "shovel",
        title: "Swept and ready for your trades",
        detail: "Bare walls and a clean floor. Your next trade can start.",
        image: "/images/process/10-handover-inside.jpg",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQs",
    title: "Questions before you book",
    items: [
      {
        q: "Can I book tile removal on its own?",
        a: "Yes, send the rooms, surfaces and approximate area. Let us know the finish your flooring or tiling contractor needs afterwards.",
      },
      {
        q: "Can some fittings or floors stay?",
        a: "Mark anything you want to keep in the photos or plans. We’ll include those boundaries in the scope.",
      },
      {
        q: "Can you work to an office or shop handover date?",
        a: "Include the deadline, building rules, lift access and allowed work hours. We’ll confirm what can be scheduled once the scope is clear.",
      },
    ],
  },

  finalCta: {
    title: "Make space for the fit-out or renovation",
    lede: "Tell us what’s coming out and when the space needs to be clear.",
  },
};
