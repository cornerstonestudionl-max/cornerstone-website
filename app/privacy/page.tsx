import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Welke gegevens ${site.name} verwerkt, waarom, en hoe lang ze bewaard worden.`,
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacyverklaring" updated="augustus 2026">
      <LegalSection title="Wie is verantwoordelijk">
        <p>
          {site.name}, ingeschreven bij de Kamer van Koophandel onder nummer {site.kvk},
          gevestigd in {site.city}. Vragen over je gegevens? Mail naar{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-cream underline decoration-clay decoration-2 underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Welke gegevens ik verwerk">
        <p>
          Alleen wat je zelf achterlaat: je naam, e-mailadres, telefoonnummer,
          bedrijfsnaam en wat je in het contactformulier invult. Verder niets. Ik koop
          geen gegevens in en ik combineer ze niet met andere bronnen.
        </p>
      </LegalSection>

      <LegalSection title="Waarvoor ik ze gebruik">
        <p>
          Om contact met je op te nemen, een offerte te maken, en als je klant wordt: om
          het werk uit te voeren en te factureren. Ik gebruik je gegevens niet voor
          reclame en verkoop ze aan niemand.
        </p>
      </LegalSection>

      <LegalSection title="Bezoekersstatistieken">
        <p>
          Ik meet hoeveel mensen de site bezoeken en welke pagina&apos;s ze bekijken, maar
          zonder cookies en zonder dat individuele bezoekers herleidbaar zijn. Daarom
          krijg je op deze site ook geen cookiemelding: er valt niets te accepteren.
        </p>
      </LegalSection>

      <LegalSection title="Hoe lang ik ze bewaar">
        <p>
          Aanvragen die niet tot een opdracht leiden: één jaar. Gegevens van klanten:
          zeven jaar, omdat de Belastingdienst dat voorschrijft voor de administratie.
        </p>
      </LegalSection>

      <LegalSection title="Wie ze verder ziet">
        <p>
          Alleen partijen die nodig zijn om de site en de administratie te laten werken:
          de hostingpartij, de mailservice die het contactformulier verstuurt, en mijn
          boekhoudprogramma. Met elk van die partijen is een verwerkersovereenkomst
          gesloten. Ze staan allemaal in de
          Europese Unie of vallen onder een geldige doorgifteregeling.
        </p>
      </LegalSection>

      <LegalSection title="Jouw rechten">
        <p>
          Je mag opvragen welke gegevens ik van je heb, ze laten corrigeren of laten
          wissen, en bezwaar maken tegen de verwerking. Eén mail is genoeg en je hoort
          binnen vier weken iets. Kom je er met mij niet uit, dan kun je een klacht
          indienen bij de Autoriteit Persoonsgegevens.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
