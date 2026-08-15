import type { Metadata } from "next";
import { Container, Section, SectionHeading, Eyebrow, Button } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { packages, plans, BUILD_DAYS, SHOW_PROJECT_PRICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description: `Wat een website kost, wat erin zit, en wat je maandelijks aan onderhoud kwijt bent. Live op dag ${BUILD_DAYS}.`,
};

export default function Diensten() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 lg:pt-52">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Diensten</Eyebrow>
            <h1 className="mt-8 text-h1 text-balance">
              Wat het kost, zonder dat je ervoor hoeft te bellen.
            </h1>
            <p className="mt-8 max-w-xl text-lead text-cream-dim text-pretty">
              Drie pakketten, één opleverdatum. De meeste bedrijven komen uit bij
              Compleet. Weet je niet welke bij je past, dan zoeken we dat in een half
              uur samen uit.
            </p>
          </div>
        </Container>
      </section>

      {/* Pakketten */}
      <Section tone="ink" className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-[3px] p-8 lg:p-9 ${
                    pkg.featured
                      ? "bg-cream text-ink"
                      : "border border-line bg-ink-raise"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-h3">{pkg.name}</h2>
                    {pkg.featured ? (
                      <span className="rounded-[2px] bg-clay-deep px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-on-accent uppercase">
                        Meest gekozen
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`mt-2 text-[0.9375rem] ${
                      pkg.featured ? "text-ink/75" : "text-cream-dim"
                    }`}
                  >
                    {pkg.pitch}
                  </p>

                  {SHOW_PROJECT_PRICES ? (
                    <p className="mt-8 flex items-baseline gap-2">
                      <span className="font-display text-h2">{pkg.price}</span>
                      <span
                        className={`font-mono text-[0.75rem] ${
                          pkg.featured ? "text-ink/70" : "text-stone"
                        }`}
                      >
                        {pkg.priceNote}
                      </span>
                    </p>
                  ) : (
                    <p className="mt-8 font-display text-h3">Prijs in het gesprek</p>
                  )}

                  <ul
                    className={`mt-8 flex-1 space-y-3.5 border-t pt-8 ${
                      pkg.featured ? "border-line-dark" : "border-line"
                    }`}
                  >
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] block h-[6px] w-[6px] shrink-0 rounded-[1.5px] bg-clay"
                        />
                        <span
                          className={`text-[0.9375rem] leading-relaxed ${
                            pkg.featured ? "text-ink/75" : "text-cream-dim"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <Button
                      href="/gesprek"
                      variant={pkg.featured ? "ink" : "ghost"}
                      className="w-full"
                    >
                      Bespreek {pkg.name}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Gespreid betalen */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow tone="ink">Gespreid betalen</Eyebrow>
              <h2 className="mt-6 text-h2 text-balance">
                Niet iedereen heeft drieduizend euro liggen.
              </h2>
              <div className="mt-6 space-y-5 text-lead text-ink/75 text-pretty">
                <p>
                  Dat is geen schande, dat is ondernemen. Je kunt het bedrag daarom
                  spreiden over 24 maanden. Eén maandbedrag waar hosting en onderhoud
                  al in zitten, zodat je verder nergens meer aan hoeft te denken.
                </p>
                <p>
                  Je betaalt over de hele rit wel meer dan wanneer je het in één keer
                  voldoet. Dat zeg ik er eerlijk bij, want je moet het kunnen afwegen.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="corner-mark rounded-[3px] bg-ink p-9 text-cream lg:p-11">
                <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-stone uppercase">
                  Compleet, gespreid
                </span>
                <p className="mt-7 flex items-baseline gap-2">
                  <span className="font-display text-display leading-none">€249</span>
                  <span className="font-mono text-[0.8125rem] text-stone">/mnd</span>
                </p>
                <p className="mt-6 text-[0.9375rem] leading-relaxed text-cream-dim">
                  24 maanden · geen bedrag ineens · hosting, onderhoud en updates
                  inbegrepen · site en domein staan vanaf dag één op jouw naam
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Onderhoud */}
      <Section tone="ink" id="onderhoud">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Onderhoud"
              title="Wat je daarna maandelijks kwijt bent."
              intro="De eerste twaalf maanden zitten in het contract. Daarna zeg je maandelijks op als je wilt. Ik hou klanten liever vast met werk dan met een contract."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-[3px] p-8 lg:p-9 ${
                    plan.featured
                      ? "bg-cream text-ink"
                      : "border border-line bg-ink-raise"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-h3">{plan.name}</h3>
                    {plan.featured ? (
                      <span className="rounded-[2px] bg-clay-deep px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-on-accent uppercase">
                        Aanrader
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`mt-2 text-[0.9375rem] ${
                      plan.featured ? "text-ink/75" : "text-cream-dim"
                    }`}
                  >
                    {plan.pitch}
                  </p>

                  <p className="mt-8 flex items-baseline gap-1.5">
                    <span className="font-display text-h1">{plan.price}</span>
                    <span
                      className={`font-mono text-[0.8125rem] ${
                        plan.featured ? "text-ink/70" : "text-stone"
                      }`}
                    >
                      /mnd
                    </span>
                  </p>

                  <ul
                    className={`mt-8 space-y-3.5 border-t pt-8 ${
                      plan.featured ? "border-line-dark" : "border-line"
                    }`}
                  >
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] block h-[6px] w-[6px] shrink-0 rounded-[1.5px] bg-clay"
                        />
                        <span
                          className={`text-[0.9375rem] leading-relaxed ${
                            plan.featured ? "text-ink/75" : "text-cream-dim"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-h2 text-balance">Welk pakket past bij jou?</h2>
            <p className="mt-6 text-lead text-cream-dim text-pretty">
              Dat hoor je in een half uur. Ik kijk vooraf naar je huidige site en zeg
              eerlijk of het kleiner kan dan je denkt. Dat scheelt jou geld en mij een
              ontevreden klant.
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
