import type { ServicePageContent } from "./types";

/**
 * /garage-shed-driveway-removal — ad groups: Garage, Shed, Driveway.
 * No preselected service (the visitor picks garage, shed or driveway).
 *
 * No copy file covers this route, so the wording follows the supplied copy and
 * makes no price, timing or credential claims.
 */
export const garageShedDriveway: ServicePageContent = {
  slug: "garage-shed-driveway-removal",
  meta: {
    title: "Garage, Shed & Driveway Removal Melbourne | Metro",
    description:
      "Request a quote for garage, shed, carport or concrete driveway removal in Melbourne. Tell us what needs to come out and what you’re keeping.",
  },

  hero: {
    eyebrow: "Garage, shed & driveway removal · Melbourne",
    titleTop: "Garage, shed and driveway removal in Melbourne.",
    titleRibbon: "Clear the space for what’s next.",
    sub: "Taking out an old garage, shed, carport or concrete driveway? Show us what needs to go, roughly how big it is and what you’re keeping. We’ll scope the removal around the access and the material.",
    points: [
      "Garages, sheds and carports",
      "Concrete driveways, paths and slabs",
      "Paving, fences and access routes you’re keeping discussed up front",
    ],
    imageDesktop: "/images/hero/garage-shed-driveway-desktop.jpg",
    imageMobile: "/images/hero/garage-shed-driveway-mobile.jpg",
  },

  services: {
    eyebrow: "What we remove",
    title: "Take out the structure that’s in the way",
    items: [
      {
        slug: "garage",
        icon: "dozer",
        title: "Garage demolition",
        detail: "Tell us the size, what it’s built from and whether the slab is coming out too.",
        image: { src: "/images/services/outbuildings.jpg", alt: "" },
      },
      {
        slug: "shed",
        icon: "sledgehammer",
        title: "Sheds and carports",
        detail:
          "Show us the structure and anything stored in it that needs to go. If you suspect fibro or asbestos sheeting, say so in your enquiry.",
        image: { src: "/images/services/heavy.jpg", alt: "" },
      },
      {
        slug: "driveway",
        icon: "tipper",
        title: "Concrete driveways and paths",
        detail:
          "Show us the area and roughly how big it is. Mention any paving, kerbs or garden beds next to it that need to stay.",
        image: { src: "/images/services/concrete.jpg", alt: "" },
      },
      {
        slug: "decks",
        icon: "barrow",
        title: "Decks, pergolas and yard structures",
        detail:
          "List what’s coming out and the access route from the yard to where it can be loaded.",
        image: { src: "/images/services/yard.jpg", alt: "" },
      },
    ],
  },

  scope: {
    eyebrow: "Your quote",
    title: "Know what’s coming out before you book",
    body: [
      "A quote depends on the size of the structure, what it’s made from, whether the slab is included and how the material can be loaded. Photos of the whole structure and the access help us quote the work.",
    ],
  },

  process: {
    eyebrow: "The process",
    title: "How it works",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Send a few photos.",
        detail: "Include the suburb, the structure and the access to it.",
        image: "/images/process/01-tell-us.jpg",
      },
      {
        n: "02",
        icon: "helmet",
        title: "Confirm what stays.",
        detail: "Agree on the slab, paving, fences and anything else that needs to be kept.",
        image: "/images/process/05-protect.jpg",
      },
      {
        n: "03",
        icon: "shovel",
        title: "Book the removal.",
        detail: "Agree on a time and the condition the area needs to be left in.",
        image: "/images/process/11-handover-outside.jpg",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQs",
    title: "Questions before you book",
    items: [
      {
        q: "How much does garage or shed removal cost?",
        a: "It depends on the size, the materials, whether the slab is coming out and the access for loading. Photos of the whole structure help us see what needs to be priced.",
      },
      {
        q: "Can you take the concrete slab too?",
        a: "Tell us if the slab, driveway or path is part of the job and roughly how big it is. We’ll include it in the scope.",
      },
      {
        q: "What if the shed might contain asbestos?",
        a: "Flag any suspect materials in your enquiry. We’ll identify what needs clarification before work is booked and who is responsible for each item.",
      },
    ],
  },

  finalCta: {
    title: "Get the space back",
    lede: "Show us what needs to come out and where it can be loaded from.",
  },
};
