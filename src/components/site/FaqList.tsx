import { Plus } from "lucide-react";

/**
 * FAQ list on native <details>/<summary>: every answer is in the server HTML
 * (crawlable, works with JS off), and the first one opens by default.
 */
export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="w-full border-t-2 border-ink">
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0} className="group border-b border-ink/12">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left [&::-webkit-details-marker]:hidden sm:py-6">
            <span className="flex gap-4">
              <span className="font-display mt-0.5 hidden text-sm text-ink/35 sm:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1rem] leading-snug font-bold text-ink transition-colors group-hover:text-graphite sm:text-lg">
                {f.q}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center bg-plaster text-ink transition-colors duration-300 group-open:bg-hivis"
            >
              <Plus
                className="h-4 w-4 transition-transform duration-300 group-open:rotate-45"
                strokeWidth={2.5}
              />
            </span>
          </summary>
          <p className="pr-12 pb-6 text-[0.97rem] leading-relaxed text-muted-foreground sm:pl-9 sm:text-base">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
