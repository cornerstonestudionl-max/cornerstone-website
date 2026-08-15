import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { Container, Eyebrow, Arrow } from "@/components/ui";
import { site, nav, BUILD_DAYS } from "@/lib/site";

const linkStijl =
  "inline-flex min-h-11 items-center text-[0.9375rem] text-cream-dim transition-colors duration-300 hover:text-cream";

export function SiteFooter() {
  const jaar = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-deep">
      <Container>
        <div className="grid gap-14 py-20 lg:grid-cols-[1.5fr_1fr_1.2fr] lg:py-24">
          <div>
            <LogoMark className="h-10 w-10 text-cream" />
            <p className="mt-6 max-w-xs font-display text-h3 text-balance">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-cream-dim">
              Websites voor ondernemers in {site.region}. Vaste prijs, vaste
              opleverdatum, live op dag {BUILD_DAYS}.
            </p>
          </div>

          <div>
            <Eyebrow>Pagina&apos;s</Eyebrow>
            <ul className="mt-4 space-y-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkStijl}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/gesprek"
                  className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] text-cream transition-colors duration-300 hover:text-clay-bright"
                >
                  Gesprek aanvragen
                  <Arrow className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Eyebrow>Contact</Eyebrow>
            <ul className="mt-4 space-y-0.5">
              <li>
                <a href={`tel:${site.phoneHref}`} className={linkStijl}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={linkStijl}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStijl}
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            <address className="mt-6 space-y-1.5 border-t border-line pt-6 font-mono text-[0.75rem] leading-relaxed text-stone not-italic">
              <p>Gevestigd in {site.city}</p>
              <p>KvK {site.kvk}</p>
              <p>Btw {site.vat}</p>
              <p className="pt-1.5 normal-case">
                Cornerstone Studio is een handelsnaam van {site.legalName}.
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.75rem] tracking-[0.08em] text-stone">
            © {jaar} {site.legalName}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center font-mono text-[0.75rem] tracking-[0.08em] text-stone transition-colors duration-300 hover:text-cream"
            >
              Privacy
            </Link>
            <Link
              href="/voorwaarden"
              className="inline-flex min-h-11 items-center font-mono text-[0.75rem] tracking-[0.08em] text-stone transition-colors duration-300 hover:text-cream"
            >
              Voorwaarden
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
