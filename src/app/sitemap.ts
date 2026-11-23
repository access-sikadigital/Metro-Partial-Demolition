import type { MetadataRoute } from "next";

const SITE_URL = "https://metropartialdemolition.com.au";

/** Landing pages only — thank-you pages are noindex and stay out. */
const ROUTES = [
  "",
  "/partial-demolition",
  "/strip-out",
  "/kitchen-demolition",
  "/bathroom-demolition",
  "/garage-shed-driveway-removal",
  "/rubbish-removal",
  "/house-demolition",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
