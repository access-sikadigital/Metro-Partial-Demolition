"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

import { CtaButton } from "./CtaButton";
import { Logo } from "./Brand";
import { useQuoteModal } from "./QuoteModal";
import { CTA_LABEL, SITE, hasPhone, servicePages } from "@/lib/site-data";

/**
 * Landing-page header: logo, the phone (once Metro's number is verified) and
 * one green CTA, the same as Demo Bros. No Contact link: /contact stays in the
 * footer. Kept this short on purpose — on a paid-traffic page
 * every link is an exit from the one action the page exists for.
 *
 * The hero is off-black, so the header is dark on every page and the
 * white-METRO logo artwork is the only one it ever needs. Over the hero the bar
 * is transparent; once the page scrolls (desktop only, where it's pinned) it
 * turns solid and a hazard rule appears along its bottom edge.
 *
 * Below `lg` it's absolute and scrolls away with the hero — a pinned bar is a
 * standing tax on a phone screen, and the sticky bottom CTA covers that job.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();
  const { openQuote } = useQuoteModal();
  const pathname = usePathname();
  // The hub and the three service pages all open on a dark hero, so they share
  // the transparent-over-hero header. Thank-you and 404 pages get a solid bar.
  const isHub = pathname === "/";
  const isLanding =
    isHub || pathname === "/contact" || servicePages.some((s) => s.path === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isLanding;

  return (
    <header
      data-solid={solid || undefined}
      className={`group z-50 inset-x-0 top-0 transition-colors duration-300 ${
        isLanding ? "absolute lg:fixed" : "relative"
      } ${solid ? "bg-ink lg:bg-ink/95 lg:backdrop-blur" : "bg-transparent"}`}
    >
      <div className="container-wide flex items-center justify-between gap-3 py-3 sm:gap-4 lg:py-3.5">
        {isHub ? (
          <a
            href="#top"
            aria-label={`${SITE.name}, back to top`}
            className="block shrink-0"
            onClick={(e) => {
              e.preventDefault();
              if (lenis) lenis.scrollTo(0);
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo on="dark" className="h-11 sm:h-12 lg:h-14" />
          </a>
        ) : (
          <Link href="/" aria-label={`${SITE.name}, home`} className="block shrink-0">
            <Logo on="dark" className="h-11 sm:h-12 lg:h-14" />
          </Link>
        )}

        <nav aria-label="Main" className="flex items-center gap-3 sm:gap-6">
          {hasPhone && (
            <a
              href={SITE.phoneHref}
              aria-label="Call Metro"
              className="flex min-h-11 items-center gap-2 text-sm font-bold text-paper transition-colors hover:text-go"
            >
              <span className="flex h-10 w-10 items-center justify-center bg-go text-white sm:h-auto sm:w-auto sm:bg-transparent sm:text-go">
                <Phone className="h-4 w-4 shrink-0" />
              </span>
              <span className="hidden sm:inline">{SITE.phone}</span>
            </a>
          )}
          {isLanding && (
            <CtaButton size="sm" onClick={openQuote} className="hidden sm:inline-flex">
              {CTA_LABEL}
            </CtaButton>
          )}
        </nav>
      </div>
      {/* Hazard rule — only once the bar is solid, so the hero photo isn't striped. */}
      <div
        aria-hidden
        className={`hazard h-[3px] transition-opacity duration-300 ${solid ? "opacity-100" : "opacity-0"}`}
      />
    </header>
  );
}
