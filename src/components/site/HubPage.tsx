"use client";

/**
 * VERSION 2 of the main page (branch v2/demobros-layout, preview only).
 *
 * Same layout and elements as the Demo Bros landing page (go.demobros.com):
 * animated hub hero with stacked gradient service names and a floating photo
 * collage, three rounded service cards, an audience strip, a scrolling card
 * belt and a solid brand-colour call to action. Metro's colours, logo and
 * copy; no claims Metro hasn't confirmed (no rating, reviews, prices, phone).
 */

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Calendar,
  Camera,
  FileCheck,
  FileText,
  HardHat,
  House,
  KeyRound,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";
import { useQuoteModal } from "./QuoteModal";
import { FloatingContact } from "./FloatingContact";
import { GoogleRatingSticky } from "./GoogleRatingSticky";
import { StickyMobileCta } from "./StickyMobileCta";
import { CTA_LABEL, SITE, audiences, hasPhone, hub, servicePages } from "@/lib/site-data";

export function HubPage() {
  return (
    <>
      <HubHero />
      <ServiceShowcase />
      <QuoteTips />
      <Audiences />
      <FinalCta />
      <GoogleRatingSticky />
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

/** White text with Metro hi-vis sliding through it; solid when motion is reduced. */
function FlowingText({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #ffffff 0%, #fbb428 25%, #ffffff 50%, #ffd27a 75%, #ffffff 100%)",
        backgroundSize: "220% 100%",
      }}
      animate={reduce ? undefined : { backgroundPositionX: ["0%", "220%"] }}
      transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.span>
  );
}

/* ============================== HUB HERO ============================== */

const SOFT_SHAPES = [
  {
    top: "14%",
    left: "9%",
    size: 190,
    radius: "50%",
    color: "bg-hivis/15",
    blur: "blur-2xl",
    dx: 40,
    dy: 30,
    rot: 18,
    dur: 20,
  },
  {
    top: "58%",
    left: "14%",
    size: 130,
    radius: "42% 58% 63% 37% / 41% 44% 56% 59%",
    color: "bg-hivis/10",
    blur: "blur-2xl",
    dx: -30,
    dy: -40,
    rot: -22,
    dur: 24,
  },
  {
    top: "22%",
    left: "74%",
    size: 240,
    h: 170,
    radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    color: "bg-hivis/12",
    blur: "blur-3xl",
    dx: -50,
    dy: 34,
    rot: 14,
    dur: 22,
  },
  {
    top: "68%",
    left: "80%",
    size: 150,
    radius: "36%",
    color: "bg-white/[0.04]",
    blur: "blur-2xl",
    dx: 34,
    dy: -30,
    rot: -18,
    dur: 26,
  },
  {
    top: "42%",
    left: "48%",
    size: 100,
    radius: "50%",
    color: "bg-hivis/10",
    blur: "blur-xl",
    dx: 24,
    dy: 40,
    rot: 26,
    dur: 17,
  },
] as const;

const COLLAGE = [
  { src: "/images/hero/partial-demolition-desktop.jpg", wide: true, dy: -10, dur: 6, delay: 0 },
  { src: "/images/hero/strip-out-mobile.jpg", wide: false, dy: 10, dur: 7, delay: 0.4 },
  { src: "/images/hero/rubbish-removal-mobile.jpg", wide: false, dy: -8, dur: 6.5, delay: 0.8 },
];

function HubHero() {
  const reduce = useReducedMotion();
  const { openQuote } = useQuoteModal();
  const group = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* Living backdrop: a hi-vis wash, two slow glows and drifting soft shapes. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 85% at 50% -15%, rgba(251,180,40,0.14), transparent 60%)",
          }}
        />
        <div className="pattern-grid absolute inset-0 opacity-60" />
        <motion.div
          className="absolute -top-44 -left-40 h-[32rem] w-[32rem] rounded-full bg-hivis/20 blur-[110px]"
          animate={reduce ? undefined : { x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={reduce ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 -right-36 h-[28rem] w-[28rem] rounded-full bg-hivis/10 blur-[110px]"
          animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 50, 0], scale: [1.1, 1, 1.1] }}
          transition={reduce ? undefined : { duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
        {SOFT_SHAPES.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.color} ${s.blur}`}
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: "h" in s ? s.h : s.size,
              borderRadius: s.radius,
            }}
            animate={
              reduce
                ? undefined
                : { x: [0, s.dx, 0], y: [0, s.dy, 0], rotate: [0, s.rot, 0], scale: [1, 1.12, 1] }
            }
            transition={
              reduce ? undefined : { duration: s.dur, repeat: Infinity, ease: "easeInOut" }
            }
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="container-wide grid items-center gap-12 pt-28 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-36 lg:pb-20">
          <motion.div
            variants={group}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.p
              variants={rise}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-hivis uppercase sm:text-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                {!reduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hivis opacity-75" />
                )}
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hivis" />
              </span>
              {SITE.name} &middot; Melbourne
            </motion.p>

            <motion.h1
              variants={rise}
              className="font-display mt-5 text-[1.35rem] leading-[1.18] whitespace-nowrap sm:text-3xl lg:text-[2.4rem]"
            >
              <FlowingText className="block">Melbourne partial demolition </FlowingText>
              <FlowingText className="block">and strip-outs </FlowingText>
              <FlowingText className="block">for your next build</FlowingText>
            </motion.h1>

            <motion.p
              variants={rise}
              className="mx-auto mt-5 max-w-xl text-base text-paper/70 sm:text-lg lg:mx-0"
            >
              {hub.hero.sub}
            </motion.p>

            <motion.div
              variants={rise}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <CtaButton onClick={openQuote} size="lg">
                {CTA_LABEL}
              </CtaButton>
              <CtaButton href="#services" variant="outlineLight" size="lg" icon={false}>
                {hub.hero.secondary}
              </CtaButton>
              {hasPhone && (
                <CtaButton href={SITE.phoneHref} variant="outlineLight" size="lg" icon="phone">
                  Call Metro
                </CtaButton>
              )}
            </motion.div>

            <motion.ul
              variants={rise}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-paper/55 lg:justify-start"
            >
              <li className="font-semibold text-paper">Partial demolition</li>
              <li className="text-paper/30">&bull;</li>
              <li>Strip-outs</li>
              <li className="text-paper/30">&bull;</li>
              <li>Rubbish removal</li>
            </motion.ul>
          </motion.div>

          {/* A small collage that floats gently. Illustrative photos. */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {COLLAGE.map((c) => (
              <motion.div
                key={c.src}
                className={`overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ${
                  c.wide ? "col-span-2 h-56 sm:h-72" : "h-40 sm:h-48"
                }`}
                animate={reduce ? undefined : { y: [0, c.dy, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: c.dur, repeat: Infinity, ease: "easeInOut", delay: c.delay }
                }
              >
                <img src={c.src} alt="" loading="eager" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================== SERVICE SHOWCASE ========================== */

function HandUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-hivis-deep">
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
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
}

function ServiceShowcase() {
  return (
    <section id="services" className="scroll-mt-24 bg-plaster py-14 lg:scroll-mt-28 lg:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl text-ink sm:text-3xl lg:text-[2.4rem]">
            What are you getting <HandUnderline>ready</HandUnderline> for?
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {servicePages.map((s) => (
            <Link
              key={s.path}
              href={s.path}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-hivis hover:shadow-xl hover:shadow-hivis/15"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl text-ink lg:text-2xl">{s.question}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold tracking-[0.08em] text-ink uppercase">
                  <span className="border-b-2 border-hivis">{s.linkLabel}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== AUDIENCES ============================== */

const AUDIENCES = [
  { icon: House, label: "Homeowners" },
  { icon: HardHat, label: "Builders" },
  { icon: Building2, label: "Fit-out teams" },
] as const;

function Audiences() {
  return (
    <section className="border-b border-ink/10 bg-paper py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <h2 className="font-display text-center text-[1.15rem] text-ink sm:text-2xl lg:text-[1.75rem]">
          {audiences.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground sm:text-lg">
          {audiences.body}
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 sm:mt-12">
          {AUDIENCES.map((a, i) => (
            <Reveal
              key={a.label}
              delay={i * 0.06}
              className="border-l border-ink/10 first:border-l-0"
            >
              <div className="flex flex-col items-center gap-5 px-2 py-6 text-center">
                <a.icon
                  className="h-16 w-16 text-ink sm:h-20 sm:w-20"
                  strokeWidth={1.1}
                  aria-hidden
                />
                <span className="text-base font-extrabold text-ink sm:text-lg lg:text-xl">
                  {a.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================== CARD BELT =============================== */

/**
 * Demo Bros runs its Google reviews here. Metro has no verified reviews yet, so
 * the same scrolling belt carries the 01-Home "clear scope" points instead.
 */
const TIPS = [
  { ...hub.scope.items[0], icon: KeyRound },
  { ...hub.scope.items[1], icon: FileText },
  { ...hub.scope.items[2], icon: Calendar },
  { ...hub.scope.items[3], icon: Camera },
];
const SECONDS_PER_CARD = 7;

function QuoteTips() {
  const { openQuote } = useQuoteModal();
  const duration = `${TIPS.length * 2 * SECONDS_PER_CARD}s`;
  const half = (hidden: boolean) => (
    <div className="flex gap-4 pr-4" aria-hidden={hidden || undefined}>
      {[...TIPS, ...TIPS].map((t, i) => (
        <figure
          key={`${t.title}-${i}`}
          aria-hidden={i >= TIPS.length || undefined}
          className="flex w-[19rem] shrink-0 flex-col rounded-xl border border-ink/10 bg-white p-5 sm:w-[23rem] sm:p-6"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-hivis text-ink">
            <t.icon className="h-5 w-5" aria-hidden />
          </span>
          <figcaption className="mt-4 font-bold text-ink">{t.title}</figcaption>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{t.detail}</p>
        </figure>
      ))}
    </div>
  );

  return (
    <section
      id="what-to-send"
      className="scroll-mt-24 border-y border-ink/10 bg-plaster py-16 lg:py-20"
    >
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-ink uppercase ring-1 ring-ink/10">
            <FileCheck className="h-4 w-4 text-hivis-deep" aria-hidden />
            {hub.scope.eyebrow}
          </span>
          <h2 className="font-display mt-4 max-w-2xl text-xl text-ink sm:text-balance sm:text-2xl lg:text-[1.75rem]">
            {hub.scope.title}
          </h2>
        </div>
      </div>

      <div
        className="marquee-viewport group mt-10 motion-reduce:overflow-x-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4rem, black calc(100% - 4rem), transparent)",
        }}
      >
        <div
          className="animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: duration }}
        >
          {half(false)}
          {half(true)}
        </div>
      </div>

      <div className="container-wide mt-10 flex flex-wrap items-center justify-center gap-4">
        <CtaButton size="md" onClick={openQuote}>
          {CTA_LABEL}
        </CtaButton>
        {hasPhone && (
          <CtaButton href={SITE.phoneHref} variant="outlineDark" size="md" icon="phone">
            Call Metro
          </CtaButton>
        )}
      </div>
    </section>
  );
}

/* ============================== FINAL CTA ============================== */

function FinalCta() {
  const { openQuote } = useQuoteModal();
  return (
    <section className="bg-hivis py-12 sm:py-16 lg:py-20">
      <div className="container-wide text-center">
        <h2 className="font-display mx-auto max-w-2xl text-2xl text-ink sm:text-balance sm:text-3xl lg:text-4xl">
          {hub.finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink/80">{hub.finalCta.lede}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton variant="dark" size="md" onClick={openQuote}>
            {CTA_LABEL}
          </CtaButton>
          <CtaButton to="/contact" variant="outlineDark" size="md" icon={false}>
            Contact Metro
          </CtaButton>
        </div>
        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-ink/75">
          <FileCheck className="h-4 w-4 shrink-0" aria-hidden />
          We’ll use your details to get in touch about this job.
        </p>
      </div>
    </section>
  );
}
