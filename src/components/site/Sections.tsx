"use client";

import type { ReactNode } from "react";
import { MapPin } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import { useQuoteModal } from "./QuoteModal";
import { GoogleRatingBadge, Stars } from "./GoogleRating";
import { Bricks, IconTile } from "./Brand";
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

export function Audiences({ index }: { index?: string }) {
  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <SectionHeading index={index} eyebrow={audiences.eyebrow} title={audiences.title} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {audiences.items.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <div className="group h-full border-2 border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-ink">
                <IconTile
                  name={a.icon}
                  tone="ink"
                  className="transition-colors duration-300 group-hover:bg-hivis group-hover:text-ink"
                />
                <h3 className="font-display mt-6 text-lg text-ink">{a.label}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {a.detail}
                </p>
              </div>
            </Reveal>
          ))}
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
    <section
      id="reviews"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24"
    >
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <div className="container-wide relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index={index} tone="dark" eyebrow="What our clients say" title={title} />
          <Reveal>
            <GoogleRatingBadge tone="dark" />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <figure className="chamfer flex h-full flex-col bg-white/[0.05] p-6 ring-1 ring-white/10 [--cut:20px] sm:p-7">
                <div className="flex items-center justify-between">
                  <Stars count={t.rating} />
                  <span className="font-display text-4xl leading-none text-hivis/30" aria-hidden>
                    “
                  </span>
                </div>
                <blockquote className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-paper/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center bg-hivis text-sm text-ink">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-bold text-paper">{t.name}</span>
                    <span className="block text-sm text-paper/55">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {children ?? <CtaRow tone="dark" className="mt-10 lg:mt-12" />}
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

/** Yellow closing band with the hard-hat photograph. */
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
    <section className="relative overflow-hidden bg-hivis text-ink">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative px-4 py-16 sm:px-10 sm:py-20 lg:py-24 lg:pr-12 lg:pl-[max(4rem,calc((100vw-88rem)/2+4rem))]">
          <Bricks className="absolute right-6 bottom-6 h-24 w-48 text-ink/[0.08] lg:right-10" />
          <SectionHeading tone="yellow" eyebrow={eyebrow} title={title} />
          <Reveal>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/85">{lede}</p>
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
            src="/images/hard-hat.jpg"
            alt="A yellow Metro Partial Demolition hard hat hanging on a concrete wall"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-hivis to-transparent"
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
