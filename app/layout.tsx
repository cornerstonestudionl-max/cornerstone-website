import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealProvider } from "@/components/reveal";
import { Analytics } from "@vercel/analytics/next";
import { site, BUILD_DAYS } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · websites voor ondernemers, live in ${BUILD_DAYS} dagen`,
    template: `%s · ${site.name}`,
  },
  description: `Websitebouwer in ${site.city}. Vaste prijs, vaste opleverdatum: je nieuwe website staat over ${BUILD_DAYS} dagen live. Niet gehaald, dan vervalt de laatste termijn.`,
  keywords: [
    "website laten maken",
    `webdesign ${site.city}`,
    "website voor ondernemers",
    "websitebouwer MKB",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · live in ${BUILD_DAYS} dagen`,
    description: `Vaste prijs, vaste opleverdatum. Niet gehaald, dan vervalt de laatste termijn.`,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: `Websitebouwer in ${site.city}. Websites voor ondernemers, live in ${BUILD_DAYS} dagen.`,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  areaServed: site.region,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "NL" },
  priceRange: "€€",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F0EA" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1B18" },
  ],
};

/**
 * Draait vóór de eerste paint, dus je ziet nooit een flits van het verkeerde
 * thema. Eigen keuze gaat voor; is die er niet, dan volgen we het systeem.
 * De sleutel moet gelijk blijven aan THEME_KEY in components/theme-toggle.tsx.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('cornerstone-thema');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="nl"
      data-theme="dark"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-ink text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#hoofdinhoud"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-clay-deep focus:px-4 focus:py-2 focus:text-sm focus:text-on-accent"
        >
          Naar de inhoud
        </a>
        <RevealProvider>
          <SiteHeader />
          <main id="hoofdinhoud">{children}</main>
          <SiteFooter />
        </RevealProvider>
        {/* Bezoekersstatistieken zonder cookies. Zie LEESWIJZER.md, punt 8. */}
        <Analytics />
      </body>
    </html>
  );
}
