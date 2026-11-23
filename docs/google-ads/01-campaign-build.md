# Metro Partial Demolition — Google Ads build sheet

Source of truth for setting up the Metro account. Budgets come from the keyword
audit (A$2,310/mo, ~A$76/day, ex GST). Structure mirrors Demo Bros, adjusted
for Metro being a partial demolition business, not a full-house one.

## 1. What Demo Bros is doing (16–22 Nov 2026, 7 days)

| Campaign | Budget/day | Clicks | CTR | Conv. | Conv. rate | Cost/conv. |
| --- | --- | --- | --- | --- | --- | --- |
| [SD] Search \| Partial & Strip Outs | A$45 | 76 | 4.58% | 9 | 11.84% | A$49.75 |
| [SD] Search \| Rubbish Removal & Cleanups | A$15 | 104 | 3.72% | 3 | 2.88% | A$66.63 |
| [SD] Search \| Full House Demolition | A$15 | 35 | 5.47% | 2 | 5.71% | A$96.12 |
| **Account** | **A$75** | **215** | **4.22%** | **14** | **6.51%** | **A$59.99** |

What to take from it:

- **Partial & strip-out is the winner.** Best conversion rate and cheapest lead. It gets most of Metro's budget.
- **Rubbish removal gets cheap clicks but converts at under 3%.** Lots of low-value, price-shopping searches. Metro tests it at a capped budget (20% of demand per the audit) and has to prove job value before it scales.
- **Full house demolition is the most expensive lead.** Metro has no full-house keywords in the audit, so there's no full-house campaign at launch. The `/house-demolition` page stays live, but no ads point to it.
- **All three campaigns are "Limited by budget" on Maximise clicks.** That's fine while you're collecting data. Demo Bros' Partial & Strip campaign has enough conversions now (~35–40/month) to test Maximise conversions. Raise that with John separately; it's not part of this build.
- **One conversion goal: Submit lead forms (Website).** Metro uses the same goal, plus calls (section 6).

## 2. Campaign structure

Naming: `[SD] Search | <Theme> | <launch date>`, same as Demo Bros.

| # | Campaign | Budget/day | Monthly | Ad groups → landing page |
| --- | --- | --- | --- | --- |
| C1 | `[SD] Search \| Partial & Strip Outs` | A$41 | A$1,250 | Partial Demolition → `/partial-demolition` · Extension Demolition → `/partial-demolition` · Strip Out → `/strip-out` · Tile Removal → `/strip-out` · Kitchen → `/kitchen-demolition` · Bathroom → `/bathroom-demolition` |
| C2 | `[SD] Search \| Garage, Shed & Driveway` | A$12 | A$360 | Garage → `/garage-shed-driveway-removal` · Shed → same · Driveway → same |
| C3 | `[SD] Search \| Rubbish Removal` | A$22 | A$670 | Rubbish Removal → `/rubbish-removal` |
| C4 | `[SD] Search \| Brand` | A$1 | A$30 | Brand → `/partial-demolition` |
| | **Total** | **A$76** | **A$2,310** | |

Why garage, shed and driveway get their own campaign: it's a different buyer
(a homeowner clearing the yard, not someone renovating) with a smaller job
value. If it shares C1's budget, it can take money from the partial demolition
keywords, which are worth more per job.

### Campaign settings (all four)

- Goal: Leads. Conversion goals: **Submit lead form** and **Phone call lead** only, set at campaign level.
- Networks: Search only. **Untick Search Partners and Display.**
- Location: Greater Melbourne. Targeting: **"Presence: people in or regularly in"**, not "interest".
- Language: English. Devices: all, no adjustments at launch.
- Ad schedule: 24/7 at launch. Call assets only during Metro's answering hours.
- Bidding at launch: **Maximise clicks with a max CPC limit**. Limits: C1 A$26, C2 A$18, C3 A$22, C4 A$5. Once a campaign has 15+ conversions in 30 days, switch it to **Maximise conversions**. Add a target CPA after it has run another 30 days.
- Auto-tagging ON (account level).
- Tracking template (account level): `{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}`
- Broad match OFF at launch. Use phrase and exact only.

## 3. Keywords

Phrase `"…"` and exact `[…]` for every keyword. Volumes and CPCs come from the audit sheet.

**C1 · Partial Demolition**: partial demolition melbourne · partial demolition company · partial demolition services · partial house demolition melbourne · partial demolition contractor · partial demolition near me · rear of house demolition · internal demolition melbourne

**C1 · Extension Demolition**: extension demolition melbourne · extension demolition · rear extension demolition

**C1 · Strip Out**: strip out demolition · strip out contractors · strip out services · soft strip demolition · strip out melbourne · internal strip out

**C1 · Tile Removal**: tile removal melbourne · floor tile removal · tile removal near me · tile removal service
> John asked for tile removal, but the audit sheet has no tile removal rows. Pull Keyword Planner data for these before launch. Until it's proven, this ad group shares C1's budget.

**C1 · Kitchen**: kitchen demolition near me · kitchen demolition contractors · kitchen demolition services · kitchen removal melbourne · kitchen removal near me · kitchen demolition melbourne

**C1 · Bathroom**: bathroom demolition near me · bathroom demolition contractors · bathroom strip out near me · bathroom demolition melbourne · bathroom strip out melbourne

**C2 · Garage**: garage demolition melbourne · garage demolition near me · garage removal melbourne

**C2 · Shed**: shed demolition melbourne · shed removal melbourne · shed demolition near me · asbestos shed removal

**C2 · Driveway**: driveway removal melbourne · concrete driveway removal · concrete removal melbourne · driveway demolition

**C3 · Rubbish Removal**: rubbish removal melbourne · rubbish removal near me · same day rubbish removal (only if Metro does same day) · household rubbish removal · hard rubbish removal melbourne · construction waste removal

**C4 · Brand**: metro partial demolition · metro demolition · metro partial demolition pty ltd

### Negative keywords

Shared list **"Metro – Universal negatives"** (apply to all campaigns):
jobs, job, careers, salary, wage, hiring, apprentice, course, training, ticket, licence course, how to, diy, youtube, video, game, minecraft, lego, hire (as in equipment hire), excavator hire, bobcat hire, jackhammer hire, skip bin, skip bins, free, second hand, for sale, sydney, brisbane, perth, adelaide, gold coast, nz

Campaign-level negatives that keep traffic going to the right page:

- **C1**: garage, shed, carport, driveway, concrete, rubbish, junk, hard rubbish
- **C2**: kitchen, bathroom, strip out, rubbish, junk
- **C3**: council, collection dates, hard rubbish collection, booking, transfer station, tip, opening hours, bin, kerbside
- **C1–C3**: metro (brand terms only go to C4)

Check search terms every week for the first month (see the task list).

## 4. Ads (RSA): one per ad group, pinned H1 only

Final URL = the ad group's landing page. Display paths are set per ad group.
Character limits: headlines ≤30, descriptions ≤90. The validation script at
the bottom of this file checks them.

### Shared headlines (add to every RSA, unpinned)
- H: Fixed Price in 24 Hours
- H: Itemised Quote in Writing
- H: Free, No-Obligation Quote
- H: Asbestos Handled In-House
- H: Skip & Clean-Up Included
- H: One Crew, Start to Finish
- H: Melbourne Wide

### Partial Demolition (pin H1: "Partial Demolition Melbourne") · path: /partial/demolition
- H: Partial Demolition Melbourne
- H: Keep the Rest Standing
- H: Rear-of-House Demolition
- H: Wall Removals From $1,500
- H: We Prop What Stays Up
- H: Permits Handled For You
- H: Live In While We Work
- H: Metro Partial Demolition
- D: Rear-of-house, extensions and wall removals. What you keep stays propped and protected.
- D: Fixed, itemised price in writing within 24 hours. Permits and asbestos handled by us.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.
- D: Demolition specialists across Melbourne. Waste removed, site swept and photographed.

### Extension Demolition (pin H1: "Extension Demolition") · path: /extension/demolition
- H: Extension Demolition
- H: Rear Extension Removal
- H: Back Half Off, Front Stays
- H: Junction Weather-Sealed
- H: Propped Before It Comes Down
- H: Permits Handled For You
- H: Melbourne Extension Demo
- H: Ready for Your Builder
- D: Old extension off, the rest of the house propped, sealed and still liveable.
- D: Fixed, itemised price in writing within 24 hours. Permits and asbestos handled by us.
- D: Cut line agreed with you and your builder. Waste gone, site swept and photographed.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.

### Strip Out (pin H1: "Strip Outs From $800") · path: /strip-out/melbourne
- H: Strip Outs From $800
- H: Melbourne Strip Out Crew
- H: Cleared in a Day
- H: Kitchens, Baths & Laundries
- H: Back to the Frame
- H: Your Trades Start Tomorrow
- H: Soft Strip Demolition
- H: Internal Strip Outs
- D: Kitchens from $800, bathrooms from $1,200. Most rooms cleared in a day.
- D: Fixed, itemised price in writing within 24 hours. Skip, rubbish and clean-up included.
- D: Floors and stairs you're keeping stay covered. Services capped for your trades.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.

### Tile Removal (pin H1: "Tile Removal Melbourne") · path: /tile/removal
- H: Tile Removal Melbourne
- H: Wall & Floor Tile Removal
- H: Back to the Slab or Frame
- H: Tiles & Screed Lifted
- H: Ready for New Tiles
- H: Dust Controlled
- H: Rubbish Taken Away
- H: Bathrooms From $1,200
- D: Wall and floor tiles, screed and old sheeting lifted and taken away, ready for new work.
- D: Fixed, itemised price in writing within 24 hours. Skip, rubbish and clean-up included.
- D: Pre-1990 sheeting? Assessed before we quote and removed by our own crew.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.

### Kitchen (pin H1: "Kitchen Removal From $800") · path: /kitchen/demolition
- H: Kitchen Removal From $800
- H: Kitchen Demolition Melbourne
- H: Kitchen Out in a Day
- H: Services Capped & Safe
- H: Ready for Your Installer
- H: Cabinets, Bench, Splashback
- H: Keep Appliances? No Problem
- H: Kitchen Demolition Crew
- D: Cabinets, benchtop, splashback and tiles out by knock-off. Plumbing and power capped.
- D: Fixed, itemised price in writing within 24 hours. Skip, rubbish and clean-up included.
- D: Kitchens from $800. Your new kitchen goes in on schedule, not a week late.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.

### Bathroom (pin H1: "Bathroom Demolition $1,200") · path: /bathroom/demolition
- H: Bathroom Demolition $1,200
- H: Bathroom Strip Out Melbourne
- H: Bathroom Out in a Day
- H: Your Tiler Starts Tomorrow
- H: Tiles Back to the Frame
- H: Apartments Welcome
- H: Bathroom Demolition Crew
- H: Services Capped & Safe
- D: Vanity, shower, bath, tiles and screed out in a day. The rest of the house stays covered.
- D: Fixed, itemised price in writing within 24 hours. Skip, rubbish and clean-up included.
- D: Pre-1990 sheeting? Assessed before we quote and removed by our own licensed crew.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.

### Garage (pin H1: "Garage Demolition Melbourne") · path: /garage/demolition
- H: Garage Demolition Melbourne
- H: Garages From $1,200
- H: Slab & Footings Out
- H: Brick, Timber or Steel
- H: Ground Left Level
- H: Fibro Garage? We Handle It
- H: Power Isolated First
- H: Most Garages Done in a Day
- D: Old garage down, slab and footings out, ground left level and swept. From $1,200.
- D: Fixed, itemised price in writing within 24 hours. Waste removed, nothing left behind.
- D: Fibro or pre-1990? Assessed before we quote and removed by our own licensed crew.
- D: Send a couple of photos and get your number fast. Free, no obligation.

### Shed (pin H1: "Shed Removal Melbourne") · path: /shed/removal
- H: Shed Removal Melbourne
- H: Shed Demolition From $1,200
- H: Sheds, Carports & Pergolas
- H: Slab Out If You Want It
- H: Asbestos Shed Removal
- H: Contents Taken Too
- H: Ground Left Level
- H: Most Sheds Done in a Day
- D: Garden sheds, workshops and carports taken down and carted away. Slab out if you want.
- D: Fixed, itemised price in writing within 24 hours. Waste removed, nothing left behind.
- D: Fibro shed? Don't touch it. Assessed and removed by our own licensed crew.
- D: Send a couple of photos and get your number fast. Free, no obligation.

### Driveway (pin H1: "Driveway Removal Melbourne") · path: /driveway/removal
- H: Driveway Removal Melbourne
- H: Concrete Driveway Removal
- H: Cut, Broken Out & Gone
- H: Base Left Level
- H: Paths, Patios & Slabs
- H: Ready for the New Driveway
- H: Concrete Removal Melbourne
- H: Machine or Hand Access
- D: Old concrete driveways, paths and slabs cut, broken out and carted away. Base left level.
- D: Fixed, itemised price in writing within 24 hours. Waste removed, nothing left behind.
- D: Send photos and a rough size and we'll price it properly. Free, no obligation.
- D: Demolition crew with the machines for heavy concrete. Melbourne wide.

### Rubbish Removal (pin H1: "Rubbish Removal From $99") · path: /rubbish/removal
- H: Rubbish Removal From $99
- H: Rubbish Removal Melbourne
- H: We Do the Lifting
- H: Fixed Price Before We Load
- H: Concrete & Brick Taken
- H: Garage & House Clear-Outs
- H: Nothing to the Kerb
- H: Recycled Where We Can
- D: Household junk to concrete and whole-house clear-outs. Nothing's too heavy for us.
- D: Fixed price before we load, so the bill doesn't grow on the day. You don't lift a thing.
- D: Minimum load $99, trailer $150, half truck $290, full truck $550. Free quote.
- D: Send a few photos and get your number fast. Free, no obligation, and we don't chase you.

### Brand (pin H1: "Metro Partial Demolition") · path: /official/site
- H: Metro Partial Demolition
- H: Official Site
- H: Call Metro Today
- H: Partial Demolition Melbourne
- H: Strip Outs From $800
- D: Partial demolition, strip-outs and rubbish removal across Melbourne. Fixed price in 24h.
- D: Itemised quote in writing within 24 hours. Free, no obligation, and we don't chase you.

> Every price, the 24-hour promise and every asbestos/licence line must match
> what Metro actually confirms (section 6). If a claim isn't confirmed, delete
> the headline. Don't soften it.

## 5. Assets (account level unless noted)

- **Sitelinks (4):** Partial Demolition → `/partial-demolition` · Kitchen & Bathroom Strip Outs → `/strip-out` · Garage & Shed Removal → `/garage-shed-driveway-removal` · Rubbish Removal → `/rubbish-removal`. Don't add a sitelink to the page the ad group already lands on.
- **Callouts:** Fixed Price in 24 Hours · Itemised & In Writing · Asbestos Handled In-House · Skip & Clean-Up Included · Melbourne Wide · Free Quote
- **Structured snippet (Services):** Partial Demolition, Strip Outs, Kitchen Removal, Bathroom Demolition, Garage Demolition, Driveway Removal, Rubbish Removal
- **Price asset (C1):** Kitchen strip out from $800 · Bathroom strip out from $1,200 · Laundry from $800 · Wall removal from $1,500
- **Price asset (C3):** Minimum load $99 · Trailer $150 · Half truck $290 · Full truck $550
- **Call asset:** Metro's tracked number, shown during answering hours only, with call reporting ON.
- **Business name + logo:** "Metro Partial Demolition" plus the square logo (`public/brand/square.svg`, exported to PNG).
- **Images:** 4–6 real job photos (square and landscape). Only add stock if Metro supplies nothing.

## 6. Conversion tracking

| Conversion | Type | Primary? | Source |
| --- | --- | --- | --- |
| Submit lead form (Website) | Website, Submit lead form | Primary | GTM: Custom Event `generate_lead` (pushed by every thank-you page) → Google Ads conversion tag |
| Calls from ads | Call from ads, ≥60s | Primary | Call asset |
| Website phone calls | Calls to a Google forwarding number, ≥60s | Primary | Google forwarding number on the site's tel links (via GTM) |
| Click to call | Website, Phone call lead | **Secondary** | GTM: click on `tel:` links. Observation only, because a tap isn't a call. |
| Qualified lead / Job won | Import from GHL (offline, using GCLID) | Secondary first, then primary | GHL already receives `gclid` with every lead. Upload it when the pipeline stage changes. |

- Count: **One** per click for all lead conversions.
- Enhanced conversions for leads: turn it on in Google Ads. It needs hashed email/phone on the thank-you page. That's a code task, listed in the task list.
- The thank-you URLs differ per page (`/thank-you-partial-demolition`, …). Fire the conversion on the `generate_lead` event, not on a URL match, so one tag covers all of them. The `form_location` value on that event tells you which page the lead came from in GA4.

## Validation

```bash
python3 - <<'EOF'
import re,sys
bad=[(l.strip()) for l in open("docs/google-ads/01-campaign-build.md")
     if (l.startswith("- H: ") and len(l[5:].strip())>30) or (l.startswith("- D: ") and len(l[5:].strip())>90)]
print("\n".join(bad) or "All headlines ≤30 and descriptions ≤90")
EOF
```
