import type { ServicePageContent } from "./types";

/**
 * /rubbish-removal, from the 04-Rubbish-Removal copy.
 *
 * Ad group that lands here: Rubbish Removal.
 * Preselected service: rubbish-removal (DEFAULT_SERVICES in site-data.ts).
 */
export const rubbishRemoval: ServicePageContent = {
  slug: "rubbish-removal",
  meta: {
    title: "Rubbish Removal Melbourne | Loading & Haul-Away | Metro",
    description:
      "Request a quote for household rubbish, renovation debris or building waste removal in Melbourne. Tell us what needs to go and where it needs to be loaded.",
  },

  hero: {
    eyebrow: "Rubbish removal · Melbourne",
    titleTop: "Rubbish removal in Melbourne.",
    titleRibbon: "We do the lifting.",
    sub: "Old furniture, renovation debris or building waste taking up space? Show us what needs to go and where it’s sitting. We’ll scope the loading and removal around the material, the access and the size of the load.",
    points: [
      "Household rubbish and clear-outs",
      "Renovation debris and building-site waste",
      "Heavy materials such as bricks and concrete assessed separately",
    ],
    imageDesktop: "/images/hero/rubbish-removal-desktop.jpg",
    imageMobile: "/images/hero/rubbish-removal-mobile.jpg",
  },

  services: {
    eyebrow: "What we clear",
    title: "From an old sofa to a site clean-up",
    items: [
      {
        slug: "household",
        icon: "barrow",
        title: "Household rubbish and clear-outs",
        detail:
          "Tell us which furniture, items or piles need to go. If you’re clearing a garage, deceased estate or whole rooms, point out anything you’re keeping.",
        image: { src: "/images/services/household.jpg", alt: "" },
      },
      {
        slug: "renovation-waste",
        icon: "tipper",
        title: "Renovation and building waste",
        detail:
          "Show us the timber, plasterboard, tiles or mixed debris. Builders can also share the preferred loading point and the date the area needs to be clear.",
        image: { src: "/images/services/sites.jpg", alt: "" },
      },
      {
        slug: "heavy",
        icon: "bricks",
        title: "Brick, concrete and heavier loads",
        detail:
          "List dense materials separately and show the approximate pile size. If a slab, deck or structure is still in place, mention it so we can discuss the demolition as part of your enquiry.",
        image: { src: "/images/services/heavy.jpg", alt: "" },
      },
      {
        slug: "yard",
        icon: "shovel",
        title: "Yard clear-outs",
        detail:
          "Show us any loose branches, green waste and outdoor items to be removed, along with the access route from the yard.",
        image: { src: "/images/services/yard.jpg", alt: "" },
      },
    ],
  },

  scope: {
    eyebrow: "Your quote",
    title: "Get a quote based on the load you actually have",
    body: [
      "Rubbish removal depends on volume, weight, material and how far it needs to be carried. A photo of the entire pile and a note about stairs, parking or lift access help us quote the work.",
    ],
  },

  process: {
    eyebrow: "The process",
    title: "How it works",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Show us what needs to go.",
        detail: "Send photos and the suburb, and flag anything unusually heavy or restricted.",
        image: "/images/process/01-tell-us.jpg",
      },
      {
        n: "02",
        icon: "barrow",
        title: "Confirm the load and access.",
        detail: "Check what’s included, where we need to load from and what you’re keeping.",
        image: "/images/process/09-we-load-it.jpg",
      },
      {
        n: "03",
        icon: "shovel",
        title: "Book the clearance.",
        detail: "Agree on a time and confirm any site or building access requirements.",
        image: "/images/process/12-swept-and-gone.jpg",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQs",
    title: "Rubbish removal FAQs",
    items: [
      {
        q: "Do I have to move it to the kerb?",
        a: "Tell us where it’s currently sitting. We can scope loading from that location and account for stairs, lifts or a longer carry.",
      },
      {
        q: "Can you take bricks, concrete or tiles?",
        a: "Tell us which materials you have and roughly how much. The weight and access affect how the removal is priced.",
      },
      {
        q: "Can you clear everything from a renovation?",
        a: "Send photos of the whole load and list any suspect or restricted materials separately. We’ll confirm which materials can be collected.",
      },
    ],
  },

  finalCta: {
    title: "Get the space back",
    lede: "Show us what needs to go and where we’ll be loading from.",
  },
};
