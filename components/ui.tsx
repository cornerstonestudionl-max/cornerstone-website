import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------
   Container
   ------------------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[76rem] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------
   Pijl — SVG in plaats van een tekstpijl, zodat hij op elk platform
   hetzelfde staat en meebeweegt met de knop.
   ------------------------------------------------------------------------- */

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      className={`h-4 w-4 shrink-0 ${className}`}
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

/* -------------------------------------------------------------------------
   Eyebrow — het clay-blokje uit het logo als opsommingsteken
   ------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  className = "",
  tone = "stone",
}: {
  children: ReactNode;
  className?: string;
  tone?: "stone" | "ink";
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-label font-medium uppercase ${
        tone === "ink" ? "text-ink/70" : "text-stone"
      } ${className}`}
    >
      <span aria-hidden="true" className="block h-[7px] w-[7px] rounded-[1.5px] bg-clay" />
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------
   Knoppen — hoekig zoals het merkteken, niet rond
   ------------------------------------------------------------------------- */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ink" | "ghostInk";
  className?: string;
  external?: boolean;
};

const buttonBase =
  "group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-[3px] px-6 py-3.5 font-sans text-[0.9375rem] font-medium transition-[background-color,border-color,transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const buttonVariants = {
  primary: "bg-clay-deep text-on-accent hover:bg-clay-press hover:-translate-y-0.5",
  ghost: "border border-line-strong text-cream hover:border-cream hover:-translate-y-0.5",
  ink: "bg-ink text-cream hover:bg-ink-raise hover:-translate-y-0.5",
  ghostInk:
    "border border-line-dark text-ink hover:border-ink hover:-translate-y-0.5",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;

  const inner = (
    <>
      {children}
      <Arrow className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

/* -------------------------------------------------------------------------
   Sectie — één plek waar de verticale ritmiek vandaan komt
   ------------------------------------------------------------------------- */

export function Section({
  children,
  className = "",
  id,
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ink" | "cream" | "raise" | "deep";
}) {
  const tones = {
    ink: "bg-ink text-cream",
    raise: "bg-ink-raise text-cream",
    deep: "bg-ink-deep text-cream",
    cream: "on-cream bg-cream text-ink",
  } as const;

  return (
    <section id={id} className={`py-24 sm:py-32 lg:py-40 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------
   Sectiekop
   ------------------------------------------------------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "ink",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Eyebrow tone={tone === "cream" ? "ink" : "stone"}>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-h2 text-balance">{title}</h2>
      {intro ? (
        <p
          className={`mt-6 text-lead text-pretty ${
            tone === "cream" ? "text-ink/75" : "text-cream-dim"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
