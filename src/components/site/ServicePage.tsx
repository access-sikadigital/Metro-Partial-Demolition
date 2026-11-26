"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, Check } from "lucide-react";

import { CtaButton } from "./CtaButton";
import { useQuoteModal } from "./QuoteModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { FaqList } from "./FaqList";
import { QuoteForm } from "./QuoteForm";
import { FloatingContact } from "./FloatingContact";
import { GoogleRatingSticky } from "./GoogleRatingSticky";
import { StickyMobileCta } from "./StickyMobileCta";
import { Bricks, HazardBand, IconTile } from "./Brand";
import { BeforeAfter, CtaRow, FinalCtaBand, QuoteCta } from "./Sections";
import { GoogleRatingPill, hasGoogleRating } from "./GoogleRating";
import { CTA_LABEL, CTA_SUBLINE, SITE, formCopyFor, hasPhone } from "@/lib/site-data";
import type { ServicePageContent } from "@/lib/pages/types";
import { cn } from "@/lib/utils";

/**
 * One service landing page (partial demolition, strip-out, rubbish removal, …),
 * rendered from its content file in the copy deck's order: hero with the quote
 * form, services, scope, process, FAQs, closing call to action.
 *
 * Band rhythm, so no two neighbours share a surface:
 * ink hero → plaster services → yellow scope → paper process → paper FAQ
 * (bordered) → ink CTA → ink footer.
 */
export function ServicePage({ page }: { page: ServicePageContent }) {
  // Section numbers are counted as sections render, so they never leave a gap.
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <>
      <PageHero {...page.hero} />
      <BeforeAfter />
      <Services page={page} index={next()} />
      <Scope page={page} index={next()} />
      <Process page={page} index={next()} />
      <Faqs page={page} index={next()} />
      <FinalCtaBand eyebrow={CTA_LABEL} title={page.finalCta.title} lede={page.finalCta.lede} />
      <FloatingContact />
      <GoogleRatingSticky />
      <StickyMobileCta />
    </>
  );
}

type SectionProps = { page: ServicePageContent; index: string };

/**
 * Holds the space of a photo that hasn't been supplied yet (its path resolved
 * to "" at build time — see lib/pages/images.server.ts). Designed to read as
 * a deliberate brand panel, not a broken image, so a page can go out before
 * every photo is in.
 */
function PhotoSlot({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div aria-hidden className={cn("relative overflow-hidden bg-[#202020]", className)}>
      <div className="pattern-grid absolute inset-0 opacity-70" />
      <Camera
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-paper/15",
          compact ? "h-6 w-6" : "h-10 w-10",
        )}
        strokeWidth={1.5}
      />
    </div>
  );
}

/* ============================== HERO ============================== */

/**
 * The dark hero with the quote form beside it, shared by the service pages,
 * the home page and /contact. The form's heading and prompt come from
 * FORM_COPY for the current path, the same words the quote modal shows.
 */
export function PageHero({
  eyebrow,
  titleTop,
  titleRibbon,
  sub,
  points,
  imageDesktop,
  imageMobile,
  secondary,
  formOnMobile = false,
  formHeadingAs = "h2",
}: {
  eyebrow: string;
  titleTop: string;
  titleRibbon: string;
  sub: string;
  points?: string[];
  imageDesktop: string;
  imageMobile: string;
  /** A second, quieter button, e.g. "Explore services" → "#services". */
  secondary?: { label: string; href: string };
  /** Show the form on phones too, instead of opening it in the quote modal. */
  formOnMobile?: boolean;
  /** "p" where the form heading would break the page's heading order. */
  formHeadingAs?: "h2" | "p";
}) {
  const reduce = useReducedMotion();
  const { openQuote } = useQuoteModal();
  const pathname = usePathname() ?? "/";
  const form = formCopyFor(pathname);
  const FormHeading = formHeadingAs;
  const group = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* Two photographs, not one cropped twice: a wide shot for desktop, a
          portrait one that survives a phone's tall narrow crop. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageDesktop} />
          <img
            src={imageMobile}
            alt=""
            className="animate-slow-zoom h-full w-full object-cover opacity-75 grayscale-[15%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink/95 lg:bg-gradient-to-r lg:from-ink/95 lg:from-0% lg:via-ink/90 lg:via-45% lg:to-ink/20 lg:to-100%" />
        <div className="pattern-grid absolute inset-0" />
        <div className="pattern-dots absolute bottom-0 left-0 h-40 w-48 opacity-25 sm:h-56 sm:w-72" />
      </div>

      <div className="container-wide relative grid gap-10 pt-24 pb-14 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14 lg:pt-36 lg:pb-24">
        <motion.div variants={group} initial="hidden" animate="show">
          {/* Real Google rating first, above the eyebrow (Demo Bros). Hidden
              until TRUST holds Metro's verified figures. */}
          {hasGoogleRating && (
            <motion.div variants={rise} className="mb-5">
              <GoogleRatingPill />
            </motion.div>
          )}
          <motion.p
            variants={rise}
            className="eyebrow flex items-center gap-2.5 [--eyebrow-color:var(--hivis)]"
          >
            {/* Green so the live dot stands out against the yellow eyebrow (John, 26 Nov). */}
            <span className="relative flex h-3 w-3">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-go opacity-80" />
              )}
              <span className="relative inline-flex h-3 w-3 rounded-full bg-go" />
            </span>
            {eyebrow}
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-display mt-5 text-[1.85rem] leading-[1.06] sm:text-[2.7rem] lg:text-[3.05rem] xl:text-[3.5rem]"
          >
            {titleTop} <br />
            <span className="ribbon mt-1 inline-block sm:mt-2">{titleRibbon}</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
          >
            {sub}
          </motion.p>

          {/* What this page covers, by name, so someone who searched for one
              of these sees at a glance they've landed in the right place. */}
          {points?.length ? (
            <motion.ul
              variants={rise}
              aria-label="What we do"
              className="mt-7 grid gap-x-6 gap-y-2.5 sm:grid-cols-2"
            >
              {points.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-hivis text-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] leading-snug font-semibold text-paper">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          ) : null}

          {/* Phones: the quote button opens the form in a sheet (the Demo Bros
              pattern), or jumps to it where the form shows on phones too. */}
          <motion.div
            variants={rise}
            className={cn(
              "mt-8 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center",
              !secondary && !hasPhone && "lg:hidden",
            )}
          >
            <span className="contents lg:hidden">
              {formOnMobile ? (
                <CtaButton href="#quote-form" fullWidth>
                  {CTA_LABEL}
                </CtaButton>
              ) : (
                <CtaButton onClick={openQuote} fullWidth>
                  {CTA_LABEL}
                </CtaButton>
              )}
            </span>
            {secondary && (
              <CtaButton href={secondary.href} variant="white" fullWidth className="lg:w-auto">
                {secondary.label}
              </CtaButton>
            )}
            {hasPhone && (
              <CtaButton
                href={SITE.phoneHref}
                variant="primary"
                icon="phone"
                fullWidth
                className="lg:w-auto"
              >
                Call Metro
              </CtaButton>
            )}
          </motion.div>
          <motion.p
            variants={rise}
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-paper/85"
          >
            <Check className="h-4 w-4 shrink-0 text-go" strokeWidth={3} aria-hidden="true" />
            {CTA_SUBLINE}
          </motion.p>
        </motion.div>

        {/* The quote form, in the hero — the one action this page exists for. */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn("relative scroll-mt-24", formOnMobile ? "block" : "hidden lg:block")}
        >
          <div
            aria-hidden
            className="chamfer absolute top-4 -right-2 -bottom-2 left-4 bg-hivis [--cut:30px] sm:-right-3 sm:-bottom-3"
          />
          <div className="chamfer relative bg-paper text-ink shadow-2xl shadow-black/40 [--cut:30px]">
            <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 pt-7 pb-5 sm:px-8">
              <div>
                <p className="eyebrow [--eyebrow-color:var(--graphite)]">{CTA_LABEL}</p>
                <FormHeading className="font-display mt-2 text-xl sm:text-2xl">
                  {form.heading}
                </FormHeading>
                <p className="mt-1.5 text-sm text-muted-foreground">{form.prompt}</p>
              </div>
              <IconTile name="floor-plan" className="hidden shrink-0 sm:inline-flex" />
            </div>
            <div className="px-5 pt-5 pb-6 sm:px-8 sm:pb-8">
              <QuoteForm compact />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================= SERVICES ============================= */

function Services({ page, index }: SectionProps) {
  const s = page.services;
  return (
    <section id="services" className="scroll-mt-20 bg-plaster py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={index} eyebrow={s.eyebrow} title={s.title} />
        </div>

        {/* Two up on phones (photo and title — the paragraph waits for
            tablet), as on Demo Bros, so the cards don't fill five screens. */}
        {/* Four cards → a 2 × 2 grid on every width; other counts fill rows of three. */}
        <div
          className={cn(
            "mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:mt-14",
            s.items.length === 4 ? "lg:gap-6" : "lg:grid-cols-3",
          )}
        >
          {s.items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <article className="group chamfer relative flex h-full flex-col bg-white transition-transform duration-300 [--cut:14px] hover:-translate-y-1 sm:[--cut:22px]">
                {/* Photo of the service, with the brand icon tile overlapping its
                    bottom edge so the card keeps its original identity. */}
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[3/2]",
                    s.items.length === 4 && "lg:aspect-[16/9]",
                  )}
                >
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    aria-hidden={item.image.alt ? undefined : true}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/45 to-transparent"
                  />
                  <span className="font-display absolute top-2 right-2 bg-ink/75 px-1.5 py-0.5 text-[0.75rem] text-hivis sm:top-3 sm:right-3 sm:px-2 sm:py-1 sm:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <HazardBand className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <div className="relative flex flex-1 flex-col px-3.5 pb-4 sm:px-7 sm:pb-7">
                  <IconTile
                    name={item.icon}
                    className="relative z-10 -mt-5 h-10 w-10 [--cut:9px] sm:-mt-7 sm:h-14 sm:w-14 sm:[--cut:12px]"
                    iconClassName="h-6 w-6 sm:h-8 sm:w-8"
                  />
                  <h3 className="font-display mt-3 text-[0.82rem] leading-tight text-ink sm:mt-5 sm:text-[1.15rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 hidden flex-1 pb-1 text-[0.95rem] leading-relaxed text-muted-foreground sm:block">
                    {item.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <CtaRow className="mt-10 lg:mt-12" />
      </div>
    </section>
  );
}

/* =============================== SCOPE =============================== */

/** What the quote covers and what moves the price — the yellow band. */
function Scope({ page, index }: SectionProps) {
  const c = page.scope;
  return (
    <section className="relative overflow-hidden bg-hivis py-16 text-ink sm:py-20 lg:py-24">
      <Bricks className="absolute right-0 bottom-0 h-40 w-80 text-ink/[0.07] sm:h-56 sm:w-[28rem]" />
      <div
        aria-hidden
        className="pattern-dots absolute top-0 left-0 h-28 w-40 opacity-25 [--dot-color:var(--ink)]"
      />
      <div className="container-wide relative">
        <SectionHeading index={index} tone="yellow" eyebrow={c.eyebrow} title={c.title} />
        <Reveal>
          {c.body.map((para) => (
            <p key={para} className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/85">
              {para}
            </p>
          ))}
          <div className="mt-8">
            <QuoteCta variant="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= PROCESS ============================= */

/**
 * Photo cards, laid out like the Demo Bros "seven steps" section: up to four on
 * the first row, the rest filling the second. On phones each step is a compact
 * row with a thumbnail instead (Demo Bros again) — seven full-height photo
 * cards stacked one under another ran to more than two screens.
 *
 * Each step's photo is resolved at build time; a step whose photo hasn't been
 * supplied yet shows the branded PhotoSlot in the same space.
 */
function Process({ page, index }: SectionProps) {
  const p = page.process;
  const n = p.steps.length;
  const firstRow = n <= 4 ? n : Math.ceil(n / 2);
  const span = (i: number) => {
    const perRow = i < firstRow ? firstRow : n - firstRow;
    return (
      (
        {
          1: "lg:col-span-12",
          2: "lg:col-span-6",
          3: "lg:col-span-4",
          4: "lg:col-span-3",
        } as Record<number, string>
      )[perRow] ?? "lg:col-span-3"
    );
  };
  return (
    <section
      id="process"
      className="relative scroll-mt-20 bg-paper py-16 text-ink sm:py-20 lg:py-24"
    >
      <div className="container-wide relative">
        <SectionHeading index={index} eyebrow={p.eyebrow} title={p.title} align="center" />

        {/* Phones: compact rows. */}
        <div role="list" className="mt-8 grid gap-2.5 sm:hidden">
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={Math.min(i, 3) * 0.04}>
              <div
                role="listitem"
                className="chamfer flex items-center gap-3.5 bg-white p-2.5 ring-1 ring-ink/10 [--cut:12px]"
              >
                <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden bg-ink">
                  {s.image ? (
                    <img
                      src={s.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <PhotoSlot compact className="h-full w-full" />
                  )}
                  <span className="font-display absolute top-0 left-0 bg-hivis px-1.5 py-0.5 text-[0.75rem] text-ink">
                    {s.n}
                  </span>
                </div>
                <div className="min-w-0 py-1 pr-1">
                  <h3 className="font-display text-[0.88rem] leading-tight text-ink">{s.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[0.82rem] leading-snug text-muted-foreground">
                    {s.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tablet and up: the photo cards. */}
        <div
          role="list"
          className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:mt-14 lg:grid-cols-12"
        >
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.06} className={span(i)}>
              <div
                role="listitem"
                className="group relative flex h-full min-h-[17rem] flex-col justify-end overflow-hidden rounded-lg bg-ink p-6 text-paper sm:min-h-[19rem]"
              >
                {s.image ? (
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <PhotoSlot className="absolute inset-0" />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20"
                />
                <span className="font-display absolute top-4 left-5 text-5xl leading-none text-hivis sm:text-6xl">
                  {s.n}
                </span>
                <div className="relative">
                  <span aria-hidden className="block h-0.5 w-8 bg-hivis" />
                  <h3 className="font-display mt-3 text-[1.05rem] leading-tight">{s.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-paper/80">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <CtaRow tone="light" className="mt-10 justify-center lg:mt-12" />
      </div>
    </section>
  );
}

/* ================================ FAQ ================================ */

function Faqs({ page, index }: SectionProps) {
  const f = page.faqs;
  return (
    <section
      id="faqs"
      className="scroll-mt-20 border-b border-ink/10 bg-paper py-16 sm:py-20 lg:py-24"
    >
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index={index} eyebrow={f.eyebrow} title={f.title} />
          <Reveal>
            <div className="chamfer mt-8 bg-ink p-6 text-paper [--cut:20px]">
              <p className="font-display text-base">Still got a question?</p>
              <p className="mt-2 text-sm text-paper/65">
                Add it to your job details when you request a quote, and we’ll answer it when we get
                in touch.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <QuoteCta />
                {hasPhone && (
                  <CtaButton href={SITE.phoneHref} variant="outlineLight" icon="phone">
                    Call Metro
                  </CtaButton>
                )}
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <FaqList faqs={f.items} />
        </Reveal>
      </div>
    </section>
  );
}
