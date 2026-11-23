"use client";

import { type MouseEventHandler, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Site-wide call to action.
 *
 * Built like a site sign: a label block and a separate square "arrow cell",
 * with the top-left corner cut at 45° (guideline "Shape 1"). On hover a
 * contrasting fill wipes in behind the label and the arrow shoots out and back.
 */
const ctaVariants = cva(
  "group/cta relative inline-flex select-none items-stretch overflow-hidden font-bold uppercase tracking-[0.08em] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hivis focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 motion-reduce:transform-none chamfer [--cut:12px]",
  {
    variants: {
      variant: {
        primary: "bg-go text-white",
        yellow: "bg-hivis text-ink",
        white: "bg-white text-ink ring-1 ring-inset ring-ink/10",
        dark: "bg-ink text-paper",
        outlineLight: "bg-white/5 text-paper ring-1 ring-inset ring-paper/35",
        outlineDark: "bg-transparent text-ink ring-1 ring-inset ring-ink/30",
      },
      size: {
        sm: "text-[0.7rem]",
        md: "text-[0.75rem]",
        lg: "text-[0.8rem] sm:text-[0.85rem]",
      },
      fullWidth: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "lg", fullWidth: false },
  },
);

type CtaVariant = NonNullable<VariantProps<typeof ctaVariants>["variant"]>;
type CtaSize = NonNullable<VariantProps<typeof ctaVariants>["size"]>;

const STYLE: Record<CtaVariant, { fill: string; hoverText: string; cell: string }> = {
  // The yellow inset frame keeps the off-black arrow cell attached to the
  // button on off-black bands, where an unframed cell vanished into the page.
  primary: {
    fill: "bg-ink",
    hoverText: "group-hover/cta:text-go",
    cell: "bg-ink text-go ring-[3px] ring-inset ring-go",
  },
  // Brand yellow, for service links that shouldn't compete with the green quote/call buttons.
  yellow: {
    fill: "bg-ink",
    hoverText: "group-hover/cta:text-hivis",
    cell: "bg-ink text-hivis ring-[3px] ring-inset ring-hivis",
  },
  white: {
    fill: "bg-ink",
    hoverText: "group-hover/cta:text-paper",
    cell: "bg-ink text-white",
  },
  // Same reasoning in reverse: this variant sits on the yellow band.
  dark: {
    fill: "bg-hivis",
    hoverText: "group-hover/cta:text-ink",
    cell: "bg-hivis text-ink ring-[3px] ring-inset ring-ink",
  },
  outlineLight: {
    fill: "bg-paper",
    hoverText: "group-hover/cta:text-ink",
    cell: "bg-hivis text-ink",
  },
  outlineDark: {
    fill: "bg-ink",
    hoverText: "group-hover/cta:text-paper",
    cell: "bg-ink text-hivis",
  },
};

const PAD: Record<CtaSize, { label: string; cell: string }> = {
  sm: { label: "px-4 py-2.5", cell: "w-9" },
  md: { label: "px-5 py-3.5", cell: "w-11" },
  lg: { label: "px-6 py-4 sm:px-7", cell: "w-12 sm:w-14" },
};

export type CtaButtonProps = VariantProps<typeof ctaVariants> & {
  children: ReactNode;
  className?: string;
  /** Trailing cell: an arrow (default), a phone, or none. */
  icon?: "arrow" | "phone" | false;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
};

export function CtaButton({
  children,
  className,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  icon = "arrow",
  to,
  href,
  ...rest
}: CtaButtonProps) {
  // Call buttons are conversion actions too, so the outline styles become the
  // solid green primary whenever the button dials the phone.
  // The black "dark" style was getting lost on the yellow bands, so it renders as
  // the green primary too: every quote, service and call button is the same green.
  const v: CtaVariant =
    variant === "dark" ||
    (icon === "phone" && (variant === "outlineLight" || variant === "outlineDark"))
      ? "primary"
      : (variant ?? "primary");
  const s: CtaSize = size ?? "lg";
  const style = STYLE[v];
  const Glyph = icon === "phone" ? Phone : ArrowRight;
  const classes = cn(ctaVariants({ variant: v, size, fullWidth }), className);

  const inner = (
    <>
      <span
        className={cn(
          "relative flex flex-1 items-center justify-center overflow-hidden",
          PAD[s].label,
        )}
      >
        {/* Fill that wipes in from the left behind the label. Decorative. */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -translate-x-[101%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0 motion-reduce:hidden",
            style.fill,
          )}
        />
        <span
          className={cn(
            "relative z-10 text-center leading-tight transition-colors duration-500",
            style.hoverText,
          )}
        >
          {children}
        </span>
      </span>
      {icon && (
        <span
          aria-hidden
          className={cn(
            "relative flex shrink-0 items-center justify-center overflow-hidden",
            PAD[s].cell,
            style.cell,
          )}
        >
          {icon === "arrow" ? (
            <>
              <Glyph
                className="h-4 w-4 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-[220%]"
                strokeWidth={2.5}
              />
              <Glyph
                className="absolute h-4 w-4 -translate-x-[220%] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-0"
                strokeWidth={2.5}
              />
            </>
          ) : (
            <Glyph
              className="h-4 w-4 transition-transform duration-300 group-hover/cta:rotate-12"
              strokeWidth={2.5}
            />
          )}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link href={to} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}
