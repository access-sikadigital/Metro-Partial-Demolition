import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BeforeAfterCard } from "@/components/db/BeforeAfterCard";
import { SectionHeading } from "@/components/db/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { type BeforeAfterPair, beforeAfterFor, beforeAfterGrid } from "@/lib/before-after";

/**
 * Homepage before/afters (John, 27 Nov second call): only the four partial
 * demolition pairs, then a "See all our projects" link instead of a full
 * gallery.
 */
export function HomeBeforeAfter() {
  const pairs = beforeAfterFor("partial-demolition");
  if (pairs.length === 0) return null;
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading align="center" eyebrow="Before & after" title="Recent Metro jobs" />
        <PairGrid pairs={pairs} />
        <p className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 font-semibold underline-offset-4 hover:underline"
          >
            See all our projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </p>
      </div>
    </section>
  );
}

/** Every before/after pair across the partial demolition and strip-out pages. */
export function AllProjects() {
  const seen = new Set<string>();
  const pairs = [...beforeAfterFor("partial-demolition"), ...beforeAfterFor("strip-out")].filter(
    (p) => (seen.has(p.id) ? false : (seen.add(p.id), true)),
  );
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <h1 className="font-heading text-center text-3xl leading-tight uppercase sm:text-4xl lg:text-5xl">
          Before and after: Metro jobs around Melbourne
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Drag the divider on each photo to compare.
        </p>
        <PairGrid pairs={pairs} />
      </div>
    </section>
  );
}

function PairGrid({ pairs }: { pairs: BeforeAfterPair[] }) {
  return (
    <div className={`mt-10 grid gap-3 sm:gap-5 ${beforeAfterGrid(Math.min(pairs.length, 4))}`}>
      {pairs.map((pair, i) => (
        <Reveal key={pair.id} delay={(i % 4) * 0.05}>
          <BeforeAfterCard pair={pair} />
        </Reveal>
      ))}
    </div>
  );
}
