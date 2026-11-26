import type { ReactNode } from "react";
import { IS_PREVIEW } from "@/lib/preview";

/**
 * Wraps content that relies on figures Metro hasn't confirmed.
 * Live site: renders nothing. Preview: renders it inside a dashed outline with
 * a "Placeholder" label, so nobody mistakes it for approved content.
 */
export function Unconfirmed({ children, note }: { children: ReactNode; note?: string }) {
  if (!IS_PREVIEW) return null;
  return (
    <div className="relative outline-2 -outline-offset-4 outline-dashed outline-[#d97706]">
      <span className="absolute top-2 left-2 z-20 rounded bg-[#d97706] px-2 py-0.5 text-[0.7rem] font-bold tracking-wide text-white uppercase">
        Placeholder{note ? ` · ${note}` : " · needs Metro to confirm"}
      </span>
      {children}
    </div>
  );
}
