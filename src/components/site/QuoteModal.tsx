"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { useIsClient } from "@/lib/use-is-client";
import { QuoteForm } from "./QuoteForm";
import { GoogleRatingBadge } from "./GoogleRating";
import { HazardBand } from "./Brand";
import { SITE, modalBenefits } from "@/lib/site-data";

/**
 * Two-panel quote modal opened by every below-the-fold CTA, so nobody gets
 * scrolled all the way back to the hero to act on a button they just read.
 *
 * Left panel sells (dark, over site photography), right panel converts (light,
 * the form). On a phone the pitch is dropped entirely: someone who tapped
 * "Get my fixed price" should land on fields, not more marketing.
 *
 * Portalled to <body> to escape the fixed header's stacking context.
 */
const QuoteModalContext = createContext<{ openQuote: () => void }>({ openQuote: () => {} });

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  // The modal remembers the page it was opened on. Navigating anywhere else —
  // e.g. the redirect to /thank-you after a submit — closes it, with no effect
  // needed to reset state after the route changes.
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn !== null && openOn === pathname;
  const value = useMemo(() => ({ openQuote: () => setOpenOn(pathname) }), [pathname]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <QuoteModal open={open} onClose={() => setOpenOn(null)} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const mounted = useIsClient();
  const lenis = useLenis();
  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
      document.documentElement.style.overflow = "";
    };
  }, [open, close, lenis]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Get a fixed price quote"
          data-lenis-prevent
          className="fixed inset-0 z-[300] overflow-y-auto overscroll-contain bg-ink/80 backdrop-blur-sm"
        >
          <div className="grid min-h-full place-items-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="chamfer relative grid w-full max-w-5xl overflow-hidden shadow-2xl shadow-black/60 [--cut:28px] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-3 right-3 z-20 flex h-10 w-10 items-center justify-center bg-ink text-paper transition-colors hover:bg-hivis hover:text-ink sm:top-4 sm:right-4"
              >
                <X className="h-5 w-5" />
              </button>

              {/* ---------------- Left: the pitch ---------------- */}
              <div className="relative hidden overflow-hidden bg-ink p-9 text-paper lg:block">
                <img
                  src="/images/services/internal-strip-out.jpg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale-[35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
                <div
                  aria-hidden
                  className="pattern-dots absolute top-0 right-0 h-32 w-40 opacity-40"
                />

                <div className="relative">
                  <p className="eyebrow [--eyebrow-color:var(--hivis)]">
                    Melbourne · Victoria wide
                  </p>
                  <h2 className="font-display mt-4 text-[1.7rem] leading-[1.05]">
                    One crew. Fixed price. <span className="ribbon">No surprises.</span>
                  </h2>

                  <ul className="mt-8 grid gap-4">
                    {modalBenefits.map((b) => (
                      <li key={b.lead} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-hivis text-ink">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-paper/65">
                          <span className="font-bold text-paper">{b.lead}</span> {b.rest}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <GoogleRatingBadge tone="dark" />
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-sm text-paper/60">Rather talk it through?</p>
                    <a
                      href={SITE.phoneHref}
                      className="font-display mt-1.5 inline-flex items-center gap-2 text-xl text-paper transition-colors hover:text-hivis"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-hivis" />
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* ---------------- Right: the form ---------------- */}
              <div className="relative bg-paper">
                <HazardBand className="h-2" />
                <div className="p-5 pt-6 sm:p-9">
                  <p className="eyebrow [--eyebrow-color:var(--graphite)]">Free quote</p>
                  <h3 className="font-display mt-2 pr-12 text-xl text-ink sm:text-2xl">
                    Your fixed price, in 24 hours
                  </h3>
                  <div className="mt-6">
                    <QuoteForm compact tone="light" photos={false} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
