"use client";

import { useEffect, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { QuoteModalProvider } from "./QuoteModal";
import { captureTracking } from "@/lib/tracking";

/**
 * Client-side shell shared by every page: Lenis smooth scrolling, the quote
 * modal (opened by any below-the-fold CTA), header and footer, and first-touch
 * UTM / click-id capture on the visitor's landing page.
 */
export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    captureTracking();
    // Phone taps as a dataLayer event (GTM: "phone_click"), wherever the link is.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "phone_click",
        click_location: window.location.pathname,
        phone_number: link.getAttribute("href")?.replace("tel:", "") ?? "",
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <SmoothScroll>
      <QuoteModalProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </QuoteModalProvider>
    </SmoothScroll>
  );
}
