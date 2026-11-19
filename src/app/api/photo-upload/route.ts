import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { ACCEPTED_TYPES, MAX_FILE_BYTES, UPLOAD_FOLDER } from "@/lib/photo-upload";

/**
 * Issues short-lived Vercel Blob upload tokens for the quote form's photo field.
 *
 * The browser uploads each photo straight to Blob storage (so large phone photos
 * never pass through this function); this route only authorises the upload. It
 * is what keeps BLOB_READ_WRITE_TOKEN on the server, and it is where the limits
 * are enforced — the browser's own checks can be bypassed, these cannot.
 */
export async function POST(request: Request): Promise<NextResponse> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("[photo-upload] BLOB_READ_WRITE_TOKEN is not set — photo uploads are off.");
    return NextResponse.json({ error: "Photo uploads are not configured." }, { status: 503 });
  }

  let body: HandleUploadBody;
  try {
    body = (await request.json()) as HandleUploadBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  try {
    const json = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith(`${UPLOAD_FOLDER}/`)) {
          throw new Error("Uploads are only allowed into the quote photo folder.");
        }
        return {
          allowedContentTypes: ACCEPTED_TYPES,
          maximumSizeInBytes: MAX_FILE_BYTES,
          // Random suffix: two customers' "IMG_0001.jpg" never collide, and the
          // public URL can't be guessed from the file name.
          addRandomSuffix: true,
          validUntil: Date.now() + 10 * 60 * 1000,
        };
      },
    });
    return NextResponse.json(json);
  } catch (error) {
    console.error("[photo-upload] token request rejected:", error);
    return NextResponse.json({ error: "Upload not allowed." }, { status: 400 });
  }
}
