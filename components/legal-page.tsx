import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { SHOW_TODO_NOTICES } from "@/lib/site";

/**
 * Opmaak voor de juridische pagina's. Bewust smal gezet en rustig —
 * dit zijn pagina's die gelezen moeten kunnen worden, niet bekeken.
 */
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-40 pb-28 sm:pt-48 lg:pt-52">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-8 text-h1 text-balance">{title}</h1>
          <p className="mt-6 font-mono text-[0.75rem] tracking-[0.1em] text-stone">
            Laatst bijgewerkt: {updated}
          </p>

          {/* Verschijnt alleen met SHOW_TODO_NOTICES aan. Zie lib/site.ts. */}
          {SHOW_TODO_NOTICES ? (
          <div className="mt-10 rounded-[3px] border border-dashed border-line-strong p-6">
            <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-clay-bright uppercase">
              Nog te controleren
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
              Dit is een opzet die past bij hoe Cornerstone Studio werkt, geen
              juridisch advies. Laat dit nakijken voordat je de site live zet, bij de Kamer van
              Koophandel of een jurist. De aangepaste gegevens vul je in{" "}
              <span className="font-mono text-cream">lib/site.ts</span> in.
            </p>
          </div>
          ) : null}

          <div className="mt-14 space-y-12">{children}</div>
        </div>
      </Container>
    </section>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-h3 text-balance">{title}</h2>
      <div className="mt-4 space-y-4 text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
        {children}
      </div>
    </div>
  );
}
