"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { SITE, hasPhone } from "@/lib/site-data";

/**
 * Hidden until Metro's number is verified (hasPhone).
 *
 * Desktop floating call button — one tap, one action. A plain tel: link, so it
 * works with JavaScript off and long-press copies the number. On phones it
 * floats just above the sticky quote bar; on desktop, bottom-right.
 *
 * Two staggered green rings pulse outward behind it (like Demo Bros) to draw
 * the eye; they stop for people who prefer reduced motion (globals.css).
 *
 * Like Demo Bros, it fades in once the visitor scrolls past the top of the
 * hero (the hero already has a call button), and stays for the rest of the page.
 */
export function FloatingContact() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!hasPhone) return null;
  return (
    <a
      href={SITE.phoneHref}
      aria-label="Call Metro"
      aria-hidden={!shown || undefined}
      tabIndex={shown ? undefined : -1}
      className={`group fixed right-4 bottom-[5.25rem] z-50 block h-14 w-14 transition-all duration-500 lg:right-6 lg:bottom-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span
        aria-hidden
        className="chamfer animate-call-pulse absolute inset-0 bg-go [--cut:12px]"
      />
      <span
        aria-hidden
        className="chamfer animate-call-pulse absolute inset-0 bg-go [--cut:12px] [animation-delay:1s]"
      />
      <span className="chamfer relative flex h-full w-full items-center justify-center bg-go text-white shadow-xl shadow-black/30 transition-transform [--cut:12px] group-hover:-translate-y-0.5">
        <Phone className="animate-call-wiggle h-6 w-6" strokeWidth={2.25} />
      </span>
    </a>
  );
}
