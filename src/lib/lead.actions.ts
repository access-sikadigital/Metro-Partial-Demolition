"use server";

import { leadSchema, type LeadInput } from "./quote-schema";
import { quoteServiceOptions, timingOptions } from "./site-data";
import { normaliseAuPhone, sendToWebhook } from "./ghl";

function labelFor(options: { value: string; label: string }[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

function splitName(full: string): { first_name: string; last_name: string } {
  const parts = full.trim().split(/\s+/);
  const first_name = parts.shift() ?? "";
  return { first_name, last_name: parts.join(" ") };
}

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

/**
 * Receives a quote submission and forwards it to the GoHighLevel inbound
 * webhook. A Next.js Server Action: it only ever runs on the server, so
 * GHL_WEBHOOK_URL never reaches the browser, and the payload is re-validated
 * here with the same zod schema the form uses in the browser.
 *
 * Returns a result rather than throwing — a thrown error in a Server Action
 * reaches the client stripped of its message in production anyway.
 */
export async function submitLead(input: LeadInput): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Invalid submission." };
  }
  const data = parsed.data;

  // Honeypot: a real person never sees or fills `website`. If it's filled,
  // it's a bot — pretend success and quietly drop it.
  if (data.website && data.website.trim() !== "") {
    return { ok: true };
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    // Backstop: log the full lead so it's recoverable from the platform logs
    // even before the webhook URL is configured.
    console.error(
      "[submitLead] GHL_WEBHOOK_URL is not set — lead NOT forwarded:",
      JSON.stringify(data),
    );
    return { ok: false, error: "Lead destination is not configured." };
  }

  const { first_name, last_name } = splitName(data.name);
  const payload: Record<string, string> = {
    first_name,
    last_name,
    full_name: data.name,
    email: data.email,
    phone: normaliseAuPhone(data.phone),
    suburb: data.suburb,
    // Multi-select: every ticked option survives the trip. `service` is the
    // human-readable list; slugs and count ride alongside for filtering.
    service: data.services.map((s) => labelFor(quoteServiceOptions, s)).join(", "),
    service_slugs: data.services.join(","),
    service_count: String(data.services.length),
    timing: data.timing ? labelFor(timingOptions, data.timing) : "",
    timing_slug: data.timing,
    details: data.comments ?? "",
    source: "Website Landing Page Quote Form",
    page: data.page || "",
    page_url: data.pageUrl || "",
    referrer: data.referrer || "",
    submitted_at: new Date().toISOString(),
    // Flat keys only: the GHL trigger mapper cannot read nested values.
    photo_count: String(data.photoUrls?.length ?? 0),
    photo_urls: (data.photoUrls ?? []).join(" "),
    photo_note: data.photoNote ?? "",
    // UTM / click-id attribution (utm_source, gclid, fbclid, ...) if present.
    ...data.tracking,
  };

  const result = await sendToWebhook(webhookUrl, payload);
  if (!result.ok) {
    console.error(
      `[submitLead] GHL webhook failed (${result.status}): ${result.detail} — Lead:`,
      JSON.stringify(payload),
    );
    return { ok: false, error: "Failed to send lead." };
  }

  return { ok: true };
}
