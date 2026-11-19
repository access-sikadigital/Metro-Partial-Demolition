import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";
import { Providers } from "@/components/site/Providers";
import { JsonLd } from "@/components/site/JsonLd";
import { PRICING, SITE, TRUST } from "@/lib/site-data";

// PLACEHOLDER — production domain. Open Graph / Twitter need absolute URLs.
const SITE_URL = "https://metropartialdemolition.com.au";

// PLACEHOLDER — Metro's own Google Tag Manager container (GTM-XXXXXXX).
// Empty on purpose: the Demo Bros container must never fire on another
// client's site. While empty, no GTM script is rendered at all.
const GTM_ID = "";

const TITLE = `${SITE.name} | Melbourne Demolition, Strip-Outs & Rubbish Removal`;
const DESCRIPTION = `Melbourne house and partial demolition, strip-outs from ${PRICING.kitchen} and rubbish removal from ${PRICING.minLoad}. One crew, a fixed itemised price in writing within 24 hours — and the part you're keeping stays protected.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: SITE.name }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    siteName: SITE.name,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Melbourne demolition`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151515",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  description:
    "Melbourne demolition specialists: house and partial demolition, wall removals, kitchen, bathroom, internal and commercial strip outs, rubbish removal and clear-outs, and in-house asbestos removal.",
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: "Greater Melbourne and Victoria, Australia",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: TRUST.rating,
    reviewCount: TRUST.reviewCount,
    bestRating: "5",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        {/* Display + body fonts are on the critical path for the hero headline. */}
        <link
          rel="preload"
          href="/fonts/Menseal-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GoogleSansFlex-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <JsonLd data={localBusiness} />
      </head>
      <body>
        {GTM_ID && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
