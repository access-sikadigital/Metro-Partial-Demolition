# Competitor teardown: /strip-out (Google Ads landing page)

- **Client:** Metro Partial Demolition, Melbourne VIC
- **Page:** /strip-out (the kitchen demolition and bathroom demolition pages are variants of it)
- **Services on the page:** kitchen, bathroom and laundry strip-outs; tile and floor covering removal; multi-room internal strip-outs; office and retail defits
- **Research date:** 2026-11-24
- **Method:** WebSearch (14 queries), WebFetch of each page, plus a raw HTML download (curl) to read the `<title>`, meta description, headings, FAQ text and form field names. No page code was run. Nothing below is invented. Where a page gave nothing, the report says so.

## Limits on this research (read first)

- **The search tool is not a live Google AU results page.** It is US-based and returns a mix of directories and service pages, and it cannot see Google Ads. **I could not confirm which of these firms advertise on these terms.** Check the live SERP from a Melbourne IP, or Google Ads Auction Insights, before you treat any page here as the main ad competitor.
- **"strip out melbourne" is a polluted head term.** The bare query returned mostly adult-entertainment results (strip clubs, hens-night acts). The search intent splits, so ad negatives and the page's own wording need "kitchen", "bathroom", "demolition", "renovation" or "office" next to "strip out". This matters for both the ads and the H1.
- **Directories dominate.** Localsearch, Airtasker, Oneflare and Houzz took most results for "kitchen demolition melbourne", "bathroom strip out melbourne" and "tile removal melbourne". Fresh Start Strip Outs and All Stripped Melbourne showed up often, but only as a Google Business Profile or a directory listing. Neither had a fetchable website, so neither could be torn down.
- **Reddit is blocked for this tool, and Whirlpool returned 403.** Buyer questions in Step 3 come from Whirlpool thread snippets in search results, competitor FAQs, a quote-comparison site (The Quote Yard), a Melbourne cost guide (What's the Damage), Monash Council, Asbestos Victoria and Bunnings Workshop. No People Also Ask box could be captured.
- **One page was truncated in WebFetch** (On Spot). I downloaded its HTML and read the rest from the raw text, so its section list is complete.

## Step 1: Pages chosen

| # | Page | Why chosen |
|---|---|---|
| A | Metro Defits: https://www.metrodefits.com.au/residential/bathroom-stripouts | The strongest residential strip-out page found. It covers our bathroom variant directly, and the same site has kitchen, tile, floor covering, office defit and retail defit pages, which is the same mix of services as ours. It came up in the "strip outs Melbourne kitchen bathroom laundry" search. Note the name: "Metro Defits" is close to "Metro Partial Demolition". Expect brand confusion in the ad auction. |
| B | Micro Demo Co.: https://www.microdemo.com.au/bathroom-demolition | A fixed-price bathroom strip-out offer with a DBU licence number. It came up for "bathroom demolition Melbourne tile removal". It has separate Melbourne kitchen and interior demolition pages too. |
| C | On Spot Demolition: https://www.onspotdemolitionmelbourne.com.au/strip-outs-melbourne/ | The broadest strip-out page found (residential and commercial on one page, which matches our scope). It has the most real FAQ content and 117 Google reviews embedded. It came up in the same "strip outs" search. |
| D (benchmark) | Demo Bros: https://go.demobros.com.au/strip-out | Sister brand and design reference, as briefed. |

**Also reviewed but not chosen:**
- **Whelan the Wrecker** (https://whelanthewrecker.com.au/strip-outs/). It ranks for "internal strip out" and "office strip out" and has been around since 1892. It is ISO 14001 certified and diverts 90% of waste from landfill. But it is commercial-only: no form, no FAQ, no price, no timeframe. Phone 03 9948 5777. Not the homeowner buyer.
- **Deconstructors** (https://deconstructors.com.au/strip-outs/). Title `Strip Outs Demolition, VIC | Deconstructors`. Has a CBD-L 75627 licence, $20M public liability and "40yr+ Combined building industry experience". **Its FAQ section is four accordions titled "Accordion #1" to "#4" that still hold lorem ipsum placeholder text.** That is a useful example of what not to ship.
- **Woodsons Demolition** (https://www.woodsonsdemolition.com.au/strip-outs-melbourne/). H1 "Strip Outs Melbourne". No form, no FAQ, no price, no trust signals beyond "Fully licensed and accredited" (heritage only). Two staff mobiles given in the footer.
- **Metro Defits complete stripouts** (https://www.metrodefits.com.au/residential/complete-stripouts). Its FAQ asks "How Much Does It Cost To Stripout a Bathroom Completely?" and answers "This can vary depending on factors like the size of the bathroom and the scope of the project." That is a cost question without a cost.
- **Micro Demo kitchen and interior pages.** The title tags are swapped: `/melbourne-kitchen-demolitions` is titled "Melbourne Interior Demolitions" and `/melbourne-interior-demolitions` is titled "Melbourne Kitchen Demolitions".
- **Not reachable:** i-Demolition kitchen strip-outs (DNS failure) and Xpress Demolition interior strip-outs (404).

---

## Step 2: Page teardowns

### A. Metro Defits: Bathroom Strip Outs Melbourne

**URL:** https://www.metrodefits.com.au/residential/bathroom-stripouts

- **Title tag:** `Bathroom Strip Outs Melbourne`
- **Meta description:** "Over 2,000 bathroom strip outs completed. Professional bathroom strip out services in Melbourne. Licensed plumbers & electricians. Completed in 1 day. Free quotes."
- **H1:** "Bathroom Strip Outs Melbourne"
- **Subheading:** "Over 2,000 bathroom strip-outs have been completed across Melbourne since 2010." This is followed by a paragraph on single-day completion, licensed trades and free quotes.
- **Hero CTAs:** "Get a Free Quote" (hero); "FREE QUOTE" and 03 9581 2634 in the header
- **Form above the fold:** no. The form is a modal headed "Let's Chat About Your Project", with the fields Name*, Email*, Phone*, Project (Commercial / Residential / Stripouts) and Project Description*. The button says "Send".

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | Hero (H1) | One-day bathroom strip-out, "no dust, delays, or DIY problems" | Get a Free Quote |
| 2 | "What Is a Bathroom Strip Out?" | Defines it as removing fixtures and finishes back to the slab | none |
| 3 | "Our Bathroom Strip Out Process" | Four H3s: "Free On-Site Assessment", "Licensed Service Coordination", "Efficient Removal", "Clean Handover" | Get Your Free Quote |
| 4 | "Professional Bathroom Removal Specialists" | Company background and client types, with three stat blocks | none |
| 5 | "What's Included in Every Bathroom Strip Out" | Checklist of inclusions (below) | none |
| 6 | "Why Choose Metro Defits for Bathroom Strip Outs?" | Five H3s: "14+ Years Experience", "Licensed & Insured", "Fast Turnaround", "Clean & Controlled", "Builders & Renovators Welcome" | none |
| 7 | "Bathroom Strip Out FAQs" | Five questions. **No answers appear on the page** (the accordion answers did not come through in either WebFetch or the raw HTML) | none |
| 8 | "We Also Offer" | Links: Kitchen Strip Outs, Floor Covering Removal, Decking Removal, Tile Removal, Concrete Grinding | links |
| 9 | "Get a Free Bathroom Strip Out Quote" | "We'll assess your bathroom and provide a fixed price with no hidden surprises." | Get a Free Quote |

- **Trust signals:** "2,000+ Projects Completed", "14+ Years Excellence", "since 2010", "100% Licensed Team", "Licensed plumbers & electricians", "Full public liability insurance" (no dollar figure), "Fully Licensed & Insured", and a "✓ Trusted" badge. **None of these:** asbestos licence class, reviews or rating, guarantee, or a builder or DBU registration number.
- **Education content:**
  - Time: "Most residential bathroom strip outs are completed within one workday"
  - Included: bathtub and shower base removal, vanity and cabinet extraction, wall and floor tile removal, **tile glue and waterproofing removal**, wall and ceiling lining removal, **licensed plumbing make-safe, licensed electrical isolation**, EPA-approved waste disposal
  - Waste: "EPA-approved" disposal. No skip details.
  - Asbestos: **not mentioned at all**. Only silica dust control is mentioned.
  - Price: none. "No hidden costs. No surprises."
  - FAQ questions: "How long does a bathroom strip-out take?" / "Do you remove tile glue and waterproofing?" / "Do you handle waste removal?" / "Do I need to organize plumbers and electricians?" / "What areas do you service?"
- **Lead capture:** a five-field modal form, a header phone number (a 03 landline) and "free, no-obligation quote" after an on-site assessment. No response time is promised.
- **Local signals:** Richmond, South Yarra, Prahran, St Kilda, Brunswick, Melbourne CBD, Brighton, Hawthorn, Camberwell, Footscray, Essendon, and "across all Melbourne metro suburbs".
- **Tone:** calm and service-led, but generic in places. Verbatim lines:
  - Strong: "We strip out your old bathroom in a single day while you are at work"
  - Strong: "We use dust extraction equipment and protective measures to contain silica dust and protect adjacent rooms."
  - Weak: "Renovating your bathroom should be exciting—not exhausting."
  - Weak: "Metro Defits are the industry leaders when it comes to the provision of both residential & commercial demolition in Melbourne."
- **Strengths:** It has the most specific inclusions list of any page, and it is the only one that names **tile glue and waterproofing removal** and **licensed plumbing make-safe and electrical isolation**. The 2,000+ jobs figure and the "while you are at work" line are strong. Its meta description is well written, with proof, the service, a timeframe and the offer.
- **Weaknesses:** The FAQ has questions but no visible answers. There is no price or price range, no asbestos content (a big gap for pre-1990 Melbourne bathrooms), no reviews on the page, and no response-time promise. The form sits behind a modal, and one of its options is the confusing "Stripouts".

---

### B. Micro Demo Co.: Bathroom Demolitions

**URL:** https://www.microdemo.com.au/bathroom-demolition

- **Title tag:** `Bathroom Demolitions in Melbourne Sydney and Brisbane`
- **Meta description:** "Micro Demo Co. offers affordable, expert bathroom demolition services in Melbourne, Sydney and Brisbane. Specializing in safe and efficient interior bathroom and kitchen demolitions for residential properties, our skilled team ensures a smooth, hassle-free experience from start to finish. Contact us today for a free, no-obligation quote and discover why homeowners trust us for their Melbourne, Sydney and Brisbane demolition needs." (It is about 430 characters, so Google will truncate it.)
- **H1:** "BATHROOM DEMOLITIONS IN MELBOURNE, SYDNEY AND BRISBANE"
- **Subheading:** "Fixed-price bathroom strip-outs for homeowners, builders and renovators."
- **Hero CTA:** "GET A QUOTE". The header has "CALL TO BOOK" (1300 336 626) and "SEND ENQUIRY".
- **Form:** none on the page. Enquiries go to an external Jobber form.

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | Hero | Fixed-price strip-outs in three cities | GET A QUOTE |
| 2 | "Safe, Efficient, and Sustainable Demolition Services Tailored for Melbourne, Sydney and Brisbane Homes and Businesses" | Generic positioning | none |
| 3 | "SMALL, TIGHT-ACCESS JOBS DONE RIGHT" / "Who we do bathroom renovations for" | Four audience cards: "Homeowners & Renovators", "Builders & Trades", "Apartments & strata", "Heritage & commercial" | none |
| 4 | "WHAT'S INCLUDED" / "Everything removed. Everything else protected." | Six items: full fixture removal; tiles and surfaces back to substrate; floor protection; dust containment; OHS documentation and signage; waste removal and recycling | none |
| 5 | (image) | Worker cutting with a cement saw | none |
| 6 | "Why Choose Us?" | Communication, turnaround, clean sites, transparent pricing, flexible scheduling | BOOK HERE |
| 7 | "Frequently Asked Questions About Bathroom Demolition" | Five FAQs (below) | none |
| 8 | Closing | "We are Melbourne, Sydney and Brisbane's preferred small demolition company..." | SEND ENQUIRY, CALL TO BOOK |

- **Trust signals:** "Registered Building Practitioners (DBU 43639)". **None of these:** years in business, reviews or rating, insurance, asbestos licence, or a guarantee beyond "fixed price".
- **Education content:**
  - Time: "Most standard bathrooms are stripped out in 1-2 days." Tight-access jobs take longer.
  - Asbestos: **excluded**. The fixed-price FAQ says exclusions are noted, "e.g. asbestos".
  - Price: fixed before starting, "based on the package and any add-ons you choose". No dollar figures.
  - Waste: removed and "sorted for recycling" at "our facility".
  - FAQ questions (verbatim): "How long does a bathroom demolition take?" / "Is the price really fixed?" / "Do you take the rubbish away?" / "Can you work in apartments?" / "Are you licensed?"
- **Lead capture:** two different phone numbers (1300 336 626 in the header, 0417 548 006 in the closing section). The form is off-site. "Book" language is used, which is unusual and assumes the buyer is ready.
- **Local signals:** weak. Melbourne, Sydney and Brisbane share the same page, with no suburbs named.
- **Tone:** punchy in the headings, then corporate and generic in the body. Verbatim lines:
  - Strong: "Everything removed. Everything else protected."
  - Strong: "Yes. You'll get a fixed price before we start, based on the package and any add-ons you choose."
  - Weak: "Safe, Efficient, and Sustainable Demolition Services Tailored for Melbourne, Sydney and Brisbane Homes and Businesses"
  - Weak: "We are Melbourne, Sydney and Brisbane's preferred small demolition company"
- **Strengths:** It leads with a fixed price, quotes a real licence number, and has an "Apartments & strata" audience card. Strata buyers are a real Melbourne segment that the others ignore. "Is the price really fixed?" is a good, honest FAQ question.
- **Weaknesses:** It is a three-city page, so it is weak for Melbourne intent. **Asbestos is excluded**, which pushes the buyer to a second contractor. There is no price figure, no reviews, two phone numbers and an off-site form. The kitchen and interior page titles are swapped elsewhere on the site.

---

### C. On Spot Demolition: Strip Out Demolition Melbourne

**URL:** https://www.onspotdemolitionmelbourne.com.au/strip-outs-melbourne/

- **Title tag:** `Strip Out Demolition Melbourne | On Spot Demolition`
- **Meta description:** "Our strip out contractors deliver affordable strip out demolition in Melbourne, backed by 20+ years of experience for residential and commercial properties."
- **H1:** "Strip Out Demolition in Melbourne | On Spot Demolition" (the brand name appears in the H1)
- **Subheading:** "Planning a renovation or refurbishment starts with clearing the space."
- **Hero CTAs:** "Get A Free Quote" (links to /contact/) and "0416 610 105"
- **Form:** in the footer, not above the fold. Fields: First Name, Last Name, Email, Phone, Services (dropdown) and Message.

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | Hero | Renovation starts with clearing the space | Get A Free Quote, phone |
| 2 | (badges) | "20+ Years Experience", "Fully Licensed", "Competitive Pricing", "Paperwork Included" | none |
| 3 | "Our Strip Out Demolition Services" | Eight H3s: Commercial, Office, House, Bathroom, Warehouse, Soft, Hard and Kitchen Strip Out | none |
| 4 | "What's Included in Our Strip Out Demolition" | Partitions, non-structural walls, ceilings, flooring, kitchen and bathroom fixtures, joinery, electrical disconnection, plumbing fixtures, waste and recycling, site clean-up | none |
| 5 | "Which Is Right for Your Project: Strip-out Demolition or Complete Demolition?" | Comparison table: scope, best suited for, work included, project time, cost, end result | none |
| 6 | "Why Choose Our Strip-out Contractors?" | Seven reasons: 20+ years, residential and commercial, licensed and insured, modern equipment, waste, safety, pricing | none |
| 7 | "Ready For Strip Out Demolition In Melbourne?" | "Whether you're renovating one room or an entire property..." | CALL NOW, Request a Free Quote |
| 8 | "Frequently Asked Questions" | Seven FAQs (below) | none |
| 9 | "WHAT OUR CLIENTS SAY" | Trustindex widget: "117 Google reviews" | Write a review |
| 10 | Footer "Demolition and Earthmoving Expert" / "GET A FREE QUOTE" | Footer form | submit |

- **Trust signals:** "20+ Years Experience", "Fully Licensed" (no number), "Licensed and Insured" (no dollar figure), "Paperwork Included", and 117 Google reviews embedded (no star average in the scraped text). **None of these:** asbestos licence class, a guarantee, or a VBA or DBU number. Nearly all the reviews are about **house demolitions**, not strip-outs. One long review praises the firm for handling "all the utility abolishment applications for gas, electricity, and plumbing".
- **Education content:**
  - Time: "Most strip-out projects can be completed within a few days, while larger commercial projects may take longer."
  - Cost: "The cost of strip-out demolition depends on the property size, the scope of work, site access, and the materials being removed." No figures. The table says strip-out is "Generally more cost-effective".
  - Asbestos: **not mentioned**.
  - Disconnection: "When required, we arrange the safe disconnection of electrical, gas, and water services before demolition begins."
  - FAQ questions (verbatim): "How much does strip-out demolition cost in Melbourne?" / "How long does a strip-out demolition project take?" / "Do I need a permit for strip-out demolition?" / "Who disconnects electricity, gas, and water before a strip-out?" / "How do you control dust, noise, and debris during a strip-out?" / "What happens to the waste after the strip-out is complete?" / "Can strip-out demolition be completed as part of a renovation?"
- **Lead capture:** a mobile number in the hero and header, a "Get A Free Quote" link to a contact page, a six-field footer form, and a "free, no-obligation quote".
- **Local signals:** "We Serve Entire Melbourne", plus a suburb list in the nav (mostly east and inner north: Burwood, Hawthorn, Kew, Doncaster, Balwyn, Templestowe, Collingwood, Fitzroy, Carlton, Bentleigh and others).
- **Tone:** SEO-written and safe. Verbatim lines:
  - OK: "Planning a renovation or refurbishment starts with clearing the space."
  - OK: "Rest assured your site is left clean and ready for the next stage of work."
  - Weak: "We combine over 20 years of experience with modern equipment to deliver outstanding results."
  - Weak: "Our hard strip-out service ensures safe and compliant demolition where required."
- **Strengths:** It has the best FAQ set of the three competitors. Its questions cover permit, disconnection, dust and waste, which are the buyer's real worries. It has volume social proof (117 reviews on the page) and one page for both residential and commercial buyers. The strip-out vs full demolition table helps buyers who are unsure which job they need.
- **Weaknesses:** Eight service cards spread the page thin, with no clear kitchen or bathroom path. There is no price, and "a few days" is vague. Asbestos is missing. The reviews don't match the service. The form is buried, and the brand name sits in the H1.

---

### D. Demo Bros: Strip outs (benchmark)

**URL:** https://go.demobros.com.au/strip-out

- **Title tag:** `Demo Bros | Melbourne Demolitions & Strip Outs from $800`
- **Meta description:** "Melbourne strip out specialists. Kitchens from $800, bathrooms from $1,200, cleared in a day. Itemised price in writing within 24 hours, and it doesn't move. 4.9★ from 54 Melbourne jobs."
- **H1:** "Melbourne strip outs from $800, cleared in a day."
- **Subheading:** "Kitchens from $800, bathrooms from $1,200. Out in a day, so your tiler starts the next morning. Fixed price in writing within 24 hours — free, itemised, and we don't chase you."
- **Hero CTAs:** "Get my fixed price" and "Call 1800 960 625"
- **Hero bullets:** "Kitchens from $800, bathrooms from $1,200" / "Kitchens, bathrooms and laundries cleared in a day" / "Asbestos removal handled in-house — no third contractor on your job" / "Skip, rubbish and clean-up included"
- **Form (first section after the hero, "Get your fixed quote"):** Name, Email, Phone, "Suburb or postcode", "What needs to come out? (select all that apply)", Comments (optional). A "Website" field is also present, probably a hidden spam trap. Button: "Get my fixed price". Microcopy: "Free, itemised, no obligation. One quote, one follow-up. We do not chase you."

**Section order**

| # | H2 (verbatim) | Summary | CTA |
|---|---|---|---|
| 1 | Hero | Price, speed, fixed quote in 24 hours | Get my fixed price, Call |
| 2 | "Get your fixed quote" | Form plus a stat strip: 4.9 rating, 56 reviews, family owned since 2013, 24h | Get my fixed price |
| 3 | "Before and after" | "Same room, one day apart." Kitchen, laundry and internal strip-out pairs | none |
| 4 | "Up-front pricing" | "Starting prices", "Priced on the job", "What moves the price". "Whatever number comes back, that's the number." | Get my fixed price, Call us |
| 5 | "What we take out" | Five cards: kitchen/bathroom/laundry; shed, deck and site; full house; internal strip-out; wall, tile and asbestos | none |
| 6 | "Who we work with" | Homeowners, Builders, Developers, Government | none |
| 7 | "How it works" | Seven steps, from "Tell us what's coming out" to "Swept and photographed" | none |
| 8 | "Built before 1990?" | "The one thing that turns a one-day job into a three-week one." Asbestos handled in-house | none |
| 9 | "The part nobody explains" | The strip-out is the job nobody budgeted for before the renovation | Get my fixed price |
| 10 | (video) | Talking-head clip | none |
| 11 | "Fixed price guarantee" | "The number doesn't move." Four promises | none |
| 12 | "4.9 stars from hundreds of sites across Melbourne." | Testimonial carousel (the same reviews repeat) | none |
| 13 | "Where we work" | "Melbourne wide — and the rest of Victoria too." | none |
| 14 | "Questions we get every week" | Nine FAQs | none |
| 15 | "Get your fixed price." | Closing CTA, restating the prices | Get my fixed price, Call |

- **Trust signals:** 4.9 Google rating; "Family owned since 2013"; "$20M public liability"; "VBA registered"; "Certificates on request"; "Fixed price guarantee"; and "One crew, start to finish". **The asbestos licence class is not stated** on a page that sells in-house asbestos removal. **The review count is inconsistent:** 56 in the form strip, but 54 in the meta, the reviews block and the footer. The heading "from hundreds of sites" sits next to a count of 54.
- **Education content:**
  - Price: kitchen from $800, bathroom from $1,200, laundry from $800. Five job types are priced on the job, and the page explains why. Five price drivers are listed.
  - Time: one day for a kitchen, bathroom or laundry; "a small internal is usually a day; a full strip back to the frame ... is generally inside a week".
  - Waste: "Skip and tip runs are on us. Recycled where we can."
  - Asbestos: pre-1990 explainer, identified before the quote, inside the price.
  - FAQ questions (verbatim): "What does a strip out cost?" / "How long does it take?" / "Do you handle asbestos?" / "How far do you travel?" / "Do I need a permit?" / "Do you take the rubbish away?" / "What about the parts of the house I'm keeping?" / "Can you work to my builder's start date?" / "Are you insured?"
- **Lead capture:** the form comes straight after the hero, a 1800 number appears four or more times, and the promise is "itemised quote within 24 hours". It is the only page with a response-time promise and an anti-pushiness line.
- **Local signals:** "every suburb, inner and outer, north and south of the river"; Peninsula, Geelong, Surf Coast, Ballarat, Bendigo, Gippsland and the north-east. Brighton and Kew appear in the reviews.
- **Tone:** plain, direct, tradie-confident, and written to the buyer's situation. Verbatim lines:
  - Strong: "Out in a day, so your tiler starts the next morning."
  - Strong: "The bottom five vary too much for a starting number to mean anything, so we don't invent one."
  - Strong: "A finish date you can give your builder with a straight face"
  - Weak: "4.9 stars from hundreds of sites across Melbourne." (it doesn't match the 54-review count)
- **Strengths:** It is the only page with real prices, a response time, a guarantee, asbestos inside the price, before-and-after photos and a "what moves the price" block. The copy is written around the buyer's real problem: the tiler is booked and the old room has to go first.
- **Weaknesses:** **Not one testimonial is about a strip-out.** They cover house demolitions, a backyard, a garage and a towed car. Tile and floor covering removal and office or retail defits are barely covered (one footer line: "Office defit, retail strip out or end-of-lease make good? We do that too"). There is no licence class for asbestos and no VBA number. The review counts are inconsistent, and there is no mention of disconnections or make-safe of plumbing and electrical services.

---

## Step 3: Buyer questions (People Also Ask style)

Sources: competitor FAQs (A–D above), Whirlpool thread snippets via search (https://forums.whirlpool.net.au/archive/1897952, /2641815, /1777112), The Quote Yard (https://www.thequoteyard.com.au/services/bathroom-demolition-cost-nsw), What's the Damage Melbourne guides (https://whatsthedamage.com.au/bathroom-renovation-cost-melbourne/diy-vs-professional/ and https://whatsthedamage.com.au/asbestos-removal-cost-melbourne/), Monash Council (https://www.monash.vic.gov.au/Planning-Development/Building/Renovations/Encountering-Asbestos), Asbestos Victoria (https://www.asbestos.vic.gov.au/in-the-home), Bunnings Workshop and OzBargain (https://www.ozbargain.com.au/node/966888).

1. **How much does it cost to strip out a bathroom / rip out a kitchen in Melbourne?** This is the top question everywhere. Whirlpool posters report "a quote for $1000 to demolish and remove my old kitchen" and "Around $2K for demolition, skip bin, Associated disconnection of plumbing/electrics".
2. **How long does a bathroom strip-out take?** Answers range from "one workday" (Metro Defits) to "1-2 days" (Micro Demo) to "a few days" (On Spot).
3. **Is the price really fixed, or will you add variations?** From Micro Demo's FAQ. OzBargain quotes a builder: "we can't quote on what we can't see". A Whirlpool poster: "the quote is not the final payment and often you will have to pay for variations."
4. **Does my old bathroom have asbestos? Do I need it tested first?** Pre-1990 homes. Asbestos Victoria lists wet-area sheeting, tile backing and splashbacks.
5. **Who can legally remove asbestos tiles or sheeting? Do I need two contractors?** Micro Demo excludes asbestos, and the Bunnings Workshop poster had an assessor find "asbestos containing materials beneath the floor tiles".
6. **Do I need a permit to strip out a kitchen or bathroom?** Asked by On Spot, Demo Bros and The Quote Yard. Monash Council says a permit isn't needed for the asbestos removal itself, but is still needed for the replacement work.
7. **Who disconnects the water, power and gas before the strip-out?** Whirlpool: "you will need to get the electrical / plumbing disconnected before stripout." Metro Defits and On Spot both answer this.
8. **Is the floor included, or just the cabinets?** Whirlpool: a Melbourne quote "apparently do[es] not touch the floor, especially if its tiles."
9. **Do you remove tile glue, screed and the old waterproofing membrane?** Metro Defits asks this. The Quote Yard says a strip-out that leaves the membrane isn't a full strip-out.
10. **Do you take the rubbish away? Is the skip included?** Asked on every page. Whirlpool DIYers mention "a 3cuM skip".
11. **Can I demo it myself to save money?** What's the Damage lists strip-out as a DIY saving of $600–$1,200. Whirlpool: "ended up doing it myself. Cost me around $250 for a 3cuM skip and cheap small sledge hammer and crowbar."
12. **Can you work to my builder's or tiler's start date?** Demo Bros asks this.
13. **What happens to the rooms I'm keeping (floorboards, dust)?** Demo Bros and Metro Defits cover this (dust and silica control).
14. **Can you work in an apartment (lift, strata, neighbours)?** Micro Demo asks this.
15. **What's the difference between a strip-out and a full demolition, or a defit?** Asked by On Spot (table) and The Quote Yard. NMGS and Whelan cover soft vs hard strip-out and defit vs strip-out for commercial buyers.

**Phrases buyers use:** "rip out" / "ripped out", "demo" ("demo the bathroom", "kitchen demo"), "strip out" / "stripout" (spelled both ways, sometimes "strip-out"), "gut" / "gutted" (less common in AU), "demolish and remove my old kitchen", "back to the frame" / "back to the studs" / "back to the slab", "bust out" (a NZ/Melbourne case study title was "Bathroom Bust Out"), "take the tiles off", "pull up the floor", "skip", "tip run", "disconnected", "make good" / "end of lease" (commercial). For commercial buyers, "defit" and "make good" are the words to use, not "strip out".

---

## Step 4: Synthesis

### Common section pattern

Every competitor page follows roughly this order: **Hero (H1 plus a "free quote" CTA) → "What is a strip-out" → services or inclusions list → "Why choose us" (years, licensed, insured) → FAQ → closing CTA.** Only the benchmark adds pricing, before-and-after photos, a guarantee and an asbestos block. Only On Spot embeds reviews. None of the three competitors puts a form above the fold.

### Gaps none of them fill well

1. **Strip-out reviews.** No page shows a testimonial about a kitchen, bathroom or tile strip-out. Demo Bros and On Spot both show house-demolition reviews. A page with three or four strip-out reviews (room, suburb, what came out, how long it took) would be unique.
2. **Price for the variants competitors won't price.** Only Demo Bros gives figures, and nobody prices tile removal, floor covering removal or office defits even as a range or per-m² guide. Melbourne guides put tile stripping at $21–$58/m² (What's the Damage). A "from" figure or a "what moves the price" for tiles and floors fills a gap.
3. **Asbestos with a licence class.** Two of the three competitors don't mention asbestos at all, and one excludes it. The benchmark handles it in-house but never states the licence class or WorkSafe licence. For a pre-1990 bathroom (tiles over fibro sheeting, vinyl with bitumen adhesive), "Class B licensed, WorkSafe Victoria licence no. X" is the proof the buyer can check. This applies only if the client actually holds the licence. **Confirm before writing it.**
4. **Floor and wet-area depth.** Only Metro Defits says it removes tile glue and waterproofing. Nobody says clearly whether the screed or bed comes up, what the floor looks like at handover (ready for the waterproofer or tiler), or that the floor is included at all. That is exactly the Whirlpool complaint ("do not touch the floor, especially if its tiles").
5. **Make-safe and disconnections.** Only Metro Defits and On Spot mention disconnection, and the benchmark doesn't mention it at all. Buyers ask "who disconnects the water and power?" in nearly every thread.
6. **Apartments and strata.** Only Micro Demo mentions apartments. Nobody covers lift bookings, strata notice, work hours, or carrying waste through common areas. Melbourne has a lot of apartment bathroom and kitchen renovations.
7. **Commercial defits on a residential-led page.** On Spot lists office and warehouse cards with no detail. Demo Bros gives it one footer line. Nobody gives a short "Office and retail defits: make good to the lease, after-hours work, sign-off photos" block on the same page.
8. **The handover state, defined.** Demo Bros says "Swept and photographed". Nobody says what's left: capped services, bare frame or slab, floor ready for the waterproofer, skip gone, photos sent to the builder.
9. **A clear answer to "can I DIY it?"** Buyers ask it, and cost guides suggest DIY. No contractor page answers it honestly (for example: you can, but pre-1990 asbestos, silica dust, disconnections and tip fees are the catches).

### Patterns worth adopting (improved, in our own words)

- **Price in the hero, plus why some jobs can't carry a starting price** (from Demo Bros). Use our own figures only if the client confirms them. Add a tile or floor guide if the client can stand behind one.
- **An inclusions checklist that names the boring parts** (from Metro Defits): tile adhesive, waterproofing membrane, wall linings, capped services, waste. In our words: "What's gone when we leave."
- **"While you're at work" or "your tiler starts tomorrow"** framing. Write around the next trade's start date, not around demolition.
- **An FAQ built from real worries** (On Spot's set plus Demo Bros'). Answer every question on the page. No empty accordions, as on Metro Defits and Deconstructors.
- **An audience split that includes apartments and strata** (from Micro Demo), plus builders and commercial tenants.
- **A strip-out vs full demolition vs defit explainer** (On Spot's table idea), shortened to three rows so office and retail buyers can find themselves.
- **Before-and-after photos of the same room one day apart** (from Demo Bros), with a caption for each saying what came out.
- **A response-time promise and a no-chase line** (from Demo Bros), kept only if the client can deliver it.

### Mistakes to avoid

- A bare "strip out" in the H1 or ads without a qualifier. The search intent is split with adult entertainment.
- FAQ questions with no answers, or placeholder text (Metro Defits, Deconstructors).
- Reviews that don't match the page. Use strip-out reviews, or label the reviews as general.
- Inconsistent proof numbers (Demo Bros: 54 vs 56 reviews; "hundreds of sites" next to 54).
- Multi-city pages and two phone numbers (Micro Demo).
- Excluding asbestos or staying silent on it on a pre-1990-heavy market.
- Unprovable superlatives ("industry leaders", "preferred", "premier").
- The brand name in the H1 (On Spot), and swapped title tags (Micro Demo).
- Burying the form in a modal or the footer.
- **Brand confusion with "Metro Defits".** Our ads and page should state the full name "Metro Partial Demolition" clearly. Watch Auction Insights for Metro Defits.

### Which page most likely wins the leads (estimate)

**Estimate, not measured:** **Demo Bros (the benchmark) most likely converts best per visitor** of the four. It is the only page with prices above the fold, a form straight after the hero, a 24-hour written quote promise, a fixed-price guarantee and asbestos included. Those answer the buyer's top three questions (cost, time, surprises) before they scroll. **Among the three competitors, Metro Defits most likely wins the most bathroom leads.** It has a specific inclusions list, a believable volume claim (2,000+ jobs since 2010), a one-day promise, licensed make-safe, a strong meta description for click-through, and strong suburb coverage. Its weaknesses (no price, no asbestos, empty FAQ) are exactly where our page can beat it. **On Spot likely wins on trust volume** (117 reviews on the page) and does better on broad "strip out demolition" and commercial queries, but it converts worse for a kitchen or bathroom buyer. **Micro Demo is likely the weakest for Melbourne intent** because of the three-city page, the asbestos exclusion and no reviews. I could not verify ad spend or rankings, so this ranking is based on page quality only.

---

## Source URLs

- https://go.demobros.com.au/strip-out
- https://www.metrodefits.com.au/residential/bathroom-stripouts
- https://www.metrodefits.com.au/residential/complete-stripouts
- https://www.microdemo.com.au/bathroom-demolition
- https://www.microdemo.com.au/melbourne-kitchen-demolitions
- https://www.microdemo.com.au/melbourne-interior-demolitions
- https://www.onspotdemolitionmelbourne.com.au/strip-outs-melbourne/
- https://whelanthewrecker.com.au/strip-outs/
- https://deconstructors.com.au/strip-outs/
- https://www.woodsonsdemolition.com.au/strip-outs-melbourne/
- https://www.localsearch.com.au/find/kitchen-strip-outs/melbourne-vic
- https://localsearch.com.au/profile/all-stripped-melbourne/cm03jdeqo001l09mfft4w14d6
- https://forums.whirlpool.net.au/archive/1897952 (snippet only; 403 on fetch)
- https://forums.whirlpool.net.au/archive/2641815 (snippet only)
- https://www.thequoteyard.com.au/services/bathroom-demolition-cost-nsw
- https://whatsthedamage.com.au/bathroom-renovation-cost-melbourne/diy-vs-professional/
- https://whatsthedamage.com.au/asbestos-removal-cost-melbourne/
- https://whatsthedamage.com.au/tiling-cost-melbourne/bathroom-tiling/
- https://whatsthedamage.com.au/commercial-fitout-cost-melbourne/office-make-good-cost/
- https://www.monash.vic.gov.au/Planning-Development/Building/Renovations/Encountering-Asbestos
- https://www.asbestos.vic.gov.au/in-the-home
- https://www.ozbargain.com.au/node/966888
