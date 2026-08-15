/**
 * Alle bedrijfsgegevens en teksten op één plek.
 * Wil je iets op de site veranderen, dan begin je hier.
 */

export const site = {
  name: "Cornerstone Studio",
  founder: "Rafael",
  city: "Amsterdam",
  region: "Amsterdam en omstreken",

  email: "info@cornerstonestudio.nl",
  phone: "06 82 59 32 40",
  phoneHref: "+31682593240",
  whatsapp: "31682593240",

  domain: "cornerstonestudio.nl",
  url: "https://cornerstonestudio.nl",

  /** Cornerstone Studio is een handelsnaam van Guide to Safety. */
  legalName: "Guide to Safety",
  kvk: "86401491",
  vat: "NL004239403B08",
  iban: "NL54RABO0386377049",

  tagline: "Een website die je bedrijf draagt.",
} as const;

/** Het aantal dagen waar de hele propositie op rust. */
export const BUILD_DAYS = 14;

/**
 * Toon je de projectprijzen op de site?
 *
 * Staat aan omdat een vanafprijs de mensen met een budget van 400 euro
 * eruit filtert voordat ze in je agenda staan. Zet 'm op false en alle
 * bedragen bij de pakketten verdwijnen. De onderhoudsprijzen blijven staan.
 */
export const SHOW_PROJECT_PRICES = true;

export const nav = [
  { href: "/werkwijze", label: "Werkwijze" },
  { href: "/werk", label: "Werk" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over", label: "Over" },
] as const;

// ---------------------------------------------------------------------------
// Pakketten
// ---------------------------------------------------------------------------

export type Package = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  pitch: string;
  featured?: boolean;
  includes: string[];
};

export const packages: Package[] = [
  {
    id: "start",
    name: "Start",
    price: "€1.750",
    priceNote: "eenmalig",
    pitch: "Voor wie snel van een verouderde site af wil.",
    includes: [
      "4 tot 5 pagina's",
      "Live op dag 14",
      "Jij levert de teksten, ik redigeer ze",
      "Jouw eigen foto's",
      "Technisch vindbaar in Google",
      "Teksten zelf aanpasbaar",
    ],
  },
  {
    id: "compleet",
    name: "Compleet",
    price: "€2.950",
    priceNote: "eenmalig",
    pitch: "De site waar de meeste bedrijven bij uitkomen.",
    featured: true,
    includes: [
      "8 tot 10 pagina's",
      "Live op dag 14",
      "Alle teksten door mij geschreven",
      "Beeldregie en selectie",
      "Lokale SEO en je Google Bedrijfsprofiel ingericht",
      "Offerteformulier en WhatsApp-knop",
      "Teksten en pagina's zelf aanpasbaar",
    ],
  },
  {
    id: "groei",
    name: "Groei",
    price: "vanaf €4.500",
    priceNote: "eenmalig",
    pitch: "Meer diensten, meer vestigingen, meer nodig.",
    includes: [
      "12 pagina's of meer",
      "Live in 3 tot 4 weken",
      "Fotoshoot bij je op locatie",
      "Landingspagina per dienst en per plaats",
      "Koppelingen met je eigen systemen",
      "Meertalig mogelijk",
      "Volledig zelf te beheren",
    ],
  },
];

// ---------------------------------------------------------------------------
// Onderhoud
// ---------------------------------------------------------------------------

export type Plan = {
  id: string;
  name: string;
  price: string;
  pitch: string;
  featured?: boolean;
  includes: string[];
};

export const plans: Plan[] = [
  {
    id: "basis",
    name: "Basis",
    price: "€39",
    pitch: "Je site staat er, veilig en snel.",
    includes: [
      "Hosting, SSL en dagelijkse back-ups",
      "Updates en beveiliging",
      "Monitoring, ik weet het voordat jij het merkt",
    ],
  },
  {
    id: "actief",
    name: "Actief",
    price: "€89",
    pitch: "Alles uit Basis, plus een site die meebeweegt.",
    featured: true,
    includes: [
      "Hosting, SSL en dagelijkse back-ups",
      "Updates en beveiliging",
      "Monitoring, ik weet het voordat jij het merkt",
      "Eén uur wijzigingen per maand",
      "Maandrapport: bezoekers en aanvragen",
    ],
  },
  {
    id: "partner",
    name: "Partner",
    price: "€189",
    pitch: "Ik werk elke maand aan je vindbaarheid.",
    includes: [
      "Alles uit Actief",
      "Drie uur wijzigingen per maand",
      "Lokale SEO die maandelijks bijgehouden wordt",
      "Nieuwe pagina's voor nieuwe diensten",
    ],
  },
];

// ---------------------------------------------------------------------------
// De veertien dagen
// ---------------------------------------------------------------------------

export type Phase = {
  days: string;
  from: number;
  to: number;
  title: string;
  summary: string;
  you: string;
  me: string;
  done: string;
};

export const phases: Phase[] = [
  {
    days: "Dag 1",
    from: 1,
    to: 1,
    title: "We gaan zitten",
    summary:
      "Twee uur aan tafel. Wie je klanten zijn, welke opdrachten je meer wilt, wat er nu misgaat. Alle beslissingen die later vertraging opleveren nemen we vandaag.",
    you: "Twee uur vrijmaken en eerlijk zijn over wat er niet werkt.",
    me: "Vragen stellen tot ik je bedrijf begrijp, en de structuur van de site vastleggen.",
    done: "Je weet precies welke pagina's je krijgt en wat erop staat.",
  },
  {
    days: "Dag 2 tot 3",
    from: 2,
    to: 3,
    title: "De woorden eerst",
    summary:
      "Teksten schrijf ik voordat er iets ontworpen is. Andersom ontwerp je lege dozen die je later moet vullen met wat er toevallig past.",
    you: "Meelezen en corrigeren waar ik je vak verkeerd omschrijf.",
    me: "Elke pagina schrijven, in jouw taal, gericht op de klant die je wilt.",
    done: "Alle teksten staan vast en zijn door jou goedgekeurd.",
  },
  {
    days: "Dag 4 tot 6",
    from: 4,
    to: 6,
    title: "Het ontwerp",
    summary:
      "Eerst de homepage helemaal af, tot op de telefoon. Zit die goed, dan volgen de andere pagina's vanzelf.",
    you: "Eén keer kijken en zeggen wat je ervan vindt.",
    me: "Ontwerpen, jouw huisstijl doorvoeren, beeld selecteren.",
    done: "Je ziet je nieuwe site voor je, nog voordat er een regel code is.",
  },
  {
    days: "Dag 7 tot 12",
    from: 7,
    to: 12,
    title: "Bouwen",
    summary:
      "Zes dagen aaneengesloten. Geen andere klanten ertussendoor, en dat is precies waarom het in veertien dagen kan.",
    you: "Niets. Even niets, dat mag ook.",
    me: "Bouwen, testen op echte telefoons, snel maken, vindbaar maken.",
    done: "De site draait op een testadres dat alleen jij kunt zien.",
  },
  {
    days: "Dag 13",
    from: 13,
    to: 13,
    title: "Jouw ronde",
    summary:
      "Je loopt er met een frisse blik doorheen en noteert alles wat je opvalt. Ik werk je lijst dezelfde dag weg.",
    you: "Kritisch zijn. Liever nu dan volgende maand.",
    me: "Je punten verwerken, tot ze op zijn.",
    done: "Er staat niets meer op je lijstje.",
  },
  {
    days: "Dag 14",
    from: 14,
    to: 14,
    title: "Live",
    summary:
      "Je domein wijst naar de nieuwe site, je Google Bedrijfsprofiel klopt, en je krijgt uitgelegd hoe je zelf teksten aanpast.",
    you: "Het aan je klanten laten zien.",
    me: "Live zetten, overdragen, en daarna bereikbaar blijven.",
    done: "Je site is van jou. Inclusief het domein.",
  },
];

// ---------------------------------------------------------------------------
// Werk
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  client: string;
  sector: string;
  concept: boolean;
  headline: string;
  problem: string;
  approach: string;
  outcome: string;
  palette: [string, string];
};

export const projects: Project[] = [
  {
    slug: "van-doorn-installatietechniek",
    client: "Van Doorn Installatietechniek",
    sector: "Warmtepompen en cv",
    concept: true,
    headline: "Van vier aanvragen per maand naar een agenda die vol staat",
    problem:
      "De bestaande site was acht jaar oud, werkte niet op een telefoon en noemde warmtepompen nergens. Daar komt inmiddels de helft van de omzet vandaan.",
    approach:
      "Een aparte pagina per dienst, per werkgebied vindbaar gemaakt, en een offerteformulier dat vraagt naar het soort woning in plaats van naar een algemeen bericht.",
    outcome:
      "Concept, gemaakt op eigen initiatief om te laten zien wat er mogelijk is.",
    palette: ["#1F3A34", "#C1633D"],
  },
  {
    slug: "praktijk-de-hoogstraat",
    client: "Praktijk de Hoogstraat",
    sector: "Fysiotherapie",
    concept: true,
    headline: "Een praktijk waar je zonder bellen een afspraak maakt",
    problem:
      "Nieuwe patiënten moesten bellen tijdens openingstijden. Wie 's avonds op de site kwam kon niets en kwam nooit meer terug.",
    approach:
      "Direct afspraken inplannen vanaf elke pagina, behandelingen in gewone taal uitgelegd, en de therapeuten met naam en gezicht in beeld.",
    outcome:
      "Concept, gemaakt op eigen initiatief om te laten zien wat er mogelijk is.",
    palette: ["#22304A", "#C1633D"],
  },
  {
    slug: "bouwbedrijf-mereveld",
    client: "Bouwbedrijf Mereveld",
    sector: "Verbouw en aanbouw",
    concept: true,
    headline: "Vakwerk dat je eindelijk kunt zien",
    problem:
      "Dertig jaar aan mooie projecten, en op de site stonden vier foto's van een steiger. Het bewijs was er wel, het stond alleen nergens.",
    approach:
      "Elk project als een verhaal van voor naar na, met budget en doorlooptijd erbij. Dat laatste doet niemand in de bouw, en het is precies wat mensen willen weten.",
    outcome:
      "Concept, gemaakt op eigen initiatief om te laten zien wat er mogelijk is.",
    palette: ["#3A2E26", "#C1633D"],
  },
];

// ---------------------------------------------------------------------------
// Veelgestelde vragen
// ---------------------------------------------------------------------------

export const faqs = [
  {
    q: "Veertien dagen, wordt dat niet gewoon een sjabloon?",
    a: "Nee. Het kan zo snel omdat ik één klant tegelijk aanneem en alle beslissingen op dag 1 neem, niet omdat ik ergens een thema koop. Bij een bureau ben jij project nummer zeven van de maand en blijft je werk liggen tussen dat van anderen. Bij mij ligt er niets tussen.",
  },
  {
    q: "Wat gebeurt er als je het niet haalt?",
    a: "Dan vervalt de laatste termijn en betaal je de helft. De veertien dagen gaan lopen op het moment dat ik alle content van je heb: foto's, teksten, toegang. Lever jij later aan, dan schuift de datum mee. Dat zetten we vooraf op papier, zodat het voor allebei duidelijk is.",
  },
  {
    q: "Kan ik zelf teksten aanpassen?",
    a: "Ja. Je krijgt op dag 14 uitgelegd hoe je teksten, prijzen en foto's zelf wijzigt. Daar heb je geen cursus of technische kennis voor nodig. Wil je liever dat ik het doe, dan zit dat in het Actief-abonnement.",
  },
  {
    q: "Van wie is de website?",
    a: "Van jou. De site, het domein, de teksten, de foto's: alles staat op jouw naam en jij hebt de inloggegevens. Stap je ooit over naar iemand anders, dan neem je alles mee. Ik vind dat zo vanzelfsprekend dat het bijna gek is dat ik het moet opschrijven, maar genoeg ondernemers hebben het anders meegemaakt.",
  },
  {
    q: "Waarom is het onderhoud verplicht?",
    a: "Een website is geen schilderij. Er komen beveiligingsupdates, browsers veranderen, en Google verandert waar het op let. Zonder onderhoud staat je site over twee jaar stil terwijl de wereld doorloopt. De eerste twaalf maanden zitten in het contract, daarna zeg je maandelijks op als je wilt.",
  },
  {
    q: "Wat kost het?",
    a: "Een site begint bij €1.750, de meeste bedrijven komen uit rond €2.950. Het onderhoud begint bij €39 per maand. Kun je het bedrag niet in één keer missen, dan kan het gespreid: één maandbedrag, 24 maanden, hosting en onderhoud inbegrepen.",
  },
];
