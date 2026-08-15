# Cornerstone Studio — leeswijzer

De site staat. Dit bestand vertelt je wat er nog moet gebeuren, hoe je hem
draait, en waar je wat aanpast.

---

## Draaien

```bash
npm run dev
```

Bouwen voor productie: `npm run build`. Die build slaagt schoon.

---

## Wat er staat

| Pagina | Route |
|---|---|
| Home | `/` |
| Werkwijze | `/werkwijze` |
| Werk | `/werk` en `/werk/[slug]` |
| Diensten | `/diensten` |
| Over | `/over` |
| Contact | `/gesprek` |
| Privacy en voorwaarden | `/privacy`, `/voorwaarden` |

Je gegevens staan allemaal in `lib/site.ts`: Amsterdam, 06 82 59 32 40,
info@cornerstonestudio.nl, KvK 86401491, btw NL004239403B08. In de footer staat
dat Cornerstone Studio een handelsnaam van Guide to Safety is. Het
rekeningnummer staat op `/voorwaarden` bij de betaalafspraken, niet in de
footer: dat is de logische plek en het beperkt de kans dat iemand het uit je
site plukt voor een nepfactuur.

---

## Dit moet je nog doen

### 1. Je foto plaatsen

Zet je portret als **`public/rafael.png`** neer, staand formaat, ongeveer 4:5,
minimaal 1000 pixels breed. Er staat nu een effen crèmekleurige vulling op die
plek, zodat er niets kapot staat. Zodra jij het bestand overschrijft staat je
foto op de homepage en op `/over`.

Je foto heeft een lichte achtergrond, dus het vlak eronder is bewust vast crème
in plaats van meewisselend met het thema. In het lichte thema loopt je portret
daardoor naadloos over in de pagina, in het donkere thema wordt het een
lichtvlak dat de aandacht pakt. Achter het beeld zit een clay blok, hetzelfde
blok als in je logo.

### 2. Het contactformulier: werkt, maar nog in testmodus

Bezoekers kiezen geen moment meer in een agenda. Ze vullen een formulier in op
`/gesprek` en jij krijgt een mail met naam, bedrijf, telefoon, hun huidige
website, wanneer ze live willen en hun verhaal. Druk je op beantwoorden, dan zit
je direct in hun inbox.

De koppeling met Resend staat en is getest: er zijn twee testberichten
doorgekomen. Wat er in zit: een verborgen veld tegen bots, maximaal vijf
inzendingen per tien minuten per bezoeker, controle op de verplichte velden en
op het e-mailadres, en een nette foutmelding met je telefoonnummer als er iets
misgaat.

**Twee dingen moeten nog gebeuren voordat dit live kan.**

**a. Vervang de API-sleutel.** De sleutel in `.env.local` is in platte tekst
gedeeld in een chatgesprek. Ga naar resend.com, verwijder die sleutel, maak een
nieuwe aan en zet die in `.env.local`. Zolang de oude bestaat kan iedereen die
hem heeft gezien mail versturen die van jou lijkt te komen.

**b. Verifieer je eigen domein.** Nu staat de afzender op
`onboarding@resend.dev`. Dat is de gedeelde testafzender van Resend en die mag
alleen bezorgen op het e-mailadres van je eigen Resend-account. Daarom staat er
tijdelijk een `CONTACT_TO_EMAIL` in `.env.local` die naar je Gmail wijst.

Verifieer `cornerstonestudio.nl` in Resend (een paar DNS-regels bij je
domeinprovider), en zet dan:

```
CONTACT_FROM_EMAIL=formulier@cornerstonestudio.nl
```

De regel `CONTACT_TO_EMAIL` mag daarna weg. Dan gaat alles vanzelf naar
info@cornerstonestudio.nl, en komt je mail bovendien veel minder snel in de
spambox terecht, want dan staat er een afzender op jouw eigen domein.

Tot 3.000 mails per maand kost Resend niets.

### 3. Je verhaal op `/over`

Er staat een gestippeld kader met "deze alinea moet jij schrijven". Dat is
expres: ik ga geen achtergrond voor je verzinnen die je later in een gesprek
niet kunt waarmaken. Wat je hiervoor deed, en wat je daaruit meeneemt.

### 4. De juridische pagina's laten nakijken

`/privacy` en `/voorwaarden` hebben allebei een zichtbare melding "nog te
controleren". Wat er staat past bij hoe je werkt, maar het is geen juridisch
advies. Laat het bekijken en haal dan die melding weg uit
`components/legal-page.tsx`.

---

## Statistieken: wie komt er op de site

`@vercel/analytics` staat geïnstalleerd en actief. Zodra de site op Vercel
draait zie je alles in het dashboard:

**vercel.com → je project → tabblad Analytics**

Daar staat hoeveel mensen er komen, welke pagina's ze bekijken, waar ze vandaan
komen (Google, LinkedIn, direct), uit welk land, en op wat voor apparaat.

### Moet daar een cookiemelding bij?

**Nee.** Vercel Analytics zet geen cookies en slaat geen gegevens op waarmee een
individuele bezoeker te herleiden is. Onder de AVG is toestemming alleen nodig
voor cookies of persoonsgegevens, en die zijn hier geen van beide in het spel.
Daarom staat er ook een alinea over in je privacyverklaring die uitlegt waaróm
er geen melding is. Dat scheelt je bezoeker een klik en het staat professioneel.

Zou je later Google Analytics toevoegen, dan verandert dat: dat ding zet wél
cookies en dan heb je een cookiebanner met echte weigermogelijkheid nodig. Mijn
advies is om dat niet te doen.

### Nog één ding dat je wilt

Meld je site aan bij **Google Search Console** (gratis,
search.google.com/search-console). Analytics vertelt je wie er kwam; Search
Console vertelt je op welke zoekwoorden mensen jou vonden en waar je staat. Voor
iemand die lokale SEO verkoopt is dat het belangrijkste dashboard dat er is.

---

## Zelf teksten aanpassen: het CMS

Op dit moment staat alle tekst in `lib/site.ts` en in de pagina's. Dat is
overzichtelijk, maar het is code: je moet het bestand aanpassen en opnieuw
publiceren.

**Dit heb ik nog niet gebouwd, en dat heeft een reden.** Een CMS koppelen kan ik
niet afmaken zonder jouw account: er moet een project onder jouw naam
aangemaakt worden en die inloggegevens heb ik niet en wil ik ook niet hebben.
Zeg het woord en ik bouw het af zodra jij dat project hebt aangemaakt.

**Mijn advies: Sanity.** Gratis voor een site van deze omvang. Je krijgt een
beheeromgeving op `cornerstonestudio.nl/studio` waar je teksten, prijzen,
pakketten en projecten aanpast zonder ook maar iets van code te zien. Het is ook
wat je bij klantprojecten gaat gebruiken, dus je leert het één keer en gebruikt
het daarna elke keer. Dat maakt de belofte "teksten zelf aanpasbaar" uit je
pakketten waar.

Wat het inhoudt als je groen licht geeft: schema's voor pakketten, abonnementen,
de veertien dagen, projecten en de vragenlijst, de studio op `/studio`, en de
pagina's die hun tekst uit Sanity halen in plaats van uit `lib/site.ts`. Reken
op een dag werk.

Alternatief als je het simpel wilt houden: laat het zoals het is en stuur mij je
wijzigingen. Voor een site die je een paar keer per jaar aanpast is dat eerlijk
gezegd niet gek.

---

## Het ontwerp

### Licht en donker

De schakelaar staat rechtsboven in de header, ook op mobiel. Wie niets kiest
krijgt automatisch het thema van zijn besturingssysteem; wie wel kiest, krijgt
die keuze de volgende keer terug. Een script in `app/layout.tsx` draait voor de
eerste paint, zodat je nooit een flits van het verkeerde thema ziet.

**Belangrijk als je zelf gaat aanpassen.** De site kent twee soorten vlakken:
het draagvlak (het grootste deel van de pagina) en het tegenvlak (de secties die
het ritme breken). In het donkere thema is het draagvlak charcoal en het
tegenvlak crème, in het lichte thema precies andersom. Daarom betekenen de
klassen niet wat ze lijken te betekenen:

| Klasse | Betekent | Donker | Licht |
|---|---|---|---|
| `bg-ink` | draagvlak | charcoal | crème |
| `text-cream` | tekst op draagvlak | crème | charcoal |
| `bg-cream` | tegenvlak | crème | charcoal |
| `text-ink` | tekst op tegenvlak | charcoal | crème |
| `text-stone` | gedempte tekst | `#A99C8B` | `#665C50` |

Ze wisselen samen om, dus de verhouding blijft altijd kloppen. Twee tokens
wisselen bewust niet mee, omdat ze op vlakken liggen die in beide thema's donker
blijven: `text-on-accent` (altijd crème, voor clay-knoppen) en `bg-scrim` (het
waas achter de Concept-labels). Zet je daar `text-cream` neer, dan wordt je
knoptekst in het lichte thema donker op donker.

### Kleuren

Uit je logopakket: Charcoal `#1E1B18`, Clay `#C1633D`, Warm Cream `#F4F0EA`,
Stone `#A99C8B`.

Clay bestaat in vier varianten, want het merk-clay haalt 4.18:1 op charcoal.
Genoeg voor vlakken (norm 3:1), te weinig voor tekst (4.5:1):

| Token | Waarde | Waarvoor |
|---|---|---|
| `clay` | `#C1633D` | alleen vlakken: dag 14, de blokjes, lijnen |
| `clay-deep` | `#A65534` | knopvlak met crème tekst, 4.66:1 |
| `clay-press` | `#974D30` | knop bij hover, 5.41:1 |
| `clay-bright` | wisselt mee | clay-tekst, 4.95:1 donker en 4.66:1 licht |

Stone kon niet blijven staan in het lichte thema: `#A99C8B` haalt op crème maar
2.37:1. Daar staat `#665C50`, dat op alle drie de lichte vlakken boven 4.8:1
blijft.

### Nagemeten

Elk stukje zichtbare tekst is in de browser nagerekend tegen zijn werkelijke
achtergrond, in beide thema's. Nul combinaties onder de norm.

---

## Wat ik bewust niet gedaan heb

**Geen animatiebibliotheek.** Scroll-effecten draaien op één
IntersectionObserver van dertig regels. Dat scheelt ongeveer 40 kB JavaScript.
Jij verkoopt snelle websites, dus je eigen site moet snel zijn.

**Geen stockfoto's.** De projectkaarten zijn kleurverlopen. Zodra je echte
schermafbeeldingen hebt zet je die er zo in.

**Geen Supabase.** Staat klaar in `.mcp.json`, maar deze site heeft geen
database nodig.

---

## Live zetten

```bash
npx vercel
```

Koppel daarna je domein in het Vercel-dashboard en zet `RESEND_API_KEY` en
`CONTACT_FROM_EMAIL` bij de omgevingsvariabelen van het project. Zonder die twee
werkt het formulier wel, maar krijg jij geen mail.
