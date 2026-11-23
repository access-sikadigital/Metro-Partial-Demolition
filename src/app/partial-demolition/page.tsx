import type { Metadata } from "next";
import { ServicePage } from "@/components/site/ServicePage";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { partialDemolition as page } from "@/lib/pages/partial-demolition";

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
      <ServicePage page={page} />
    </>
  );
}
