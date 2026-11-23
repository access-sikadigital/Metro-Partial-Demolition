# Metro Partial Demolition — Google Ads task list (start to finish)

Work through it in order. Each phase is blocked until the one before it is
done. Build details (keywords, ads, settings) are in `01-campaign-build.md`.

Owner key: **AM** = account manager · **Dev** = website · **Ads** = Google Ads specialist · **Client** = Metro

---

## Phase 0 — Client inputs (blocker: nothing goes live without these)

- [ ] **Client** Confirm the tracked phone number for the site and ads, and the answering hours.
- [ ] **Client** Confirm every "from" price: wall $1,500, garage/shed $1,200, kitchen $800, bathroom $1,200, laundry $800, small house $15,000, rubbish $99/$150/$290/$550. These are placeholders copied from Demo Bros.
- [ ] **Client** Confirm the asbestos set-up. Does Metro hold its own WorkSafe Victoria asbestos removal licence (Class A or B)? The pages and ads say "removed by our own licensed crew". If they don't hold one, change it to "arranged with a licensed removalist" everywhere.
- [ ] **Client** Confirm public liability cover (amount) and any registration or licence to quote.
- [ ] **Client** Send a Google Business Profile link plus the real review rating and count. **The 4.9★ / 48 reviews on the site are placeholders.**
- [ ] **Client** Send 5–10 real reviews (with permission) to replace the sample testimonials. **Don't run ads with the sample reviews live.** That's a Google misrepresentation policy breach and a consumer law problem.
- [ ] **Client** Confirm the service area (Melbourne metro only, or regional too) and whether they do same-day rubbish removal.
- [ ] **Client** Confirm they do tile removal and full house demolition, and say whether they want commercial strip-outs (see the Expansion terms tab in the audit sheet).
- [ ] **Client** Send 10–20 real job photos (before/after) for pages and image assets.
- [ ] **Client** Confirm the domain to launch on (for example `go.metropartialdemolition.com.au`, mirroring `go.demobros.com.au`).

## Phase 1 — Website ready for ads

- [ ] **Dev** Replace every `PLACEHOLDER` in `src/lib/site-data.ts` with Phase 0 answers: phone, email, TRUST, PRICING, testimonials.
- [ ] **Dev** Update asbestos wording across `src/lib/pages/*.ts` if Metro doesn't hold its own licence.
- [ ] **Dev** Remove the tile removal row, or the full-house FAQ answer, if Metro doesn't offer that service.
- [ ] **Dev** Swap stock photos for real job photos where supplied (`public/images/`).
- [ ] **Dev** Point the domain at Vercel, then set `SITE_URL` in `src/app/layout.tsx`.
- [ ] **Dev** Confirm `GHL_WEBHOOK_URL` and `BLOB_READ_WRITE_TOKEN` are set for Production in Vercel.
- [ ] **Dev** Submit a test lead from every landing page and check that:
  - [ ] it lands in GHL with the right `source` (e.g. "Kitchen Demolition Landing Page") and the services ticked
  - [ ] it redirects to the matching thank-you page
  - [ ] photos upload and their links appear in GHL
- [ ] **Dev** Check every page on a phone: hero form visible, sticky call button working, tel links dialling the right number.
- [ ] **Dev** PageSpeed Insights (mobile) on `/partial-demolition` and `/kitchen-demolition`: LCP under 2.5s.

## Phase 2 — Tracking

- [ ] **Ads** Create a **new GTM container for Metro**. Never reuse the Demo Bros container. Put its ID in `GTM_ID` in `src/app/layout.tsx`, then deploy.
- [ ] **Ads** Create a GA4 property and web stream for Metro. In GTM: Google tag on all pages, plus a GA4 event `generate_lead` (trigger: Custom Event `generate_lead`, param `form_location`).
- [ ] **Ads** Create the Google Ads account (or confirm the existing one) under the Sika Digital MCC, in AUD with the Melbourne time zone. Billing is on the client's card.
- [ ] **Ads** Create conversion actions per `01-campaign-build.md` section 6:
  - [ ] Submit lead form (primary): GTM Google Ads conversion tag on Custom Event `generate_lead`
  - [ ] Calls from ads (primary, ≥60s)
  - [ ] Website phone calls via Google forwarding number (primary, ≥60s)
  - [ ] Click-to-call (secondary)
- [ ] **Ads** Add the Conversion Linker tag in GTM (all pages).
- [ ] **Ads/Dev** Turn on enhanced conversions for leads. Dev pushes hashed email/phone to the dataLayer with `generate_lead`. Today the thank-you page only sends `form_location`, so this needs a small code change.
- [ ] **Ads** Link Google Ads ↔ GA4 ↔ GTM. Turn auto-tagging ON.
- [ ] **Ads** Test with GTM Preview and Tag Assistant on every thank-you page. The conversion should fire once per submission and not on refresh. Then check the conversion shows as "Recording" in Google Ads within 24h.

## Phase 3 — GHL (lead handling)

- [ ] **AM** Duplicate the Demo Bros GHL lead workflow for Metro: instant SMS and email to the lead, an internal notification to Metro, and a missed-call text-back.
- [ ] **AM** Add a pipeline with stages New → Contacted → Quoted → Won/Lost, tagged by `source`.
- [ ] **AM** Agree a speed-to-lead target with Metro (call back within 15 minutes in business hours). The landing pages promise a quote within 24 hours, so make sure that's held.
- [ ] **AM** Set up a GCLID offline conversion upload from GHL (Quoted and Won stages). Leave it as secondary until 30 days of data is in.

## Phase 4 — Build the campaigns

- [ ] **Ads** Re-pull Keyword Planner (Melbourne, AUD) for every "estimated" row in the audit sheet plus the tile removal terms. Adjust max CPC limits if bids differ by more than 20%.
- [ ] **Ads** Create the shared negative list "Metro – Universal negatives" and apply it to all campaigns.
- [ ] **Ads** Build C1 Partial & Strip Outs: 6 ad groups, keywords, RSAs, campaign negatives.
- [ ] **Ads** Build C2 Garage, Shed & Driveway: 3 ad groups.
- [ ] **Ads** Build C3 Rubbish Removal: 1 ad group.
- [ ] **Ads** Build C4 Brand: 1 ad group.
- [ ] **Ads** Settings check on every campaign: Search only, Search Partners off, Display off, "Presence" location, Maximise clicks with a CPC limit, the right conversion goals, budget per the table.
- [ ] **Ads** Add assets: sitelinks, callouts, structured snippets, price assets, call asset (scheduled), business name, logo, images.
- [ ] **Ads** Add the tracking template at account level.
- [ ] **Ads** Make sure every RSA's final URL loads on the **production domain**, not the vercel.app URL.
- [ ] **Ads** Have a second person check the whole build before it's enabled (spelling, prices, URLs, negatives, budgets).
- [ ] **AM** Send the client a one-page summary: what's live, the monthly budget (A$2,310 cap, ex GST), what we'll report, and when.

## Phase 5 — Launch and first 30 days

- [ ] **Ads** Enable all four campaigns on the same day. Note the date in the campaign names.
- [ ] **Ads** Days 1–3: check ads are approved, impressions are flowing and there are no "Limited by policy" flags. Submit one live test lead.
- [ ] **Ads** Weekly (every Monday for the first month):
  - [ ] Search terms report: add negatives, and add strong converting terms as phrase/exact
  - [ ] Check spend against budget for each campaign
  - [ ] Check each lead in GHL is real (not spam or job seekers) and tag its quality
  - [ ] Asset and ad strength: replace low-performing headlines after 2 weeks
- [ ] **AM** Week 2: call Metro to ask about lead quality, which jobs they want more of, and which to cut.
- [ ] **Ads** Day 30 review:
  - [ ] Cost per lead and cost per quoted job, by campaign
  - [ ] Move budget towards whichever of C1/C2 produces quoted jobs
  - [ ] Rubbish removal: keep, scale or cut, based on job value from GHL
  - [ ] Any campaign with 15+ conversions/30 days → switch to Maximise conversions
- [ ] **AM** Monthly report to Metro: spend, leads, cost per lead, quoted and won (from GHL), and next month's changes.

## Phase 6 — After day 30 (only once the basics are working)

- [ ] **Ads** Test target CPA bidding on C1, once it has run 30 days on Maximise conversions.
- [ ] **Ads** Switch offline conversions (Quoted/Won) to primary once the GHL upload is reliable.
- [ ] **Ads** If Metro wants commercial work, add an Office Strip-Out & Defit ad group (expansion terms tab). That needs a commercial section or page, so quote it as extra scope.
- [ ] **AM** Revisit the budget with John once cost per quoted job is known.

---

### Out of scope for this build (flag before doing)
- Meta ads, SEO, GBP optimisation, new pages beyond the seven landing pages.
- Commercial strip-out / defit page.
- Call tracking software beyond Google forwarding numbers (CallRail etc.).
