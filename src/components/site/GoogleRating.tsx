import { Star } from "lucide-react";
import { TRUST } from "@/lib/site-data";
import { cn } from "@/lib/utils";

/** The Google "G", in Google's own colours — it's their mark, not ours to recolour. */
export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"
      />
    </svg>
  );
}

export function Stars({ className, count = 5 }: { className?: string; count?: number }) {
  return (
    <span className={cn("flex items-center gap-0.5 text-hivis", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
      ))}
    </span>
  );
}

/** True once Metro's real Google rating, review count and profile link are in TRUST. */
export const hasGoogleRating =
  TRUST.reviewsVerified && TRUST.rating !== "" && TRUST.reviewCount > 0;

/**
 * The white Google pill at the top of the hero, as on Demo Bros:
 * "G 4.9 ★★★★★ 54 Google reviews". Links to the Google Business Profile.
 * Renders nothing until `hasGoogleRating` — a made-up rating on an ad landing
 * page is a Google Ads misrepresentation and consumer-law problem.
 */
export function GoogleRatingPill({ className }: { className?: string }) {
  if (!hasGoogleRating) return null;
  const label = `Rated ${TRUST.rating} out of 5 from ${TRUST.reviewCount} Google reviews`;
  const inner = (
    <>
      <GoogleG className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
      <span className="text-sm leading-none font-bold text-ink">{TRUST.rating}</span>
      <Stars className="[&_svg]:h-[13px] [&_svg]:w-[13px] sm:[&_svg]:h-[15px] sm:[&_svg]:w-[15px]" />
      <span className="text-[0.75rem] leading-none whitespace-nowrap text-ink/60">
        {TRUST.reviewCount} <span className="hidden sm:inline">Google </span>reviews
      </span>
    </>
  );
  const cls = cn(
    "inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-ink/10 sm:gap-2.5 sm:px-3.5",
    className,
  );
  return TRUST.googleReviewsUrl ? (
    <a
      href={TRUST.googleReviewsUrl}
      target="_blank"
      rel="noopener"
      aria-label={`${label} (opens Google)`}
      className={cn(cls, "transition-shadow hover:shadow-md")}
    >
      {inner}
    </a>
  ) : (
    <span className={cls} aria-label={label}>
      {inner}
    </span>
  );
}

/** "G 4.9 ★★★★★ · 48 Google reviews". Only render once TRUST.reviewsVerified is true. */
export function GoogleRatingBadge({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-3.5 py-2.5",
        dark ? "bg-white/[0.06] ring-1 ring-white/10" : "bg-white ring-1 ring-ink/10",
        className,
      )}
      aria-label={`Rated ${TRUST.rating} out of 5 from ${TRUST.reviewCount} Google reviews`}
    >
      <span
        className={cn("flex h-9 w-9 items-center justify-center", dark ? "bg-white" : "bg-plaster")}
      >
        <GoogleG className="h-5 w-5" />
      </span>
      <span className="flex flex-col">
        <span className="flex items-center gap-2">
          <span
            className={cn("font-display text-lg leading-none", dark ? "text-paper" : "text-ink")}
          >
            {TRUST.rating}
          </span>
          <Stars />
        </span>
        <span className={cn("mt-1 text-xs", dark ? "text-paper/55" : "text-ink/55")}>
          {TRUST.reviewCount} Google reviews
        </span>
      </span>
    </div>
  );
}
