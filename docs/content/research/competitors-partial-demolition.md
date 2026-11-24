# Competitor teardown: /partial-demolition (Google Ads landing page)

- **Client:** Metro Partial Demolition, Melbourne VIC
- **Page:** /partial-demolition
- **Services on the page:** rear-of-house and extension demolition; selected or load-bearing wall removal and openings; internal demolition; adjoining concrete and structures
- **Positioning:** "Take down the part that's in the way, keep the rest standing." Partial demolition done around the parts of the house that stay, scoped with the builder.
- **Research date:** 2026-11-24
- **Method:** WebSearch (several queries), WebFetch of each page, plus a raw HTML download (curl) to read the `<title>` and meta description. No page code was run. Nothing below is invented. Where a page gave nothing, the report says so.

## Limits on this research (read first)

- **The search tool is not a live Google AU results page.** It is US-based and returns a mix of directories and service pages. It cannot see Google Ads. I could not confirm which of these firms **advertise** on these terms. Semrush is connected, but the account has **no API units left**, so paid and organic position data (`phrase_adwords`, `phrase_organic`) could not be pulled. Before treating any page below as the "ad competitor", check the live SERP from a Melbourne IP, or use Google Ads Auction Insights.
- **People Also Ask boxes could not be captured.** No Reddit or Whirlpool threads came back from search, so the buyer questions in Step 3 come from competitor FAQs, council pages, Houzz, the Bunnings Workshop forum and OzBargain.
- **Directory pages dominate the head term.** For "partial demolition melbourne", "wall removal melbourne" and "internal demolition melbourne", most results were Airtasker, Localsearch, Yellow Pages, iSeekplant and Oneflare. Few contractors have a page made for "wall removal" or "rear extension demolition". That is a gap in itself (see Step 4).

## Step 1: Pages chosen

| # | Page | Why chosen |
|---|---|---|
| A | Demolition Melbourne: https://melbournedemolition.com/partial-demolition-melbourne/ | Exact-match domain with a dedicated partial demolition service page. Came up in the extended search for partial demolition services in Melbourne. |
| B | Melway Demolition: https://melwaydemolition.com.au/services/partial-demolition/ | Dedicated partial demolition page with reviews, suburbs and a process section. Came up in the same search. Closest to a "real" conversion page among the competitors. |
| C | AMW Services Group: https://amwservices.com.au/partial-demolition-services/ | Dedicated page with 5.0 Google rating, a free site visit, and the closest match to our scope ("extensions, garages, walls and internal sections"). |
| D (benchmark) | Demo Bros: https://go.demobros.com.au/house-demolition | Sister brand and design reference, as briefed. |

Also reviewed but not chosen: Red Raptors Demolition (https://redraptorsdemolition.com.au/our-demolition-services/partial-demolition/). It has no form and the copy is generic; brief notes are in the appendix. Other names seen in results with partial demolition offers: Monash Demolition, Supreme Demolition, SIMCAT Group, Bayside Demolition (its partial demolition blog now returns 404), Gone and Clean Demolition (a long heritage guide, used as a source of buyer questions), Whelan the Wrecker (strip-outs), Bay City Demolition (Peninsula, directory listing only), Express Partial Demolition and Bobcat (directory listings only, no site content found).

---

## Step 2: Page teardowns

### A. Demolition Melbourne: partial demolition page

**URL:** https://melbournedemolition.com/partial-demolition-melbourne/

- **Title tag:** `Partial Demolition | Melbourne | Demolition Melbourne`
- **Meta description:** "Partial demolition services in Melbourne for renovation and extension projects. Speak with Demolition Melbourne to plan controlled and compliant removal."
- **H1:** "Partial Demolition Melbourne"
- **Subheading:** none. The first body paragraph begins "Partial demolition in Melbourne is required when only specific sections of a building need to be removed..."
- **Hero CTA:** "Get Quote" (form submit)
- **Form above the fold:** yes. Fields: Name, Phone, Email, Location, "How can we help?", Services (dropdown with House Demolition, Public Housing Demolition and Site Cuts. **Partial demolition is not an option on its own partial demolition page.**), plus a hidden Page Url.

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | (H1) Partial Demolition Melbourne | When partial demolition is needed; planning approach | Form "Get Quote" |
| 2 | When Partial Demolition Is the Right Choice | Rear extensions, internal layout changes, façade retention | none |
| 3 | Understanding Partial Demolition Requirements | Load redistribution, temporary supports, dust, noise and vibration | none |
| 4 | Structural Control and Risk Management | Propping, bracing, staged removal, monitoring near neighbours | none |
| 5 | Partial Demolition For Residential Projects | Renovations and extensions with narrow access and close neighbours | none |
| 6 | Partial Demolition For Commercial Sites | Refurbishments; staged work around operating businesses | none |
| 7 | Compliance, Safety, and Site Preparation | Council permits, engineering, safety controls, handover | none |
| 8 | Common Questions About Partial Demolition | 5 FAQs | none |
| 9 | Get In Touch For Partial Demolition Melbourne | Summary plus asbestos mention | "Call Us Now" plus repeated form |

- **Trust signals:** none. No licence or VBA number, no asbestos licence class, no years in business, no reviews, no insurance, no guarantee. The only use of "licensed" is in "licensed asbestos removal and demolition in Melbourne."
- **Education:**
  - Process: prose only (assessment of load-bearing elements, then sequencing, propping and bracing, staged removal, monitoring, then handover). Not numbered.
  - Permits: "council permits, engineering requirements, and workplace safety regulations are reviewed"; the team "manages permits, safety planning, and staging." No specifics.
  - Asbestos: one line in an FAQ about older homes ("brittle masonry or asbestos").
  - Pricing: none.
  - FAQs (verbatim): "How is partial demolition different from full demolition?" / "Is partial demolition suitable for older homes?" / "Does partial demolition require engineering input?" / "Can partial demolition be staged?" / "How long does partial demolition usually take?" (answer: "Smaller works may take a few days, while staged projects can take longer.")
- **Lead capture:** a form at the top and the bottom. Phone (03) 9021 3791 appears in the top bar, header, "Call Us Now", and footer ("Call Mark"). The email is a Gmail address (prodemolitionmelbourne@gmail.com). Hours: Mon–Fri 9 AM–5 PM. The quote offer is just "Get Quote", with no free, fixed-price or site-visit wording.
- **Local signals:** "Melbourne" only. No suburbs.
- **Tone:** technical and impersonal, SEO-written. It reads like an engineering brochure with no person behind it.
  - "Partial demolition demands a higher level of precision than complete removal" (strong idea, unproven)
  - "Every partial demolition project begins with a detailed assessment of load bearing elements" (good, but no detail on who does it or how)
  - "Poor sequencing or insufficient temporary support can lead to movement, cracking, or costly delays" (good: names the buyer's real fear)
  - "Controlled removal ensures retained elements remain stable and ready for the next construction phase." (vague)
- **Strengths:** It is the only competitor that explains the structural risk (propping, staging, retained elements staying stable). It names the right job types (rear extensions, internal layout changes, façade retention). It has a form above the fold.
- **Weaknesses:** No proof of any kind. The form's service dropdown does not include partial demolition. A Gmail address undercuts trust. There is no price, no timeline detail and no named suburbs. Nine sections carry only two CTAs. The copy is generic: you could swap the company name and nothing would change.

---

### B. Melway Demolition: partial demolition page

**URL:** https://melwaydemolition.com.au/services/partial-demolition/

- **Title tag:** `Partial Demolition - Melway`
- **Meta description:** none in the HTML.
- **H1:** "Precision Partial Demolition for Renovations & Extensions"
- **Subheading:** "Surgical-grade demolition that carefully protects the areas that need to remain while removing only what needs to go. The perfect start for any renovation or redevelopment project."
- **Hero CTA:** "Get a Quick Quote"; header "Call Now (03) 9354 6996"
- **Form above the fold:** no. The form is at the bottom.

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | Targeted Removal, Zero Stress | Service cards (H3): "Interior Strip-Outs", "Extension Preparation", "Concrete & Driveway Removal", "Heritage Listed Properties" | none |
| 2 | Precision Partial Demolition You Can Trust | Removes only what's needed and protects the rest | "Get In Touch" |
| 3 | Our Streamlined Partial Demolition Process | 01 Evaluate & Plan, 02 Controlled Demolition, 03 Site Preparation | "Start Your project" |
| 4 | Our Work | Project gallery; "Over 25 years of reliable service" | "View Completed Projects" |
| 5 | Servicing Melbourne Wide | Suburb list | "Get a Quick Quote" |
| 6 | What Our Clients Say | 3 testimonials | "View All Google Reviews" |
| 7 | Frequently Asked Questions | 9 FAQs (mostly sitewide, not partial-specific) | "Explore All FAQs" |
| 8 | Ready to Get Started? | Closing CTA plus quote form | "Get a Quick Quote" / "Get My Quote" |

- **Trust signals:** "Over 25 years of reliable service" (no founding year given). Three testimonials, but no star rating or review count on the page. No licence, VBA, asbestos class, insurance or guarantee.
- **Education:**
  - Process: 3 steps, thin. "We carefully hand demolish the required sections and use machinery where needed."
  - Permits: none.
  - Asbestos: only that they "cannot accept hazardous or toxic materials, including friable asbestos" in their bins.
  - Pricing: none. The FAQ says costs vary and links to a blog post.
  - FAQs (verbatim): "Can you provide a free quote?" / "How much does demolition cost?" / "What if the property is tenanted?" / "What can't go in the waste bin?" / "Do you offer same-day service?" / "Does the skip bin have doors?" / "What are A-Grade recycled red bricks" / "Are A-Grade recycled red bricks structurally reliable?" / "What are A-Grade recycled red bricks commonly used for?" Most of these are about bins and bricks, not partial demolition.
- **Lead capture:** bottom form with Service Address*, Type of Service* (dropdown), Email Address*, Project Description*, "When do you need the service?"*, Contact Number*, and a maths captcha ("What is 4 + 7?"). That is seven required fields plus a captcha, which is heavy. Phone appears in the header and footer only. Quote offer: "Yes, we provide a free, no-obligation, fully detailed demolition quote via email." A site visit is implied (they need access to walk the outside and backyard).
- **Local signals:** Melbourne CBD, Southbank, Richmond, St Kilda, Footscray, Brunswick, Dandenong, Sunshine, Werribee, Glen Waverley, Craigieburn.
- **Tone:** polished marketing language ("surgical-grade", "zero stress") with a few concrete touches.
  - "Surgical-grade demolition that carefully protects the areas that need to remain while removing only what needs to go." (closest to our positioning, but abstract)
  - "Targeted Removal, Zero Stress" (empty promise)
  - "The team took great care around boundary structures and existing foundations, ensuring no unnecessary damage occurred." (strong, because it is a customer saying it)
  - "Yes, we provide a free, no-obligation, fully detailed demolition quote via email." (clear offer)
- **Strengths:** Its message is the closest to ours ("remove only what needs to go, protect the rest"). It has a real process block, a gallery, testimonials, named suburbs, a free quote, and a heritage card. A testimonial about boundary structures is exactly the proof this service needs.
- **Weaknesses:** Unproven "surgical-grade" and "Zero Stress". No rating or count shown. No permits, asbestos process or price guidance. The FAQ is off-topic (bins and bricks). The form is long, sits at the bottom of the page, and ends in a captcha. No meta description. It never says who the work is scoped with (builder, engineer).

---

### C. AMW Services Group: partial demolition page

**URL:** https://amwservices.com.au/partial-demolition-services/

- **Title tag:** `Partial Demolition Melbourne | AMW SERVICES GROUP`
- **Meta description:** "Need partial demolition in Melbourne? AMW SERVICES GROUP delivers controlled, compliant and efficient structural removal for renovations, extensions and commercial projects."
- **Eyebrow:** "Partial demolition in Melbourne"
- **H1:** "Expert Demolition for Every Project" (generic; the keyword sits in the eyebrow, not the H1)
- **Subheading:** "Controlled, selective demolition of extensions, garages, walls and internal sections, with the rest of the building protected."
- **Hero CTAs:** "Get A Free Quote" and "Call 1300 11 45 32"
- **Form above the fold:** no. There is a top banner: "24/7 Emergency Make Safe".

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | Expert Partial Demolition in Melbourne – Safe, Precise & Structure-Focused Solutions | H3s: "Selective Structure Removal", "Structural Modifications", "Renovation & Extension Preparation" | "Get A Free Quote" / "Call 1300 11 45 32" |
| 2 | Internal Works and Neighbour-Sensitive Approaches | Interior strip-back; low-impact methods for neighbours | same two |
| 3 | Our Hassle-Free Partial Demolition Process | "On-Site Visit & Free Quote", "Professional Demolition & Strip-Out", "Final Clean & Waste Removal" | none |
| 4 | Why Choose AMW SERVICES GROUP for Partial Demolition? | 6 H3s: "Precision & Safety First", "Punctual and Dedicated Service", "Fully Compliant", "Skilled & Experienced Team", "Responsible Material Handling", "Clear & Fair Pricing" | same two |
| 5 | Our Services | Links to other service pages | none |
| 6 | Our Work Gallery | Image grid | none |
| 7 | Testimonials | 5.0 Google rating, 3 reviews | "Read all reviews on Google" |
| 8 | Frequently Asked Questions | 3 FAQs | call prompt |
| 9 | Tell us about your project | Free site assessment | form |
| 10 | Get A Free Quote | Form | "Request a Free Quote" |

- **Trust signals:** 5.0 Google rating (review count not shown). "Decades of hands-on time" (no number). "Fully bonded" (not the same as insured; insurance is not stated). No licence, VBA, asbestos class or guarantee.
- **Education:**
  - Process: 3 steps, and the first includes a site visit and "a fair quote ... on the spot".
  - Permits: "It depends on what's being removed—especially load-bearing stuff." They "guide clients through permits and engineering checks". There is a "Demolition Approval" page in the nav.
  - Asbestos: nothing on the page, only a link to an asbestos page.
  - Pricing: no figures. "Upfront pricing with no hidden costs. You will have a clear idea of the investment amount."
  - Timing: "most jobs start within a week of the site visit and quote".
  - FAQs (verbatim): "Do I need council approval for partial demolition work?" / "How do you keep dust and noise down on tight sites?" / "How quickly can you start a partial demolition job?"
- **Lead capture:** bottom form with Full name, Phone number, Email address, Service type (dropdown), Suburb or property address, Job description; button "Request a Free Quote"; reply promised "ASAP". Phone is very prominent: 1300 11 45 32 appears in the banner, hero, sections, footer and a floating "Call Now" widget, with a second number, 03 9970 1176. Offer: free quote plus free on-site assessment. Not fixed-price.
- **Local signals:** "Servicing Melbourne & Victoria"; office in Mickleham VIC 3064; no suburbs on the page.
- **Tone:** casual and friendly, sometimes loose.
  - "Controlled, selective demolition of extensions, garages, walls and internal sections, with the rest of the building protected." (strong: concrete scope)
  - "It depends on what's being removed—especially load-bearing stuff." (honest, plain, but casual for a structural question)
  - "AMW SERVICES GROUP is fully bonded, and sticks to all local rules" (weak: vague, and "bonded" is not insurance)
  - "We treat every job of partial demolition in Melbourne like it's our own property" (keyword-stuffed cliché)
- **Strengths:** It names the job types closest to ours (extensions, garages, walls, internal sections). It is the only competitor that calls out "Structural Modifications" (walls, openings) and neighbour-sensitive work. Free site visit, a fast-start promise, a 5.0 rating, and heavy phone presence suit Ads traffic.
- **Weaknesses:** Generic H1. "Clear & Fair Pricing" without a single number. No licence, VBA or insurance proof. No asbestos content. Only 3 FAQs. Reviews are a bare count-less 5.0. No suburbs. Six identical "why choose us" claims with no evidence.

---

### D. Demo Bros (benchmark): house demolition page

**URL:** https://go.demobros.com.au/house-demolition

- **Title tag:** `Demo Bros | Melbourne Demolitions & Strip Outs from $800`
- **Meta description:** "Melbourne strip out specialists. Kitchens from $800, bathrooms from $1,200, cleared in a day. Itemised price in writing within 24 hours, and it doesn't move. 4.9★ from 54 Melbourne jobs."
  - **Mismatch:** the title and meta are for a strip-out page, but this is the house demolition page ("from $14,900"). Don't copy that onto /partial-demolition. Write a title and meta for this page alone.
- **H1:** "House demolition in Melbourne from $14,900 — permit, asbestos and all."
- **Subheading:** "Everything from the demolition permit to a clean, level block your builder can start on. Disconnections, asbestos, slab and footings, waste — all inside one fixed price, in writing within 24 hours. Nothing gets added later."
- **Hero CTAs:** "Get my fixed price" and "Call 1800 960 625"
- **Form:** directly under the hero ("Get your number"). Fields: Name, Email, Phone, Suburb or postcode, "What needs to come out? (select all that apply)", Comments (optional). The scrape also showed a "Website" field, probably a hidden honeypot.

**Section order**

| # | H2 (verbatim) | Eyebrow | Summary | CTA |
|---|---|---|---|---|
| 1 | (H1) | — | Price-led promise | "Get my fixed price" / call |
| 2 | Get your number | — | Form; itemised quote in writing within 24 h | "Get my fixed price" |
| 3 | House standing. Block ready. Melbourne jobs. | Before and after | 3 before/after projects | none |
| 4 | What a house demolition actually costs in Melbourne. | Up-front pricing | "From" price table plus H3 "What moves the price" | "Get my fixed price" |
| 5 | Who we work with | — | Homeowners, builders, developers, government | none |
| 6 | From first call to a block your builder can start on. | How long it takes | 5-step timeline with durations | none |
| 7 | What's in the price. | What's included | 14 inclusions in 3 groups | "Get my fixed price" |
| 8 | Three quotes, thousands apart. Here's what's actually different. | Comparing quotes | What other quotes leave out | "Get my fixed price" |
| 9 | Six steps. We handle the paperwork. | How it works | 6-step process | none |
| 10 | On an older house, this is the number that moves. | Built before 1990? | Asbestos handling | none |
| 11 | Working to a program, not a weekend. | Builders and developers | B2B detail | "Get my fixed price" |
| 12 | The number doesn't move. | Fixed price guarantee | 4 guarantee points | none |
| 13 | 4.9 stars from 54 Melbourne jobs. | 4.9 Google reviews | Testimonials | "Get my fixed price" |
| 14 | Melbourne wide — and the rest of Victoria too. | Where we work | Service areas | none |
| 15 | The questions we get asked most, starting with the big one. | Questions we get every week | 11 FAQs | none |
| 16 | Get your fixed price. | — | Closing offer | "Get my fixed price" |

- **Trust signals:** 4.9 Google rating. The count is **inconsistent on the page**: 56 near the form, 54 in the reviews heading and footer, and "4.954" in the hero, which looks like 4.9 and 54 run together. Also "Family owned since 2013", "$20M public liability", "VBA registered" / "Licensed and VBA registered" (no number shown), "Fixed price guarantee", "One crew, start to finish", "Handover photographed", and SWMS and inductions on every site. No asbestos licence class is given.
- **Education:** the strongest of the four. Timeline with durations (quote in 24 h; permits and disconnections 4–6 weeks; asbestos 1–2 days; demolition 2–4 days). Permits: the demolition permit and council asset protection permit are handled and included; neighbours are notified in writing. Asbestos: pre-1990 homes are assessed before the quote, licensed removal is included, and removal happens first. Pricing: from $14,900 / $18,900, with a typical range of "about $18,000 and $45,000", plus price drivers.
- **FAQs (verbatim):** "How much does it cost to demolish a house in Melbourne?" / "How long does the whole thing take?" / "Do you handle the demolition permit?" / "What about disconnecting power, gas and water?" / "Do you remove asbestos?" / "Does the concrete slab come out too?" / "What about the pool, the trees and the driveway?" / "Do I need to tell my neighbours?" / "What does the block look like when you're finished?" / "Can my builder start straight after?" / "Are you licensed and insured?"
- **Lead capture:** the form sits right under the hero. One CTA label is used throughout ("Get my fixed price"). The phone number appears 7 times. Offer: "Free, itemised, no obligation. One quote, one follow-up. We do not chase you." Quotes are given from photos or a site visit, and bigger jobs get a free site visit.
- **Local signals:** Melbourne metro ("inner and outer, north and south of the river"), the Peninsula, Geelong, Surf Coast, Ballarat, Bendigo, Gippsland, the north-east. Brighton and Kew are named in reviews.
- **Tone:** plain, confident, first person, short sentences.
  - "Whatever number comes back, that's the number."
  - "Three quotes, thousands apart. Here's what's actually different."
  - "Anything pre-1990 gets assessed first — it's the single biggest variable on an older house"
  - "Nobody publishes this, which is exactly why it's hard to work out whether you're being quoted fairly."
- **Strengths:** Price in the H1. A specific inclusions list. A section comparing quotes. Durations given for each step. Asbestos treated as the cost variable it is. A guarantee. A short form high on the page. One consistent CTA. The voice sounds like a person.
- **Weaknesses:** The review count is inconsistent (54 / 56 / "4.954"). The title and meta belong to another page. The VBA number and asbestos licence class are not shown. Some sections have no CTA. It is long (16 sections), which works for house demolition but needs trimming for a partial job.

---

## Step 3: Buyer questions (partial demolition, Melbourne/Victoria)

PAA boxes could not be captured and Reddit and Whirlpool threads were not found by the search tool. The questions below come from competitor FAQs, council pages, Houzz, the Bunnings Workshop forum and OzBargain. Buyer phrases are quoted where a buyer wrote them.

1. **"Do I need a permit for partial demolition in Melbourne?"** (Red Raptors FAQ) / "Do I need council approval for partial demolition work?" (AMW FAQ). Official answer: Boroondara Council says a building permit is needed when "You are demolishing a building that is not a Class 10 structure", and Report and Consent (s29A) is triggered to "Demolish more than half the volume of the building or structure over a 3-year timeframe" or "Demolish any part of the façade of a building or structure." "You need a Planning Permit if your property has a heritage overlay." (Source: Boroondara Council, below.)
2. **"Can I demolish the back of an Edwardian villa in Hawthorn or Kew?"** / "Is partial demolition allowed on a Victorian terrace in Fitzroy or Carlton?" (Gone and Clean FAQ). Heritage overlay and rear-only demolition behind a kept façade.
3. **"How much does partial demolition cost?"** No competitor answers this with numbers. Buyer evidence is anecdotal: a Victorian poster on the Bunnings Workshop forum quoted an engineer at "around $300 inspection + $500-$900 drawing + GST" and said the wall removal and beam was "another $4k - $5k", adding "the Engineer to permit process effectively double the cost". Airtasker shows user-posted partial jobs such as "partial demolition for first floor extension" at $4,000 (Endeavour Hills) and a Richmond rear building with a shared party wall at $8,000. These are single listings, not benchmarks.
4. **"Is partial demolition cheaper than knocking it all down?"** Buyer phrase: "Is it worth stripping or just knock it all down & start again?" (Houzz, owner of a "Cal Bung with a dodgy 1980's rear extension"). A Bayside Demolition blog, now 404 and seen only in search snippets, said partial demolition "can often add more cost than a complete rebuild".
5. **"Is my wall load-bearing / can I remove it?"** The Bunnings Workshop thread title is "Remove load bearing wall without permit". A related thread asks "What to do about load bearing wall removed without permit". Buyers ask whether they can skip the engineer and permit.
6. **"Does partial demolition require engineering input?"** (Demolition Melbourne FAQ) / "Will partial demolition affect the structural integrity of my building?" (Red Raptors FAQ). The fear is cracks and movement in the part that stays.
7. **"What about asbestos in the old extension?"** Houzz buyer: "most of the internal walls, all the external cladding & probably the ceiling were asbestos" and "We can't do anything to it eg a/c or new kitchen or bathroom or even putting artwork up because of the stuff!" Also: "Is partial demolition suitable for older homes?" (Demolition Melbourne FAQ).
8. **"How long does partial demolition take?"** (Demolition Melbourne and Red Raptors FAQs) / "How quickly can you start a partial demolition job?" (AMW FAQ).
9. **"How do you keep dust and noise down on tight sites?"** (AMW FAQ). Terraces, shared walls, neighbours close by.
10. **"Can partial demolition be staged?"** (Demolition Melbourne FAQ). Living in the house during works, or working to a builder's program.
11. **"Why are my quotes so far apart?"** OzBargain buyer: "I've had two quotes from both of these companies and they are so wide apart" and "I feel that I may be missing something?" A reply quoted exclusions in a real quote: "We take no responsibility for damage caused to footpath or crossing while demolition is in progress" and "No allowance for board piers or screw piles."
12. **"Who lodges the permits, me or my contractor?"** (Gone and Clean FAQ: "Who lodges the heritage demolition permits — me or my contractor?")
13. **"What if the property is tenanted?" / "Can we stay living in the house?"** (Melway FAQ, first part). Partial demolition often happens with the front of the house still lived in.
14. **"Do I need to tell my neighbours?"** (Demo Bros FAQ). It matters more for partial jobs: shared walls, dilapidation surveys ("Skipping the Dilapidation Survey of Adjoining Terraces" is a mistake heading in the Gone and Clean guide).
15. **"Is the builder's demolition allowance a real quote?"** (Gone and Clean mistake heading: "Assuming the Builder's Demolition Allowance Is a Quote"). This matters for our builder-scoped positioning.

**Buyer phrases worth echoing:** "the back of the house", "dodgy rear extension", "lean-to", "knock it all down & start again", "load bearing wall", "without permit", "so wide apart", "missing something", "shared party wall", "the stuff" (asbestos).

---

## Step 4: Synthesis

### Table stakes (every competitor has these, so we must too)

1. H1 with "Partial Demolition Melbourne" or close to it.
2. List of job types (extension prep, internal strip-out, selective removal, concrete).
3. Claim that the remaining structure is protected.
4. A 3-step process.
5. Short FAQ (3–9 questions).
6. "Free quote" CTA plus phone in the header.
7. Gallery of past jobs.
8. Testimonials or Google rating (Melway, AMW, Demo Bros).

### Gaps none of the competitors fill well (what /partial-demolition should add)

1. **Price guidance for partial jobs.** None of the three competitors gives a single number. Demo Bros proves "from" pricing works. Add a "what it typically costs" block for the four job types (rear extension or lean-to, wall removal or opening, internal demolition, concrete and adjoining structures), with the drivers named: asbestos, what has to be propped, access down the side, hand vs machine, and waste. **Prices must come from the client. Do not publish any figure without sign-off.**
2. **Where the cut goes and how the kept part is protected.** Everyone says "we protect the rest". No one says how. Spell out the real steps: marking the cut line with the builder, propping and temporary support to the engineer's design, hand-cutting at the junction, weatherproofing the open end the same day, and protecting floors and roof. That is where our positioning ("keep the rest standing") becomes proof instead of a claim.
3. **Working with the builder and engineer.** No competitor says who decides what comes out. Our position is "scoped with the builder". Make it a section: we work from the builder's or engineer's drawings, walk the site with the builder, and confirm propping before any load-bearing wall comes out. Builders are a second audience, and only Demo Bros addresses them.
4. **Load-bearing wall removal, explained honestly.** AMW mentions "Structural Modifications" in one line. Nobody explains the order of works: engineer's design, permit, propping, removal, beam by the builder or steel fixer, and what we do vs what we don't. Buyers on forums ask whether they can skip the permit. A short, firm answer ("no, and here's why it protects you") builds trust.
5. **Permit facts with a source.** Competitors say "we help with permits" and stop there. Give the facts in plain words. A building permit is needed for most partial demolition. Report and Consent applies over 50% volume within 3 years, or for any street-facing façade. A heritage overlay means a planning permit. Then say who lodges what. Cite council and VBA guidance; Boroondara's page is quotable.
6. **Asbestos in the back half.** Rear lean-tos and 1960s–80s extensions are where the fibro is. Only Demo Bros treats asbestos as the price variable. Say: pre-1990 sections are tested before the quote is final, licensed removal happens first, and clearance comes before demolition. **State the client's asbestos licence class (or the licensed partner's) only once confirmed.** WorkSafe Victoria's Class A and Class B licences are the relevant categories. Verify on worksafe.vic.gov.au before writing.
7. **Neighbours and shared walls.** Melbourne partial jobs are terraces, semis and narrow side access. Add: shared or party wall handling, dilapidation photos of next door before starting, dust and noise controls, and neighbour notice.
8. **Living in the house during works.** No competitor speaks to the family still living in the front rooms. Add a short block on staging, keeping power and water on to the kept part, dust sheeting, and a lockable or weatherproof end at the end of each day. **Confirm these practices with the client.**
9. **Quote comparison.** Copy Demo Bros' best idea, adapted: "Two partial demolition quotes, thousands apart. Here's what's usually missing." Possible exclusions: propping, make-safe of services, weatherproofing the open end, asbestos, footings, slab cut, footpath or crossing damage, waste. This answers the OzBargain buyer's "I feel that I may be missing something".
10. **Real verification.** No competitor shows a VBA registration number, licence class or insurance amount. Show the VBA number and class, the public liability amount, and the asbestos licence (all to be confirmed), with a link to the VBA public register so buyers can check.

### Patterns worth adopting (in our own words, improved)

- **From Demo Bros:** a price-anchored H1 (only if the client approves a "from" number); a short form straight under the hero; one CTA label used everywhere; an inclusions list; a timeline with durations; the quote-comparison section; plain first-person voice; a guarantee written as specific promises, not adjectives.
- **From Melway:** the message "remove only what needs to go". Make it ours and concrete, for example "We take down the part that's in the way. The rest of the house stays standing, dry and lived in." A testimonial about care around boundary structures: we should ask the client for reviews that mention the kept structure. Named suburbs. A free quote, by email or after a visit.
- **From AMW:** a concrete scope line in the subheading (extensions, walls, internal sections); a free site visit for structural jobs; a "start within X days" promise (only if true); a sticky call button for mobile Ads traffic.
- **From Demolition Melbourne:** name the real risk ("movement, cracking, or costly delays") and answer it with how we prevent it.

### Mistakes to avoid

- A generic H1 ("Expert Demolition for Every Project").
- A form whose service dropdown leaves out the page's own service (Demolition Melbourne).
- Long forms with a captcha at the bottom of the page (Melway: 7 required fields plus a maths question).
- Adjectives with no proof: "surgical-grade", "Zero Stress", "Melbourne's Leading", "fully bonded", "Clear & Fair Pricing" with no prices.
- Off-topic FAQs (bins and bricks on a partial demolition page).
- A Gmail address as the business contact.
- Inconsistent review counts on the same page, and a title or meta copied from another page (both are Demo Bros issues; don't carry them over).
- Implying the demolisher designs structural changes. The engineer designs; we follow the design.
- Stating a licence class, review count or price that the client hasn't confirmed.

### Which page most likely wins the leads (estimate from public signals only)

**Estimate: AMW Services Group (C) is most likely to convert Ads traffic among the three competitors. Melway (B) is close behind on organic.** Reasons: AMW has the most CTAs and the strongest phone presence (banner, hero, floating widget, 1300 number), a visible 5.0 rating, a free site visit, a quick-start promise, and the scope line that best matches what searchers want (extensions, walls, internal sections). Melway has better depth (process, gallery, testimonials, 11 suburbs, heritage card), but a heavy form at the bottom of the page. Demolition Melbourne has the exact-match domain and the best structural explanation, so it may rank, but with no proof and a broken form it is unlikely to convert well. **None of the three is close to the Demo Bros benchmark** on pricing, inclusions, process detail or voice. A partial demolition page built to that standard, with the gaps above filled, would have a clear edge. This is an estimate. No traffic, ranking or ad data was available: Semrush had no API units, and the search tool cannot see Google Ads.

---

## Appendix: Red Raptors Demolition (reviewed, not chosen)

- URL: https://redraptorsdemolition.com.au/our-demolition-services/partial-demolition/
- Title: `Partial Demolition Services Melbourne | Red Raptors`. Meta: "When you need to selectively reshape your space, rely on Red Raptors demolition for expert partial demolition services."
- H1 "Partial Demolition Melbourne". H2s: "Melbourne's Leading Partial Demolition Specialists" / "Request a free quote!" (a gallery, no form) / "Fully Licensed & Insured Partial Demolisher" / "Why choose Our Partial Demolition Services" / "FAQ" / "Get in touch with us to discuss!"
- Has a licence badge "CBD-L 100007" (category not named), cites AS 2601, the Building Act 1993, Building Regulations 2006 and the OHS Act 2004, and shows an ABN. **No form on the page**, two mobile numbers, Sunshine West address.
- FAQs: "What is partial demolition, and when is it needed?" / "Do I need a permit for partial demolition in Melbourne?" / "How long does a partial demolition project take?" / "Will partial demolition affect the structural integrity of my building?" / "How do you manage site cleanup after demolition?"
- Takeaway: citing the standard (AS 2601) is a cheap, credible trust signal worth borrowing if the client works to it.

## Sources

Competitor pages (fetched 2026-11-24):
- https://melbournedemolition.com/partial-demolition-melbourne/
- https://melwaydemolition.com.au/services/partial-demolition/
- https://amwservices.com.au/partial-demolition-services/
- https://go.demobros.com.au/house-demolition
- https://redraptorsdemolition.com.au/our-demolition-services/partial-demolition/

Buyer questions and context:
- https://www.goneandcleandemolition.com.au/heritage-house-renovations-when-partial-demolition-is-allowed/
- https://www.houzz.com.au/discussions/1336244/asbestos-filled-rear-extension-knock-down-or-remove
- https://workshop.bunnings.com.au/t5/Whole-of-House/Remove-load-bearing-wall-without-permit/td-p/33538 (the page did not render; quotes come from search-result snippets)
- https://workshop.bunnings.com.au/t5/Whole-of-House/What-to-do-about-load-bearing-wall-removed-without-permit/m-p/127444 (title only)
- https://ozbargain.com.au/node/489313
- https://www.airtasker.com/au/services/demolition/melbourne (user-posted job examples, seen in search snippets)
- https://baysidedemolition.com.au/?p=308 (returns 404 now; content seen in search snippets only)

Official and regulatory (for the permit facts; verify before publishing):
- https://www.boroondara.vic.gov.au/services/planning-and-building/building/your-property-improvements/demolish-all-or-part-building
- https://www.melbourne.vic.gov.au/building-and-development/planning-and-building-services/planning-applications/pages/section-29a-consent-proposed-demolition.aspx
- https://www.bpc.vic.gov.au/__data/assets/pdf_file/0016/21517/Building-DE-01-Demolition-of-buildings_CURRENT-13-May-2024.pdf (not opened; listed for the copywriter to check)
- WorkSafe Victoria asbestos licensing: check https://www.worksafe.vic.gov.au before stating any licence class.
