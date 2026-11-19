import type { Metadata } from "next";
import { HubPage } from "@/components/site/HubPage";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Main landing page — the hub that routes to the three service pages. */
export default function Page() {
  return <HubPage />;
}
