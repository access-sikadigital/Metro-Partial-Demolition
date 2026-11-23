// Hands a submitted lead from the quote form to its thank-you page, so the
// conversion fires once per real submission (not on refresh or a direct visit)
// and carries hashed email/phone for Google Ads enhanced conversions.
//
// Nothing readable leaves the browser: email and phone are normalised and
// SHA-256 hashed here, in the format Google Ads expects.

import { normaliseAuPhone } from "./phone";

const KEY = "metro_pending_lead";

export type PendingLead = {
  lead_id: string;
  service: string;
  sha256_email_address: string;
  sha256_phone_number: string;
};

async function sha256(value: string): Promise<string> {
  if (!value || typeof crypto === "undefined" || !crypto.subtle) return "";
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function newLeadId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

/** Called by the form just before it redirects to the thank-you page. */
export async function stashLeadForThankYou(input: {
  leadId: string;
  email: string;
  phone: string;
  services: string[];
}): Promise<void> {
  try {
    const phone = normaliseAuPhone(input.phone);
    const lead: PendingLead = {
      lead_id: input.leadId,
      service: input.services.join(","),
      sha256_email_address: await sha256(input.email.trim().toLowerCase()),
      sha256_phone_number: phone.startsWith("+") ? await sha256(phone) : "",
    };
    sessionStorage.setItem(KEY, JSON.stringify(lead));
  } catch {
    /* storage or crypto unavailable — the thank-you page falls back to a plain event */
  }
}

/**
 * Called once by the thank-you page.
 * - a lead object → a real submission, fire the conversion with it
 * - null          → refresh or direct visit, fire nothing
 * - "unknown"     → storage is blocked, fire a plain conversion rather than lose it
 */
export function takePendingLead(): PendingLead | null | "unknown" {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    sessionStorage.removeItem(KEY);
    return JSON.parse(raw) as PendingLead;
  } catch {
    return "unknown";
  }
}
