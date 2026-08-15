import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { site, BUILD_DAYS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: `De afspraken waaronder ${site.name} werkt: termijnen, de ${BUILD_DAYS}-dagengarantie, eigendom en onderhoud.`,
  robots: { index: false, follow: true },
};

export default function Voorwaarden() {
  return (
    <LegalPage
      eyebrow="Voorwaarden"
      title="Algemene voorwaarden"
      updated="augustus 2026"
    >
      <LegalSection title="Op wie ze van toepassing zijn">
        <p>
          Op alle offertes en opdrachten van {site.name}, KvK {site.kvk}, btw-nummer{" "}
          {site.vat}. Wijken we ergens van af, dan zetten we dat schriftelijk vast en
          gaat die afspraak voor.
        </p>
      </LegalSection>

      <LegalSection title="Offerte en opdracht">
        <p>
          Een offerte is 30 dagen geldig en vermeldt altijd de vaste prijs, wat erin zit
          en de opleverdatum. De opdracht begint zodra je schriftelijk akkoord geeft en
          de eerste termijn is voldaan.
        </p>
      </LegalSection>

      <LegalSection title={`De ${BUILD_DAYS}-dagengarantie`}>
        <p>
          De {BUILD_DAYS} werkdagen beginnen te lopen op de eerste werkdag nadat ik alle
          benodigde content van je heb ontvangen: teksten, beeldmateriaal en toegang tot
          je domein. Wat daaronder valt staat in de offerte.
        </p>
        <p>
          Sta je door mijn toedoen niet live op dag {BUILD_DAYS}, dan vervalt de laatste
          betalingstermijn. Vertraging die ontstaat doordat content later wordt
          aangeleverd of doordat feedback uitblijft, verschuift de opleverdatum met
          hetzelfde aantal dagen en laat de garantie vervallen.
        </p>
      </LegalSection>

      <LegalSection title="Betaling">
        <p>
          Vijftig procent bij aanvang, vijftig procent bij oplevering. Betaaltermijn is
          14 dagen. Bij gespreide betaling geldt het overeengekomen maandbedrag voor de
          afgesproken looptijd.
        </p>
        <p>
          Betalingen lopen via {site.iban} ten name van {site.legalName}. Dit
          rekeningnummer staat ook op elke factuur. Wijkt een rekeningnummer in een
          mail hiervan af, bel me dan even voordat je iets overmaakt.
        </p>
      </LegalSection>

      <LegalSection title="Wijzigingen tijdens het traject">
        <p>
          Eén feedbackronde op dag 13 zit bij de prijs in. Wil je onderweg iets toevoegen
          dat niet in de offerte staat, dan bespreken we eerst wat het kost en wat het
          met de opleverdatum doet. Ik voer niets uit voordat je daarmee akkoord bent.
        </p>
      </LegalSection>

      <LegalSection title="Eigendom">
        <p>
          Na volledige betaling is alles van jou: de website, de broncode, de teksten die
          ik voor je schreef, en de domeinnaam. Je krijgt alle inloggegevens en er blijft
          niets op mijn naam staan. Ik mag het werk wel tonen in mijn portfolio, tenzij je
          daar bezwaar tegen maakt.
        </p>
      </LegalSection>

      <LegalSection title="Onderhoud">
        <p>
          Een onderhoudsabonnement loopt de eerste 12 maanden en is daarna maandelijks
          opzegbaar met een opzegtermijn van één maand. Zeg je op, dan help ik je met het
          overzetten naar een andere partij en krijg je alles mee.
        </p>
      </LegalSection>

      <LegalSection title="Aansprakelijkheid">
        <p>
          Ik span me in om je site goed te laten werken, maar ik kan niet garanderen dat
          hij nooit uitvalt of dat je een bepaalde positie in Google haalt. Dat hangt van te
          veel dingen af waar ik niet over ga. Mijn aansprakelijkheid is beperkt tot het
          bedrag dat je voor de opdracht hebt betaald.
        </p>
      </LegalSection>

      <LegalSection title="Toepasselijk recht">
        <p>
          Op deze voorwaarden is Nederlands recht van toepassing. Komen we er samen niet
          uit, dan leggen we het voor aan de bevoegde rechter in het arrondissement waar
          {" "}{site.name} is gevestigd.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
