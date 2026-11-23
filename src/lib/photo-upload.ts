/**
 * Photo upload for the quote form, via Vercel Blob.
 *
 * The quote goes to GoHighLevel as flat JSON, which cannot carry a file — so the
 * browser uploads each photo straight to Vercel Blob first, and only the
 * resulting public URLs are sent on with the lead (`photo_urls`).
 *
 * The browser asks /api/photo-upload for a short-lived token per file; that
 * route holds BLOB_READ_WRITE_TOKEN (added automatically when the Blob store is
 * connected to the Vercel project) and enforces the type and size limits below.
 *
 * A failed upload never blocks the lead: the form still submits and adds a
 * `photo_note` so the crew knows to ask for the photos.
 */

import { upload } from "@vercel/blob/client";

export const MAX_FILE_BYTES = 10 * 1024 * 1024;
export const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];
export const MAX_FILES = 5;
export const UPLOAD_FOLDER = "quote-photos";

export type UploadResult = { ok: true; urls: string[] } | { ok: false; reason: "failed" };

/** Rejects anything oversized or not an image, so the user hears about it here. */
export function validateFiles(files: File[]): string | null {
  if (files.length > MAX_FILES) return `Please choose ${MAX_FILES} photos or fewer.`;
  for (const file of files) {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return `${file.name} is not an image. JPG, PNG or WEBP please.`;
    }
    if (file.size > MAX_FILE_BYTES) {
      return `${file.name} is over 10MB. Please pick a smaller one.`;
    }
  }
  return null;
}

/** "My Kitchen (1).JPG" → "my-kitchen-1.jpg", so the stored URL stays clean. */
function safeName(name: string): string {
  const dot = name.lastIndexOf(".");
  const base = (dot > 0 ? name.slice(0, dot) : name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const ext =
    dot > 0
      ? name
          .slice(dot + 1)
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "")
      : "jpg";
  return `${base || "photo"}.${ext || "jpg"}`;
}

export async function uploadPhotos(files: File[]): Promise<UploadResult> {
  if (files.length === 0) return { ok: true, urls: [] };

  try {
    const urls = await Promise.all(
      files.map(async (file) => {
        const blob = await upload(`${UPLOAD_FOLDER}/${safeName(file.name)}`, file, {
          access: "public",
          handleUploadUrl: "/api/photo-upload",
          contentType: file.type,
        });
        return blob.url;
      }),
    );
    return { ok: true, urls };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
