import { SectionHeading } from "@/components/db/SectionHeading";
import { IS_PREVIEW } from "@/lib/preview";

/**
 * "Our work": Metro's own job photos (shared by Metro on WhatsApp, gathered
 * by Vicky). PREVIEW ONLY for now: the photos load from Vicky's photo preview
 * until the original files are committed under public/images/our-work/.
 */
const VICKY = "https://metro-project-photo-preview.madebyvicky.chatgpt.site";

type Kind = "partial" | "strip";
const JOBS: { label: string; file: string; kind: Kind }[] = [
  { label: "Raised timber deck removal", file: "metro-3040", kind: "partial" },
  { label: "Granny flat removal", file: "metro-3065", kind: "partial" },
  { label: "Shed removal", file: "metro-3031", kind: "partial" },
  { label: "Rear extension", file: "metro-3029", kind: "partial" },
  { label: "Brick wall", file: "metro-3025", kind: "partial" },
  { label: "Brick garage", file: "metro-3034", kind: "partial" },
  { label: "Studio", file: "metro-3038", kind: "partial" },
  { label: "Carport", file: "metro-3045", kind: "partial" },
  { label: "Cubby house", file: "metro-3051", kind: "partial" },
  { label: "Driveway shed removal", file: "metro-3057", kind: "partial" },
  { label: "Granny flat beside the driveway", file: "metro-3059", kind: "partial" },
  { label: "Veranda", file: "metro-3061", kind: "partial" },
  { label: "Garden shed removal", file: "metro-3063", kind: "partial" },
  { label: "Double-storey veranda", file: "metro-3067", kind: "partial" },
  { label: "Excavator and outbuilding", file: "metro-3013", kind: "partial" },
  { label: "Subfloor removal", file: "metro-3043", kind: "partial" },
  { label: "Commercial concrete removal", file: "metro-3048", kind: "partial" },
  { label: "Extension and backyard clean-up", file: "metro-3044", kind: "partial" },
  { label: "Window-side kitchen strip-out", file: "metro-3018", kind: "strip" },
  { label: "Island kitchen strip-out", file: "metro-3020", kind: "strip" },
  { label: "Shopfront strip-out", file: "metro-3056", kind: "strip" },
  { label: "Bathroom wall strip-out", file: "metro-3054", kind: "strip" },
  { label: "Bathroom wall framing", file: "metro-3024", kind: "strip" },
];

export function OurWork({ kind }: { kind?: Kind }) {
  if (!IS_PREVIEW) return null;
  const jobs = kind ? JOBS.filter((j) => j.kind === kind) : JOBS;
  const showVideo = kind !== "partial";

  return (
    <section className="bg-muted/40 py-12 sm:py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow="Our work"
          title="Real Metro jobs around Melbourne"
        />

        {showVideo && (
          <figure className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border bg-card">
            <video
              src={`${VICKY}/metro-3050.mp4`}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-charcoal object-cover"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm">
              <span className="font-heading">Inside a full-house strip-out</span>
            </figcaption>
          </figure>
        )}

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {jobs.map((j) => (
            <li key={j.file} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={`${VICKY}/${j.file}-preview.webp`}
                alt={`${j.label}, a Metro job`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="aspect-[4/3] w-full object-cover"
              />
              <span className="font-heading block px-3 py-2.5 text-[0.8rem] leading-tight sm:text-sm">
                {j.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
