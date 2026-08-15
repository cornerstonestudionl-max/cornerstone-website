"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/** Moet gelijk blijven aan de sleutel in het script in app/layout.tsx. */
export const THEME_KEY = "cornerstone-thema";

function apply(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme-switching", "");
  root.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* privémodus: dan onthouden we het gewoon niet */
  }
  window.setTimeout(() => root.removeAttribute("data-theme-switching"), 340);
}

/**
 * Een rail met een schuivend blok, hetzelfde blok als in het merkteken.
 * Het blok gaat naar de kant van het thema dat aan staat.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  /**
   * Er staan twee schakelaars in de header: één voor desktop, één voor mobiel.
   * Zonder deze observer houdt elk zijn eigen state bij en lopen ze uit de pas
   * zodra je het venster over het breekpunt sleept. Nu volgen ze allebei
   * gewoon het attribuut op <html>, wie het ook heeft gezet.
   */
  useEffect(() => {
    const lees = () =>
      setTheme(
        document.documentElement.getAttribute("data-theme") === "light"
          ? "light"
          : "dark",
      );
    lees();

    const observer = new MutationObserver(lees);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Volg het systeem zolang de bezoeker zelf nog niets gekozen heeft.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(THEME_KEY)) return;
      } catch {
        /* niets opgeslagen, dus volgen we het systeem */
      }
      const volgende: Theme = event.matches ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", volgende);
      setTheme(volgende);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const isLicht = theme === "light";
  const volgende: Theme = isLicht ? "dark" : "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLicht}
      onClick={() => {
        apply(volgende);
        setTheme(volgende);
      }}
      aria-label={
        theme === null
          ? "Wissel tussen licht en donker"
          : `Zet het ${volgende === "light" ? "lichte" : "donkere"} thema aan`
      }
      className={`group relative flex h-11 w-[4.75rem] shrink-0 cursor-pointer items-center rounded-[4px] border border-line bg-ink-raise p-1 transition-colors duration-300 hover:border-line-strong ${className}`}
    >
      {/* Het schuivende blok */}
      <span
        aria-hidden="true"
        className={`absolute top-1 bottom-1 w-[calc(50%_-_0.25rem)] rounded-[3px] bg-clay-deep transition-transform duration-[450ms] ease-[cubic-bezier(0.34,1.4,0.5,1)] ${
          isLicht ? "translate-x-0" : "translate-x-[calc(100%_+_0.25rem)]"
        }`}
      />

      {/* Zon */}
      <span
        aria-hidden="true"
        className={`relative z-10 flex flex-1 items-center justify-center transition-colors duration-300 ${
          isLicht ? "text-on-accent" : "text-stone group-hover:text-cream"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          className="h-[17px] w-[17px]"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.6v2.1M12 19.3v2.1M4.7 12H2.6M21.4 12h-2.1M6.1 6.1l1.5 1.5M16.4 16.4l1.5 1.5M17.9 6.1l-1.5 1.5M7.6 16.4l-1.5 1.5" />
        </svg>
      </span>

      {/* Maan */}
      <span
        aria-hidden="true"
        className={`relative z-10 flex flex-1 items-center justify-center transition-colors duration-300 ${
          isLicht ? "text-stone group-hover:text-cream" : "text-on-accent"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[17px] w-[17px]"
        >
          <path d="M20.4 14.2A8.6 8.6 0 0 1 9.8 3.6a8.6 8.6 0 1 0 10.6 10.6Z" />
        </svg>
      </span>
    </button>
  );
}
