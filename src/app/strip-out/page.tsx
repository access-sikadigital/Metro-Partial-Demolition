import type { Metadata } from "next";
import { V2ServicePage } from "@/components/site/V2ServicePage";
import { V2_PAGES } from "@/lib/pages/v2";
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
      <V2ServicePage page={V2_PAGES["/strip-out"]} path="/strip-out" />
    </>
  );
}
