"use client";

import type { ReactNode } from "react";
import { Building2, HardHat, House, Landmark } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import { useQuoteModal } from "./QuoteModal";
import { Bricks } from "./Brand";
import { CTA_LABEL, audiences } from "@/lib/site-data";
import { beforeAfterPairs } from "@/lib/before-after";

/* Sections shared by the main page, the service landing pages and /contact. */

const AUDIENCE_ICONS = {
  home: House,
  builder: HardHat,
  developer: Building2,
  government: Landmark,
} as const;

/** "For homeowners, builders and fit-out teams": heading, one paragraph, icon strip. */
export function Audiences() {
  return (
    <section className="border-y border-ink/10 bg-plaster py-16 sm:py-20">
      <div className="container-wide">
        <Reveal>
          <h2 className="font-display text-center text-2xl text-ink uppercase sm:text-3xl">
            {audiences.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-muted-foreground sm:text-lg">
            {audiences.body}
          </p>
        </Reveal>
        {/* One row on every screen, divided by hairlines (Demo Bros layout). */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-row flex-nowrap items-start justify-center sm:mt-12">
          {audiences.items.map((a, i) => {
            const Icon = AUDIENCE_ICONS[a.icon];
            return (
              <Reveal
                key={a.label}
                delay={i * 0.06}
                className={`flex min-w-0 flex-1 basis-0 flex-col items-center gap-4 px-2 text-center sm:px-4 ${
                  i > 0 ? "border-l border-ink/10" : ""
                }`}
              >
                <Icon
                  className="h-11 w-11 text-ink sm:h-14 sm:w-14"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-ink sm:text-base">{a.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * Before / after, straight under the hero on every service page (Demo Bros
 * "Same room, one day apart"). Each photo holds both halves side by side; the
 * chips mark them. Two up on every width, so each pair is big enough to read.
 */
export function BeforeAfter() {
  return (
    <section className="border-b border-ink/10 bg-white py-14 sm:py-20 lg:py-24">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow="Before and after"
          title="Before we start. After we leave."
        />
        <div className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 lg:mt-12">
          {beforeAfterPairs.map((pair, i) => (
            <Reveal key={pair.id} delay={(i % 2) * 0.06}>
              <figure className="chamfer h-full overflow-hidden bg-paper ring-1 ring-ink/10 [--cut:18px]">
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <img
                    src={pair.image}
                    alt={`${pair.label}: before on the left, after on the right`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  {/* Hairline down the middle, where the two photos meet. */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/80"
                  />
                  <span className="absolute top-2 left-2 bg-ink px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.1em] text-paper uppercase sm:top-3 sm:left-3 sm:px-2 sm:py-1">
                    Before
                  </span>
                  <span className="absolute top-2 left-[calc(50%+0.5rem)] bg-hivis px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.1em] text-ink uppercase sm:top-3 sm:left-[calc(50%+0.75rem)] sm:px-2 sm:py-1">
                    After
                  </span>
                </div>
                <figcaption className="px-3 py-3 sm:px-5 sm:py-4">
                  <span className="font-display block text-[0.8rem] leading-tight text-ink sm:text-[0.95rem]">
                    {pair.label}
                  </span>
                  <span className="mt-1 hidden text-sm text-muted-foreground sm:block">
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

/** Dark closing band with a demolition photograph (dark so the green buttons stand out). */
export function FinalCtaBand({
  eyebrow = CTA_LABEL,
  title,
  lede,
  body,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede: string;
  body?: string;
  /** Replaces the default quote button. */
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
                </div>
              )}
            </div>
          </Reveal>
        </div>
        <div className="relative hidden min-h-[22rem] lg:block">
          <img
            src="/images/services/internal-strip-out.jpg"
            alt=""
            aria-hidden="true"
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

/** Quote button after the sections that should end on an action (calls go via the floating call button). */
export function CtaRow({ className = "" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <Reveal className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <QuoteCta />
    </Reveal>
  );
}
