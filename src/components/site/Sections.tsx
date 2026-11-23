"use client";

import type { ReactNode } from "react";
import { Building2, HardHat, House, Landmark, MapPin } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import { useQuoteModal } from "./QuoteModal";
import { GoogleRatingBadge, Stars } from "./GoogleRating";
import { Bricks } from "./Brand";
import {
  CTA_LABEL,
  SITE,
  audiences,
  serviceArea,
  stats,
  tickerClaims,
  type Testimonial,
} from "@/lib/site-data";

/* Sections shared by the main page and the three service landing pages. */

/** Yellow ticker of trust claims, directly under every hero. */
export function Ticker() {
  const items = [...tickerClaims, ...tickerClaims];
  return (
    <section aria-label={`Why ${SITE.name}`} className="relative bg-hivis text-ink">
      <ul className="sr-only">
        {tickerClaims.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <div aria-hidden className="marquee-viewport py-3.5 sm:py-4">
        <div className="animate-marquee flex w-max items-center [--marquee-duration:36s]">
          {items.map((c, i) => (
            <span
              key={i}
              className="font-display flex items-center gap-6 pr-6 text-sm whitespace-nowrap sm:gap-8 sm:pr-8 sm:text-base"
            >
              {c}
              <span className="chamfer h-3 w-3 bg-ink [--cut:4px]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Four big numbers. Real values in the HTML — no count-up from zero. */
export function Stats() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.06}
            className={[
              "border-ink/10 py-8 sm:py-10 lg:py-12",
              i % 2 === 1 ? "border-l pl-5 sm:pl-8" : "pr-5",
              i >= 2 ? "border-t lg:border-t-0" : "",
              i > 0 ? "lg:border-l lg:pl-8" : "",
            ].join(" ")}
          >
            <p className="font-display text-[2.1rem] leading-none text-ink sm:text-5xl lg:text-[3.4rem]">
              {s.value}
              {s.unit && (
                <span className="ml-1 text-[0.5em] text-hivis [-webkit-text-stroke:1px_var(--ink)]">
                  {s.unit}
                </span>
              )}
            </p>
            <p className="mt-3 text-xs font-bold tracking-[0.14em] text-graphite uppercase sm:text-[0.8rem]">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const AUDIENCE_ICONS = {
  home: House,
  builder: HardHat,
  developer: Building2,
  government: Landmark,
} as const;

/** "Who we work with": simple icon + label strip, laid out like the Demo Bros section. */
export function Audiences({ index: _index }: { index?: string }) {
  return (
    <section className="border-y border-ink/10 bg-plaster py-16 sm:py-20">
      <div className="container-wide">
        <Reveal>
          <h2 className="font-display text-center text-2xl text-ink uppercase sm:text-3xl">
            {audiences.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-y-10 sm:mt-12 lg:grid-cols-4">
          {audiences.items.map((a, i) => {
            const Icon = AUDIENCE_ICONS[a.icon];
            return (
              <Reveal
                key={a.label}
                delay={i * 0.06}
                className={`flex flex-col items-center gap-4 px-4 text-center ${
                  i % 2 === 1 ? "border-l border-ink/10" : ""
                } ${i === 2 ? "lg:border-l lg:border-ink/10" : ""}`}
              >
                <Icon className="h-14 w-14 text-ink" strokeWidth={1.25} aria-hidden="true" />
                <span className="text-base font-bold text-ink">{a.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Reviews render once, as a grid — no looping carousel duplicating the same
 * six cards. Each service page passes the reviews relevant to it.
 */
export function Reviews({
  index,
  title,
  items,
  children,
}: {
  index?: string;
  title: string;
  items: Testimonial[];
  children?: ReactNode;
}) {
  return (
    <section id="reviews" className="relative scroll-mt-20 overflow-hidden bg-white py-16 text-ink sm:py-20 lg:py-24">
      <div className="container-wide relative">
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal>
            <GoogleRatingBadge tone="light" />
          </Reveal>
          <SectionHeading index={index} eyebrow="What our clients say" title={title} align="center" />
        </div>
      </div>

      {/* Auto-scrolling strip, duplicated once so the -50% marquee loops seamlessly.
          Pauses on hover; reduced-motion users get a static, swipeable row (globals.css). */}
      <div className="marquee-viewport mt-10 lg:mt-12">
        <div className="animate-marquee flex w-max gap-4 px-4 [--marquee-duration:60s] hover:[animation-play-state:paused] sm:gap-5">
          {[...items, ...items].map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              aria-hidden={i >= items.length || undefined}
              className="flex w-[18.5rem] shrink-0 flex-col rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:w-[22rem]"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-plaster text-sm text-ink">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-bold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink/55">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="container-wide relative">
        {children ?? <CtaRow tone="light" className="mt-10 justify-center lg:mt-12" />}
      </div>
    </section>
  );
}

export function ServiceArea({ index }: { index?: string }) {
  return (
    <section className="bg-plaster py-16 sm:py-20 lg:py-24">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading index={index} eyebrow={serviceArea.eyebrow} title={serviceArea.title} />
          <Reveal>
            <p className="mt-5 leading-relaxed text-muted-foreground">{serviceArea.lede}</p>
            <p className="mt-4 font-semibold text-ink">{serviceArea.body}</p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="chamfer relative overflow-hidden bg-ink [--cut:30px]">
            <img
              src="/images/excavator-sky.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
            />
            <div className="pattern-grid absolute inset-0" />
            <ul className="relative grid gap-px bg-white/10 sm:grid-cols-2">
              {serviceArea.regions.map((r) => (
                <li key={r} className="flex items-center gap-3 bg-ink/80 px-5 py-4 text-paper">
                  <MapPin className="h-4 w-4 shrink-0 text-hivis" />
                  <span className="text-sm font-semibold">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Dark closing band with a demolition photograph (dark so the green buttons stand out). */
export function FinalCtaBand({
  eyebrow = "Ready when you are",
  title,
  lede,
  body,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  body?: string;
  /** Replaces the default quote + call buttons. */
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative px-4 py-16 sm:px-10 sm:py-20 lg:py-24 lg:pr-12 lg:pl-[max(4rem,calc((100vw-88rem)/2+4rem))]">
          <Bricks className="absolute right-6 bottom-6 h-24 w-48 text-white/[0.05] lg:right-10" />
          <SectionHeading tone="dark" eyebrow={eyebrow} title={title} />
          <Reveal>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">{lede}</p>
            {body && <p className="font-display mt-5 text-base">{body}</p>}
            <div className="relative mt-8">
              {children ?? (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <QuoteCta variant="dark" />
                  <CtaButton href={SITE.phoneHref} variant="outlineDark" icon="phone">
                    Call {SITE.phone}
                  </CtaButton>
                </div>
              )}
            </div>
          </Reveal>
        </div>
        <div className="relative hidden min-h-[22rem] lg:block">
          <img
            src="/images/excavator-wall.jpg"
            alt="An excavator taking down a brick wall"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent"
          />
        </div>
      </div>
    </section>
  );
}

/** The quote CTA: opens the modal rather than scrolling back to the hero. */
export function QuoteCta({
  label = CTA_LABEL,
  variant = "primary",
}: {
  label?: string;
  variant?: "primary" | "dark";
}) {
  const { openQuote } = useQuoteModal();
  return (
    <CtaButton onClick={openQuote} variant={variant}>
      {label}
    </CtaButton>
  );
}

/** Quote + call, after the sections that should end on an action. */
export function CtaRow({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <QuoteCta />
      <CtaButton
        href={SITE.phoneHref}
        variant={tone === "dark" ? "outlineLight" : "outlineDark"}
        icon="phone"
      >
        Call {SITE.phone}
      </CtaButton>
    </Reveal>
  );
}
