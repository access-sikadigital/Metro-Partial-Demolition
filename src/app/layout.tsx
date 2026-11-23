import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import "./globals.css";
import { Providers } from "@/components/site/Providers";
import { JsonLd } from "@/components/site/JsonLd";
import { SITE, hasPhone, hub } from "@/lib/site-data";

// PLACEHOLDER — production domain. Open Graph / Twitter need absolute URLs.
const SITE_URL = "https://metropartialdemolition.com.au";

// Metro's own Google Tag Manager container (GTM-XXXXXXX), set as
// NEXT_PUBLIC_GTM_ID in Vercel. Never the Demo Bros container. While it's
// unset, no GTM script is rendered at all. GA4, Google Ads, Clarity and call
// tracking all load through GTM — see docs/google-ads/03-tracking-setup.md.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";

// Optional meta-tag verification. The preferred route is a DNS TXT record in
// GoDaddy; these are only a fallback if DNS verification isn't possible.
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION?.trim();
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION?.trim();

// Default title/description for any page that doesn't set its own: the home
// page's, from the 01-Home copy.
const TITLE = hub.meta.title;
const DESCRIPTION = hub.meta.description;

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
  manifest: "/site.webmanifest",
  verification: {
    ...(GSC_VERIFICATION ? { google: GSC_VERIFICATION } : {}),
    ...(BING_VERIFICATION ? { other: { "msvalidate.01": BING_VERIFICATION } } : {}),
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
  url: SITE_URL,
  description: "Partial demolition, strip-outs and rubbish removal across Melbourne.",
  areaServed: "Melbourne, Victoria, Australia",
  // Contact details only once Metro has confirmed them. No rating or price
  // range: nothing goes in structured data that isn't on the page and verified.
  ...(hasPhone ? { telephone: SITE.phone } : {}),
  ...(SITE.email ? { email: SITE.email } : {}),
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
