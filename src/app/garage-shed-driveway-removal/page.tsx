import type { Metadata } from "next";
import { ServicePage } from "@/components/site/ServicePage";
import { resolveImages } from "@/lib/pages/images.server";
import { JsonLd } from "@/components/site/JsonLd";
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
      <ServicePage page={resolveImages(page)} />
    </>
  );
}
