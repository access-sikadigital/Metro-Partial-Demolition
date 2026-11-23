"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { CTA_LABEL } from "@/lib/site-data";

/**
 * Mobile-only action bar pinned to the bottom of the screen: one full-width
 * quote button (the floating call button sits just above it, see FloatingContact). Hidden while the hero (which has its own form) is on
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
      <button
        type="button"
        onClick={openQuote}
        className="flex flex-1 flex-col items-center justify-center bg-go px-5 py-3 text-white"
      >
        <span className="flex items-center gap-2 text-[0.9rem] font-bold tracking-[0.06em] uppercase">
          {CTA_LABEL}
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <span className="mt-0.5 text-[0.72rem] text-white/85">
          Free, itemised, in writing within 24 hours
        </span>
      </button>
    </div>
  );
}
