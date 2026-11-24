"use client";

/**
 * VERSION 2 service page (branch v2/demobros-layout, preview only).
 *
 * Section-for-section the Demo Bros service-page layout
 * (go.demobros.com.au/house-demolition, /strip-out, /rubbish-removal) in
 * Metro's brand: hi-vis yellow where Demo Bros uses green. Copy-file text comes
 * from `page.base`; the extra Demo Bros sections from src/lib/pages/v2.ts.
 */

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  Check,
  FileText,
  HardHat,
  House,
  KeyRound,
  MapPin,
  MessagesSquare,
  Paintbrush,
  Store,
  Wrench,
} from "lucide-react";

import { CtaButton } from "./CtaButton";
import { FaqList } from "./FaqList";
import { FloatingContact } from "./FloatingContact";
import { GoogleRatingSticky } from "./GoogleRatingSticky";
import { QuoteForm } from "./QuoteForm";
import { useQuoteModal } from "./QuoteModal";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { StickyMobileCta } from "./StickyMobileCta";
import { CTA_LABEL, SITE, formCopyFor, hasPhone } from "@/lib/site-data";
import type { V2Page, V2Section } from "@/lib/pages/v2";

const ICONS: Record<string, typeof House> = {
  home: House,
  builder: HardHat,
  renovator: Paintbrush,
  fitout: Building2,
  office: Store,
  estate: KeyRound,
  map: MapPin,
  tools: Wrench,
  file: FileText,
  camera: Camera,
  calendar: Calendar,
  keep: KeyRound,
  message: MessagesSquare,
  briefcase: Briefcase,
};
const icon = (name: string) => ICONS[name] ?? Check;

export function V2ServicePage({ page, path }: { page: V2Page; path: string }) {
  const SECTIONS: Record<V2Section, () => ReactNode> = {
    strip: () => <Strip page={page} />,
    stats: () => <Stats page={page} />,
    beforeAfter: () => <BeforeAfter page={page} />,
    services: () => <Services page={page} />,
    price: () => <Price page={page} />,
    audiences: () => <Audiences page={page} />,
    timeline: () => <Timeline page={page} />,
    included: () => <Included page={page} />,
    compare: () => <Compare page={page} />,
    process: () => <Process page={page} />,
    feature: () => <Feature f={page.feature} dark />,
    feature2: () => (page.feature2 ? <Feature f={page.feature2} /> : null),
    builders: () => <Builders page={page} />,
    guarantee: () => <Guarantee page={page} />,
    reviews: () => <Reviews />,
    area: () => <Area page={page} />,
    faqs: () => <Faqs page={page} />,
  };
  return (
    <>
      <Hero page={page} path={path} />
      {page.order.map((s) => (
        <div key={s} className="contents">
          {SECTIONS[s]()}
        </div>
      ))}
      <FinalCta page={page} />
      <GoogleRatingSticky />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

type P = { page: V2Page };

/* ------------------------------ shared bits ------------------------------ */

function HandUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline text-hivis">
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

function CtaRow({ className = "" }: { className?: string }) {
  const { openQuote } = useQuoteModal();
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}>
      <CtaButton size="md" onClick={openQuote}>
        {CTA_LABEL}
      </CtaButton>
      {hasPhone && (
        <CtaButton href={SITE.phoneHref} variant="outlineDark" size="md" icon="phone">
          Call Metro
        </CtaButton>
      )}
    </div>
  );
}

function QuoteCta({ className = "" }: { className?: string }) {
  const { openQuote } = useQuoteModal();
  return (
    <CtaButton size="md" className={className} onClick={openQuote}>
      {CTA_LABEL}
    </CtaButton>
  );
}

/** Branded panel standing in for a photo Metro hasn't supplied yet. */
function PhotoToCome({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-[#202020] text-paper/45">
      <div className="pattern-grid absolute inset-0 opacity-60" aria-hidden />
      <Camera className="relative h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.5} aria-hidden />
      <span className="relative text-[0.6rem] font-bold tracking-[0.14em] uppercase sm:text-[0.7rem]">
        {label}
      </span>
    </div>
  );
}

/* ================================== HERO ================================== */

function Hero({ page, path }: P & { path: string }) {
  const { openQuote } = useQuoteModal();
  const h = page.base.hero;
  const form = formCopyFor(path);
  const title = `${h.titleTop} ${h.titleRibbon}`;
  const at = title.indexOf(page.mark);
  const before = at >= 0 ? title.slice(0, at) : title;
  const after = at >= 0 ? title.slice(at + page.mark.length) : "";
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="top" className="relative overflow-hidden bg-ink">
      <picture>
        <source media="(max-width: 767px)" srcSet={h.imageMobile} />
        <img src={h.imageDesktop} alt="" className="absolute inset-0 h-full w-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/88 via-ink/80 to-ink/88 md:bg-gradient-to-r md:from-ink/92 md:via-ink/72 md:to-ink/45" />

      <div className="container-wide relative z-10 grid items-center gap-10 pt-28 pb-14 lg:grid-cols-2 lg:gap-14 lg:pb-20">
        <div>
          <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-hivis px-3 py-1 text-[0.7rem] font-bold text-ink sm:py-1.5 sm:text-xs">
              {h.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.05)}
            className="font-display mt-5 text-[1.75rem] leading-[1.13] text-paper sm:text-[2rem] lg:text-[2.5rem]"
          >
            {before}
            {at >= 0 && <HandUnderline>{page.mark}</HandUnderline>}
            {after}
          </motion.h1>

          <motion.p
            {...rise(0.1)}
            className="mt-6 hidden max-w-xl text-base leading-relaxed text-paper/85 md:block"
          >
            {h.sub}
          </motion.p>

          <motion.div
            {...rise(0.15)}
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
                icon="phone"
                className="w-full sm:w-auto"
              >
                Call Metro
              </CtaButton>
            )}
          </motion.div>

          <motion.ul {...rise(0.2)} className="mt-8 grid max-w-xl gap-3.5 sm:gap-4">
            {h.points.map((label) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hivis text-ink shadow-lg shadow-black/25 sm:h-11 sm:w-11">
                  <Check className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2.5} />
                </span>
                <span className="text-[0.9rem] leading-snug font-bold text-paper sm:text-[0.95rem]">
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          id="quote-form"
          {...rise(0.1)}
          className="hidden w-full scroll-mt-24 rounded-xl border border-ink/10 bg-paper p-5 shadow-2xl shadow-black/10 sm:p-6 md:block lg:scroll-mt-28"
        >
          <h2 className="font-display text-xl text-ink">{form.heading}</h2>
          <p className="mt-1.5 text-sm text-ink/70">{form.prompt}</p>
          <div className="mt-5">
            <QuoteForm compact photos={false} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== STRIP + STATS ============================== */

function Strip({ page }: P) {
  return (
    <section aria-label="What this page covers" className="bg-hivis py-4 lg:py-6">
      <div className="container-wide">
        <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-center sm:gap-x-6 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-10">
          {page.strip.map((c) => (
            <li
              key={c}
              className="text-[0.9rem] leading-snug font-bold text-ink sm:text-base lg:text-xl"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stats({ page }: P) {
  return (
    <section className="border-y border-ink/10 bg-white py-12 lg:py-14">
      <div className="container-wide">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {page.stats.map((s) => {
            const Icon = icon(s.icon);
            return (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center bg-white px-3 py-6 text-center transition-colors duration-300 hover:bg-plaster sm:px-4"
              >
                <dd className="font-display text-xl text-ink lg:text-2xl">{s.value}</dd>
                <dt className="mt-2.5 flex flex-col items-center gap-1.5 text-[0.8rem] leading-tight font-medium text-muted-foreground sm:flex-row sm:gap-2 sm:text-sm">
                  <Icon className="h-5 w-5 shrink-0 text-hivis-deep" strokeWidth={2} />
                  {s.label}
                </dt>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/* ============================== BEFORE / AFTER ============================== */

function BeforeAfter({ page }: P) {
  const b = page.beforeAfter;
  return (
    <section className="bg-paper py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={b.eyebrow} title={b.title} />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {b.pairs.map((pair, i) => {
            const oddLast = b.pairs.length % 2 === 1 && i === b.pairs.length - 1;
            return (
              <Reveal
                key={pair.label}
                delay={(i % 3) * 0.05}
                className={oddLast ? "col-span-2 lg:col-span-1" : ""}
              >
                <figure className="h-full overflow-hidden rounded-xl border border-ink/10 bg-white">
                  <div
                    className={`relative grid grid-cols-2 gap-0.5 bg-hivis ${
                      oddLast ? "aspect-[15/7] lg:aspect-[3/2]" : "aspect-[3/2]"
                    }`}
                  >
                    <div className="relative overflow-hidden">
                      <PhotoToCome label="Before" />
                    </div>
                    <div className="relative overflow-hidden">
                      <PhotoToCome label="After" />
                    </div>
                    <span className="absolute top-2 left-2 rounded-sm bg-ink/80 px-1.5 py-0.5 text-[0.55rem] font-bold tracking-[0.12em] text-paper uppercase sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[0.65rem]">
                      Before
                    </span>
                    <span className="absolute top-2 right-2 rounded-sm bg-hivis px-1.5 py-0.5 text-[0.55rem] font-bold tracking-[0.12em] text-ink uppercase sm:top-3 sm:right-3 sm:px-2.5 sm:py-1 sm:text-[0.65rem]">
                      After
                    </span>
                  </div>
                  <figcaption className="border-t border-ink/10 px-3 py-3 sm:px-5 sm:py-4">
                    <span className="font-display block text-[0.8rem] leading-tight text-ink sm:text-base">
                      {pair.label}
                    </span>
                    <span className="mt-1 block text-[0.7rem] text-muted-foreground sm:text-sm">
                      {pair.note}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================ SERVICES ================================ */

function Services({ page }: P) {
  const s = page.base.services;
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-ink/10 bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={s.eyebrow} title={s.title} />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {s.items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 4) * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-hivis">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-3.5 sm:p-5">
                  <h3 className="font-display text-[0.85rem] leading-tight text-ink sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 hidden text-[0.92rem] leading-relaxed text-muted-foreground sm:block">
                    {item.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <CtaRow className="mt-10" />
      </div>
    </section>
  );
}

/* ================================== PRICE ================================== */

function Price({ page }: P) {
  const scope = page.base.scope;
  const p = page.price;
  return (
    <section id="prices" className="scroll-mt-24 border-t border-ink/10 bg-paper py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={scope.eyebrow}
          title={scope.title}
          description={scope.body[0]}
        />
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={0.05} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-white">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">What each job is priced on</caption>
                <thead>
                  <tr className="border-b border-ink/10">
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:px-6"
                    >
                      The job
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-right text-[0.7rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:px-6"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {p.table.map((row) => (
                    <tr key={row.job} className="border-b border-ink/10 last:border-0">
                      <td className="px-4 py-3.5 sm:px-6">
                        <span className="box-decoration-clone bg-linear-to-b from-transparent from-55% to-hivis/40 to-55% px-1 text-sm font-bold text-ink sm:text-base">
                          {row.job}
                        </span>
                        <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted-foreground">
                          {row.how}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-right align-top sm:px-6">
                        <span className="text-[0.8rem] font-bold whitespace-nowrap text-muted-foreground sm:text-sm">
                          Quoted on the job
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="order-2 lg:order-1">
            <div className="rounded-xl border border-ink/10 bg-white p-6 sm:p-8">
              <h3 className="font-display text-lg text-ink lg:text-xl">{p.factorsTitle}</h3>
              <ul className="mt-5 grid gap-3.5">
                {p.factors.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-hivis-deep" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/10 pt-6 leading-relaxed text-muted-foreground">
                {p.close}
              </p>
              <CtaRow className="mt-7 lg:justify-start" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================ AUDIENCES ================================ */

function Audiences({ page }: P) {
  const a = page.audiences;
  return (
    <section className="border-y border-ink/10 bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <h2 className="font-display text-center text-[1.15rem] text-ink sm:text-2xl lg:text-[1.75rem]">
          {a.title}
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:mt-12 sm:grid-cols-4">
          {a.items.map((it, i) => {
            const Icon = icon(it.icon);
            return (
              <Reveal
                key={it.label}
                delay={i * 0.06}
                className="border-l border-ink/10 odd:border-l-0 sm:odd:border-l sm:nth-[4n+1]:border-l-0"
              >
                <div className="flex flex-col items-center gap-5 px-2 py-6 text-center">
                  <Icon
                    className="h-14 w-14 text-ink sm:h-16 sm:w-16"
                    strokeWidth={1.1}
                    aria-hidden
                  />
                  <span className="text-base font-extrabold text-ink sm:text-lg lg:text-xl">
                    {it.label}
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

/* ======================= TIMELINE (the copy's process) ======================= */

function Timeline({ page }: P) {
  const t = page.base.process;
  return (
    <section className="bg-paper py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={t.eyebrow} title={t.title} />
        <ol className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 sm:gap-4 lg:gap-5">
          {t.steps.map((step, i) => (
            <li
              key={step.n}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <article className="group relative flex h-full items-center gap-3.5 overflow-hidden rounded-xl border border-ink/10 bg-white p-3 sm:block sm:h-[17rem] sm:border-0 sm:p-0 lg:h-[19rem]">
                  <div className="relative h-[5.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-lg bg-ink sm:absolute sm:inset-0 sm:h-full sm:w-full sm:rounded-none">
                    {step.image && (
                      <img
                        src={step.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 sm:group-hover:scale-[1.06]"
                      />
                    )}
                    <span
                      aria-hidden
                      className="absolute top-1.5 left-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-hivis text-[0.7rem] font-bold text-ink shadow-md sm:hidden"
                    >
                      {step.n}
                    </span>
                  </div>
                  <div className="absolute inset-0 hidden bg-gradient-to-t from-ink via-ink/80 via-45% to-ink/15 sm:block" />
                  <span
                    aria-hidden
                    className="font-display absolute top-3 left-4 hidden text-4xl text-hivis drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:block lg:text-5xl"
                  >
                    {step.n}
                  </span>
                  <div className="min-w-0 flex-1 sm:absolute sm:inset-x-0 sm:bottom-0 sm:flex-none sm:p-5">
                    <span
                      aria-hidden
                      className="mb-3 hidden h-0.5 w-8 origin-left bg-hivis transition-transform duration-500 group-hover:scale-x-[2.5] sm:block"
                    />
                    <h3 className="font-display text-[0.85rem] leading-tight text-ink sm:text-sm sm:leading-snug sm:text-paper lg:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8rem] leading-snug text-muted-foreground sm:mt-2 sm:text-paper/75 lg:text-[0.85rem]">
                      {step.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        <CtaRow className="mt-10" />
      </div>
    </section>
  );
}

/* ================================ INCLUDED ================================ */

function Included({ page }: P) {
  const inc = page.included;
  if (!inc) return null;
  const total = inc.groups.reduce((n, g) => n + g.items.length, 0);
  return (
    <section id="included" className="scroll-mt-24 border-y border-ink/10 bg-white py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow={inc.eyebrow}
          title={inc.title}
          description={inc.lede}
        />
        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-xl border border-ink/10 bg-paper">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-ink/10 bg-hivis px-5 py-3 text-ink sm:px-6">
              <p className="font-display text-sm tracking-wide uppercase sm:text-base">
                {total} lines to check
              </p>
              <p className="text-[0.8rem] font-semibold text-ink/80">Clear before you book</p>
            </div>
            <div className="grid gap-px bg-ink/10 lg:grid-cols-3">
              {inc.groups.map((g) => (
                <div key={g.label} className="bg-paper">
                  <p className="border-b border-ink/10 px-5 py-2.5 text-[0.7rem] font-bold tracking-[0.16em] text-muted-foreground uppercase sm:px-6">
                    {g.label}
                    <span className="ml-2 text-hivis-deep">{g.items.length}</span>
                  </p>
                  <ul className="px-5 py-1.5 sm:px-6">
                    {g.items.map((row) => (
                      <li key={row.item} className="flex items-start gap-3 py-2.5">
                        <Check
                          className="mt-[0.15rem] h-4 w-4 shrink-0 text-hivis-deep"
                          strokeWidth={3}
                        />
                        <div className="min-w-0">
                          <span className="font-display block text-[0.9rem] leading-tight text-ink">
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
          {inc.close}
        </p>
        <CtaRow className="mt-8" />
      </div>
    </section>
  );
}

/* ================================= COMPARE ================================= */

function Compare({ page }: P) {
  const c = page.compare;
  if (!c) return null;
  return (
    <section className="bg-paper py-12 sm:py-16 lg:py-20">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow [--eyebrow-color:var(--graphite)]">{c.eyebrow}</p>
          <h2 className="font-display mt-3 text-xl text-ink sm:text-2xl lg:text-[1.75rem]">
            {c.title}
          </h2>
          {c.body.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <QuoteCta className="mt-7" />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xl shadow-black/10">
            <div className="flex items-center gap-2.5 bg-ink px-6 py-3.5 sm:px-8">
              <AlertTriangle className="h-4 w-4 shrink-0 text-hivis" strokeWidth={2.5} />
              <p className="text-[0.7rem] font-bold tracking-[0.18em] text-paper uppercase">
                Check both quotes show
              </p>
            </div>
            <ul className="grid gap-4 p-6 sm:p-8">
              {c.points.map((point) => {
                const [head, ...rest] = point.split(". ");
                return (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hivis/25 text-ink">
                      <Check className="h-3 w-3" strokeWidth={3.5} />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-ink/85">
                      <strong className="font-bold text-ink">{head}.</strong> {rest.join(". ")}
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

/* ====================== PROCESS (number cards: what to send) ====================== */

function Process({ page }: P) {
  const p = page.process;
  return (
    <section className="border-y border-ink/10 bg-white py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow={p.eyebrow} title={p.title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {p.steps.map((step, i) => (
            <Reveal key={step.n} delay={(i % 3) * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-ink/10 bg-paper p-6 transition-colors duration-300 hover:border-hivis">
                <span className="font-display text-2xl text-hivis-deep">{step.n}</span>
                <h3 className="font-display mt-3 text-base text-ink sm:text-lg">{step.title}</h3>
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

/* ================================= FEATURE ================================= */

function Feature({ f, dark = false }: { f: V2Page["feature"]; dark?: boolean }) {
  return (
    <section
      className={dark ? "bg-ink py-12 sm:py-16 lg:py-20" : "bg-paper py-12 sm:py-16 lg:py-20"}
    >
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={dark ? "" : "lg:order-2"}>
          <Reveal>
            <p
              className={`eyebrow ${dark ? "[--eyebrow-color:var(--hivis)]" : "[--eyebrow-color:var(--graphite)]"}`}
            >
              {f.eyebrow}
            </p>
            <h2
              className={`font-display mt-3 text-xl sm:text-2xl lg:text-[1.75rem] ${dark ? "text-paper" : "text-ink"}`}
            >
              {f.title}
            </h2>
            {f.body.map((p) => (
              <p
                key={p}
                className={`mt-4 leading-relaxed ${dark ? "text-paper/70" : "text-muted-foreground"}`}
              >
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {f.points.map((pt) => (
                <li
                  key={pt}
                  className={`flex items-start gap-3 text-[0.95rem] ${dark ? "text-paper/85" : "text-ink/85"}`}
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-hivis" strokeWidth={2.5} />
                  {pt}
                </li>
              ))}
            </ul>
            {!dark && <QuoteCta className="mt-7" />}
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div
            className={`overflow-hidden rounded-xl border ${dark ? "border-white/12" : "border-ink/10"}`}
          >
            <img
              src={f.image}
              alt=""
              loading="lazy"
              className="aspect-[8/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================= BUILDERS ================================= */

function Builders({ page }: P) {
  const b = page.builders;
  if (!b) return null;
  return (
    <section id="trade" className="scroll-mt-24 bg-paper py-12 sm:py-16 lg:py-20">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow [--eyebrow-color:var(--graphite)]">{b.eyebrow}</p>
            <h2 className="font-display mt-3 text-xl text-ink sm:text-2xl lg:text-[1.75rem]">
              {b.title}
            </h2>
            <p className="mt-5 text-lg font-bold text-ink">{b.lead}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-7 grid gap-3">
              {b.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[0.95rem] text-ink/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-hivis-deep" strokeWidth={2.5} />
                  {pt}
                </li>
              ))}
            </ul>
            <CtaRow className="mt-7 justify-start" />
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:order-first">
          <div className="overflow-hidden rounded-xl border border-ink/10">
            <img src={b.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="flex items-center gap-3 border-t border-ink/10 bg-white px-5 py-4">
              <Building2 className="h-5 w-5 shrink-0 text-hivis-deep" strokeWidth={2} />
              <span className="text-sm font-semibold text-ink">{b.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================= GUARANTEE ================================= */

function Guarantee({ page }: P) {
  const g = page.guarantee;
  return (
    <section className="bg-ink py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow={g.eyebrow}
          title={g.title}
          description={g.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {g.items.map((it, i) => {
            const Icon = icon(it.icon);
            return (
              <Reveal key={it.title} delay={(i % 2) * 0.05}>
                <article className="flex h-full gap-3.5 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-hivis/60 sm:gap-4 sm:p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hivis text-ink sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-base text-paper">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/70">{it.detail}</p>
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

/* ============================ REVIEWS (placeholder) ============================ */

function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-y border-ink/10 bg-white py-16 lg:py-20">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-plaster px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-ink uppercase ring-1 ring-ink/10">
            <MessagesSquare className="h-4 w-4 text-hivis-deep" aria-hidden />
            Google reviews
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-xl text-ink sm:text-2xl lg:text-[1.75rem]">
            What Metro’s clients say
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Metro’s verified Google reviews will appear here.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              aria-hidden
              className="flex h-44 flex-col gap-3 rounded-xl border border-dashed border-ink/20 bg-paper p-6"
            >
              <span className="h-3 w-24 rounded bg-ink/10" />
              <span className="h-3 w-full rounded bg-ink/[0.07]" />
              <span className="h-3 w-5/6 rounded bg-ink/[0.07]" />
              <span className="h-3 w-2/3 rounded bg-ink/[0.07]" />
              <span className="mt-auto text-[0.7rem] font-bold tracking-[0.14em] text-ink/35 uppercase">
                Review to come
              </span>
            </div>
          ))}
        </div>
        <CtaRow className="mt-10" />
      </div>
    </section>
  );
}

/* =============================== AREA, FAQ, CTA =============================== */

function Area({ page }: P) {
  const a = page.area;
  return (
    <section className="bg-hivis py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          tone="yellow"
          eyebrow={a.eyebrow}
          title={a.title}
          description={a.lede}
        />
        <Reveal delay={0.06}>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-ink/85">{a.body}</p>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-ink">
            <MapPin className="h-4 w-4 shrink-0" />
            Melbourne
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Faqs({ page }: P) {
  const f = page.base.faqs;
  return (
    <section id="faqs" className="scroll-mt-24 border-t border-ink/10 bg-paper py-16 lg:py-20">
      <div className="container-wide max-w-3xl">
        <SectionHeading align="center" eyebrow={f.eyebrow} title={f.title} />
        <div className="mt-8">
          <FaqList faqs={f.items} />
        </div>
      </div>
    </section>
  );
}

function FinalCta({ page }: P) {
  const { openQuote } = useQuoteModal();
  const c = page.base.finalCta;
  return (
    <section className="bg-hivis py-12 sm:py-16 lg:py-20">
      <div className="container-wide text-center">
        <h2 className="font-display mx-auto max-w-2xl text-2xl text-ink sm:text-3xl lg:text-4xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink/85">{c.lede}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton variant="dark" size="md" onClick={openQuote}>
            {CTA_LABEL}
          </CtaButton>
          {hasPhone && (
            <CtaButton href={SITE.phoneHref} variant="outlineDark" icon="phone" size="md">
              Call Metro
            </CtaButton>
          )}
        </div>
        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-ink/75">
          <FileText className="h-4 w-4 shrink-0" />
          We’ll use your details to get in touch about this job.
        </p>
      </div>
    </section>
  );
}
