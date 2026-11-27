import type { Metadata } from "next";

import { AllProjects } from "@/components/db/ProjectsBeforeAfter";
import { FinalCtaBand, QuoteCta } from "@/components/site/Sections";
import { FloatingContact } from "@/components/site/FloatingContact";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";

const TITLE = "Our Projects | Before & After | Metro Partial Demolition";
const DESCRIPTION =
  "Before and after photos from Metro's partial demolition and strip-out jobs around Melbourne.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/projects" },
};

/** "See all our projects" from the homepage: every before/after pair. */
export default function Page() {
  return (
    <>
      <AllProjects />
      <FinalCtaBand
        eyebrow="Get a free quote"
        title="Have a job like these?"
        lede="Tell us what needs to go and where the job is. We’ll quote the work."
      >
        <QuoteCta />
      </FinalCtaBand>
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}
