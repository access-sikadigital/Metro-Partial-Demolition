"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import { FloatingContact } from "./FloatingContact";
import { StickyMobileCta } from "./StickyMobileCta";
import { GoogleRatingBadge } from "./GoogleRating";
import { HazardBand, IconTile } from "./Brand";
import { Audiences, FinalCtaBand, Reviews, ServiceArea, Stats, Ticker } from "./Sections";
import { SITE, TRUST, hub, servicePages, sharedGuarantees, testimonials } from "@/lib/site-data";

/**
 * The main landing page is a hub, exactly like the Demo Bros project: its job
 * is to send each visitor to the right service landing page. Three doors —
 * /partial-demolition, /strip-out, /rubbish-removal — linked from the hero, the
 * service cards, the reviews band and the final CTA.
 */
export function HubPage() {
  return (
    <>
      <HubHero />
      <Ticker />
      <Stats />
      <ServiceShowcase />
      <WhyMetro />
      <Audiences />
      <Reviews
        index="03"
        title={`${TRUST.rating} stars from jobs across Melbourne.`}
        items={testimonials.slice(0, 6)}
      >
        <ServiceButtons className="mt-10 justify-center lg:mt-12" tone="dark" />
      </Reviews>
      <ServiceArea index="04" />
      <FinalCtaBand
        eyebrow={hub.finalCta.eyebrow}
        title={hub.finalCta.title}
        lede={hub.finalCta.lede}
      >
        <ServiceButtons tone="yellow" />
      </FinalCtaBand>
      <FloatingContact />
      <StickyMobileCta />
    </>
  );
}

/* ============================== HUB HERO ============================== */

function HubHero() {
  const reduce = useReducedMotion();
  const group = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };
  const h = hub.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/excavator-wall.jpg" />
          <img
            src="/images/loader-overhead.jpg"
            alt=""
            className="animate-slow-zoom h-full w-full object-cover opacity-75 grayscale-[15%]"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink/95 lg:bg-gradient-to-r lg:from-ink/95 lg:from-0% lg:via-ink/90 lg:via-45% lg:to-ink/20 lg:to-100%" />
        <div className="pattern-grid absolute inset-0" />
        <div className="pattern-dots absolute bottom-0 left-0 h-40 w-48 opacity-25 sm:h-56 sm:w-72" />
      </div>

      <div className="container-wide relative grid gap-10 pt-24 pb-14 sm:pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pt-36 lg:pb-24">
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
            {h.eyebrow}
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-display mt-5 text-[1.85rem] leading-[1.08] sm:text-[2.7rem] lg:text-[3.05rem] xl:text-[3.5rem]"
          >
            {h.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="ribbon mt-1 inline-block sm:mt-2">{h.ribbon}</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
          >
            {h.sub}
          </motion.p>

          <motion.div variants={rise} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#services" variant="white">See our services</CtaButton>
            <CtaButton href={SITE.phoneHref} variant="outlineLight" icon="phone">
              Call {SITE.phone}
            </CtaButton>
          </motion.div>

          <motion.div variants={rise} className="mt-8">
            <GoogleRatingBadge tone="dark" />
          </motion.div>
        </motion.div>

        {/* Three doors, right in the hero — the whole point of this page. */}
        <motion.nav
          aria-label="Our services"
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="chamfer absolute top-4 -right-2 -bottom-2 left-4 bg-hivis [--cut:30px] sm:-right-3 sm:-bottom-3"
          />
          <div className="chamfer relative bg-paper text-ink shadow-2xl shadow-black/40 [--cut:30px]">
            <div className="border-b border-ink/10 px-5 pt-7 pb-5 sm:px-7">
              <p className="eyebrow [--eyebrow-color:var(--graphite)]">{h.pick}</p>
              <p className="font-display mt-2 text-xl sm:text-2xl">What do you need done?</p>
            </div>
            <ul className="divide-y divide-ink/10">
              {servicePages.map((s) => (
                <li key={s.path}>
                  <Link
                    href={s.path}
                    className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-plaster sm:px-6 sm:py-4"
                  >
                    {/* Photo of the job instead of an icon, so people see what each service is.
                        Swap the file at s.image to change it. */}
                    <span className="relative h-20 w-28 shrink-0 overflow-hidden bg-ink sm:h-24 sm:w-36">
                      <img
                        src={s.image}
                        alt=""
                        aria-hidden="true"
                        loading="eager"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-display block text-[0.95rem] leading-tight sm:text-base">
                        {s.title}
                      </span>
                      <span className="mt-1.5 inline-block rounded-sm bg-go/10 px-2 py-0.5 text-sm font-semibold text-go">
                        {s.from}
                      </span>
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <HazardBand className="h-2" />
          </div>
        </motion.nav>
      </div>
    </section>
  );
}

/* ========================== SERVICE SHOWCASE ========================== */

function ServiceShowcase() {
  const s = hub.showcase;
  return (
    <section id="services" className="scroll-mt-20 bg-plaster py-16 sm:py-20 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading index="01" eyebrow={s.eyebrow} title={s.title} />
          <Reveal className="max-w-sm lg:pb-1">
            <p className="text-muted-foreground">{s.lede}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
          {servicePages.map((p, i) => (
            <Reveal key={p.path} delay={i * 0.07}>
              {/* The whole card is the link; the "button" at its foot is a
                  styled span, since a link can't contain another link. */}
              <Link
                href={p.path}
                className="group chamfer flex h-full flex-col bg-white transition-transform duration-300 [--cut:26px] hover:-translate-y-1.5"
              >
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <span className="font-display absolute top-4 right-4 bg-ink px-2.5 py-1 text-sm text-hivis">
                    {p.n}
                  </span>
                  <IconTile name={p.icon} className="absolute bottom-4 left-5" />
                </div>
                <HazardBand className="h-1.5" />
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl leading-tight text-ink sm:text-[1.4rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 grid gap-2.5">
                    {p.covers.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-2.5 text-sm font-semibold text-ink"
                      >
                        <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center bg-hivis text-ink">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-1 flex-wrap items-end justify-between gap-4 border-t border-ink/10 pt-5">
                    <span className="font-display inline-block rounded-sm bg-go/10 px-2.5 py-1.5 text-sm text-go ring-1 ring-go/25">
                      {p.from}
                    </span>
                    <span className="chamfer inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[0.72rem] font-bold tracking-[0.08em] text-paper uppercase transition-colors duration-300 [--cut:8px] group-hover:bg-hivis group-hover:text-ink">
                      View page
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== WHY METRO ============================== */

function WhyMetro() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24">
      <div aria-hidden className="pattern-grid absolute inset-0" />
      <div className="container-wide relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading index="02" tone="dark" eyebrow={hub.why.eyebrow} title={hub.why.title} />
          <Reveal className="mt-8 hidden lg:block">
            <div className="chamfer relative aspect-[4/3] overflow-hidden [--cut:30px]">
              <img
                src="/images/site-hoarding.jpg"
                alt="Metro Partial Demolition site hoarding reading Work in Progress"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sharedGuarantees.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 0.07}>
              <div className="chamfer flex h-full flex-col bg-white/[0.05] p-6 ring-1 ring-white/10 [--cut:22px] sm:p-7">
                <IconTile name={g.icon} />
                <h3 className="font-display mt-6 text-[1.05rem] leading-tight">{g.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/65">{g.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== HELPERS ============================== */

/** One button per service page — used where the hub ends on an action. */
function ServiceButtons({ className = "", tone }: { className?: string; tone: "dark" | "yellow" }) {
  return (
    <Reveal className={`flex flex-col flex-wrap gap-3 sm:flex-row ${className}`}>
      {servicePages.map((s) => (
        <CtaButton
          key={s.path}
          to={s.path}
          variant="yellow"
          size="md"
        >
          {s.short}
        </CtaButton>
      ))}
      <CtaButton
        href={SITE.phoneHref}
        variant={tone === "yellow" ? "outlineDark" : "outlineLight"}
        size="md"
        icon="phone"
      >
        Call {SITE.phone}
      </CtaButton>
    </Reveal>
  );
}
