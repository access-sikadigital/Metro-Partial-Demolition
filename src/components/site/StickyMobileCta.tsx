"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { CTA_LABEL, SITE } from "@/lib/site-data";

/**
 * Mobile-only action bar pinned to the bottom of the screen: call on the left,
 * the quote on the right. Hidden while the hero (which has its own form) is on
 * screen, then slides up. Hidden from `lg`.
 */
export function StickyMobileCta() {
  const { openQuote } = useQuoteModal();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    // Only the landing pages render this bar, and every one opens on #top.
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), {
      threshold: 0,
      rootMargin: "-64px 0px 0px 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex shadow-[0_-6px_24px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={SITE.phoneHref}
        aria-label={`Call ${SITE.phone}`}
        className="flex w-[4.25rem] shrink-0 items-center justify-center bg-ink text-hivis"
      >
        <Phone className="h-5 w-5" />
      </a>
      <button
        type="button"
        onClick={openQuote}
        className="flex flex-1 items-center justify-center gap-2 bg-hivis px-5 py-4 text-[0.85rem] font-bold tracking-[0.08em] text-ink uppercase"
      >
        {CTA_LABEL}
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
