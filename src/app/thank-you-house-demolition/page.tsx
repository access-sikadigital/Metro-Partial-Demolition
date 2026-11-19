import type { Metadata } from "next";
import { ThankYou } from "@/components/site/ThankYou";

export const metadata: Metadata = {
  title: "Thank you — Metro Partial Demolition",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ThankYou source="house-demolition" homePath="/house-demolition" />;
}
