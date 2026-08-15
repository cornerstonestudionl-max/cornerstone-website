import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { FounderPhoto } from "@/components/founder-photo";
import { site, BUILD_DAYS, SHOW_TODO_NOTICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over",
  description: `${site.founder} van ${site.name}. Eén iemand die je site ontwerpt, bouwt en daarna bereikbaar blijft.`,
};

export default function Over() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 lg:pt-52">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Eyebrow>Over</Eyebrow>
              <h1 className="mt-8 text-h1 text-balance">
                Geen bureau. Geen accountmanager. Gewoon ik.
              </h1>
              <div className="mt-8 space-y-5 text-lead text-cream-dim text-pretty">
                <p>
                  Ik ben {site.founder} en ik bouw websites voor ondernemers in{" "}
                  {site.region}. Wat je op deze site ziet heb ik zelf ontworpen en
                  zelf gebouwd. Dat leek me het eerlijkste portfolio dat ik kon
                  laten zien.
                </p>
                <p>
                  Bij een bureau gaat je project door zes handen en betaal je voor
                  alle zes. Bij mij spreek je degene die het werk doet. Dat scheelt
                  je geld, het scheelt drie weken heen en weer mailen, en er gaat
                  onderweg niets verloren in de vertaling.
                </p>
              </div>
            </div>

            <Reveal>
              <FounderPhoto priority className="mx-auto max-w-md lg:max-w-none" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Waar ik vandaan kom. Verschijnt pas als Rafael deze alinea geschreven
          heeft; zie SHOW_TODO_NOTICES in lib/site.ts. */}
      {SHOW_TODO_NOTICES ? (
      <Section tone="raise" className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Waar ik vandaan kom</Eyebrow>
            <div className="mt-7 rounded-[3px] border border-dashed border-line-strong p-8 lg:p-10">
              <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-clay-bright uppercase">
                Deze alinea moet jij schrijven
              </p>
              <p className="mt-5 text-lead leading-relaxed text-cream-dim text-pretty">
                Hier hoort jouw verhaal: wat je hiervoor deed, waarom je hieraan
                begonnen bent, en wat je in dat vorige vak hebt geleerd dat je nu
                gebruikt. Kom je uit de bouw, de zorg of de techniek, zet dat er dan
                nadrukkelijk in. Dan spreek je de taal van je klant al, en dat is
                het sterkste wat je op deze pagina kunt zeggen.
              </p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-stone text-pretty">
                Ik heb dit expres leeg gelaten in plaats van iets te verzinnen. Een
                verzonnen levensverhaal op je eigen site is precies het soort ding
                waar je later in een gesprek op vastloopt.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
      ) : null}

      <Section tone="cream">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow tone="ink">Hoe ik werk</Eyebrow>
            <h2 className="mt-6 text-h2 text-balance">
              Zes dingen die ik altijd doe, ook als niemand het vraagt.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[3px] border border-line-dark bg-line-dark sm:grid-cols-2 lg:mt-20">
            {[
              {
                t: "De site en het domein staan op jouw naam",
                d: "Vanaf dag één, met de inloggegevens erbij. Stap je ooit over naar iemand anders, dan neem je alles mee zonder mij ergens voor te hoeven vragen.",
              },
              {
                t: "Eén klant tegelijk",
                d: `Daarom kan het in ${BUILD_DAYS} dagen. Het betekent ook dat ik soms moet zeggen dat je twee weken moet wachten voordat we beginnen.`,
              },
              {
                t: "Ik zeg het als het kleiner kan",
                d: "Heb je geen tien pagina's nodig, dan verkoop ik je er geen tien. Een tevreden klant van €1.750 is meer waard dan een ontevreden klant van €4.500.",
              },
              {
                t: "Geen sjablonen",
                d: "Elke site wordt vanaf niets opgebouwd in code. Dat is waarom ze snel laden en waarom ze niet op elkaar lijken.",
              },
              {
                t: "Ik neem op",
                d: "Ook na oplevering. Niet via een ticketsysteem of een formulier, gewoon mijn nummer.",
              },
              {
                t: "Ik zeg ook nee",
                d: "Als ik denk dat ik je niet verder help, hoor je dat in het eerste gesprek. Dat kost mij een opdracht en bespaart ons allebei een hoop gedoe.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 60} className="bg-cream p-8 lg:p-10">
                <span
                  aria-hidden="true"
                  className="block h-[7px] w-[7px] rounded-[1.5px] bg-clay"
                />
                <h3 className="mt-6 text-h3 text-balance">{item.t}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75 text-pretty">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-h2 text-balance">Even kennismaken?</h2>
            <p className="mt-6 text-lead text-cream-dim text-pretty">
              Laat je gegevens achter, dan bel ik je binnen één werkdag. Je hoort of
              ik iets voor je kan betekenen, en zo niet dan zeg ik dat gewoon.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/gesprek">Vraag een gesprek aan</Button>
              <Button href="/werk" variant="ghost">
                Bekijk eerst mijn werk
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
