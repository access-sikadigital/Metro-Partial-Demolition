"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type BaseSyntheticEvent } from "react";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { ImagePlus } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { MultiSelect } from "./MultiSelect";
import {
  SITE,
  CTA_LABEL,
  defaultServicesFor,
  quoteForm,
  quoteServiceOptions,
  thankYouPathFor,
} from "@/lib/site-data";
import { quoteSchema, type QuoteValues } from "@/lib/quote-schema";
import { submitLead } from "@/lib/lead.actions";
import { captureTracking, getTracking } from "@/lib/tracking";
import { newLeadId, stashLeadForThankYou } from "@/lib/conversion";
import { uploadPhotos, validateFiles } from "@/lib/photo-upload";
import { cn } from "@/lib/utils";

const baseInput =
  "w-full border-2 transition-colors duration-200 focus:outline-none focus:border-hivis";

/** Every colour decision lives here, so one form serves the hero card and the modal. */
const TONE = {
  light: {
    input: "border-ink/12 bg-white text-ink placeholder:text-ink/40 hover:border-ink/25",
    label: "text-ink",
    hint: "text-ink/60",
    muted: "text-ink/45",
    error: "text-destructive",
    dropzone: "border-ink/20 bg-plaster/60 text-ink hover:border-ink/40",
    panel: "border-ink/15 bg-white text-ink",
    option: "text-ink hover:bg-ink/[0.05]",
    chip: "bg-ink text-hivis",
  },
  dark: {
    input:
      "border-white/12 bg-white/[0.06] text-paper placeholder:text-paper/35 hover:border-white/30",
    label: "text-paper",
    hint: "text-paper/60",
    muted: "text-paper/45",
    error: "text-[#ff8a80]",
    dropzone: "border-white/20 bg-white/[0.04] text-paper hover:border-white/40",
    panel: "border-white/15 bg-[#1f1f1f] text-paper",
    option: "text-paper hover:bg-white/[0.06]",
    chip: "bg-hivis text-ink",
  },
} as const;

const WIDE = "sm:col-span-2";

/**
 * Single-step quote form. Identity first, then the job.
 *
 * Unchanged from the Demo Bros build underneath: zod validation shared with the
 * server function, a honeypot, first-touch UTM/click-id attribution, photos
 * uploaded straight to Cloudinary (only the URLs travel on), and the lead
 * forwarded to GoHighLevel. On success it redirects to /thank-you so the
 * conversion can be tracked as a page view.
 */
export function QuoteForm({
  compact = false,
  tone = "light",
  photos = true,
  comments = true,
}: {
  compact?: boolean;
  tone?: keyof typeof TONE;
  photos?: boolean;
  comments?: boolean;
}) {
  const t = TONE[tone];
  const labelClass = cn(
    "mb-1.5 block text-[0.75rem] font-bold tracking-[0.14em] uppercase",
    t.label,
  );
  const inputClass = cn(
    baseInput,
    t.input,
    compact ? "px-3.5 py-2.5 text-base" : "px-3.5 py-2.5 text-base sm:px-4 sm:py-3",
  );

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof quoteSchema>, unknown, QuoteValues>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
    defaultValues: { services: defaultServicesFor(pathname ?? "/"), timing: "" },
  });

  const servicesField = useController({ control, name: "services" });

  useEffect(() => {
    captureTracking();
  }, []);

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files ?? []);
    const problem = validateFiles(picked);
    setFileError(problem);
    setFiles(problem ? [] : picked);
  }

  /** Photo failures are noted for the crew, never allowed to block the lead. */
  function noteFor(count: number) {
    return `Customer attached ${count} photo(s) but the upload failed. Follow up for them.`;
  }

  const onSubmit = async (values: QuoteValues, event?: BaseSyntheticEvent) => {
    setErrorMsg(null);
    // The honeypot is read off the submitted form rather than a ref, so nothing
    // here touches a ref while the handler is being created during render.
    const form = event?.target as HTMLFormElement | undefined;
    const honeypot = form?.elements.namedItem("website") as HTMLInputElement | null;

    let photoUrls: string[] = [];
    let photoNote = "";
    if (photos) {
      const upload = await uploadPhotos(files);
      if (upload.ok) photoUrls = upload.urls;
      else photoNote = noteFor(files.length);
    }

    const failMessage = `Something went wrong sending your request. Please try again, or call us on ${SITE.phone} and we'll sort it straight away.`;
    const leadId = newLeadId();
    try {
      // Server Action — runs on the server, so GHL_WEBHOOK_URL never reaches
      // the browser and the POST to GoHighLevel isn't blocked by CORS.
      const result = await submitLead({
        ...values,
        timing: values.timing ?? "",
        photoUrls,
        photoNote,
        website: honeypot?.value ?? "",
        page: window.location.pathname,
        pageUrl: window.location.href,
        referrer: document.referrer,
        tracking: getTracking(),
        leadId,
      });
      if (!result.ok) {
        setErrorMsg(failMessage);
        return;
      }
      await stashLeadForThankYou({
        leadId,
        email: values.email,
        phone: values.phone,
        services: values.services,
      });
      // Each landing page has its own thank-you URL (a conversion per service).
      router.push(thankYouPathFor(window.location.pathname));
    } catch {
      setErrorMsg(failMessage);
    }
  };

  const err = (msg?: string, id?: string) =>
    msg ? (
      <p id={id} className={cn("mt-1.5 text-sm font-medium", t.error)}>
        {msg}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("relative grid sm:grid-cols-2", compact ? "gap-3" : "gap-3 sm:gap-4")}
    >
      {/* Honeypot: hidden from real users; bots that fill it are dropped server-side. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor={`q-website-${tone}`}>Website</label>
        <input
          id={`q-website-${tone}`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          name="website"
        />
      </div>

      <div>
        <label htmlFor={`q-name-${tone}`} className={labelClass}>
          Name
        </label>
        <input
          id={`q-name-${tone}`}
          autoComplete="name"
          placeholder="First and last name"
          className={inputClass}
          {...register("name")}
        />
        {err(errors.name?.message)}
      </div>

      <div>
        <label htmlFor={`q-phone-${tone}`} className={labelClass}>
          Phone
        </label>
        <input
          id={`q-phone-${tone}`}
          type="tel"
          autoComplete="tel"
          placeholder="04xx xxx xxx"
          className={inputClass}
          {...register("phone")}
        />
        {err(errors.phone?.message)}
      </div>

      <div>
        <label htmlFor={`q-email-${tone}`} className={labelClass}>
          Email
        </label>
        <input
          id={`q-email-${tone}`}
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          className={inputClass}
          {...register("email")}
        />
        {err(errors.email?.message)}
      </div>

      <div>
        <label htmlFor={`q-suburb-${tone}`} className={labelClass}>
          Suburb or postcode
        </label>
        <input
          id={`q-suburb-${tone}`}
          autoComplete="address-level2"
          placeholder="e.g. Brunswick"
          className={inputClass}
          {...register("suburb")}
        />
        {err(errors.suburb?.message)}
      </div>

      <div className={WIDE}>
        <label htmlFor={`q-services-${tone}`} className={labelClass}>
          What do you need done?{" "}
          <span className={cn("font-semibold normal-case tracking-normal", t.muted)}>
            (select all that apply)
          </span>
        </label>
        <MultiSelect
          id={`q-services-${tone}`}
          options={quoteServiceOptions}
          value={servicesField.field.value ?? []}
          onChange={servicesField.field.onChange}
          onBlur={servicesField.field.onBlur}
          invalid={Boolean(errors.services)}
          triggerClassName={inputClass}
          panelClassName={t.panel}
          optionClassName={t.option}
          chipClassName={t.chip}
        />
        {err(errors.services?.message, `q-services-${tone}-error`)}
      </div>

      {photos && (
        <div className={WIDE}>
          <label htmlFor={`q-photos-${tone}`} className={labelClass}>
            Photos of the job{" "}
            <span className={cn("font-semibold normal-case tracking-normal", t.muted)}>
              (optional, speeds up your price)
            </span>
          </label>
          <label
            htmlFor={`q-photos-${tone}`}
            className={cn(
              "flex items-center gap-3 border-2 border-dashed px-4 py-3 text-sm transition-colors",
              t.dropzone,
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-hivis text-ink">
              <ImagePlus className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              {files.length > 0 ? (
                <span className="font-semibold">
                  {files.length} photo{files.length > 1 ? "s" : ""} ready to send
                </span>
              ) : (
                <>
                  <span className="font-semibold">Add photos</span>{" "}
                  <span className={t.muted}>· up to 5, JPG or PNG</span>
                </>
              )}
            </span>
          </label>
          <input
            id={`q-photos-${tone}`}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            onChange={onFilesChange}
            className="sr-only"
          />
          {err(fileError ?? undefined)}
        </div>
      )}

      {comments && (
        <div className={WIDE}>
          <label htmlFor={`q-comments-${tone}`} className={labelClass}>
            Anything else?{" "}
            <span className={cn("font-semibold normal-case tracking-normal", t.muted)}>
              (optional)
            </span>
          </label>
          <textarea
            id={`q-comments-${tone}`}
            rows={compact ? 3 : 3}
            placeholder="Which walls or rooms, access, living in the house, built before 1990…"
            className={inputClass}
            {...register("comments")}
          />
        </div>
      )}

      <div className={cn(WIDE, "pt-1")}>
        <CtaButton
          type="submit"
          disabled={isSubmitting}
          fullWidth
          icon={isSubmitting ? false : "arrow"}
          size={compact ? "md" : "lg"}
          variant="primary"
        >
          {isSubmitting ? "Sending…" : CTA_LABEL}
        </CtaButton>
        {errorMsg && (
          <p role="alert" className={cn("mt-4 text-sm font-medium", t.error)}>
            {errorMsg}
          </p>
        )}
        <p className={cn("text-xs", t.hint, compact ? "mt-3" : "mt-3.5")}>
          {quoteForm.fine} <strong className="font-bold">{quoteForm.fineEmphasis}</strong>
        </p>
      </div>
    </form>
  );
}
