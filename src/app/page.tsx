import type { Metadata } from "next";
import { HubPage } from "@/components/site/HubPage";
import { hub } from "@/lib/site-data";

export const metadata: Metadata = {
  title: hub.meta.title,
  description: hub.meta.description,
  alternates: { canonical: "/" },
  openGraph: { title: hub.meta.title, description: hub.meta.description, url: "/" },
  twitter: { title: hub.meta.title, description: hub.meta.description },
};

/** Main page — routes visitors to the three service pages. */
export default function Page() {
  return <HubPage />;
}
