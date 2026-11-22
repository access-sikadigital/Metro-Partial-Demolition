"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Phone } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { FaqList } from "./FaqList";
import { QuoteForm } from "./QuoteForm";
import { FloatingContact } from "./FloatingContact";
import { StickyMobileCta } from "./StickyMobileCta";
import { GoogleRatingBadge } from "./GoogleRating";
import { BrandIcon, Bricks, HazardBand, IconTile } from "./Brand";
import {
  Audiences,
  CtaRow,
  FinalCtaBand,
  QuoteCta,
  Reviews,
  ServiceArea,
  Stats,
  Ticker,
} from "./Sections";
import { SITE, quoteForm, reviewsFor } from "@/lib/site-data";
import type { ServicePageContent } from "@/lib/pages/types";

/**
 * One service landing page (partial demolition, strip-out, rubbish removal, …),
 * rendered from its content file. Same section line-up as the Demo Bros
 * service pages; every section either proves the offer or points back at the
 * form.
 *
 * Band rhythm, so no two neighbours share a surface:
 * ink hero → yellow ticker → paper stats → plaster services → paper price →
 * ink feature → [plaster included] → paper audiences → ink process →
 * yellow callout → [paper timeline] → ink builders → plaster guarantee →
 * ink reviews → plaster area → paper FAQ → yellow CTA → ink footer.
 */
export function ServicePage({ page }: { page: ServicePageContent }) {
  // Section numbers are counted as sections render, so optional blocks never
  // leave a gap in the 01, 02, 03… sequence.
  let n = 0;
  const next = () => String(++n).padStart(2, "0");

  return (
    <>
      <Hero page={page} />
      <Ticker />
      <Stats />
      <Services page={page} index={next()} />
      <Price page={page} index={next()} />
      <Feature page={page} index={next()} />
      {page.included && <Included page={page} index={next()} />}
      <Audiences index={next()} />
      <Process page={page} index={next()} />
      <Callout page={page} index={next()} />
      {page.timeline && <Timeline page={page} index={next()} />}
      <Builders page={page} index={next()} />
      <Guarantee page={page} index={next()} />
      <Reviews index={next()} title={page.reviewsTitle} items={reviewsFor(page.slug)} />
      <ServiceArea index={next()} />
      <Faqs page={page} index={next()} />
      <FinalCtaBand
        title={page.finalCta.title}
        lede={page.finalCta.lede}
        body={page.finalCta.body}
      />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

type SectionProps = { page: ServicePageContent; index: string };

/* ============================== HERO ============================== */

function Hero({ page }: { page: ServicePageContent }) {
  const { hero } = page;
  const reduce = useReducedMotion();
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
          <source media="(min-width: 1024px)" srcSet={hero.imageDesktop} />
          <img
            src={hero.imageMobile}
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
          <motion.p
            variants={rise}
            className="eyebrow flex items-center gap-2.5 [--eyebrow-color:var(--hivis)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping bg-hivis opacity-70" />
              )}
              <span className="relative inline-flex h-2.5 w-2.5 bg-hivis" />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-display mt-5 text-[1.85rem] leading-[1.06] sm:text-[2.7rem] lg:text-[3.05rem] xl:text-[3.5rem]"
          >
            {hero.titleTop}
            <br />
            <span className="ribbon mt-1 inline-block sm:mt-2">{hero.titleRibbon}</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.ul
            variants={rise}
            className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4"
          >
            {hero.bullets.map((b) => (
              <li key={b.label} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/[0.07] text-hivis ring-1 ring-white/10">
                  <BrandIcon name={b.icon} className="h-5 w-5" />
                </span>
                <span className="pt-1.5 text-[0.92rem] leading-snug text-paper/85">{b.label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <GoogleRatingBadge tone="dark" />
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-3 text-paper transition-colors hover:text-hivis"
            >
              <span className="chamfer flex h-11 w-11 items-center justify-center bg-hivis text-ink [--cut:9px]">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-paper/55">Rather talk it through?</span>
                <span className="font-display text-lg leading-tight">{SITE.phone}</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* The quote form, in the hero — the one action this page exists for. */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative scroll-mt-24"
        >
          <div
            aria-hidden
            className="chamfer absolute top-4 -right-2 -bottom-2 left-4 bg-hivis [--cut:30px] sm:-right-3 sm:-bottom-3"
          />
          <div className="chamfer relative bg-paper text-ink shadow-2xl shadow-black/40 [--cut:30px]">
            <div className="flex items-center justify-between gap-4 border-b border-ink/10 px-5 pt-7 pb-5 sm:px-8">
              <div>
                <p className="eyebrow [--eyebrow-color:var(--graphite)]">
                  Free · Itemised · In writing
                </p>
                <h2 className="font-display mt-2 text-xl sm:text-2xl">{quoteForm.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{quoteForm.lede}</p>
              </div>
              <IconTile name="floor-plan" className="hidden sm:inline-flex" />
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
          <Reveal className="max-w-sm lg:pb-1">
            <p className="text-muted-foreground">{s.lede}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 0.06}>
              <article className="group chamfer relative flex h-full flex-col bg-white transition-transform duration-300 [--cut:22px] hover:-translate-y-1">
                {/* Photo of the service, with the brand icon tile overlapping its
                    bottom edge so the card keeps its original identity. */}
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
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
                  <span className="font-display absolute top-3 right-3 bg-ink/75 px-2 py-1 text-xs text-hivis">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <HazardBand className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <div className="relative flex flex-1 flex-col px-6 pb-6 sm:px-7 sm:pb-7">
                  <IconTile name={item.icon} className="relative z-10 -mt-7" />
                  <h3 className="font-display mt-5 text-[1.05rem] leading-tight text-ink sm:text-[1.15rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                  <div className="mt-6 border-t border-ink/10 pt-4">
                    {item.price ? (
                      <span className="font-display text-sm text-ink">
                        <span className="ribbon">{item.price}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-bold tracking-[0.14em] text-graphite uppercase">
                        Quoted on the job
                      </span>
                    )}
                  </div>
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

/* ============================== PRICE ============================== */

function Price({ page, index }: SectionProps) {
  const p = page.pricing;
  return (
    <section id="price" className="scroll-mt-20 bg-paper py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <SectionHeading index={index} eyebrow={p.eyebrow} title={p.title} description={p.lede} />

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          {/* The price list, set like a spec sheet. */}
          <Reveal>
            <div className="chamfer bg-white ring-1 ring-ink/10 [--cut:26px]">
              <div className="flex items-center justify-between gap-4 bg-ink px-5 py-4 text-[0.7rem] font-bold tracking-[0.16em] uppercase sm:px-7">
                <span className="text-paper/70">The job</span>
                <span className="text-hivis">Starts from</span>
              </div>
              <ul>
                {p.table.map((row) => {
                  const fixed = row.from.startsWith("$");
                  return (
                    <li
                      key={row.job}
                      className="flex items-center justify-between gap-4 border-b border-ink/8 px-5 py-4 last:border-b-0 sm:px-7 sm:py-5"
                    >
                      <span className="min-w-0">
                        <span className="block font-bold text-ink">{row.job}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {row.how}
                        </span>
                      </span>
                      {fixed ? (
                        <span className="font-display shrink-0 text-lg text-ink sm:text-xl">
                          <span className="ribbon">{row.from}</span>
                        </span>
                      ) : (
                        <span className="max-w-[8.5rem] shrink-0 text-right text-xs font-bold tracking-[0.1em] text-graphite uppercase sm:max-w-none">
                          {row.from}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.note}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="chamfer relative h-full overflow-hidden bg-ink p-6 text-paper [--cut:26px] sm:p-8">
              <Bricks className="absolute -right-8 -bottom-6 h-32 w-64 text-white/[0.04]" />
              <p className="eyebrow [--eyebrow-color:var(--hivis)]">{p.factorsTitle}</p>
              <ol className="mt-6 grid gap-4">
                {p.factors.map((f, i) => (
                  <li key={f} className="flex gap-4">
                    <span className="font-display w-7 shrink-0 text-hivis">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-paper/80">{f}</span>
                  </li>
                ))}
              </ol>
              <div className="relative mt-8 border-t border-white/10 pt-6">
                <p className="text-paper/70">{p.close}</p>
                <p className="font-display mt-3 text-lg text-hivis">{p.closeEmphasis}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <CtaRow className="mt-10 lg:mt-12" />
      </div>
    </section>
  );
}

/* ============================= FEATURE ============================= */

function Feature({ page, index }: SectionProps) {
  const f = page.feature;
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-28">
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Wide shot and close detail, paired as the brand guidelines pair them. */}
        <Reveal className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div aria-hidden className="pattern-dots absolute -top-6 -left-6 h-32 w-32 opacity-60" />
          <div className="chamfer relative aspect-[4/5] overflow-hidden [--cut:40px]">
            <img
              src={f.imageMain.src}
              alt={f.imageMain.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="chamfer-br absolute -right-3 -bottom-8 w-[52%] overflow-hidden border-4 border-ink [--cut:24px] sm:-right-8">
            <img
              src={f.imageDetail.src}
              alt={f.imageDetail.alt}
              loading="lazy"
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <span className="font-display absolute top-5 -right-2 bg-hivis px-3 py-1.5 text-xs text-ink sm:-right-5">
            {f.tag}
          </span>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading index={index} tone="dark" eyebrow={f.eyebrow} title={f.title} />
          <Reveal>
            <p className="mt-6 text-lg font-semibold text-hivis">{f.lead}</p>
            {f.body.map((para) => (
              <p key={para} className="mt-4 leading-relaxed text-paper/70">
                {para}
              </p>
            ))}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {f.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-3 bg-white/[0.04] p-4 ring-1 ring-white/10"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-hivis text-ink">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-paper/85">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================ INCLUDED ============================ */

function Included({ page, index }: SectionProps) {
  const inc = page.included!;
  return (
    <section className="bg-plaster py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <SectionHeading
          index={index}
          eyebrow={inc.eyebrow}
          title={inc.title}
          description={inc.lede}
        />

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {inc.groups.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 0.07}>
              <div className="h-full bg-white">
                <div className="flex items-center justify-between gap-3 bg-ink px-5 py-4 sm:px-6">
                  <h3 className="font-display text-[0.95rem] text-paper">{g.label}</h3>
                  <span className="font-display text-sm text-hivis">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                </div>
                <HazardBand className="h-1.5" />
                <ul className="divide-y divide-ink/8 px-5 sm:px-6">
                  {g.items.map((it) => (
                    <li key={it.item} className="flex items-start gap-3 py-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-hivis text-ink">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span>
                        <span className="block font-bold text-ink">{it.item}</span>
                        <span className="mt-0.5 block text-sm text-muted-foreground">
                          {it.means}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-4xl border-l-4 border-hivis bg-white/70 py-4 pr-4 pl-5 leading-relaxed text-ink/80">
            {inc.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= PROCESS ============================= */

function Process({ page, index }: SectionProps) {
  const p = page.process;
  // Four steps sit in a 2×2 / 4-across grid; six in 3-across.
  const cols =
    p.steps.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24"
    >
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <BrandIcon
        name="excavator"
        className="pointer-events-none absolute -top-10 -right-16 h-80 w-80 text-white/[0.03] sm:h-[28rem] sm:w-[28rem]"
      />
      <div className="container-wide relative">
        <SectionHeading index={index} tone="dark" eyebrow={p.eyebrow} title={p.title} />

        <div role="list" className={`mt-10 grid gap-px bg-white/10 lg:mt-14 ${cols}`}>
          {p.steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.06} className="bg-ink">
              <div
                role="listitem"
                className="group relative h-full p-6 transition-colors duration-300 hover:bg-white/[0.03] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-5xl leading-none text-transparent [-webkit-text-stroke:1.5px_var(--hivis)] transition-colors duration-300 group-hover:text-hivis sm:text-6xl">
                    {s.n}
                  </span>
                  <IconTile name={s.icon} className="h-12 w-12" iconClassName="h-7 w-7" />
                </div>
                <h3 className="font-display mt-7 text-[1.05rem] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/65">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <CtaRow tone="dark" className="mt-10 lg:mt-12" />
      </div>
    </section>
  );
}

/* ============================= CALLOUT ============================= */

function Callout({ page, index }: SectionProps) {
  const c = page.callout;
  return (
    <section className="relative overflow-hidden bg-hivis py-16 text-ink sm:py-20 lg:py-24">
      <Bricks className="absolute right-0 bottom-0 h-40 w-80 text-ink/[0.07] sm:h-56 sm:w-[28rem]" />
      <div
        aria-hidden
        className="pattern-dots absolute top-0 left-0 h-28 w-40 opacity-25 [--dot-color:var(--ink)]"
      />
      <div className="container-wide relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading index={index} tone="yellow" eyebrow={c.eyebrow} title={c.title} />
          <Reveal>
            {c.body.map((para, i) => (
              <p
                key={para}
                className={`mt-4 leading-relaxed ${
                  i === c.body.length - 1 ? "font-bold text-ink" : "text-ink/80"
                }`}
              >
                {para}
              </p>
            ))}
          </Reveal>
        </div>

        {/* A sequence, so it's numbered. */}
        <div role="list" className="grid content-center gap-3">
          {c.points.map((pt, i) => (
            <Reveal key={pt} delay={i * 0.08}>
              <div
                role="listitem"
                className="chamfer flex items-center gap-5 bg-ink p-5 text-paper [--cut:16px] sm:p-6"
              >
                <span className="font-display text-3xl text-hivis">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug font-semibold">{pt}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================= TIMELINE ============================= */

function Timeline({ page, index }: SectionProps) {
  const t = page.timeline!;
  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <SectionHeading index={index} eyebrow={t.eyebrow} title={t.title} description={t.lede} />

        {/* A programme bar: hazard rule along the top, one column per stage. */}
        <div role="list" className="relative mt-10 grid gap-0 lg:mt-14 lg:grid-cols-5">
          <HazardBand className="absolute inset-x-0 top-0 hidden h-2 lg:block" />
          {t.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div
                role="listitem"
                className="relative border-l-2 border-ink/15 pb-8 pl-6 lg:border-l-0 lg:pt-10 lg:pr-6 lg:pb-0 lg:pl-0"
              >
                <span className="absolute top-0 -left-[7px] h-3 w-3 bg-hivis ring-4 ring-paper lg:top-[-2px] lg:left-0 lg:h-6 lg:w-6 lg:ring-0 lg:bg-ink" />
                <p className="font-display text-sm text-ink/35">{s.n}</p>
                <h3 className="font-display mt-2 text-[1.05rem] leading-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2">
                  <span className="font-display text-sm text-ink">
                    <span className="ribbon">{s.when}</span>
                  </span>
                </p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-4xl border-l-4 border-hivis bg-plaster py-4 pr-4 pl-5 leading-relaxed text-ink/80">
            {t.close}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================= BUILDERS ============================= */

function Builders({ page, index }: SectionProps) {
  const b = page.builders;
  return (
    <section className="bg-ink text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[17rem] overflow-hidden sm:min-h-[24rem]">
          <img
            src={b.image.src}
            alt={b.image.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/30" />
        </div>
        <div className="relative px-4 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div aria-hidden className="pattern-dots absolute top-0 right-0 h-28 w-36 opacity-30" />
          <SectionHeading index={index} tone="dark" eyebrow={b.eyebrow} title={b.title} />
          <Reveal>
            <p className="mt-5 leading-relaxed text-paper/70">{b.lead}</p>
            <ul className="mt-7 grid gap-3.5">
              {b.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-hivis" />
                  <span className="text-[0.95rem] leading-relaxed text-paper/85">{pt}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <QuoteCta label="Send us the job" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================= GUARANTEE ============================= */

function Guarantee({ page, index }: SectionProps) {
  const g = page.guarantees;
  return (
    <section className="bg-plaster py-16 sm:py-20 lg:py-24">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <SectionHeading
            index={index}
            eyebrow={g.eyebrow}
            title={g.title}
            description={g.description}
          />
          <Reveal className="mt-8 hidden lg:block">
            <div className="chamfer relative aspect-[4/3] overflow-hidden [--cut:30px]">
              <img
                src={g.image.src}
                alt={g.image.alt}
                loading="lazy"
                className="h-full w-full object-cover object-[50%_30%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {g.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.07}>
              <div className="chamfer flex h-full flex-col bg-white p-6 [--cut:22px] sm:p-7">
                <IconTile name={item.icon} />
                <h3 className="font-display mt-6 text-[1.02rem] leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================ FAQ ================================ */

function Faqs({ page, index }: SectionProps) {
  const f = page.faqs;
  return (
    <section id="faqs" className="scroll-mt-20 bg-paper py-16 sm:py-20 lg:py-24">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading index={index} eyebrow={f.eyebrow} title={f.title} />
          <Reveal>
            <div className="chamfer mt-8 bg-ink p-6 text-paper [--cut:20px]">
              <p className="font-display text-base">Still got a question?</p>
              <p className="mt-2 text-sm text-paper/65">
                Call and ask. You’ll get a straight answer from the people who’d do the job.
              </p>
              <a
                href={SITE.phoneHref}
                className="font-display mt-4 inline-flex items-center gap-2 text-xl text-hivis hover:underline"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
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
