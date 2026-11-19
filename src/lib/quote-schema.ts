import { z } from "zod";

// Visible quote-form fields. Used by the QuoteForm's client-side resolver AND
// re-validated server-side inside the submitLead server function, so the browser
// and the server agree on exactly what a valid submission looks like.
//
// Shape comes from copy deck v8, section 02 (build note 2): a SINGLE step, with
// name, email, phone, suburb, job type and start date required, and photos and
// comments optional.
// Accepts common Australian formats — mobile (04xx) and landline (02/03/07/08),
// with optional +61 / 61 prefix and any spaces, dashes or brackets — and rejects
// anything that is not a real AU number. Kept in step with normaliseAuPhone in
// ghl.ts so the browser, the server and the GHL payload all agree.
function isAuPhone(raw: string): boolean {
  let d = raw.replace(/[^\d+]/g, "");
  if (d.startsWith("+61")) d = "0" + d.slice(3);
  else if (d.startsWith("61") && d.length === 11) d = "0" + d.slice(2);
  // 04 = mobile; 02/03/07/08 = landline. Rejects the rest (05, 06, 1300…).
  if (!/^0[23478]\d{8}$/.test(d)) return false;
  // Rejects obvious junk like 0444 444 444 or 0400 000 000.
  return !/^0\d(\d)\1{7}$/.test(d);
}

/**
 * First AND last name: at least two words, and the first and last word each
 * have two or more letters ("John Smith", "Mary-Jane O'Neil", "Li Ng").
 */
function hasFirstAndLastName(raw: string): boolean {
  const words = raw.trim().split(/\s+/);
  if (words.length < 2) return false;
  const letters = (w: string) => (w.match(/\p{L}/gu) ?? []).length;
  return letters(words[0]) >= 2 && letters(words[words.length - 1]) >= 2;
}

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100)
    // Letters (any language), spaces, hyphens, apostrophes and dots only — no
    // digits or other symbols. Must start with a letter.
    .regex(/^\p{L}[\p{L} .'-]*$/u, "Name can only contain letters")
    .refine(hasFirstAndLastName, "Please enter your first and last name"),
  // Required here, unlike earlier versions of this form. The deck makes it a
  // required field so a quote can actually be sent in writing.
  // Trimmed and lowercased so GHL matches repeat enquiries to the same contact.
  email: z.string().trim().toLowerCase().pipe(z.email("Please enter a valid email").max(255)),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number")
    .max(20)
    .refine(isAuPhone, "Enter a valid Australian phone number, e.g. 04xx xxx xxx"),
  suburb: z
    .string()
    .trim()
    .min(2, "Please enter your suburb or postcode")
    .max(100)
    // Letters, numbers, spaces and , . ' - only (covers "South Yarra" and "3141").
    .regex(/^[\p{L}\d][\p{L}\d ,.'-]*$/u, "Enter a valid suburb or postcode")
    // A suburb name ("Richmond", "Richmond 3121") or a 4-digit postcode — not
    // a random number like "323233".
    .refine(
      (v) => /\p{L}/u.test(v) || /^\d{4}$/.test(v),
      "Enter a suburb name or a 4-digit postcode",
    ),
  /**
   * MULTI-SELECT. Deck build note 2: the lead record must store every option
   * ticked, not just the first.
   *
   * Always an array, never a bare string — the MultiSelect control is driven
   * through a field controller that hands back the full selection on every
   * change, so there is no "one value or many" ambiguity to normalise here.
   */
  services: z.array(z.string()).min(1, "Please choose what you need done").max(20),
  timing: z.string().optional().default(""),
  comments: z.string().trim().max(2000).optional(),
});

export type QuoteValues = z.infer<typeof quoteSchema>;

// Full payload the browser sends to the server: the visible fields plus a spam
// honeypot and marketing attribution captured from the page/URL. Every extra
// field is optional so older cached clients never fail validation.
export const leadSchema = quoteSchema.extend({
  // Honeypot — hidden from real users; only bots fill it. Handled server-side.
  website: z.string().max(500).optional().default(""),
  page: z.string().max(300).optional().default(""),
  pageUrl: z.string().max(1000).optional().default(""),
  referrer: z.string().max(1000).optional().default(""),
  tracking: z.record(z.string(), z.string()).optional().default({}),
  /* Cloudinary URLs for any photos the customer attached. */
  photoUrls: z.array(z.string().max(500)).max(5).optional().default([]),
  photoNote: z.string().max(300).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
