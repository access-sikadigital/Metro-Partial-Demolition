import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Logo, HazardBand } from "./Brand";
import { SITE, footer, servicePages } from "@/lib/site-data";

/**
 * Footer: brand, the three service landing pages, coverage, contact and the
 * legal line. No long sitemap — the service links are the only navigation.
 *
 * Bottom padding reserves the height of the sticky mobile CTA bar.
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-[4.5rem] text-paper lg:pb-0">
      <HazardBand className="h-2.5" />
      <div
        aria-hidden
        className="pattern-grid pointer-events-none absolute inset-0 top-2.5 opacity-60"
      />

      <div className="container-wide relative grid gap-10 py-12 sm:py-14 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1fr_0.9fr] lg:gap-12">
        <div>
          <Logo on="dark" className="h-16 sm:h-20" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">{footer.blurb}</p>
        </div>

        <nav aria-label="Our services">
          <p className="eyebrow [--eyebrow-color:var(--hivis)]">Our services</p>
          <ul className="mt-4 grid gap-2.5">
            {servicePages.map((s) => (
              <li key={s.path}>
                <Link
                  href={s.path}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-paper/80 transition-colors hover:text-hivis"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-hivis transition-transform group-hover:translate-x-0.5" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow [--eyebrow-color:var(--hivis)]">Where we work</p>
          <p className="mt-4 text-sm leading-relaxed text-paper/65">{footer.coverage}</p>
        </div>

        <div>
          <p className="eyebrow [--eyebrow-color:var(--hivis)]">Talk to us</p>
          <a
            href={SITE.phoneHref}
            className="font-display mt-4 flex items-center gap-3 text-xl text-paper transition-colors hover:text-hivis sm:text-2xl"
          >
            <Phone className="h-5 w-5 shrink-0 text-hivis" />
            {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 flex items-center gap-3 text-sm break-all text-paper/65 transition-colors hover:text-paper"
          >
            <Mail className="h-4 w-4 shrink-0 text-hivis" />
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/45 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="text-center sm:text-right">
            {footer.legal}
            <span className="mx-2 text-paper/25" aria-hidden="true">·</span>
            Marketing by{" "}
            <a
              href="https://sikadigital.com/"
              target="_blank"
              rel="noopener"
              className="font-semibold text-paper/80 underline-offset-4 transition-colors hover:text-hivis hover:underline"
            >
              Sika Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
