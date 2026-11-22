# Metro Partial Demolition — Landing Pages

Next.js site for Metro Partial Demolition. Same page structure as the Demo Bros
landing project — one main page that routes visitors to three service landing
pages — rebuilt in the Metro brand (2026 brand guidelines).

## Pages

| Route | Google Ads ad groups | What it is |
| --- | --- | --- |
| `/` | — | Main landing page (hub), links to the three core services |
| `/partial-demolition` | Partial Demolition, Extension, Brand | Core money page: rear-of-house, extensions, walls |
| `/strip-out` | Strip Out, Tile Removal | Strip-outs landing page |
| `/kitchen-demolition` | Kitchen | Strip-out page with kitchen hero, prices and FAQs |
| `/bathroom-demolition` | Bathroom | Strip-out page with bathroom hero, prices and FAQs |
| `/garage-shed-driveway-removal` | Garage, Shed, Driveway | Backyard demolition: outbuildings, slabs, driveways |
| `/rubbish-removal` | Rubbish Removal | Rubbish removal landing page |
| `/house-demolition` | — (not in ads at launch) | Full house demolition |
| `/thank-you-*` | — | One per landing page; each pushes `generate_lead` to the dataLayer |
| any other URL | — | Branded 404 (`src/app/not-found.tsx`) |

The quote form pre-ticks the page's service (`DEFAULT_SERVICES` in
`site-data.ts`), sends a `source` label to GHL (`LEAD_SOURCES`) and redirects to
the page's own thank-you URL (`THANK_YOU_PATHS`).

Google Ads build sheet and start-to-finish task list: `docs/google-ads/`.

## Running it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`,
`npm run typecheck`, `npm run format`.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 ·
framer-motion · Lenis smooth scroll · react-hook-form + zod.

Quote submissions go through a Server Action (`src/lib/lead.actions.ts`) that
re-validates the form and posts it to the GoHighLevel webhook, with phone
numbers normalised to +61, a spam honeypot, and first-touch UTM / click-id
attribution (`src/lib/tracking.ts`). Photos are uploaded from the browser
straight to Vercel Blob (store `metro-quote-photos`, Sydney) through short-lived
tokens from `src/app/api/photo-upload/route.ts`; only their URLs go to GHL.

## Where things live

```
src/app/                 Routes (page.tsx per page), layout, 404, error, globals.css
src/components/site/     UI — HubPage, ServicePage (landing-page template), Sections,
                         QuoteForm, QuoteModal, Header, Footer, brand helpers
src/lib/site-data.ts     Shared content: business details, prices, hub copy, reviews
src/lib/pages/*.ts       One content file per service landing page
public/brand|icons|images|fonts   Logos, graphic elements, icons, photography, fonts
```

To change copy on a service page, edit its file in `src/lib/pages/`. To change a
price, edit `PRICING` in `src/lib/site-data.ts` — every page that quotes it
updates.

## Brand

Colours: Off-Black `#151515`, Yellow `#FBB428`, Off-White `#FEFFF7`,
Dark Gray `#3E3E3E`, Concrete `#C7C7C7`, Plaster `#F2F1EF`.
Type: Menseal (headlines only) and Google Sans Flex (everything else), both
self-hosted in `public/fonts`. Graphic elements (chamfered corners, hazard
stripes, grid and dot patterns, bricks) and the solid icon set come from the
brand pack; icons are tinted with CSS masks via `<BrandIcon>`.

## Before launch

Everything below is a **placeholder** — search the code for `PLACEHOLDER`:

- [ ] Phone number and email — `SITE` in `src/lib/site-data.ts`
- [ ] Google rating, review count, liability cover, licence — `TRUST`
- [ ] Every "from" price — `PRICING`
- [ ] **Reviews** — the testimonials are sample copy written for the design.
      Replace them with real, verified Google reviews before going live.
- [ ] Production domain — `SITE_URL` in `src/app/layout.tsx`
- [ ] Metro's own Google Tag Manager ID — `GTM_ID` in `src/app/layout.tsx`
      (empty = GTM is not loaded at all)
- [x] `GHL_WEBHOOK_URL` and `BLOB_READ_WRITE_TOKEN` — set in Vercel (see `.env.example`)
