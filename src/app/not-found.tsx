import type { Metadata } from "next";
import { CtaButton } from "@/components/site/CtaButton";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Page not found — Metro Partial Demolition",
  robots: { index: false, follow: false },
};

/** 404 — on brand: the page has been "demolished", everything else still stands. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-paper px-4 py-24">
      <div
        aria-hidden
        className="pattern-dots absolute top-10 right-0 h-48 w-56 opacity-50 [--dot-color:var(--concrete)]"
      />
      <div className="relative max-w-xl text-center">
        <p className="eyebrow [--eyebrow-color:var(--graphite)]">Error 404</p>
        <h1 className="font-display mt-5 text-5xl text-ink sm:text-7xl">
          <span className="ribbon">Demolished</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          This page has been taken out. Everything else is still standing.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <CtaButton to="/" size="md">
            Back to the top
          </CtaButton>
          <CtaButton href={SITE.phoneHref} variant="outlineDark" size="md" icon="phone">
            Call {SITE.phone}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
