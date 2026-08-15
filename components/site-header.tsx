"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui";
import { nav, BUILD_DAYS } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/88 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="Naar de homepage"
            className="-my-2 flex shrink-0 items-center py-2"
          >
            <Logo />
          </Link>

          <nav aria-label="Hoofdmenu" className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.9375rem] transition-colors duration-300 ${
                    active ? "text-cream" : "text-cream-dim hover:text-cream"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-clay"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-stone uppercase">
              Live in {BUILD_DAYS} dagen
            </span>
            <ThemeToggle />
            <Link
              href="/gesprek"
              className="rounded-[3px] bg-clay-deep px-5 py-2.5 text-[0.9375rem] font-medium text-on-accent transition-colors duration-300 hover:bg-clay-press"
            >
              Gesprek aanvragen
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobiel-menu"
              className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] text-cream"
            >
              <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
              <span aria-hidden="true" className="relative block h-4 w-6">
                <span
                  className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                    open ? "top-[7px] rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-6 bg-current transition-all duration-300 ${
                    open ? "top-[7px] -rotate-45" : "top-[13px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobiel menu */}
      <div
        id="mobiel-menu"
        hidden={!open}
        className="border-t border-line bg-ink lg:hidden"
      >
        <Container className="py-8">
          <nav aria-label="Menu" className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 font-display text-2xl text-cream"
                style={{
                  animation: open
                    ? `rise-in 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms both`
                    : undefined,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/gesprek"
            className="mt-8 flex items-center justify-center rounded-[3px] bg-clay-deep px-6 py-4 font-medium text-on-accent"
          >
            Gesprek aanvragen
          </Link>
        </Container>
      </div>
    </header>
  );
}
