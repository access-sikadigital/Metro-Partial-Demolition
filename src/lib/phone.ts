// Shared by the server (GHL payload) and the browser (enhanced conversions),
// so both send the exact same E.164 number.

/**
 * Normalises Australian numbers to E.164, which GHL needs for SMS delivery and
 * for phone-based deduplication. "0412 345 678" → "+61412345678". Anything that
 * doesn't look like a recognisable AU number is passed through untouched so an
 * unusual-but-valid number is never mangled into a wrong one.
 */
export function normaliseAuPhone(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("+")) return "+" + trimmed.slice(1).replace(/\D/g, "");

  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("0")) return "+61" + digits.slice(1);
  if (digits.length === 11 && digits.startsWith("61")) return "+" + digits;
  if (digits.length === 9 && /^[23478]/.test(digits)) return "+61" + digits;
  return trimmed;
}
