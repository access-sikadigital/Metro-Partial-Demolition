import { TRUST } from "@/lib/site-data";
import { GoogleG, Stars } from "./GoogleRating";

/**
 * Small floating "Google Rating" card, bottom-left on desktop (same idea as
 * Demo Bros). Hidden until TRUST.reviewsVerified is true, so it never shows a
 * placeholder rating as if it were Metro's real Google score.
 */
export function GoogleRatingSticky() {
  if (!TRUST.reviewsVerified) return null;
  const body = (
    <>
      <GoogleG className="h-7 w-7 shrink-0" />
      <span className="flex flex-col">
        <span className="text-xs font-semibold text-ink">Google Rating</span>
        <span className="mt-0.5 flex items-center gap-1.5">
          <span className="text-sm font-bold text-ink">{TRUST.rating}</span>
          <Stars />
        </span>
        <span className="mt-0.5 text-[0.7rem] text-ink/55">
          Based on {TRUST.reviewCount} reviews
        </span>
      </span>
    </>
  );
  const cls =
    "fixed bottom-6 left-6 z-50 hidden items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-xl shadow-black/20 ring-1 ring-ink/10 lg:flex";
  return TRUST.googleReviewsUrl ? (
    <a href={TRUST.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}
