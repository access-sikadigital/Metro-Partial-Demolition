import type { Metadata } from "next";
import { ServicePage } from "@/components/site/ServicePage";
import { resolveImages } from "@/lib/pages/images.server";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { stripOut as page } from "@/lib/pages/strip-out";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/strip-out" },
  openGraph: { title: page.meta.title, description: page.meta.description, url: "/strip-out" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(page.faqs.items)} />
      <ServicePage page={resolveImages(page)} />
    </>
  );
}
