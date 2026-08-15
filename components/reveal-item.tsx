import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Vertraging in milliseconden, voor het trapsgewijs verschijnen. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Server component — zet alleen de klasse en de vertraging.
 * Het werk gebeurt in RevealProvider.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
