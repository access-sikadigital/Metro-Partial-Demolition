import type { Metadata } from "next";
import { ServicePage } from "@/components/site/ServicePage";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { kitchenDemolition as page } from "@/lib/pages/kitchen-bathroom";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/kitchen-demolition" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/kitchen-demolition",
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
