"use client";

/**
 * Demo Bros "house demolition" landing page (go.demobros.com.au/house-demolition),
 * ported as a layout replica in Metro's brand. Used by /partial-demolition and
 * /house-demolition; each passes its own content object from
 * src/lib/db-content/.
 *
 * Section order is the Demo Bros one, unchanged:
 * Hero → TrustStrip → TrustStats → BeforeAfter → Price → Audiences → Timeline →
 * Included → CompareQuotes → Process → Asbestos → Builders → Guarantee →
 * Reviews → ServiceArea → Faqs → FinalCta, plus the sticky rating badge, the
 * floating contact button and the sticky mobile bar.
 *
 * Changes from the Demo Bros source, all deliberate:
 *  - Colour: Demo Bros' primary is green, Metro's is yellow. Every `text-primary`
 *    that sat on a light surface (white, card, paper) is now ink, because yellow
 *    text on white fails contrast. Yellow stays wherever it sits on charcoal or a
 *    dark photo, and yellow bands carry ink text.
 *  - Calls: Metro has no phone number yet, so every call button is behind
 *    `hasPhone`.
 *  - Layout fills: before/after runs four across from lg; the three-step process
 *    and three audiences sit in one row; an odd last timeline tile spans the row
 *    at sm, so no grid leaves a lone card.
 */
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  BrickWall,
  Building2,
  Check,
  Clock,
  FileCheck,
  FileText,
  Handshake,
  HardHat,
  House,
  Layers,
  MapPin,
  Phone,
  Plug,
  ShieldCheck,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/db/SectionHeading";
import { FaqList } from "@/components/db/FaqList";
import { CtaButton } from "@/components/db/CtaButton";
import {
  GoogleG,
  GoogleRatingBadge,
  GoogleRatingSticky,
  GoogleStars,
} from "@/components/db/GoogleRating";
import { QuoteForm } from "@/components/site/QuoteForm";
import { useQuoteModal } from "@/components/site/QuoteModal";
import { FloatingContact } from "@/components/site/FloatingContact";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { CTA_LABEL, SITE, formCopyFor, hasPhone } from "@/lib/site-data";
import type {
  GuaranteeIcon,
  HeroBulletIcon,
  HouseDemolitionContent,
  TrustStatId,
} from "@/lib/db-content/house-types";

export type { HouseDemolitionContent } from "@/lib/db-content/house-types";

type C = HouseDemolitionContent;

export function HouseDemolitionPage({ content }: { content: HouseDemolitionContent }) {
  return (
    <>
      <Hero hero={content.hero} />
      <TrustStats stats={content.trustStats} />
      <BeforeAfter data={content.beforeAfter} />
      <Price pricing={content.pricing} scope={content.scope} services={content.services} />
      <Audiences audiences={content.audiences} />
      <Timeline timeline={content.timeline} />
      <Included included={content.included} />
      <CompareQuotes compare={content.compare} />
      <Process process={content.process} />
      <Asbestos asbestos={content.asbestos} />
      <Builders builders={content.builders} />
      <Guarantee guarantee={content.guarantee} />
      <Reviews reviews={content.reviews} />
      <ServiceArea serviceArea={content.serviceArea} />
      <Faqs faqs={content.faqs} />
      <FinalCta finalCta={content.finalCta} />
      <GoogleRatingSticky />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

/**
 * Drops a SectionHeading's description below md (Demo Bros'
 * `hideDescriptionOnMobile`, which the shared Metro port doesn't carry).
 */
function HideDescriptionOnMobile({ children }: { children: ReactNode }) {
  return <div className="max-md:[&_h2+p]:hidden">{children}</div>;
}

/** Metro's eyebrow is ink by default — on charcoal it is retinted yellow. */
const EYEBROW_ON_DARK = "[--eyebrow-color:var(--color-primary)]";

/* ============================== 01 · HERO ============================== */

const HERO_ICONS: Record<HeroBulletIcon, LucideIcon> = {
  plug: Plug,
  shield: ShieldCheck,
  layers: Layers,
  file: FileText,
  bricks: BrickWall,
  home: House,
};

/**
 * Highlighted phrase with a hand-drawn underline swoosh. Demo Bros draws it
 * around a price token; Metro's H1 has no price, so it goes under the ribbon
 * phrase — which is too long to hold on one line, hence no `whitespace-nowrap`.
 */
function HandUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block text-primary">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        className="absolute -bottom-1 left-0 h-[0.42em] w-full overflow-visible"
      >
        <motion.path
          d="M3 9.5C34 4.2 74 2.4 116 5.1c28 1.8 52 3.6 81 1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth={4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
}

function Hero({ hero }: { hero: C["hero"] }) {
  const { openQuote } = useQuoteModal();
  const form = formCopyFor(usePathname() ?? "/");

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <picture>
        <source media="(max-width: 767px)" srcSet={hero.imageMobile} />
        <img
          src={hero.imageDesktop}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/88 via-charcoal/80 to-charcoal/88 md:bg-gradient-to-r md:from-charcoal/92 md:via-charcoal/72 md:to-charcoal/45" />

      <div className="container-wide relative z-10 grid items-center gap-10 pt-28 pb-14 lg:grid-cols-2 lg:gap-14 lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <GoogleRatingBadge />
            <span className="rounded-full bg-primary px-2.5 py-1 text-[0.75rem] font-semibold text-primary-foreground sm:py-1.5 sm:text-xs">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading mt-5 text-[1.875rem] leading-[1.13] text-secondary sm:text-[2rem] lg:text-[2.5rem]"
          >
            {hero.titleTop} <HandUnderline>{hero.titleRibbon}</HandUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 hidden max-w-xl text-base leading-relaxed text-secondary/85 md:block"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <CtaButton size="md" onClick={openQuote} className="w-full sm:w-auto">
              {CTA_LABEL}
            </CtaButton>
            {hasPhone && (
              <CtaButton
                href={SITE.phoneHref}
                variant="outlineLight"
                size="md"
                icon={false}
                className="w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call {SITE.phone}
              </CtaButton>
            )}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid max-w-xl gap-3.5 sm:gap-4"
          >
            {hero.bullets.map(({ icon, label }) => {
              const Icon = HERO_ICONS[icon] ?? ShieldCheck;
              return (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/25 sm:h-11 sm:w-11">
                    <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2.25} />
                  </span>
                  <span className="text-[0.9rem] leading-snug font-bold text-secondary sm:text-[0.95rem]">
                    {label}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* Desktop only, as on Demo Bros: on a phone the CTA and the sticky bar
            open the same form in the quote modal. */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden w-full scroll-mt-24 rounded-xl border border-border bg-light p-5 shadow-2xl shadow-black/10 sm:p-6 md:block lg:scroll-mt-28"
        >
          <h2 className="font-heading text-xl text-light-foreground">{form.heading}</h2>
          <p className="mt-1.5 text-sm text-light-foreground/70">{form.prompt}</p>
          <div className="mt-5">
            <QuoteForm compact photos={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================== 03 · TRUST STATS =========================== */

const STAT_ICONS: Record<TrustStatId, LucideIcon> = {
  rating: Star,
  quote: Clock,
  liability: ShieldCheck,
  crew: Handshake,
};

function TrustStats({ stats }: { stats: C["trustStats"] }) {
  return (
    <section className="border-y border-border bg-card py-12 lg:py-14">
      <div className="container-wide">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = STAT_ICONS[s.id] ?? Star;
            const isRating = s.id === "rating";
            return (
              <div
                key={s.id}
                className="group flex flex-col items-center justify-center bg-card px-3 py-6 text-center transition-colors duration-300 hover:bg-background sm:px-4"
              >
                <dd className="font-heading text-2xl text-foreground lg:text-3xl">{s.value}</dd>
                {isRating ? (
                  <>
                    <span className="mt-2.5 flex items-center gap-2">
                      <GoogleG className="h-5 w-5" />
                      <GoogleStars className="h-[17px] w-[17px]" />
                    </span>
                    <dt className="mt-2 text-[0.8rem] leading-tight font-medium text-muted-foreground sm:text-sm">
                      {s.label}
                    </dt>
                  </>
                ) : (
                  <dt className="mt-2.5 flex flex-col items-center gap-1.5 text-[0.8rem] leading-tight font-medium text-muted-foreground sm:flex-row sm:gap-2 sm:text-sm">
                    <Icon className="h-5 w-5 shrink-0 text-foreground" strokeWidth={2} />
                    {s.label}
                  </dt>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/* ========================= 04 · BEFORE AND AFTER ========================= */

/**
 * Two up below lg, all four across in one row from lg (a 3-column grid left
 * the fourth pair on its own).
 */
function BeforeAfter({ data }: { data: C["beforeAfter"] }) {
  if (data.pairs.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={data.eyebrow} title={data.title} />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-5">
          {data.pairs.map((pair, i) => (
            <Reveal key={pair.id} delay={(i % 4) * 0.05}>
              <figure className="h-full overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative">
                  <img
                    src={pair.image}
                    alt={`${pair.label} — before on the left, after on the right`}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/80"
                  />
                  <span className="absolute top-2 left-2 rounded-sm bg-charcoal/80 px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.12em] text-secondary uppercase backdrop-blur sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[0.75rem] sm:tracking-[0.18em]">
                    Before
                  </span>
                  <span className="absolute top-2 right-2 rounded-sm bg-primary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.12em] text-primary-foreground uppercase sm:top-3 sm:right-3 sm:px-2.5 sm:py-1 sm:text-[0.75rem] sm:tracking-[0.18em]">
                    After
                  </span>
                </div>
                <figcaption className="border-t border-border px-3 py-3 sm:px-5 sm:py-4">
                  <span className="font-heading block text-[0.8rem] leading-tight sm:text-base">
                    {pair.label}
                  </span>
                  <span className="mt-1 block text-[0.75rem] text-muted-foreground sm:mt-0.5 sm:text-sm">
                    {pair.note}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== 05 · PRICE ============================== */

/**
 * The left card is where Demo Bros lists "What moves the price". It carries
 * Metro's current scope copy there, then Metro's "What we take down" services
 * list (the house page has no services section of its own).
 */
function Price({
  pricing,
  scope,
  services,
}: {
  pricing: C["pricing"];
  scope: C["scope"];
  services: C["services"];
}) {
  return (
    <section
      id="prices"
      className="scroll-mt-24 border-t border-border py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide">
        <HideDescriptionOnMobile>
          <SectionHeading
            align="center"
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            description={pricing.lede}
          />
        </HideDescriptionOnMobile>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.05} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">{pricing.title}</caption>
                <thead>
                  <tr className="border-b border-border">
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-[0.75rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:px-6"
                    >
                      {pricing.tableHead.job}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-right text-[0.75rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:px-6"
                    >
                      {pricing.tableHead.from}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.table.map((row) => {
                    const isNumber = row.from.startsWith("$");
                    return (
                      <tr key={row.job} className="border-b border-border last:border-0">
                        <td className="px-4 py-3.5 sm:px-6">
                          <span className="box-decoration-clone bg-linear-to-b from-transparent from-55% to-primary/25 to-55% px-1 text-sm font-bold text-foreground sm:text-base">
                            {row.job}
                          </span>
                          <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted-foreground">
                            {row.how}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-right align-top sm:px-6">
                          {/* Yellow chip, ink figure: yellow text on white
                              would fail contrast. */}
                          {isNumber ? (
                            <span className="font-heading inline-flex items-center rounded-md bg-primary/20 px-2.5 py-1 text-base whitespace-nowrap text-foreground tabular-nums ring-1 ring-primary/50 sm:text-xl">
                              {row.from}
                            </span>
                          ) : (
                            <span className="text-[0.8rem] font-bold text-muted-foreground sm:text-sm">
                              {row.from}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-5 hidden text-[0.95rem] leading-relaxed text-muted-foreground md:block">
              {pricing.note}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="order-2 lg:order-1">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <p className="eyebrow">{scope.eyebrow}</p>
              <h3 className="font-heading mt-3 text-lg lg:text-xl">{scope.title}</h3>
              {scope.body.map((para) => (
                <p key={para} className="mt-4 leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}

              <div className="mt-6 border-t border-border pt-6">
                <p className="eyebrow">{services.eyebrow}</p>
                <h4 className="font-heading mt-3 text-base lg:text-lg">{services.title}</h4>
                <ul className="mt-5 grid gap-3.5">
                  {services.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 text-[0.95rem] text-foreground/85"
                    >
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-foreground"
                        strokeWidth={2.25}
                      />
                      <span>
                        <span className="block font-bold text-foreground">{item.title}</span>
                        <span className="mt-0.5 block leading-relaxed">{item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t border-border pt-6 leading-relaxed text-muted-foreground">
                {pricing.close}{" "}
                <strong className="font-bold text-foreground">{pricing.closeEmphasis}</strong>
              </p>

              <CtaRow className="mt-7 lg:justify-start" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ========================= 06 · WHAT'S INCLUDED ========================= */

function Included({ included }: { included: C["included"] }) {
  const total = included.groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section
      id="included"
      className="scroll-mt-24 border-y border-border bg-card py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={included.eyebrow}
          title={included.title}
          description={included.lede}
        />

        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-xl border border-border bg-background">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border bg-primary px-5 py-3 text-primary-foreground sm:px-6">
              <p className="font-heading text-sm tracking-wide uppercase sm:text-base">
                {total} {included.headlineAfterCount}
              </p>
              <p className="text-[0.8rem] font-semibold text-primary-foreground/85">
                {included.subline}
              </p>
            </div>

            <div className="grid gap-px bg-border lg:grid-cols-3">
              {included.groups.map((group) => (
                <div key={group.label} className="bg-background">
                  <p className="border-b border-border px-5 py-2.5 text-[0.75rem] font-bold tracking-[0.16em] text-muted-foreground uppercase sm:px-6">
                    {group.label}
                    <span className="ml-2 text-foreground">{group.items.length}</span>
                  </p>

                  <ul className="px-5 py-1.5 sm:px-6">
                    {group.items.map((row) => (
                      <li key={row.item} className="flex items-start gap-3 py-2.5">
                        <Check
                          className="mt-[0.15rem] h-4 w-4 shrink-0 text-foreground"
                          strokeWidth={3}
                        />
                        <div className="min-w-0">
                          <span className="font-heading block text-[0.9rem] leading-tight">
                            {row.item}
                          </span>
                          <span className="mt-1 block text-[0.78rem] leading-snug text-muted-foreground">
                            {row.means}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 hidden max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground md:block">
          {included.close}
        </p>

        <CtaRow className="mt-8" />
      </div>
    </section>
  );
}

/* =============== 07 · THREE QUOTES, THOUSANDS APART =============== */

function CompareQuotes({ compare }: { compare: C["compare"] }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{compare.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {compare.title}
            </h2>
            {compare.body.map((para) => (
              <p key={para} className="mt-4 leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
            <p className="mt-6 leading-relaxed text-muted-foreground">{compare.close}</p>
            <QuoteCta className="mt-7" />
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl shadow-black/10">
            <div className="flex items-center gap-2.5 bg-charcoal px-6 py-3.5 sm:px-8">
              <AlertTriangle className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
              <p className="text-[0.75rem] font-bold tracking-[0.18em] text-secondary uppercase">
                {compare.cardLabel}
              </p>
            </div>

            <ul className="grid gap-4 p-6 sm:p-8">
              {compare.points.map((point) => {
                const [head, ...rest] = point.split(". ");
                return (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <X className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-foreground/85">
                      <strong className="font-bold text-foreground">{head}.</strong>{" "}
                      {rest.join(". ")}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= 08 · ASBESTOS ============================= */

function Asbestos({ asbestos }: { asbestos: C["asbestos"] }) {
  return (
    <section className="bg-charcoal py-12 sm:py-16 lg:py-20">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className={`eyebrow ${EYEBROW_ON_DARK}`}>{asbestos.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl text-secondary sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {asbestos.title}
            </h2>
            {asbestos.body.map((para) => (
              <p key={para} className="mt-4 leading-relaxed text-secondary/70">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {asbestos.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.95rem] text-secondary/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2.25} />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-white/12">
            <img
              src={asbestos.image.src}
              alt={asbestos.image.alt}
              loading="lazy"
              className="aspect-[8/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= WHO WE WORK WITH ========================= */

/** Metro's three audiences, drawn as line icons (Demo Bros uses line art). */
const AUDIENCE_ICONS: Record<C["audiences"]["items"][number]["icon"], LucideIcon> = {
  home: House,
  builder: HardHat,
  developer: Building2,
};

function Audiences({ audiences }: { audiences: C["audiences"] }) {
  return (
    <section className="border-y border-border bg-card py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <h2 className="font-heading text-center text-[1.15rem] sm:text-2xl lg:text-[1.75rem]">
          {audiences.title}
        </h2>

        {/* Three in one row at every width. Hairlines between columns, never at
            the start of the row — `first:` sits on the grid child (Reveal). */}
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-3 sm:mt-12">
          {audiences.items.map((a, i) => {
            const Icon = AUDIENCE_ICONS[a.icon] ?? House;
            return (
              <Reveal
                key={a.label}
                delay={i * 0.06}
                className="border-l border-border first:border-l-0"
              >
                <div className="flex flex-col items-center gap-5 px-2 py-6 text-center">
                  <Icon
                    aria-hidden="true"
                    className="h-16 w-16 text-foreground opacity-85 sm:h-20 sm:w-20"
                    strokeWidth={1.25}
                  />
                  <span className="text-base font-extrabold sm:text-lg lg:text-xl">{a.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================= 09 · TIMELINE ============================= */

function Timeline({ timeline }: { timeline: C["timeline"] }) {
  const count = timeline.steps.length;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <HideDescriptionOnMobile>
          <SectionHeading
            align="center"
            eyebrow={timeline.eyebrow}
            title={timeline.title}
            description={timeline.lede}
          />
        </HideDescriptionOnMobile>

        <ol className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-4 lg:gap-5">
          {timeline.steps.map((step, i) => {
            /* Three across, then the remainder SHARES the full width (Demo Bros). */
            const remainder = count % 3;
            const inLastRow = remainder !== 0 && i >= count - remainder;
            const lgWidth = inLastRow
              ? remainder === 2
                ? "lg:w-[calc(50%-0.625rem)]"
                : "lg:w-full"
              : "lg:w-[calc(33.333%-0.834rem)]";
            /* Two across at sm: an odd last tile takes the row instead of
               sitting alone beside a gap. */
            const smWidth =
              count % 2 === 1 && i === count - 1 ? "sm:w-full" : "sm:w-[calc(50%-0.5rem)]";

            return (
              <li key={step.n} className={`w-full ${smWidth} ${lgWidth}`}>
                <Reveal delay={(i % 3) * 0.05} className="h-full">
                  <article className="group relative flex h-full items-center gap-3.5 overflow-hidden rounded-xl border border-border bg-card p-3 sm:block sm:h-[17rem] sm:gap-0 sm:border-0 sm:p-0 lg:h-[19rem]">
                    <div className="relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-lg sm:absolute sm:inset-0 sm:h-full sm:w-full sm:rounded-none">
                      {step.image && (
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 sm:group-hover:scale-[1.06]"
                        />
                      )}
                      <span
                        aria-hidden="true"
                        className="absolute top-1.5 left-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[0.75rem] font-bold text-primary-foreground tabular-nums shadow-md ring-1 shadow-black/30 ring-white/60 sm:hidden"
                      >
                        {step.n}
                      </span>
                    </div>

                    <div className="absolute inset-0 hidden bg-gradient-to-t from-charcoal via-charcoal/80 via-45% to-charcoal/15 sm:block" />

                    <span
                      aria-hidden="true"
                      className="font-heading absolute top-3 left-4 hidden text-4xl text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:block lg:text-5xl"
                    >
                      {step.n}
                    </span>

                    {step.when && (
                      <span className="absolute top-3 right-3 hidden rounded-full bg-primary px-2.5 py-1 text-[0.75rem] font-bold whitespace-nowrap text-primary-foreground tabular-nums shadow-lg shadow-black/30 sm:block">
                        {step.when}
                      </span>
                    )}

                    <div className="min-w-0 flex-1 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-none sm:p-5">
                      <span
                        aria-hidden="true"
                        className="mb-3 hidden h-0.5 w-8 origin-left bg-primary transition-transform duration-500 group-hover:scale-x-[2.5] sm:block"
                      />
                      <h3 className="font-heading text-[0.85rem] leading-tight text-foreground sm:text-sm sm:leading-snug sm:text-secondary lg:text-base">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[0.8rem] leading-snug text-muted-foreground sm:hidden">
                        {step.short ?? step.detail}
                      </p>
                      <p className="mt-2 hidden text-[0.8rem] leading-relaxed text-secondary/75 sm:block lg:text-[0.85rem]">
                        {step.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* =========================== 10 · HOW IT WORKS =========================== */

/** Numbered step cards on white. Three steps → one row of three from md. */
function Process({ process }: { process: C["process"] }) {
  // Demo Bros' six steps run 2 / 3 across. Fewer steps fill one row instead of
  // leaving a lone card at sm (3 → 2 + 1).
  const count = process.steps.length;
  const grid =
    count === 3
      ? "md:grid-cols-3"
      : count === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="border-y border-border bg-card py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={process.eyebrow} title={process.title} />

        <div className={`mt-10 grid gap-4 ${grid}`}>
          {process.steps.map((step, i) => (
            <Reveal key={step.n} delay={(i % 3) * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors duration-300 hover:border-primary/50">
                {/* Ink, not Demo Bros' brand colour: yellow on white fails contrast. */}
                <span className="font-heading text-2xl text-foreground">{step.n}</span>
                <h3 className="font-heading mt-3 text-base sm:text-lg">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== 11 · BUILDERS AND DEVELOPERS ==================== */

function Builders({ builders }: { builders: C["builders"] }) {
  return (
    <section id="trade" className="scroll-mt-24 py-12 sm:py-16 lg:scroll-mt-28 lg:py-20">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{builders.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {builders.title}
            </h2>
            <p className="mt-5 text-lg font-bold text-foreground">{builders.lead}</p>
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {builders.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[0.95rem] text-foreground/85"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={2.25} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <QuoteCta />
              {hasPhone && (
                <CtaButton href={SITE.phoneHref} variant="outline" size="md" icon={false}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {SITE.phone}
                </CtaButton>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:order-first">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={builders.image.src}
              alt={builders.image.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="flex items-center gap-3 border-t border-border bg-card px-5 py-4">
              <Building2 className="h-5 w-5 shrink-0 text-foreground" strokeWidth={2} />
              <span className="text-sm font-semibold">{builders.caption}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 12 · GUARANTEE ============================ */

const GUARANTEE_ICONS: Record<GuaranteeIcon, LucideIcon> = {
  yardstick: FileCheck,
  helmet: HardHat,
  builder: ShieldCheck,
  tools: Handshake,
  tipper: ShieldCheck,
};

function Guarantee({ guarantee }: { guarantee: C["guarantee"] }) {
  return (
    <section className="bg-charcoal py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <div className={EYEBROW_ON_DARK}>
          <SectionHeading
            tone="charcoal"
            align="center"
            eyebrow={guarantee.eyebrow}
            title={guarantee.title}
            description={guarantee.description}
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {guarantee.items.map((g, i) => {
            const Icon = GUARANTEE_ICONS[g.icon] ?? ShieldCheck;
            return (
              <Reveal key={g.title} delay={(i % 2) * 0.05}>
                <article className="flex h-full gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-primary/50 sm:gap-4 sm:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base text-secondary">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/70">{g.detail}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================= 13 · REVIEWS ============================= */

/** Seconds each card spends crossing the viewport — the marquee's pace. */
const REVIEW_SECONDS_PER_CARD = 7;

function Reviews({ reviews }: { reviews: C["reviews"] }) {
  const testimonials = reviews.items;
  if (testimonials.length === 0) return null;

  const MIN_CARDS = 6;
  const copies = Math.max(2, Math.ceil(MIN_CARDS / testimonials.length));
  const half = Array.from({ length: copies }, () => testimonials).flat();
  const track = [...half, ...half];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-border bg-card py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          <GoogleRatingBadge />
          <h2 className="font-heading mt-4 max-w-2xl text-xl sm:text-2xl sm:text-balance lg:text-[1.75rem]">
            {reviews.title}
          </h2>
        </div>
      </div>

      <div className="group marquee-viewport relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-card to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-card to-transparent sm:w-24" />

        <ul
          className="animate-marquee flex w-max gap-4 group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: `${track.length * REVIEW_SECONDS_PER_CARD}s` }}
        >
          {track.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              aria-hidden={i >= testimonials.length ? true : undefined}
              className="w-[280px] shrink-0 sm:w-[360px]"
            >
              <figure className="flex h-full flex-col rounded-xl border border-border bg-background p-5 sm:p-6">
                <div aria-label={`${t.rating} out of 5 stars`} className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-[#FBBC04]"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2.5 text-sm">
                  <GoogleG className="h-4 w-4 shrink-0" />
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-wide">
        <CtaRow className="mt-10" />
      </div>
    </section>
  );
}

/* =========================== 14 · SERVICE AREA =========================== */

function ServiceArea({ serviceArea }: { serviceArea: C["serviceArea"] }) {
  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          tone="green"
          align="center"
          eyebrow={serviceArea.eyebrow}
          title={serviceArea.title}
          description={serviceArea.lede}
        />
        <Reveal delay={0.06}>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-primary-foreground/90">
            {serviceArea.body}
          </p>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            {serviceArea.tag}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================== 15 · FAQ =============================== */

function Faqs({ faqs }: { faqs: C["faqs"] }) {
  return (
    <section
      id="faqs"
      className="scroll-mt-24 border-t border-border py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide max-w-3xl">
        <SectionHeading align="center" eyebrow={faqs.eyebrow} title={faqs.title} />
        <div className="mt-8">
          <FaqList faqs={faqs.items} />
        </div>
      </div>
    </section>
  );
}

/* ============================ 16 · FINAL CTA ============================ */

function FinalCta({ finalCta }: { finalCta: C["finalCta"] }) {
  const { openQuote } = useQuoteModal();

  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="container-wide text-center">
        <h2 className="font-heading mx-auto max-w-2xl text-2xl text-primary-foreground sm:text-3xl sm:text-balance lg:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">{finalCta.lede}</p>
        <p className="mx-auto mt-3 max-w-2xl font-bold text-primary-foreground">{finalCta.body}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton variant="solidLight" size="md" onClick={openQuote}>
            {CTA_LABEL}
          </CtaButton>
          {/* `outline` (ink), not Demo Bros' `outlineLight`: white on yellow
              fails contrast. */}
          {hasPhone && (
            <CtaButton href={SITE.phoneHref} variant="outline" icon={false} size="md">
              <Phone className="mr-2 h-4 w-4" />
              Call {SITE.phone}
            </CtaButton>
          )}
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-primary-foreground/85">
          <Clock className="h-4 w-4 shrink-0" />
          {finalCta.fine}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ shared ------------------------------ */

/**
 * Repeated mid-page nudge back to the form. Two across on a phone when there is
 * a phone number to offer; with only the quote button it takes the full width.
 */
function CtaRow({ className = "" }: { className?: string }) {
  const { openQuote } = useQuoteModal();

  return (
    <div
      className={`grid ${hasPhone ? "grid-cols-2" : "grid-cols-1"} items-stretch gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 ${className}`}
    >
      <CtaButton
        size="md"
        onClick={openQuote}
        className={`${hasPhone ? "px-2.5 text-[0.78rem]" : ""} sm:px-7 sm:text-sm`}
      >
        {CTA_LABEL}
      </CtaButton>
      {hasPhone && (
        <CtaButton
          href={SITE.phoneHref}
          variant="outline"
          size="md"
          icon={false}
          className="px-2.5 text-[0.78rem] sm:px-7 sm:text-sm"
        >
          <Phone className="mr-1.5 h-4 w-4 shrink-0 sm:mr-2" />
          Call {SITE.phone}
        </CtaButton>
      )}
    </div>
  );
}

/** Single-button variant for left-aligned copy blocks. */
function QuoteCta({ className = "" }: { className?: string }) {
  const { openQuote } = useQuoteModal();

  return (
    <CtaButton size="md" className={className} onClick={openQuote}>
      {CTA_LABEL}
    </CtaButton>
  );
}
