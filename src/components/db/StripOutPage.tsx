"use client";

/**
 * Demo Bros strip-out landing page (go.demobros.com.au/strip-out), ported as a
 * layout replica in Metro's brand. Section order, markup, classes, spacing and
 * animation follow src/routes/strip-out.tsx in the Demo Bros build; only the
 * imports, the data and the colour/contrast fixes differ (Demo Bros' primary is
 * green, Metro's is yellow, so yellow text/icons on light surfaces became ink).
 *
 * Used by /strip-out, /kitchen-demolition, /bathroom-demolition and
 * /garage-shed-driveway-removal, each with its own content object
 * (src/lib/db-content/*). Header and footer come from the Metro layout; the
 * quote modal provider is already in the app layout.
 */
import { MessageSquare } from "lucide-react";
import { Keywords } from "@/components/site/Keywords";
import { BeforeAfterCard } from "@/components/db/BeforeAfterCard";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Bath,
  Building2,
  Camera,
  Check,
  Clock,
  Droplets,
  Fence,
  FileCheck,
  FileClock,
  HardHat,
  Hammer,
  House,
  Layers,
  MapPin,
  Package,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Star,
  Truck,
  Users,
  Warehouse,
  Landmark,
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
import { Unconfirmed } from "@/components/site/Unconfirmed";
import { StickyMobileCta } from "@/components/site/StickyMobileCta";
import { CTA_LABEL, CTA_SUBLINE, SITE, audiences, formCopyFor, hasPhone } from "@/lib/site-data";
import { beforeAfterFor, beforeAfterGrid } from "@/lib/before-after";
import { reviewsFor, serviceArea, stats } from "@/lib/db/placeholder-content";
import type {
  GuaranteeIcon,
  HeroPointIcon,
  StripOutContent,
} from "@/lib/db-content/strip-out-types";

export type { StripOutContent } from "@/lib/db-content/strip-out-types";

type C = { content: StripOutContent };

export function StripOutPage({ content }: C) {
  return (
    <>
      <Hero content={content} />
      <Unconfirmed note="rating, liability and 24h not confirmed">
        <TrustStats />
      </Unconfirmed>
      <BeforeAfter slug={content.slug} />
      <Unconfirmed note="prices not confirmed">
        <Price content={content} />
      </Unconfirmed>
      <ServiceRouter content={content} />
      <Audiences />
      <Process content={content} />
      <Unconfirmed note="in-house asbestos not confirmed">
        <Asbestos content={content} />
      </Unconfirmed>
      <NobodyExplains content={content} />
      <Unconfirmed note="guarantees not confirmed">
        <Guarantee content={content} />
      </Unconfirmed>
      <Unconfirmed note="sample reviews, not real">
        <Reviews content={content} />
      </Unconfirmed>
      <Unconfirmed note="service area not confirmed">
        <ServiceArea />
      </Unconfirmed>
      <Faqs content={content} />
      <FinalCta content={content} />
      <GoogleRatingSticky />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

/* ============================== 01 · HERO ============================== */

const HERO_ICONS: Record<HeroPointIcon, LucideIcon> = {
  hammer: Hammer,
  layers: Layers,
  building: Building2,
  package: Package,
  bath: Bath,
  droplets: Droplets,
  warehouse: Warehouse,
  truck: Truck,
  fence: Fence,
};

function Hero({ content }: C) {
  const { openQuote } = useQuoteModal();
  const pathname = usePathname() ?? "/";
  const form = formCopyFor(pathname);
  const { hero } = content;

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* <picture>: the browser resolves the media query before fetching, so a
          phone downloads only the phone photograph. */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={hero.imageDesktop} />
        <img
          src={hero.imageMobile}
          alt=""
          className="absolute inset-0 h-full w-full object-[60%_45%] object-cover lg:object-[50%_50%]"
        />
      </picture>

      {/* Even wash on phones; a left-to-right fade from lg, where the copy is
          in the left column only. */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/88 via-charcoal/82 to-charcoal/92 lg:bg-gradient-to-r lg:from-charcoal/92 lg:via-charcoal/70 lg:to-charcoal/40" />

      <div className="container-wide relative z-10 grid items-center gap-10 pt-22 pb-14 md:pt-30 lg:grid-cols-2 lg:gap-14 lg:pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            {/* Deep yellow + ink: same hue as the brand, AA at 11px. */}
            <span className="rounded-full bg-primary-deep px-2.5 py-1 text-[0.75rem] font-bold text-primary-foreground sm:px-3.5 sm:py-2 sm:text-xs">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading mt-5 text-[2rem] leading-[1.15] text-secondary sm:text-[2.5rem] lg:text-[3rem]"
          >
            <Keywords text={`${hero.titleTop} ${hero.titleRibbon}`} className="text-primary" />
          </motion.h1>

          {/* Hidden on phones: the points below restate it, and the button
              should sit near the fold. */}
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
                  {/* Yellow disc, ink icon. */}
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

        {/* Form card from md; below that the sticky bar opens the same form in
            the modal. */}
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
            <QuoteForm compact photos={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================== 03 · TRUST STATS =========================== */

/** Icon per stat, by position: rating (Google marks), 24h, liability, crew. */
const STAT_ICONS: LucideIcon[] = [Star, FileClock, ShieldCheck, Users];

function TrustStats() {
  return (
    <section className="border-y border-border bg-card py-12 lg:py-14">
      <div className="container-wide">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = STAT_ICONS[i] ?? Star;
            const isRating = s.unit === "★";
            const value = isRating ? s.value : `${s.value}${s.unit.length > 1 ? " " : ""}${s.unit}`;
            return (
              <div
                key={s.label}
                className="group flex flex-col items-center justify-center bg-card px-3 py-6 text-center transition-colors duration-300 hover:bg-background sm:px-4"
              >
                <dd className="font-heading text-2xl text-foreground lg:text-3xl">{value}</dd>
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
 * Same room, before and after: one composite photo per pair, before on the
 * left half, after on the right. Four pairs, one row from lg and 2×2 below
 * (Demo Bros ran three with the odd last card spanning; Metro has four).
 */
function BeforeAfter({ slug }: { slug: StripOutContent["slug"] }) {
  const beforeAfterPairs = beforeAfterFor(slug);
  if (beforeAfterPairs.length === 0) return null;

  return (
    <section className="border-b border-border py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow="Before and after"
          title="Before we start. After we leave."
        />

        <div className={`mt-10 grid gap-3 sm:gap-5 ${beforeAfterGrid(beforeAfterPairs.length)}`}>
          {beforeAfterPairs.map((pair, i) => (
            <Reveal key={pair.id} delay={(i % 4) * 0.05} className="h-full">
              <BeforeAfterCard pair={pair} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== 05 · PRICE ============================== */

function Price({ content }: C) {
  const { pricing, scope } = content;
  // Split on the data: a row either opens with a dollar sign or it does not.
  const startingPrices = pricing.table.filter((row) => row.from.startsWith("$"));
  const quotedOnJob = pricing.table.filter((row) => !row.from.startsWith("$"));

  return (
    <section id="price" className="scroll-mt-24 py-16 lg:scroll-mt-28 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.lede}
        />

        <div className="mt-10 flex flex-col-reverse items-start gap-8 sm:grid lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.05} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/5">
              {/* GROUP ONE — the real starting numbers. */}
              <div className="flex items-baseline justify-between gap-3 border-b border-border bg-primary/[0.12] px-5 py-3.5 sm:px-6">
                <h3 className="text-[0.75rem] font-bold tracking-[0.16em] text-foreground uppercase">
                  {/* COPY: from Demo Bros — needs Metro copy */}
                  Starting prices
                </h3>
                <span className="text-[0.75rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  Starts from
                </span>
              </div>

              <dl>
                {startingPrices.map((row) => (
                  <div
                    key={row.job}
                    className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 transition-colors duration-200 hover:bg-primary/[0.06] sm:px-6"
                  >
                    <dt className="text-[0.95rem] font-semibold sm:text-base">{row.job}</dt>
                    <dd className="rounded-md bg-go px-3 py-1 text-lg font-extrabold whitespace-nowrap text-white tabular-nums sm:text-xl">
                      {row.from}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* GROUP TWO — the jobs with no honest starting number. */}
              <div className="border-b border-border bg-background px-5 py-3.5 sm:px-6">
                <h3 className="text-[0.75rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  {/* COPY: from Demo Bros — needs Metro copy */}
                  Priced on the job
                </h3>
              </div>

              <ul className="grid gap-2.5 px-5 py-4 sm:px-6">
                {quotedOnJob.map((row) => (
                  <li
                    key={row.job}
                    className="flex items-start gap-2.5 text-[0.95rem] text-foreground/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2.5} />
                    {row.job}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {pricing.note}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:order-1">
            {/* Demo Bros' "What moves the price" panel, carrying Metro's
                current scope copy. */}
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h3 className="font-heading text-lg lg:text-xl">{scope.title}</h3>
              <div className="mt-5 grid gap-3.5">
                {scope.body.map((para) => (
                  <p key={para} className="text-[0.95rem] leading-relaxed text-foreground/85">
                    {para}
                  </p>
                ))}
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

/* ========================== 06 · SERVICE ROUTER ========================== */

type Service = StripOutContent["services"]["items"][number];

/** How many cards go in the wide bottom row when there are five. */
const WIDE_SERVICE_CARDS = 2;

function ServiceRouter({ content }: C) {
  const { services } = content;
  const items = services.items;

  /* Demo Bros splits five cards 3 + 2 by copy length. Any other count (Metro's
     pages have four) goes in one even grid — 2×2 on phones, four across from
     lg — so there is never a lone card in a three-column row. */
  const split = items.length === 5;
  const wideSlugs = new Set(
    [...items]
      .sort((a, b) => b.detail.length - a.detail.length)
      .slice(0, WIDE_SERVICE_CARDS)
      .map((s) => s.slug),
  );
  const compactServices = split ? items.filter((s) => !wideSlugs.has(s.slug)) : items;
  const wideServices = split ? items.filter((s) => wideSlugs.has(s.slug)) : [];
  const compactCols = split
    ? "lg:grid-cols-3"
    : items.length % 4 === 0
      ? "lg:grid-cols-4"
      : "lg:grid-cols-3";

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

        <div className={`mt-10 grid grid-cols-2 gap-3 sm:gap-4 ${compactCols}`}>
          {compactServices.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 4) * 0.05}
              className="h-full [&:nth-child(odd):last-child]:col-span-2 lg:[&:nth-child(odd):last-child]:col-span-1"
            >
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        {wideServices.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4 lg:grid-cols-2">
            {wideServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.05} className="h-full">
                <ServiceCard service={s} wide />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ service: s, wide = false }: { service: Service; wide?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors duration-300 hover:border-primary/50">
      <div className={`w-full overflow-hidden ${wide ? "h-28 sm:h-52" : "h-28 sm:h-44"}`}>
        {s.image.src && (
          <img
            src={s.image.src}
            alt={s.image.alt || s.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5 lg:p-6">
        <h3 className="font-heading text-[0.75rem] leading-snug sm:text-lg lg:text-xl">
          {s.title}
        </h3>
        {/* Description is desktop-only: at half a phone width it buries the
            title it belongs to. */}
        <p className="mt-3 hidden flex-1 text-[0.95rem] leading-relaxed text-muted-foreground sm:block sm:text-base">
          {s.detail}
        </p>
        {s.price && (
          <p className="mt-2 text-[0.75rem] font-bold tracking-[0.08em] text-foreground uppercase sm:mt-5 sm:text-sm">
            {s.price}
          </p>
        )}
      </div>
    </article>
  );
}

/* ========================= WHO WE WORK WITH ========================= */

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  home: House,
  builder: HardHat,
  developer: Building2,
  government: Landmark,
};

/**
 * Demo Bros runs four audiences as line-art images, 2-up then 4-up. Metro has
 * three, drawn with lucide line icons, so they sit in one row of three at
 * every size, with hairlines between columns (never at the row start).
 */
function Audiences() {
  return (
    <section className="border-b border-border py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <h2 className="font-heading text-center text-[1.15rem] sm:text-2xl lg:text-[1.75rem]">
          {audiences.title}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
          {audiences.body}
        </p>

        <div className="mt-8 grid grid-cols-2 sm:mt-12 sm:grid-cols-4">
          {audiences.items.map((a, i) => {
            const Icon = AUDIENCE_ICONS[a.icon] ?? Users;
            return (
              <Reveal
                key={a.label}
                delay={i * 0.06}
                className="border-border sm:border-l sm:first:border-l-0"
              >
                <div className="flex flex-col items-center gap-5 px-1 py-6 text-center sm:px-2">
                  <Icon
                    aria-hidden="true"
                    className="h-12 w-12 text-foreground opacity-85 sm:h-16 sm:w-16"
                    strokeWidth={1.25}
                  />
                  <span className="text-[0.8rem] font-extrabold sm:text-lg lg:text-xl">
                    {a.label}
                  </span>
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

/** Static class names for a row of 2, 3 or 4 tiles on the 12-column grid. */
const LG_SPAN: Record<number, string> = {
  1: "lg:col-span-12",
  2: "lg:col-span-6",
  3: "lg:col-span-4",
  4: "lg:col-span-3",
};
const LG_ODD_LAST_SPAN: Record<number, string> = {
  1: "lg:[&:nth-child(odd):last-child]:col-span-12",
  2: "lg:[&:nth-child(odd):last-child]:col-span-6",
  3: "lg:[&:nth-child(odd):last-child]:col-span-4",
  4: "lg:[&:nth-child(odd):last-child]:col-span-3",
};

/**
 * Photographic tiles on a 12-column grid. Demo Bros has seven steps, split
 * 4 + 3; Metro's pages have three, so they fill one row of three. The rows are
 * derived (up to four per row) so any count stays flush.
 */
function Process({ content }: C) {
  const { process } = content;
  const n = process.steps.length;
  const topRow = n > 4 ? Math.ceil(n / 2) : n;
  const bottomRow = Math.max(1, n - topRow);
  /* The tile that would sit alone at sm spans both columns there; at lg it
     takes the span of whichever row it ends. */
  const lastRow = n > topRow ? bottomRow : topRow;

  return (
    <section id="process" className="scroll-mt-24 py-12 sm:py-16 lg:scroll-mt-28 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={process.eyebrow} title={process.title} />

        <ol className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {process.steps.map((step, i) => (
            <li
              key={step.n}
              className={`sm:[&:nth-child(odd):last-child]:col-span-2 ${
                LG_ODD_LAST_SPAN[lastRow] ?? ""
              } ${i < topRow ? LG_SPAN[topRow] : LG_SPAN[bottomRow]}`}
            >
              <Reveal delay={(i % 4) * 0.05} className="h-full">
                <article className="group relative flex h-full items-center gap-3 overflow-hidden rounded-xl border border-border bg-card p-2.5 sm:block sm:h-[19rem] sm:border-0 sm:p-0">
                  {/* A thumbnail in the flow on a phone; the whole tile from sm. */}
                  <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg bg-charcoal sm:absolute sm:inset-0 sm:h-full sm:w-full sm:rounded-none">
                    {step.image && (
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 sm:group-hover:scale-[1.06]"
                      />
                    )}
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
                    <h3 className="text-[0.9rem] leading-snug font-bold text-foreground sm:font-heading sm:text-sm sm:leading-snug sm:text-secondary lg:text-base">
                      {step.title}
                    </h3>
                    {/* Demo Bros shows a `short` line on phones; Metro's steps
                        have one detail line, short enough for both. */}
                    <p className="mt-0.5 text-[0.8rem] leading-snug text-muted-foreground sm:hidden">
                      {step.detail}
                    </p>
                    <p className="mt-2 hidden text-[0.8rem] leading-relaxed text-secondary/75 sm:block lg:text-[0.85rem]">
                      {step.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================= 08 · ASBESTOS ============================= */

function Asbestos({ content }: C) {
  const { asbestos } = content;
  return (
    <section className="bg-charcoal py-12 sm:py-16 lg:py-20">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          {/* Metro's eyebrow defaults to ink; retinted yellow on charcoal. */}
          <p className="eyebrow [--eyebrow-color:var(--color-primary)]">{asbestos.eyebrow}</p>
          <h2 className="font-heading mt-3 text-xl text-secondary sm:text-2xl sm:text-balance lg:text-[1.75rem]">
            {asbestos.title}
          </h2>
          {asbestos.body.map((para) => (
            <p key={para} className="mt-4 leading-relaxed text-secondary/70">
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          {/* One panel, hairline-divided rows; numerals carry the order. */}
          <div className="overflow-hidden rounded-xl border border-white/12 bg-white/[0.03] lg:mt-14">
            <p className="border-b border-white/10 bg-white/[0.04] px-5 py-4 text-[0.75rem] font-bold tracking-[0.18em] text-primary uppercase sm:px-6 sm:tracking-[0.22em]">
              {/* COPY: from Demo Bros — needs Metro copy */}
              How we handle it
            </p>
            <ol>
              {asbestos.points.map((point, i) => (
                <li
                  key={point}
                  className="group flex items-baseline gap-4 border-b border-white/10 px-5 py-5 transition-colors duration-300 last:border-0 hover:bg-white/[0.05] sm:gap-5 sm:px-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading w-8 shrink-0 text-lg text-primary tabular-nums transition-colors duration-300 group-hover:text-primary/70"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed font-medium text-secondary">
                    {point}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================== 09 · THE PART NOBODY EXPLAINS ==================== */

function NobodyExplains({ content }: C) {
  const { nobodyExplains } = content;
  return (
    <section className="border-y border-border bg-card py-12 sm:py-16 lg:py-20">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">{nobodyExplains.eyebrow}</p>
            <h2 className="font-heading mt-3 text-xl sm:text-2xl sm:text-balance lg:text-[1.75rem]">
              {nobodyExplains.title}
            </h2>
            <p className="mt-5 text-lg font-bold text-foreground">{nobodyExplains.lead}</p>
            {nobodyExplains.body.map((para) => (
              <p key={para} className="mt-4 leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {nobodyExplains.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[0.95rem] text-foreground/85"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={2.25} />
                  {point}
                </li>
              ))}
            </ul>

            <QuoteCta className="mt-8" />
          </Reveal>
        </div>

        {/* Demo Bros plays a 16:9 video here (MiraVideo card); Metro has none,
            so a photograph fills the same frame. */}
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-xl bg-charcoal shadow-xl shadow-black/15">
            {nobodyExplains.image.src && (
              <img
                src={nobodyExplains.image.src}
                alt={nobodyExplains.image.alt}
                loading="lazy"
                className="aspect-video w-full bg-charcoal object-cover"
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================ 10 · GUARANTEE ============================ */

const GUARANTEE_ICONS: Record<GuaranteeIcon, LucideIcon> = {
  yardstick: FileCheck,
  builder: ShieldAlert,
  flashlight: Camera,
  tools: Users,
  helmet: ShieldCheck,
  tipper: Truck,
};

function Guarantee({ content }: C) {
  const { guarantees } = content;
  return (
    <section className="bg-charcoal py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        {/* Retints the eyebrow yellow on charcoal (Metro's default is ink). */}
        <div className="[--eyebrow-color:var(--color-primary)]">
          <SectionHeading
            tone="charcoal"
            align="center"
            eyebrow={guarantees.eyebrow}
            title={guarantees.title}
            description={guarantees.description}
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {guarantees.items.map((g, i) => {
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

/* ============================= 11 · REVIEWS ============================= */

/** Enough cards on one half of the track to outrun the widest screen. */
const MIN_MARQUEE_CARDS = 6;
/** Seconds each card spends crossing. */
const SECONDS_PER_CARD = 7;

function Reviews({ content }: C) {
  const testimonials = reviewsFor(content.slug);
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
          className="flex w-[19rem] shrink-0 flex-col rounded-xl border border-border bg-background p-5 sm:w-[23rem] sm:p-6"
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
            <MessageSquare aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground" />
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
            {content.reviewsTitle}
          </h2>
        </div>
      </div>

      {/* Full-bleed, outside the container, so the belt runs off both edges. */}
      <div
        className="marquee-viewport group mt-10 motion-reduce:overflow-x-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4rem, black calc(100% - 4rem), transparent)",
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

/* =========================== 12 · SERVICE AREA =========================== */

function ServiceArea() {
  return (
    /* Deep yellow band with ink type (the `green` heading tone retints the
       eyebrow to primary-foreground, which is ink here). */
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
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-bold text-primary-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            {/* COPY: from Demo Bros — needs Metro copy */}
            Melbourne metro and Victoria wide
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* =============================== 13 · FAQ =============================== */

function Faqs({ content }: C) {
  const { faqs } = content;
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

/* ============================ 14 · FINAL CTA ============================ */

/* COPY: from Demo Bros — needs Metro copy (Demo Bros' trust line, rebuilt from
   Metro's PLACEHOLDER trust figures). */

function FinalCta({ content }: C) {
  const { openQuote } = useQuoteModal();
  const { finalCta } = content;

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
          {/* Demo Bros uses a white button because its band is the same green
              as `solid`. On Metro's yellow band the green CTA stands out. */}
          <CtaButton size="md" onClick={openQuote}>
            {CTA_LABEL}
          </CtaButton>
          {hasPhone && (
            <CtaButton href={SITE.phoneHref} variant="outline" icon={false} size="md">
              <Phone className="mr-2 h-4 w-4" />
              Call {SITE.phone}
            </CtaButton>
          )}
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-primary-foreground/85">
          <Clock className="h-4 w-4 shrink-0" />
          {CTA_SUBLINE}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------ shared ------------------------------ */

/** Mid-page nudge back to the form. Two equal cells on a phone when there is a call button. */
function CtaRow({ className = "" }: { className?: string }) {
  const { openQuote } = useQuoteModal();

  return (
    <div
      className={`grid ${hasPhone ? "grid-cols-2" : "grid-cols-1"} items-stretch gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 ${className}`}
    >
      <CtaButton size="md" fullWidth onClick={openQuote} className="sm:w-auto">
        {CTA_LABEL}
      </CtaButton>
      {hasPhone && (
        <CtaButton
          href={SITE.phoneHref}
          variant="outline"
          size="md"
          icon={false}
          fullWidth
          className="sm:w-auto"
        >
          <Phone className="mr-2 h-4 w-4 shrink-0" />
          {/* Number only from sm: half a phone screen can't fit it on one line. */}
          <span className="sm:hidden">Call us</span>
          <span className="hidden sm:inline">Call {SITE.phone}</span>
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
