import type { Metadata } from "next";
import { HouseDemolitionPage } from "@/components/db/HouseDemolitionPage";
import { resolveImages } from "@/lib/pages/images.server";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { partialDemolition as page } from "@/lib/pages/partial-demolition";
import { partialDemolitionContent } from "@/lib/db-content/partial-demolition";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/partial-demolition" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/partial-demolition",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs.items)} />
      <HouseDemolitionPage content={resolveImages(partialDemolitionContent)} />
    </>
  );
}
