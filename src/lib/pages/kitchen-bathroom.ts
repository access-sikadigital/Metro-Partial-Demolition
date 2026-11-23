import { stripOut } from "./strip-out";
import type { ServicePageContent } from "./types";

/**
 * Kitchen and bathroom pages: the /strip-out page with the hero, meta, service
 * order and FAQs matched to the ad group's search. No copy file covers these
 * routes, so the wording follows 03-Strip-Outs and makes no price, timing or
 * credential claims.
 */

const [rooms, tiles, multiRoom, commercial] = stripOut.services.items;

/** /kitchen-demolition — ad group: Kitchen. Preselected service: kitchen-demolition. */
export const kitchenDemolition: ServicePageContent = {
  ...stripOut,
  slug: "kitchen-demolition",
  meta: {
    title: "Kitchen Demolition & Removal Melbourne | Metro",
    description:
      "Request a quote for kitchen demolition and removal in Melbourne. Clear cabinetry, benchtops, splashbacks, tiles or floors so your installer can start.",
  },
  hero: {
    eyebrow: "Kitchen demolition · Melbourne",
    titleTop: "Kitchen demolition in Melbourne.",
    titleRibbon: "Clear the room for your installer.",
    sub: "Replacing a kitchen? Metro removes the cabinetry, benchtops, splashback, tiles and flooring in your agreed scope. Tell us what’s coming out, what you’re keeping and when your installer needs the room.",
    points: [
      "Cabinetry, benchtops and splashbacks",
      "Wall tiles, floor tiles and floor coverings",
      "Appliances or cabinets you’re keeping set aside",
    ],
    imageDesktop: "/images/hero/kitchen-demolition-desktop.jpg",
    imageMobile: "/images/hero/kitchen-demolition-mobile.jpg",
  },
  services: {
    ...stripOut.services,
    title: "Just the kitchen, or the rooms around it too",
    items: [
      {
        ...rooms,
        title: "Full kitchen removal",
        detail:
          "Cabinetry, benchtops, splashback, rangehood and appliances in your agreed scope. Tell us when your installer needs the room.",
      },
      tiles,
      multiRoom,
      commercial,
    ],
  },
  faqs: {
    ...stripOut.faqs,
    items: [
      {
        q: "How much does kitchen demolition cost?",
        a: "It depends on the size of the kitchen, what’s coming out, whether the floor is included and how the waste can be carried out. Photos of the whole room help us see what needs to be priced.",
      },
      {
        q: "Can I keep my appliances or cabinets?",
        a: "Yes. Mark what’s staying or being reused in your photos and we’ll include it in the scope.",
      },
      ...stripOut.faqs.items,
    ],
  },
  finalCta: {
    title: "Get the kitchen ready for the new one",
    lede: "Tell us what’s coming out and when your installer needs the room.",
  },
};

/** /bathroom-demolition — ad group: Bathroom. Preselected service: bathroom-demolition. */
export const bathroomDemolition: ServicePageContent = {
  ...stripOut,
  slug: "bathroom-demolition",
  meta: {
    title: "Bathroom Demolition Melbourne | Strip-Outs | Metro",
    description:
      "Request a quote for bathroom demolition in Melbourne. Clear vanities, showers, baths, wall tiles and floors so your plumber or tiler can start.",
  },
  hero: {
    eyebrow: "Bathroom demolition · Melbourne",
    titleTop: "Bathroom demolition in Melbourne.",
    titleRibbon: "Ready for your plumber and tiler.",
    sub: "Renovating a bathroom, ensuite or laundry? Metro removes the fixtures, tiles and floors in your agreed scope. Tell us what’s coming out and when your plumber or tiler needs the room.",
    points: [
      "Vanities, showers, baths and toilets",
      "Wall and floor tiles",
      "Ensuites and laundries scoped together",
    ],
    imageDesktop: "/images/hero/bathroom-demolition-desktop.jpg",
    imageMobile: "/images/hero/bathroom-demolition-mobile.jpg",
  },
  services: {
    ...stripOut.services,
    title: "One bathroom, or every wet area in the house",
    items: [
      {
        ...rooms,
        title: "Bathroom and ensuite strip-outs",
        detail:
          "Vanity, shower, bath, toilet, tiles and floor in your agreed scope. Tell us when your plumber or waterproofer needs the room.",
      },
      tiles,
      multiRoom,
      commercial,
    ],
  },
  faqs: {
    ...stripOut.faqs,
    items: [
      {
        q: "How much does bathroom demolition cost?",
        a: "It depends on the size of the room, how many layers of tile there are, whether a bath is coming out and the access to the room. Photos of the whole bathroom help us see what needs to be priced.",
      },
      {
        q: "Can you do an apartment bathroom?",
        a: "Tell us the floor, lift access, building rules and allowed work hours. We’ll include them in the scope.",
      },
      ...stripOut.faqs.items,
    ],
  },
  finalCta: {
    title: "Get the bathroom ready for the next trade",
    lede: "Tell us what’s coming out and when your plumber or tiler needs the room.",
  },
};
