"use client";

import { useCallback, useRef, useState } from "react";
import type { BeforeAfterPair } from "@/lib/before-after";

/**
 * One before/after job card. With separate before and after photos it's a
 * drag-to-compare slider (mouse, touch or arrow keys); with only a combined
 * side-by-side image it falls back to the static split card.
 */
export function BeforeAfterCard({ pair }: { pair: BeforeAfterPair }) {
  return (
    <figure className="h-full overflow-hidden rounded-xl border border-border bg-card">
      {pair.before && pair.after ? (
        <CompareSlider before={pair.before} after={pair.after} label={pair.label} />
      ) : (
        <div className="relative">
          <img
            src={pair.image}
            alt={`${pair.label}: before on the left, after on the right`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="aspect-[3/2] w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-primary/80"
          />
          <Chip side="before" />
          <Chip side="after" />
        </div>
      )}
      <figcaption className="border-t border-border px-3 py-3 sm:px-5 sm:py-4">
        <span className="font-heading block text-[0.8rem] leading-tight sm:text-base">
          {pair.label}
        </span>
        <span className="mt-1 block text-[0.75rem] text-muted-foreground sm:mt-0.5 sm:text-sm">
          {pair.note}
        </span>
      </figcaption>
    </figure>
  );
}

function Chip({ side }: { side: "before" | "after" }) {
  return side === "before" ? (
    <span className="pointer-events-none absolute top-2 left-2 z-10 rounded-sm bg-charcoal/80 px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.12em] text-secondary uppercase backdrop-blur sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:tracking-[0.18em]">
      Before
    </span>
  ) : (
    <span className="pointer-events-none absolute top-2 right-2 z-10 rounded-sm bg-primary px-1.5 py-0.5 text-[0.75rem] font-bold tracking-[0.12em] text-primary-foreground uppercase sm:top-3 sm:right-3 sm:px-2.5 sm:py-1 sm:tracking-[0.18em]">
      After
    </span>
  );
}

function CompareSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={box}
      className="relative aspect-[3/2] w-full cursor-ew-resize touch-pan-y overflow-hidden select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* After fills the frame; before sits on top, clipped to the left of the divider. */}
      <img
        src={after}
        alt={`${label}, after`}
        loading="lazy"
        referrerPolicy="no-referrer"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={`${label}, before`}
        loading="lazy"
        referrerPolicy="no-referrer"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <Chip side="before" />
      <Chip side="after" />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-primary"
        style={{ left: `${pos}%` }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md"
        style={{ left: `${pos}%` }}
      >
        ↔
      </span>

      {/* Keyboard and screen-reader control for the same divider. */}
      <input
        type="range"
        min={0}
        max={100}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after: ${label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        onPointerDown={(e) => e.preventDefault()}
      />
    </div>
  );
}
