import type { Metadata } from "next";
import { Container, Section, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { DayGrid } from "@/components/day-grid";
import { phases, BUILD_DAYS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werkwijze",
  description: `Dag voor dag: hoe je website in ${BUILD_DAYS} dagen live gaat, wat ik van je nodig heb en wat er aan het eind van elke dag klaar is.`,
};

export default function Werkwijze() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 lg:pt-52">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Werkwijze</Eyebrow>
            <h1 className="mt-8 text-h1 text-balance">
              Veertien dagen, en je weet precies wat er op elke dag gebeurt.
            </h1>
            <p className="mt-8 max-w-xl text-lead text-cream-dim text-pretty">
              De meeste websitetrajecten lopen uit omdat niemand heeft opgeschreven wie
              wat wanneer doet. Hieronder staat dat wel. Voor mij én voor jou.
            </p>
          </div>

          <div className="mt-16 lg:mt-20">
            <DayGrid height="h-12 sm:h-16" />
          </div>
        </Container>
      </section>

      <Section tone="ink" className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <ol className="border-t border-line">
            {phases.map((phase, i) => (
              <Reveal key={phase.days} as="li" delay={i * 50}>
                <div className="grid gap-8 border-b border-line py-12 lg:grid-cols-[14rem_1fr] lg:gap-14 lg:py-16">
                  <div className="lg:pt-1">
                    <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-clay-bright uppercase">
                      {phase.days}
                    </span>
                    <h2 className="mt-4 text-h3 text-balance">{phase.title}</h2>
                  </div>

                  <div>
                    <p className="max-w-2xl text-lead leading-relaxed text-cream-dim text-pretty">
                      {phase.summary}
                    </p>

                    <div className="mt-9 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-3">
                      {[
                        { label: "Jij doet", value: phase.you },
                        { label: "Ik doe", value: phase.me },
                        { label: "Aan het eind", value: phase.done },
                      ].map((cell) => (
                        <div key={cell.label} className="bg-ink-raise p-6">
                          <span className="font-mono text-[0.625rem] tracking-[0.16em] text-stone uppercase">
                            {cell.label}
                          </span>
                          <p className="mt-3 text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
                            {cell.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Wat er vóór dag 1 klaar moet staan — dit beschermt de garantie */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow tone="ink">Vóór dag 1</Eyebrow>
              <h2 className="mt-6 text-h2 text-balance">
                De klok begint pas als dit er is.
              </h2>
              <p className="mt-6 text-lead text-ink/75 text-pretty">
                Niet om onder de garantie uit te komen, maar omdat het anders niet
                eerlijk is. Ik kan geen veertien dagen beloven als ik op dag zes nog op
                foto&apos;s wacht.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <ul className="border-t border-line-dark">
                {[
                  {
                    t: "Toegang tot je domein",
                    d: "De inloggegevens van waar je domeinnaam nu staat. Weet je dat niet meer? Dan zoeken we het samen uit, dat gebeurt vaker dan je denkt.",
                  },
                  {
                    t: "Beeldmateriaal",
                    d: "Foto's van je werk, je team, je pand. Liever twintig echte foto's dan tweehonderd stockbeelden. Heb je niets, dan regelen we een shoot.",
                  },
                  {
                    t: "Je cijfers en feiten",
                    d: "Openingstijden, werkgebied, certificeringen, garantietermijnen. De dingen die een klant wil weten voordat hij belt.",
                  },
                  {
                    t: "Eén beslisser",
                    d: "Iemand die knopen doorhakt. Moeten er drie mensen meekijken, dan wordt het geen veertien dagen. Dat zeg ik liever vooraf dan achteraf.",
                  },
                ].map((item) => (
                  <li key={item.t} className="border-b border-line-dark py-7">
                    <h3 className="text-h3">{item.t}</h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/75 text-pretty">
                      {item.d}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-h2 text-balance">
              Klinkt dit als een traject dat je aankunt?
            </h2>
            <p className="mt-6 text-lead text-cream-dim text-pretty">
              In een half uur weten we allebei of het past. Ik kijk vooraf naar je
              huidige site, dus we hoeven geen tijd te verspillen aan uitleggen wat er
              nu staat.
            </p>
            <div className="mt-10">
              <Button href="/gesprek">Vraag een gesprek aan</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
