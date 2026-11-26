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
      "Get a free quote for household rubbish, renovation debris or building waste removal in Melbourne. Tell us what needs to go and where it needs to be loaded.",
  },

  hero: {
    eyebrow: "Rubbish removal · Melbourne",
    titleTop: "Rubbish removal in Melbourne.",
    titleRibbon: "From $99. We load it and take it away.",
    sub: "Old furniture in the garage? Timber and broken tiles left after a reno? Show us the pile and tell us where the truck can park. We’ll quote to load it and take it away.",
    points: [
      "Household hard rubbish",
      "Garage and shed clean-outs",
      "Yard and garden cleanups",
      "Brick and concrete",
      "Renovation and building waste",
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
    eyebrow: "How it works",
    title: "Four steps. You know the price before we turn up.",
    steps: [
      {
        n: "01",
        icon: "floor-plan",
        title: "Tell us what needs to go",
        detail: "Send a photo of the pile and where it is.",
        image: "/images/process/01-tell-us.jpg",
      },
      {
        n: "02",
        icon: "floor-plan",
        title: "Your free quote",
        detail: "A price before we load anything.",
        image: "/images/process/03-price-in-writing.jpg",
      },
      {
        n: "03",
        icon: "barrow",
        title: "We load it",
        detail: "We lift, carry and load the lot. You don’t touch a thing.",
        image: "/images/process/09-we-load-it.jpg",
      },
      {
        n: "04",
        icon: "shovel",
        title: "Swept and gone",
        detail: "Space left clear and swept.",
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
