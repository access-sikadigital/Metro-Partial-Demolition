import type { Metadata } from "next";
import { JsonLd } from "@/components/site/JsonLd";
import { faqJsonLd } from "@/components/site/FaqList";
import { RubbishRemovalPage } from "@/components/db/RubbishRemovalPage";
import { rubbishRemovalContent as content } from "@/lib/db-content/rubbish-removal";
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
      <JsonLd data={faqJsonLd(content.faqs.items)} />
      <RubbishRemovalPage content={content} />
    </>
  );
}
