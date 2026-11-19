import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-data";

/**
 * A brand icon from /public/icons, tinted by `currentColor`.
 *
 * The guideline icons are solid single-colour SVGs, so they're applied as a CSS
 * mask rather than an <img> — that way one file serves yellow-on-black,
 * black-on-yellow and grey-on-paper without shipping three copies.
 */
export function BrandIcon({ name, className }: { name: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("brand-icon h-6 w-6", className)}
      style={{ "--icon": `url(/icons/${name}.svg)` } as CSSProperties}
    />
  );
}

/**
 * The primary logo. `on` names the background it sits on — the guidelines give
 * a separate artwork for each (white METRO on dark, off-black METRO on light);
 * recolouring one with CSS would be "altering the colours", which the
 * unacceptable-use page rules out.
 */
export function Logo({
  on = "dark",
  variant = "primary",
  className,
}: {
  on?: "dark" | "light";
  variant?: "primary" | "wordmark";
  className?: string;
}) {
  const src = `/brand/${variant === "primary" ? "logo" : "wordmark"}-on-${on}.svg`;
  const size = variant === "primary" ? { width: 800, height: 389 } : { width: 800, height: 183 };
  return <img src={src} alt={SITE.name} className={cn("h-auto w-auto", className)} {...size} />;
}

/** A yellow chamfered tile holding a brand icon — the card icon device. */
export function IconTile({
  name,
  className,
  iconClassName,
  tone = "yellow",
}: {
  name: string;
  className?: string;
  iconClassName?: string;
  tone?: "yellow" | "ink" | "paper";
}) {
  const tones = {
    yellow: "bg-hivis text-ink",
    ink: "bg-ink text-hivis",
    paper: "bg-paper text-ink",
  } as const;
  return (
    <span
      className={cn(
        "chamfer inline-flex h-14 w-14 shrink-0 items-center justify-center [--cut:12px]",
        tones[tone],
        className,
      )}
    >
      <BrandIcon name={name} className={cn("h-8 w-8", iconClassName)} />
    </span>
  );
}

/** A band of hazard stripe. Decorative. */
export function HazardBand({
  className,
  animated = false,
  inverted = false,
}: {
  className?: string;
  animated?: boolean;
  /** Black stripes on yellow is the default; inverted swaps the pair. */
  inverted?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "hazard h-3",
        animated && "animate-hazard",
        inverted && "[--hz-a:var(--ink)] [--hz-b:var(--hivis)]",
        className,
      )}
    />
  );
}

/** The guideline "Bricks" element, tinted by currentColor. Decorative. */
export function Bricks({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("brand-icon pointer-events-none", className)}
      style={{ "--icon": "url(/brand/bricks.svg)" } as CSSProperties}
    />
  );
}
