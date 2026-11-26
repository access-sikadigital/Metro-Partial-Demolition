"use client";

/**
 * Demo Bros /rubbish-removal landing page, ported as a layout replica in
 * Metro's brand with Metro's content (src/lib/db-content/rubbish-removal.ts).
 *
 * Section order follows the Demo Bros LandingPage function: Hero → TrustStrip →
 * TrustStats → BeforeAfter → Price → ServiceRouter → Audiences → Process →
 * HeavyStuff → Hoarding → Builders → Guarantee → Reviews → ServiceArea → Faqs →
 * FinalCta, plus the sticky rating badge, floating call button and sticky
 * mobile quote bar.
 *
 * Changes from the Demo Bros JSX are limited to data sources, Metro's
 * components (quote form/modal, floating contact, sticky bar), call buttons
 * gated on `hasPhone`, and colour fixes where Demo Bros' green primary would
 * become yellow text on a light background.
 */
import { beforeAfterGrid } from "@/lib/before-after";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Check,
  Clock,
  FileCheck,
  Hand,
  Handshake,
  HardHat,
  House,
  MapPin,
  MessagesSquare,
  Phone,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Weight,
  Landmark,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { useQuoteModal } from "@/components/site/QuoteModal";
import { FloatingContact } from "@/components/site/FloatingContact";
import { Unconfirmed } from "@/components/site/Unconfirmed";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { SectionHeading } from "@/components/db/SectionHeading";
import { FaqList } from "@/components/db/FaqList";
import { CtaButton } from "@/components/db/CtaButton";
import {
  GoogleG,
  GoogleRatingBadge,
  GoogleRatingSticky,
  GoogleStars,
} from "@/components/db/GoogleRating";
import { CTA_LABEL, CTA_SUBLINE, SITE, formCopyFor, hasPhone } from "@/lib/site-data";
import type { RubbishRemovalContent } from "@/lib/db-content/rubbish-types";

export type { RubbishRemovalContent };

type C = RubbishRemovalContent;

/** Retints Metro's eyebrow (ink by default) to yellow on the charcoal bands. */
const EYEBROW_ON_DARK = "[--eyebrow-color:var(--color-primary)]";

export function RubbishRemovalPage({ content }: { content: RubbishRemovalContent }) {
  return (
    <>
      <Hero hero={content.hero} />
      <Unconfirmed note="rating, liability and 24h not confirmed">
        <TrustStats stats={content.trustStats} />
      </Unconfirmed>
      <BeforeAfter data={content.beforeAfter} />
      <Unconfirmed note="prices not confirmed">
        <Price pricing={content.pricing} />
      </Unconfirmed>
      <ServiceRouter services={content.services} />
      <Audiences audiences={content.audiences} />
      <Process process={content.process} />
      <HeavyStuff heavyStuff={content.heavyStuff} />
      <Hoarding hoarding={content.hoarding} />
      <Builders builders={content.builders} />
      <Unconfirmed note="guarantees not confirmed">
        <Guarantee guarantee={content.guarantee} />
      </Unconfirmed>
      <Unconfirmed note="sample reviews, not real">
        <Reviews reviews={content.reviews} />
      </Unconfirmed>
      <Unconfirmed note="service area not confirmed">
        <ServiceArea serviceArea={content.serviceArea} />
      </Unconfirmed>
      <Faqs faqs={content.faqs} />
      <FinalCta finalCta={content.finalCta} />
      <GoogleRatingSticky />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

/* ============================== 01 · HERO ============================== */

const HERO_ICONS: Record<string, typeof House> = {
  home: House,
  site: HardHat,
  weight: Weight,
};

/**
 * Highlighted phrase with a hand-drawn underline swoosh. Demo Bros draws it
 * around the price token; Metro's H1 has no price, so it sits under the
 * ribbon phrase. It may wrap on phones (a whole phrase, not a "$99").
 */
/* The swoosh goes under the ribbon's last two words only, kept on one line,
   so it can never stretch across a wrapped line or cut through the text. */
const ribbonHead = (r: string) => r.split(" ").slice(0, -2).join(" ");
const ribbonTail = (r: string) => r.split(" ").slice(-2).join(" ");

function HandUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-primary">
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
  const pathname = usePathname() ?? "/";
  const form = formCopyFor(pathname);

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Static image, no video. Metro supplies a wide and a portrait crop. */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={hero.imageDesktop} />
        <img
          src={hero.imageMobile}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/45 via-transparent to-charcoal/30" />

      <div className="container-wide relative z-10 grid items-center gap-10 pt-28 pb-14 lg:grid-cols-2 lg:gap-14 lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading mt-5 text-[2rem] leading-[1.12] text-secondary sm:text-[2.1rem] lg:text-[2.65rem]"
          >
            {hero.titleTop}{" "}
            {ribbonHead(hero.titleRibbon) && (
              <span className="text-primary">{ribbonHead(hero.titleRibbon)} </span>
            )}
            <HandUnderline>{ribbonTail(hero.titleRibbon)}</HandUnderline>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 hidden max-w-xl text-base leading-relaxed text-secondary/85 sm:block"
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
                variant="solid"
                size="md"
                icon={false}
                className="w-full sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call {SITE.phone}
              </CtaButton>
            )}
          </motion.div>
          <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-secondary/85">
            <Check className="h-4 w-4 shrink-0 text-go" strokeWidth={3} aria-hidden="true" />
            {CTA_SUBLINE}
          </p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 grid max-w-xl gap-3.5 sm:gap-4"
          >
            {hero.points.map(({ icon, label }) => {
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

        {/* Desktop and tablet only; on phones the sticky bar opens the same
            form in the quote modal. */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden w-full scroll-mt-24 rounded-xl border border-border bg-light p-4 shadow-2xl shadow-black/10 sm:p-6 md:block lg:scroll-mt-28"
        >
          <h2 className="font-heading text-base text-light-foreground sm:text-xl">
            {form.heading}
          </h2>
          <p className="mt-1 text-[0.8rem] text-light-foreground/70 sm:mt-1.5 sm:text-sm">
            {form.prompt}
          </p>
          <div className="mt-4 sm:mt-5">
            {/* Photos stay on (Demo Bros turns them off): Metro's form prompt
                asks for a photo of the full pile. */}
            <QuoteForm compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================== 03 · TRUST STATS =========================== */

const STAT_ICONS: Record<string, typeof Star> = {
  rating: Star,
  reviews: MessagesSquare,
  turnaround: Clock,
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
            const unit = isRating || !s.unit ? "" : s.unit.length > 1 ? ` ${s.unit}` : s.unit;
            return (
              <div
                key={s.id}
                className="group flex flex-col items-center justify-center bg-card px-3 py-6 text-center transition-colors duration-300 hover:bg-background sm:px-4"
              >
                <dd className="font-heading text-2xl text-foreground lg:text-3xl">
                  {s.value}
                  {unit}
                </dd>
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
 * Each pair is one combined photo: before on the left half, after on the
 * right. All four in one row from lg, 2 × 2 below.
 */
function BeforeAfter({ data }: { data: C["beforeAfter"] }) {
  if (data.pairs.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
        />

        <div className={`mt-10 grid gap-3 sm:gap-5 ${beforeAfterGrid(data.pairs.length)}`}>
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
                  {/* Seam marking the split between the two halves. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/80"
                  />
                  <span className="absolute top-2 left-2 rounded-sm bg-charcoal/80 px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.14em] text-secondary uppercase backdrop-blur sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[0.75rem] sm:tracking-[0.18em]">
                    Before
                  </span>
                  <span className="absolute top-2 right-2 rounded-sm bg-primary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.14em] text-primary-foreground uppercase sm:top-3 sm:right-3 sm:px-2.5 sm:py-1 sm:text-[0.75rem] sm:tracking-[0.18em]">
                    After
                  </span>
                </div>
                <figcaption className="border-t border-border px-3 py-2.5 sm:px-5 sm:py-4">
                  <span className="font-heading block text-[0.8rem] leading-snug sm:text-base">
                    {pair.label}
                  </span>
                  <span className="mt-0.5 block text-[0.75rem] text-muted-foreground sm:text-sm">
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

function Price({ pricing }: { pricing: C["pricing"] }) {
  const startingPrices = pricing.table.filter((row) => row.from.startsWith("$"));
  const quotedOnJob = pricing.table.filter((row) => !row.from.startsWith("$"));

  return (
    <section
      id="prices"
      className="scroll-mt-24 border-t border-border py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.lede}
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.05} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/5">
              <div className="flex items-baseline justify-between gap-3 border-b border-border bg-primary/8 px-4 py-3.5 sm:px-6">
                <h3 className="text-[0.75rem] font-bold tracking-[0.16em] text-foreground uppercase">
                  {pricing.labels.starting}
                </h3>
                <span className="text-[0.75rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  {pricing.labels.from}
                </span>
              </div>

              <dl>
                {startingPrices.map((row) => (
                  <div
                    key={row.job}
                    className="flex items-center justify-between gap-4 border-b border-border px-4 py-3.5 transition-colors duration-200 hover:bg-primary/4 sm:px-6 sm:py-4"
                  >
                    <dt>
                      <span className="block text-[0.95rem] font-semibold sm:text-base">
                        {row.job}
                      </span>
                      <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted-foreground">
                        {row.how}
                      </span>
                    </dt>
                    <dd className="rounded-md bg-go px-3 py-1 text-lg font-extrabold whitespace-nowrap text-white tabular-nums sm:text-xl">
                      {row.from}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border-b border-border bg-background px-4 py-3.5 sm:px-6">
                <h3 className="text-[0.75rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  {pricing.labels.onJob}
                </h3>
              </div>

              <ul className="grid gap-3 px-4 py-4 sm:px-6">
                {quotedOnJob.map((row) => (
                  <li key={row.job} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2.5} />
                    <span>
                      <span className="block text-[0.95rem] font-semibold">{row.job}</span>
                      <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted-foreground">
                        {row.how}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {pricing.note}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="order-2 lg:order-1">
            <div className="rounded-xl border border-border bg-card p-5 sm:p-8">
              <h3 className="font-heading text-base sm:text-lg lg:text-xl">
                {pricing.scope.title}
              </h3>
              <ul className="mt-5 grid gap-3.5">
                {pricing.scope.body.map((para) => (
                  <li
                    key={para}
                    className="flex items-start gap-3 text-[0.95rem] text-foreground/85"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={2.25} />
                    {para}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-6">
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pricing.close}
                </p>
                <p className="mt-4 rounded-lg border border-l-4 border-primary/25 border-l-primary bg-primary/8 px-4 py-3.5 text-base leading-snug font-bold text-foreground sm:px-5 sm:py-4 sm:text-lg">
                  {pricing.closeEmphasis}
                </p>
              </div>

              <CtaRow className="mt-7 lg:justify-start" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ========================== 06 · SERVICE ROUTER ========================== */

function ServiceRouter({ services }: { services: C["services"] }) {
  // Four cards fill one row of four from lg rather than leaving 3 + 1.
  const lgCols = services.items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-border bg-card py-12 sm:py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.lede}
        />

        <div className={`mt-10 grid grid-cols-2 gap-3 sm:gap-4 ${lgCols}`}>
          {services.items.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: C["services"]["items"][number] }) {
  const anchorId = s.anchor;

  return (
    <article
      id={anchorId}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:border-primary/50 ${
        anchorId ? "scroll-mt-24 lg:scroll-mt-28" : ""
      }`}
    >
      <div className="h-28 w-full overflow-hidden sm:h-44">
        <img
          src={s.image.src}
          alt={s.image.alt || s.title}
          loading="lazy"
          style={{ objectPosition: s.imagePosition }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-6">
        <h3 className="sm:font-heading text-[0.85rem] leading-snug font-bold text-foreground sm:text-lg sm:font-normal xl:text-xl">
          <span className="sm:hidden">{s.shortTitle ?? s.title}</span>
          <span className="hidden sm:inline">{s.title}</span>
        </h3>
        <p className="mt-3 hidden flex-1 leading-relaxed text-muted-foreground sm:block sm:text-base">
          {s.detail}
        </p>
        {s.price && (
          <p className="mt-auto pt-2 text-[0.75rem] font-bold tracking-[0.08em] text-foreground uppercase sm:mt-5 sm:pt-0 sm:text-sm">
            {s.price}
          </p>
        )}
      </div>
    </article>
  );
}

/* ========================= 06b · WHO WE WORK WITH ========================= */

const AUDIENCE_ICONS: Record<string, typeof House> = {
  home: House,
  builder: HardHat,
  developer: Building2,
  government: Landmark,
};

function Audiences({ audiences }: { audiences: C["audiences"] }) {
  return (
    <section className="border-b border-border py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <h2 className="font-heading text-center text-[1.15rem] sm:text-2xl lg:text-[1.75rem]">
          {audiences.title}
        </h2>

        {/* Metro has three audiences, so one row of three on every width,
            with hairlines between columns (never before the first). */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 sm:mt-12 sm:grid-cols-4">
          {audiences.items.map((a, i) => {
            const Icon = AUDIENCE_ICONS[a.icon] ?? House;
            return (
              <Reveal
                key={a.label}
                delay={i * 0.06}
                className="border-border sm:border-l sm:first:border-l-0"
              >
                <div className="flex flex-col items-center gap-5 px-2 py-6 text-center">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.25}
                    className="h-16 w-16 text-foreground opacity-85 sm:h-20 sm:w-20"
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

/* =========================== 07 · HOW IT WORKS =========================== */

function Process({ process }: { process: C["process"] }) {
  const prefersReducedMotion = useReducedMotion();
  // Three steps fill one row of three from sm; four keep Demo Bros' 2 → 4.
  const cols = process.steps.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-border bg-card py-12 sm:py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={process.eyebrow} title={process.title} />

        <ol className={`mt-8 grid grid-cols-1 gap-2.5 sm:mt-12 sm:gap-4 lg:gap-5 ${cols}`}>
          {process.steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-full items-center gap-3 overflow-hidden rounded-xl border border-border bg-background p-2.5 sm:block sm:h-[19rem] sm:border-0 sm:p-0"
            >
              <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg sm:absolute sm:inset-0 sm:h-full sm:w-full sm:rounded-none">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 sm:group-hover:scale-[1.06]"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[0.75rem] font-bold text-primary-foreground tabular-nums shadow-md shadow-black/30 sm:hidden"
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

              <div className="min-w-0 flex-1 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-none sm:p-5">
                <span
                  aria-hidden="true"
                  className="mb-3 hidden h-0.5 w-8 origin-left bg-primary transition-transform duration-500 group-hover:scale-x-[2.5] sm:block"
                />
                <h3 className="sm:font-heading text-[0.9rem] leading-snug font-bold text-foreground sm:text-sm sm:leading-snug sm:text-secondary lg:text-base">
                  {step.title}
                </h3>
                <p className="mt-0.5 text-[0.8rem] leading-snug text-muted-foreground sm:hidden">
                  {step.short ?? step.detail}
                </p>
                <p className="mt-2 hidden text-[0.8rem] leading-relaxed text-secondary/75 sm:block lg:text-[0.85rem]">
                  {step.detail}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================ 08 · THE HEAVY STUFF ============================ */

function HeavyStuff({ heavyStuff }: { heavyStuff: C["heavyStuff"] }) {
  return (
    <section
      id="heavy"
      className={`scroll-mt-24 bg-charcoal py-12 sm:py-16 lg:scroll-mt-28 lg:py-20 ${EYEBROW_ON_DARK}`}
    >
      <div className="container-wide grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{heavyStuff.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl text-secondary sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {heavyStuff.title}
            </h2>
            <p className="mt-5 text-base font-bold text-secondary sm:text-lg">{heavyStuff.lead}</p>
            {heavyStuff.body.map((para) => (
              <p key={para} className="mt-4 hidden leading-relaxed text-secondary/70 sm:block">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {heavyStuff.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.95rem] text-secondary/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2.25} />
                  {point}
                </li>
              ))}
            </ul>

            <QuoteCta className="mt-8" />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-white/12">
            <img
              src={heavyStuff.image.src}
              alt={heavyStuff.image.alt}
              loading="lazy"
              className="aspect-[8/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= 09 · HOARDING AND DECEASED ESTATES ================= */

function Hoarding({ hoarding }: { hoarding: C["hoarding"] }) {
  return (
    <section
      id="hoarding"
      className="scroll-mt-24 border-y border-border bg-card py-12 sm:py-16 lg:scroll-mt-28 lg:py-20"
    >
      <div className="container-wide grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={0.05} className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={hoarding.image.src}
              alt={hoarding.image.alt}
              loading="lazy"
              className="aspect-[8/3] w-full object-cover sm:aspect-[4/3]"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">{hoarding.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {hoarding.title}
            </h2>
            {hoarding.body.map((para) => (
              <p key={para} className="mt-4 hidden leading-relaxed text-muted-foreground sm:block">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {hoarding.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[0.95rem] text-foreground/85"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={2.25} />
                  {point}
                </li>
              ))}
            </ul>

            {hoarding.close && (
              <p className="mt-6 leading-relaxed text-muted-foreground">{hoarding.close}</p>
            )}

            <CtaRow className="mt-7 sm:justify-start" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==================== 10 · BUILDERS AND TRADES ==================== */

function Builders({ builders }: { builders: C["builders"] }) {
  return (
    <section id="sites" className="scroll-mt-24 py-12 sm:py-16 lg:scroll-mt-28 lg:py-20">
      <div className="container-wide grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{builders.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {builders.title}
            </h2>
            <p className="mt-5 text-base font-bold text-foreground sm:text-lg">{builders.lead}</p>
            {builders.body && (
              <p className="mt-4 hidden leading-relaxed text-muted-foreground sm:block">
                {builders.body}
              </p>
            )}
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

            <CtaRow className="mt-7 sm:justify-start" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:order-first">
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={builders.image.src}
              alt={builders.image.alt}
              loading="lazy"
              className="aspect-[8/3] w-full object-cover sm:aspect-[4/3]"
            />
            <div className="flex items-center gap-3 border-t border-border bg-card px-4 py-3 sm:px-5 sm:py-4">
              <HardHat className="h-5 w-5 shrink-0 text-foreground" strokeWidth={2} />
              <span className="text-sm font-semibold">{builders.credential}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 11 · GUARANTEE ============================ */

/** Metro's icon names → the Demo Bros icon for each guarantee. */
const GUARANTEE_ICONS: Record<string, typeof FileCheck> = {
  yardstick: FileCheck,
  barrow: Hand,
  shovel: Sparkles,
  tipper: Recycle,
};

function Guarantee({ guarantee }: { guarantee: C["guarantee"] }) {
  return (
    <section className={`bg-charcoal py-12 sm:py-16 lg:py-20 ${EYEBROW_ON_DARK}`}>
      <div className="container-wide">
        <SectionHeading
          tone="charcoal"
          align="center"
          eyebrow={guarantee.eyebrow}
          title={guarantee.title}
          description={guarantee.description}
        />

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

/* ============================= 12 · REVIEWS ============================= */

/** Cards needed to fill the belt across a 1920 monitor. */
const MIN_MARQUEE_CARDS = 6;
/** Seconds each card spends crossing. */
const SECONDS_PER_CARD = 7;

function Reviews({ reviews }: { reviews: C["reviews"] }) {
  const testimonials = reviews.items;
  if (testimonials.length === 0) return null;

  const repeats = Math.max(1, Math.ceil(MIN_MARQUEE_CARDS / testimonials.length));
  const track = Array.from({ length: repeats }, () => testimonials).flat();
  const duration = `${track.length * SECONDS_PER_CARD}s`;

  /** One half of the belt. Rendered twice; the second copy is decorative. */
  const half = (hidden: boolean) => (
    <div className="flex gap-4 pr-4" aria-hidden={hidden || undefined}>
      {track.map((t, i) => (
        <figure
          key={`${t.name}-${i}`}
          className="flex w-[17rem] shrink-0 flex-col rounded-xl border border-border bg-background p-5 sm:w-[23rem] sm:p-6"
        >
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
      ))}
    </div>
  );

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

      <div
        className="marquee-viewport group mt-10 motion-reduce:overflow-x-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <div
          className="animate-marquee flex w-max group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: duration }}
        >
          {half(false)}
          {half(true)}
        </div>
      </div>

      <div className="container-wide">
        <CtaRow className="mt-10" />
      </div>
    </section>
  );
}

/* =========================== 13 · SERVICE AREA =========================== */

function ServiceArea({ serviceArea }: { serviceArea: C["serviceArea"] }) {
  return (
    <section className="bg-primary-deep py-12 sm:py-16 lg:py-20">
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
            {serviceArea.coverage}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================== 14 · FAQ =============================== */

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

/* ============================ 15 · FINAL CTA ============================ */

function FinalCta({ finalCta }: { finalCta: C["finalCta"] }) {
  const { openQuote } = useQuoteModal();

  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="container-wide text-center">
        <h2 className="font-heading mx-auto max-w-2xl text-2xl text-primary-foreground sm:text-3xl sm:text-balance lg:text-4xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">{finalCta.lede}</p>
        {finalCta.body && (
          <p className="mx-auto mt-3 max-w-2xl font-bold text-primary-foreground">
            {finalCta.body}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Metro green on the yellow band (Demo Bros uses white on its green). */}
          <CtaButton size="md" onClick={openQuote}>
            {CTA_LABEL}
          </CtaButton>
          {hasPhone && (
            /* `outline` (ink), not `outlineLight`: white fails on yellow. */
            <CtaButton href={SITE.phoneHref} variant="outline" icon={false} size="md">
              <Phone className="mr-2 h-4 w-4" />
              Call {SITE.phone}
            </CtaButton>
          )}
        </div>

        {CTA_SUBLINE && (
          <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-primary-foreground/85">
            <Clock className="h-4 w-4 shrink-0" />
            {CTA_SUBLINE}
          </p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------ shared ------------------------------ */

/** Repeated mid-page nudge back to the form. */
function CtaRow({ className = "" }: { className?: string }) {
  const { openQuote } = useQuoteModal();

  return (
    /* Two across on a phone when the call button is there; one when it is
       hidden (no verified number yet), so the quote button isn't half-width
       beside an empty cell. */
    <div
      className={`grid ${hasPhone ? "grid-cols-2" : "grid-cols-1"} items-stretch gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 ${className}`}
    >
      <CtaButton
        size="md"
        fullWidth
        onClick={openQuote}
        className="h-full px-3 text-center text-[0.8rem] leading-tight sm:w-auto sm:px-7 sm:text-sm"
      >
        {CTA_LABEL}
      </CtaButton>
      {hasPhone && (
        <CtaButton
          href={SITE.phoneHref}
          variant="outline"
          size="md"
          icon={false}
          fullWidth
          className="h-full px-3 text-center text-[0.8rem] leading-tight sm:w-auto sm:px-7 sm:text-sm"
        >
          <Phone className="mr-2 h-4 w-4 shrink-0" />
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
