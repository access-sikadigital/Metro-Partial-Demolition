import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Logo, HazardBand } from "./Brand";
import { SITE, footer, hasPhone, servicePages } from "@/lib/site-data";

/**
 * Footer: brand line, the three service landing pages, Contact, and the
 * credit line. No long sitemap — these are the only navigation.
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

      <div className="container-wide relative grid gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-[1.3fr_1fr_0.9fr] lg:gap-12">
        <div>
          <Logo on="dark" className="h-14 sm:h-20" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65 sm:mt-5">
            {footer.blurb}
          </p>
        </div>

        <nav aria-label="Our services">
          <p className="eyebrow [--eyebrow-color:var(--hivis)]">Our services</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-0.5 sm:grid-cols-1">
            {servicePages.map((s) => (
              <li key={s.path}>
                <Link
                  href={s.path}
                  className="group inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-paper/80 transition-colors hover:text-hivis"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-hivis transition-transform group-hover:translate-x-0.5" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow [--eyebrow-color:var(--hivis)]">Talk to us</p>
          <ul className="mt-3 grid gap-0.5">
            <li>
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-paper/80 transition-colors hover:text-hivis"
              >
                <ArrowRight className="h-3.5 w-3.5 text-hivis transition-transform group-hover:translate-x-0.5" />
                Contact
              </Link>
            </li>
            {hasPhone && (
              <li>
                <a
                  href={SITE.phoneHref}
                  className="font-display flex min-h-11 items-center gap-3 text-xl text-paper transition-colors hover:text-hivis"
                >
                  <Phone className="h-5 w-5 shrink-0 text-hivis" />
                  {SITE.phone}
                </a>
              </li>
            )}
            {SITE.email && (
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex min-h-11 min-w-0 items-center gap-3 text-sm text-paper/65 transition-colors hover:text-paper"
                >
                  <Mail className="h-4 w-4 shrink-0 text-hivis" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/45 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="text-center sm:text-right">
            Marketing by{" "}
            <a
              href="https://sikadigital.com/"
              target="_blank"
              rel="noopener"
              className="font-semibold whitespace-nowrap text-paper/80 underline-offset-4 transition-colors hover:text-hivis hover:underline"
            >
              Sika Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
