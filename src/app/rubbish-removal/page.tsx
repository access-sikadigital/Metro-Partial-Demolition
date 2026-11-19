import type { Metadata } from "next";
import { ServicePage } from "@/components/site/ServicePage";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { rubbishRemoval as page } from "@/lib/pages/rubbish-removal";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/rubbish-removal" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/rubbish-removal",
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
