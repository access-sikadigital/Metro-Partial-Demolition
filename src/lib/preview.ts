/**
 * Preview mode: true on Vercel preview deploys and `npm run dev`, false on the
 * live site (and false whenever Vercel's env var is missing, so it fails safe).
 *
 * In preview, figures Metro hasn't confirmed yet (Google rating and reviews,
 * liability, turnaround, starting prices, in-house asbestos, service area) are
 * shown with a "Placeholder" label so the layout can be reviewed. On the live
 * site they are hidden until Metro confirms them.
 */
export const IS_PREVIEW =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview" || process.env.NODE_ENV === "development";

/**
 * Placeholder phone for preview only, so the call buttons can be reviewed
 * before the GoHighLevel number is bought. Never used on the live site.
 */
export const PREVIEW_PHONE = { phone: "1300 000 000", phoneHref: "tel:1300000000" } as const;
