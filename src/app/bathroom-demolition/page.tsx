import type { Metadata } from "next";
import { StripOutPage } from "@/components/db/StripOutPage";
import { resolveImages } from "@/lib/pages/images.server";
import { JsonLd } from "@/components/site/JsonLd";
import { bathroomDemolitionContent as content } from "@/lib/db-content/bathroom-demolition";
import { faqJsonLd } from "@/components/site/FaqList";
import { bathroomDemolition as page } from "@/lib/pages/kitchen-bathroom";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/bathroom-demolition" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/bathroom-demolition",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs.items)} />
      <StripOutPage content={resolveImages(content)} />
    </>
  );
}
