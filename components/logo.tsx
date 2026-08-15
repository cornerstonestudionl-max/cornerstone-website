import { site } from "@/lib/site";

/**
 * Het merkteken: een hoeksteen (de L) met het clay-blok erin.
 * Padgegevens komen exact uit cornerstone-logos/icon/logo-icon-color.svg.
 */
export function LogoMark({
  className = "",
  blockClassName = "fill-clay",
}: {
  className?: string;
  blockClassName?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <path
        d="M 18 18 L 38 18 L 38 58 L 78 58 L 78 78 L 18 78 Z"
        fill="currentColor"
      />
      <rect x="47" y="27" width="27" height="27" rx="3" className={blockClassName} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0 text-cream" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-cream">
          Cornerstone
        </span>
        <span className="mt-[0.2em] font-sans text-[0.5rem] font-semibold tracking-[0.32em] text-stone">
          STUDIO
        </span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
