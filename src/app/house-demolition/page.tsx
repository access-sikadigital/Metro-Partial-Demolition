import type { Metadata } from "next";
import { HouseDemolitionPage } from "@/components/db/HouseDemolitionPage";
import { resolveImages } from "@/lib/pages/images.server";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { houseDemolition as page } from "@/lib/pages/house-demolition";
import { houseDemolitionContent } from "@/lib/db-content/house-demolition";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/house-demolition" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/house-demolition",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs.items)} />
      <HouseDemolitionPage content={resolveImages(houseDemolitionContent)} />
    </>
  );
}
