import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Which band the heading sits on. */
export type SectionTone = "light" | "dark" | "yellow";

const TONE: Record<
  SectionTone,
  { index: string; rule: string; eyebrow: string; title: string; description: string }
> = {
  light: {
    index: "text-ink",
    rule: "bg-hivis",
    eyebrow: "[--eyebrow-color:var(--graphite)]",
    title: "text-ink",
    description: "text-muted-foreground",
  },
  dark: {
    index: "text-hivis",
    rule: "bg-hivis",
    eyebrow: "[--eyebrow-color:var(--concrete)]",
    title: "text-paper",
    description: "text-paper/70",
  },
  yellow: {
    index: "text-ink",
    rule: "bg-ink",
    eyebrow: "[--eyebrow-color:var(--ink)]",
    title: "text-ink",
    description: "text-ink/80",
  },
};

/**
 * Section heading modelled on the guideline divider pages: a section number,
 * a short rule and a tracked label, then the Menseal headline.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: SectionTone;
  className?: string;
}) {
  const t = TONE[tone];
  const centered = align === "center";

  return (
    <Reveal
      className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", t.eyebrow, className)}
    >
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        {index && <span className={cn("font-display text-sm sm:text-base", t.index)}>{index}</span>}
        <span aria-hidden className={cn("h-[3px] w-8 sm:w-10", t.rule)} />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2
        className={cn(
          "font-display mt-4 text-[1.45rem] sm:mt-5 sm:text-balance sm:text-[2rem] lg:text-[2.6rem]",
          t.title,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-[0.98rem] leading-relaxed sm:text-lg", t.description)}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
