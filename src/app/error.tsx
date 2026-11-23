"use client";

import { useEffect } from "react";
import { CtaButton } from "@/components/site/CtaButton";
import { SITE, hasPhone } from "@/lib/site-data";

/** Route-level error boundary: a branded fallback with a retry and, once verified, the phone. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-paper px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-ink">This page didn’t load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or give us a call.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaButton size="sm" icon={false} onClick={() => reset()}>
            Try again
          </CtaButton>
          {hasPhone && (
            <CtaButton href={SITE.phoneHref} variant="outlineDark" size="sm" icon="phone">
              Call Metro
            </CtaButton>
          )}
        </div>
      </div>
    </section>
  );
}
