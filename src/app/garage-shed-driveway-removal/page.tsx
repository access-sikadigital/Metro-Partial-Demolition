import type { Metadata } from "next";
import { StripOutPage } from "@/components/db/StripOutPage";
import { resolveImages } from "@/lib/pages/images.server";
import { JsonLd } from "@/components/site/JsonLd";
import { garageShedDrivewayContent as content } from "@/lib/db-content/garage-shed-driveway";
import { faqJsonLd } from "@/components/site/FaqList";
import { garageShedDriveway as page } from "@/lib/pages/garage-shed-driveway";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
  alternates: { canonical: "/garage-shed-driveway-removal" },
  openGraph: {
    title: page.meta.title,
    description: page.meta.description,
    url: "/garage-shed-driveway-removal",
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
