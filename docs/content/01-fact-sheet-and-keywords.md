# Metro Partial Demolition — fact sheet and keyword map

Phase 1 (intake) and Phase 2 (search intent) of the copy rewrite for the three
Google Ads landing pages: `/partial-demolition`, `/strip-out`, `/rubbish-removal`.
Kitchen, bathroom, garage/shed/driveway and house pages are variants of these.
Checked 2026-11-24.

## Sources read

| Source | What it gave |
| --- | --- |
| `src/lib/site-data.ts` | Name, routes, "waiting on Metro" list, form copy |
| `src/lib/pages/*.ts` | Current page copy (23 Nov rewrite, claims removed) |
| `D:/Downloads/DemoBros/02–05-*.md` | Copy decks — identical to the current page copy |
| `docs/google-ads/00-grokbot-brief.md` | Campaign structure, keywords, negatives, Demo Bros benchmark |
| `docs/google-ads/02-task-list.md` | Phase 0 client inputs still outstanding |
| `src/lib/db/placeholder-content.ts` | Pre-rewrite copy (prices, ratings, reviews) — all placeholders |
| README "Brand" section | Colours, fonts, graphic elements |

## Fact sheet

| Fact | Value(s) | Source(s) | Status |
| --- | --- | --- | --- |
| Business name | Metro Partial Demolition ("Metro") | site-data, decks | Confirmed |
| Legal entity / ABN | "Metro Partial Demolition Pty Ltd" appears only as a brand keyword | ads brief §3 | TO CONFIRM |
| Location | Melbourne, Victoria | everywhere | Confirmed |
| Service area | Melbourne metro **vs** "the rest of Victoria too" (Peninsula, Geelong, Ballarat, Bendigo, Gippsland) | decks **vs** pre-rewrite copy | TO CONFIRM — task list asks |
| Phone | none | site-data | TO CONFIRM — call buttons hidden |
| Email | none | site-data | TO CONFIRM |
| Services | Partial demolition (rear extensions, selected walls/openings, internal demolition, adjoining concrete/structures); strip-outs (kitchen, bathroom, laundry, tiles/floors, multi-room, office/retail defits); garage/shed/driveway removal; rubbish removal (household, renovation/building waste, heavy materials) | decks, page files | Confirmed (named on current pages) |
| Tile removal | offered? | task list | TO CONFIRM |
| Full house demolition | offered? (page live, no ads) | task list, ads brief | TO CONFIRM |
| Commercial strip-outs / defits | on the strip-out page | decks | TO CONFIRM scope (task list) |
| Asbestos | "removed by our own licensed crew" (pre-rewrite) | placeholder copy | TO CONFIRM licence class — else "arranged with a licensed removalist" |
| Public liability | "$20M" | placeholder copy (copied from Demo Bros) | TO CONFIRM — do not publish |
| Licence / registration | "Licensed & insured" | placeholder copy | TO CONFIRM |
| Prices | wall $1,500 · garage/shed $1,200 · kitchen $800 · bathroom $1,200 · laundry $800 · small house $15,000 · rubbish $99/$150/$290/$550 | placeholder copy | TO CONFIRM — copied from Demo Bros |
| Google rating | 4.9 from 48 reviews | placeholder copy | TO CONFIRM — placeholder |
| Testimonials | 6+ sample reviews | placeholder copy | TO CONFIRM — written for the design, not real |
| Quote turnaround | "within 24 hours" | pre-rewrite copy | TO CONFIRM — removed by rewrite |
| Fixed-price promise | "the number doesn't move" | pre-rewrite copy | TO CONFIRM |
| Same-day rubbish removal | — | task list | TO CONFIRM |
| Photos | AI illustrations of the work; no real job photos yet | public/images | Real photos TO CONFIRM |
| Quote process | Form → Metro reviews job details/photos → quote; site visit "where needed" | current copy | Confirmed (current copy) |
| Lead handling | Form → GoHighLevel; photo upload supported | codebase | Confirmed |

### Conflicts and gaps
- **Service area:** current copy says Melbourne; pre-rewrite copy says "Melbourne wide — and the rest of Victoria too". Copy stays at Melbourne until Metro confirms.
- **Every proof point is unconfirmed.** The page has no confirmed number, credential, review or guarantee yet. Copy must win on clarity, process and specifics, not on claims.
- **Demo Bros benchmark** (ads brief §1, 16–22 Nov): partial & strip-out converts at 11.8% (A$49.75/lead); rubbish 2.9%; full house 5.7%.

## Keyword map

Search volumes: **not available** — the Semrush API has no units left on this
account (checked 2026-11-24). The ads brief's keyword list is the source of
truth; keywords are ranked by intent and ad-group fit, not volume.

### /partial-demolition
| Role | Keyword | Where it goes |
| --- | --- | --- |
| Primary | partial demolition melbourne | H1, title, meta, GEO line, first answer block |
| Secondary | rear extension demolition | services card + an H2/body |
| Secondary | internal demolition melbourne | services card |
| Secondary | partial house demolition | body / FAQ |
| Secondary | wall removal (selected / load-bearing) | services card, FAQ |
| AEO | Do I need a permit for partial demolition in Victoria? · How much does partial demolition cost? · Can you remove a load-bearing wall? · What happens to the part of the house I'm keeping? · What about asbestos? | FAQ + question headings |

### /strip-out
| Role | Keyword | Where it goes |
| --- | --- | --- |
| Primary | strip out melbourne (internal strip-out) | H1, title, meta, GEO line |
| Secondary | kitchen demolition / kitchen removal melbourne | services card (+ /kitchen-demolition page) |
| Secondary | bathroom strip out melbourne | services card (+ /bathroom-demolition page) |
| Secondary | tile removal melbourne | services card, FAQ |
| Secondary | office / commercial strip out, soft strip | services card |
| AEO | How long does a strip-out take? · Do I need a permit for a strip-out? · Is the waste included? · What about asbestos in old tiles/sheeting? · What do I need to do before you start? | FAQ |

### /rubbish-removal
| Role | Keyword | Where it goes |
| --- | --- | --- |
| Primary | rubbish removal melbourne | H1, title, meta, GEO line |
| Secondary | hard rubbish removal melbourne | body / services |
| Secondary | household rubbish removal | services card |
| Secondary | construction waste removal | services card |
| AEO | How is rubbish removal priced? · What can't you take? · Do you take asbestos/e-waste/mattresses? · Do I need to be home? · Is it cheaper than a skip? | FAQ |

### Cannibalisation check
Partial (C1) vs garage/shed/driveway (C2) vs rubbish (C3) are kept apart by the
campaign negatives in the ads brief (C1 excludes garage/shed/driveway/rubbish;
C2 excludes kitchen/bathroom/strip out/rubbish). Copy follows the same split.

### GEO answer-first line (draft, all pages)
> Metro Partial Demolition is a Melbourne demolition contractor. We take out
> the parts of a building you don't want — rear extensions, walls, kitchens,
> bathrooms and interiors — and clear the rubbish, working around the parts you keep.
