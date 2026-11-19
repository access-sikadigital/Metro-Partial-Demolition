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
