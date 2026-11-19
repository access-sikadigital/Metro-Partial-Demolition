# Metro Partial Demolition — Landing Pages

Next.js site for Metro Partial Demolition. Same page structure as the Demo Bros
landing project — one main page that routes visitors to three service landing
pages — rebuilt in the Metro brand (2026 brand guidelines).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Main landing page (hub) — general hero, links to the three services |
| `/house-demolition` | House & partial demolition landing page |
| `/strip-out` | Strip-outs landing page |
| `/rubbish-removal` | Rubbish removal landing page |
| `/thank-you` | Shown after a quote from the main page |
| `/thank-you-house-demolition`, `/thank-you-strip-out`, `/thank-you-rubbish-removal` | One per service, so each can fire its own ad conversion |
| any other URL | Branded 404 (`src/app/not-found.tsx`) |

The quote form redirects to the thank-you page matching the page it was sent
from (inline form or pop-up). Each thank-you page also pushes a
`generate_lead` event to the GTM `dataLayer` with the form source.

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
attribution (`src/lib/tracking.ts`).

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
- [ ] `GHL_WEBHOOK_URL` and the Cloudinary variables — see `.env.example`
