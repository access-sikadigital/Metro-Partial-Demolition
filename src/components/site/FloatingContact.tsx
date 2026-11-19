import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

/**
 * Desktop floating call button — one tap, one action. A plain tel: link, so it
 * works with JavaScript off and long-press copies the number. On phones the
 * sticky bottom bar already carries a call button, so this is `lg` and up.
 */
export function FloatingContact() {
  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Call ${SITE.phone}`}
      className="chamfer fixed right-6 bottom-6 z-50 hidden h-14 w-14 items-center justify-center bg-hivis text-ink shadow-xl shadow-black/30 transition-transform [--cut:12px] hover:-translate-y-0.5 lg:flex"
    >
      <Phone className="h-6 w-6" strokeWidth={2.25} />
    </a>
  );
}
