import Link from "next/link";
import { Container, Section, SectionHeading, Eyebrow, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { DayGrid } from "@/components/day-grid";
import { FounderPhoto } from "@/components/founder-photo";
import { site, plans, phases, projects, faqs, BUILD_DAYS } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ================================================================
          Hero — de belofte, en meteen het bewijs dat het een systeem is
          ================================================================ */}
      <section className="relative overflow-hidden pt-40 pb-20 sm:pt-48 lg:pt-56 lg:pb-28">
        {/* warme gloed achter de tekst, heel subtiel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, #C1633D 0%, transparent 70%)",
            opacity: "var(--glow)",
          }}
        />

        <Container className="relative">
          <div className="max-w-4xl">
            <div className="rise-in" style={{ animationDelay: "60ms" }}>
              <Eyebrow>Websitebouwer · {site.region}</Eyebrow>
            </div>

            <h1
              className="rise-in mt-8 text-display text-balance"
              style={{ animationDelay: "140ms" }}
            >
              Een website die je bedrijf draagt.
              <br />
              <span className="text-clay">Live op dag {BUILD_DAYS}.</span>
            </h1>

            <p
              className="rise-in mt-9 max-w-xl text-lead text-cream-dim text-pretty"
              style={{ animationDelay: "240ms" }}
            >
              Geen traject van vier maanden waarin je niets hoort. Eén vaste prijs,
              één vaste datum, en één iemand die de telefoon opneemt. Haal ik dag{" "}
              {BUILD_DAYS} niet, dan vervalt de laatste termijn.
            </p>

            <div
              className="rise-in mt-11 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "330ms" }}
            >
              <Button href="/gesprek">Vraag een gesprek aan</Button>
              <Button href="/werkwijze" variant="ghost">
                Bekijk de werkwijze
              </Button>
            </div>
          </div>

          {/* Het handtekening-element */}
          <div className="mt-20 lg:mt-28">
            <DayGrid />
          </div>
        </Container>
      </section>

      {/* ================================================================
          Herkenning
          ================================================================ */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow="Waarom je hier bent"
              title="Je site is niet stuk. Hij levert alleen niets op."
              intro="Dat is een lastiger probleem, want er gaat nooit een alarm af. Je merkt het aan de stilte, en je stelt het al twee jaar uit."
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[3px] border border-line-dark bg-line-dark sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {[
              {
                t: "Hij is zes jaar oud",
                d: "Gemaakt toen je net begon. Je bedrijf is doorgegroeid, je site niet.",
              },
              {
                t: "Op een telefoon klopt er niets van",
                d: "En daar komt zeven van de tien bezoekers vandaan. Die zijn binnen vijf seconden weg.",
              },
              {
                t: "Je concurrent staat wél bovenaan",
                d: "Niet omdat hij beter werk levert. Omdat hij vindbaar is en jij niet.",
              },
              {
                t: "Alles komt via mond-tot-mond",
                d: "Dat werkt, tot het even tegenzit. Dan heb je niets om op terug te vallen.",
              },
              {
                t: "Je durft hem niet door te sturen",
                d: "Je stuurt liever een WhatsApp met foto's dan een link naar je eigen site.",
              },
              {
                t: "Je weet niet wie je moet bellen",
                d: "De bouwer reageert niet meer, het wachtwoord is kwijt, en niemand weet waar het domein staat.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.t}
                delay={i * 60}
                className="group bg-cream p-8 transition-colors duration-500 hover:bg-cream-raise lg:p-10"
              >
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden="true"
                    className="block h-[7px] w-[7px] rounded-[1.5px] bg-clay transition-transform duration-500 group-hover:scale-150"
                  />
                  <h3 className="mt-6 text-h3">{item.t}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75 text-pretty">
                    {item.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================================================================
          De veertien dagen
          ================================================================ */}
      <Section tone="ink">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={`Het systeem achter de ${BUILD_DAYS} dagen`}
              title="Snel omdat er niets tussen ligt."
              intro="Een bureau doet er maanden over omdat jij daar project nummer zeven van de maand bent. Ik neem één klant tegelijk aan. Alle beslissingen vallen op dag 1, daarna bouw ik aaneengesloten door."
            />
          </Reveal>

          <div className="mt-16 lg:mt-24">
            <ol className="grid gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {phases.map((phase, i) => {
                const isLast = i === phases.length - 1;
                return (
                  <Reveal
                    key={phase.days}
                    as="li"
                    delay={i * 70}
                    className={`p-8 lg:p-10 ${isLast ? "bg-clay-deep text-on-accent" : "bg-ink"}`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span
                        className={`font-mono text-[0.6875rem] tracking-[0.16em] uppercase ${
                          isLast ? "text-on-accent" : "text-stone"
                        }`}
                      >
                        {phase.days}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`font-mono text-[0.6875rem] ${
                          isLast ? "text-on-accent" : "text-stone"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-h3">{phase.title}</h3>
                    <p
                      className={`mt-3 text-[0.9375rem] leading-relaxed text-pretty ${
                        isLast ? "text-on-accent" : "text-cream-dim"
                      }`}
                    >
                      {phase.summary}
                    </p>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <Reveal delay={100} className="mt-12">
            <Link
              href="/werkwijze"
              className="group inline-flex items-center gap-2.5 text-[0.9375rem] text-cream transition-colors duration-300 hover:text-clay-bright"
            >
              Zie per dag wat er gebeurt en wat ik van je nodig heb
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ================================================================
          De garantie — de sterkste zin op de site, dus krijgt een eigen vlak
          ================================================================ */}
      <section className="border-y border-line bg-ink-deep py-24 lg:py-32">
        <Container>
          <Reveal className="corner-mark mx-auto max-w-3xl px-8 py-10 text-center sm:px-12">
            <Eyebrow className="justify-center">De garantie</Eyebrow>
            <p className="mt-8 font-display text-h1 text-balance">
              Niet live op dag {BUILD_DAYS}?
              <br />
              <span className="text-clay">Dan vervalt de laatste termijn.</span>
            </p>
            <p className="mx-auto mt-8 max-w-xl text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
              De {BUILD_DAYS} dagen gaan lopen zodra ik alles van je heb: teksten,
              foto&apos;s, toegang. Lever je later aan, dan schuift de datum mee. Dat
              spreken we vooraf op papier af, zodat het voor allebei duidelijk is.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ================================================================
          Werk
          ================================================================ */}
      <Section tone="ink">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Werk"
              title="Drie concepten, gemaakt op eigen initiatief."
              intro="Ik ben net begonnen onder eigen naam, dus ik ga niet doen alsof ik twintig klanten heb. Dit zijn bestaande bedrijven uit de regio waarvoor ik ongevraagd een nieuwe site ontwierp, om te laten zien hoe ik denk."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link
                  href={`/werk/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-line transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)]"
                >
                  <div
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${project.palette[0]} 0%, ${project.palette[0]} 55%, ${project.palette[1]} 190%)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-end p-7">
                      <span className="font-display text-2xl text-on-accent/95 text-balance">
                        {project.client}
                      </span>
                    </div>
                    <span className="absolute top-5 right-5 rounded-[2px] bg-scrim px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-on-accent uppercase backdrop-blur-sm">
                      Concept
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-stone uppercase">
                      {project.sector}
                    </span>
                    <h3 className="mt-4 text-h3 text-balance">{project.headline}</h3>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.875rem] text-cream-dim transition-colors duration-300 group-hover:text-clay-bright">
                      Bekijk het concept
                      <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ================================================================
          De vergelijking
          ================================================================ */}
      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              tone="cream"
              eyebrow="De afweging"
              title="Zelf doen, de neef vragen, of dit."
              intro="Een bureau komt niet eens in beeld, want die begint bij het viervoudige. Dit zijn de opties waar je echt tussen kiest."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {[
              {
                t: "Zelf bouwen",
                p: "Wix, Squarespace, een middag per week",
                points: [
                  "Kost je weken van je eigen tijd",
                  "Ziet eruit als een sjabloon, want dat is het",
                  "Je maakt het waarschijnlijk niet af",
                  "Vindbaarheid moet je zelf uitzoeken",
                ],
                featured: false,
              },
              {
                t: "Iemand die het even doet",
                p: "Een kennis, een neef, een student",
                points: [
                  "Geen planning en geen einddatum",
                  "Geen garantie als het misgaat",
                  "Over een half jaar geen reactie meer",
                  "Vaak staat het domein op zijn naam",
                ],
                featured: false,
              },
              {
                t: "Cornerstone Studio",
                p: `Vaste prijs, live op dag ${BUILD_DAYS}`,
                points: [
                  "Eén datum die op papier staat",
                  "Niet gehaald? Laatste termijn vervalt",
                  "Site én domein op jouw naam",
                  "Onderhoud vanaf €39 per maand",
                ],
                featured: true,
              },
            ].map((col, i) => (
              <Reveal key={col.t} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-[3px] p-8 lg:p-9 ${
                    col.featured
                      ? "bg-ink text-cream"
                      : "border border-line-dark bg-transparent"
                  }`}
                >
                  <h3 className="text-h3">{col.t}</h3>
                  <p
                    className={`mt-2 font-mono text-[0.6875rem] tracking-[0.12em] uppercase ${
                      col.featured ? "text-stone" : "text-ink/70"
                    }`}
                  >
                    {col.p}
                  </p>
                  <ul className="mt-8 space-y-3.5">
                    {col.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className={`mt-[0.45rem] block h-[6px] w-[6px] shrink-0 rounded-[1.5px] ${
                            col.featured ? "bg-clay" : "bg-ink/25"
                          }`}
                        />
                        <span
                          className={`text-[0.9375rem] leading-relaxed ${
                            col.featured ? "text-cream-dim" : "text-ink/75"
                          }`}
                        >
                          {point}
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

      {/* ================================================================
          Onderhoud — de enige zichtbare prijzen
          ================================================================ */}
      <Section tone="ink" id="onderhoud">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Onderhoud"
              title="Daarna laat ik je niet los."
              intro="Een website is geen schilderij. Browsers veranderen, Google verandert, en er komen beveiligingsupdates. Zonder onderhoud staat je site over twee jaar stil terwijl de wereld doorloopt."
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
                        Meest gekozen
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

          <Reveal delay={100} className="mt-10">
            <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
              De eerste twaalf maanden zitten in het contract, daarna zeg je
              maandelijks op als je wilt. Wat een site zelf kost, hangt af van wat je
              nodig hebt.{" "}
              <Link
                href="/diensten"
                className="text-cream underline decoration-clay decoration-2 underline-offset-4 transition-colors duration-300 hover:text-clay-bright"
              >
                dat leg ik uit op de dienstenpagina
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ================================================================
          Over
          ================================================================ */}
      <Section tone="raise">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <FounderPhoto className="mx-auto max-w-sm lg:max-w-none" />
            </Reveal>

            <Reveal delay={80}>
              <Eyebrow>Wie het maakt</Eyebrow>
              <h2 className="mt-6 text-h2 text-balance">
                Je krijgt mij aan de lijn. Altijd dezelfde.
              </h2>
              <div className="mt-7 space-y-5 text-lead leading-relaxed text-cream-dim text-pretty">
                <p>
                  Ik ben {site.founder}. Cornerstone Studio is geen bureau met een
                  accountmanager die je doorverbindt met een projectleider die de
                  ontwerper mailt. Het ben ik, en ik bouw je site zelf.
                </p>
                <p>
                  Daarom kan het in veertien dagen. En daarom neem ik ook maar een
                  beperkt aantal projecten per jaar aan. Eén tegelijk, van begin tot
                  eind.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/over" variant="ghost">
                  Meer over hoe ik werk
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          Vragen
          ================================================================ */}
      <Section tone="ink">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Vragen"
                title="Wat ondernemers meestal willen weten."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="border-t border-line">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] font-medium transition-colors duration-300 hover:text-clay-bright">
                      <span className="text-balance">{faq.q}</span>
                      <span
                        aria-hidden="true"
                        className="relative mt-2 block h-3 w-3 shrink-0"
                      >
                        <span className="absolute top-1/2 left-0 block h-[1.5px] w-3 -translate-y-1/2 bg-clay" />
                        <span className="absolute top-0 left-1/2 block h-3 w-[1.5px] -translate-x-1/2 bg-clay transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <p className="pr-10 pb-7 text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ================================================================
          Afsluiting
          ================================================================ */}
      <section className="relative overflow-hidden border-t border-line bg-ink-deep py-28 lg:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 h-[34rem] w-[34rem] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, #C1633D 0%, transparent 70%)",
            opacity: "var(--glow)",
          }}
        />
        <Container className="relative">
          <Reveal className="max-w-3xl">
            <Eyebrow>Volgende stap</Eyebrow>
            <h2 className="mt-7 text-h1 text-balance">
              Een half uur, en je weet of het iets wordt.
            </h2>
            <p className="mt-7 max-w-xl text-lead text-cream-dim text-pretty">
              Geen verkooppraatje. We kijken naar je huidige site, ik vertel je eerlijk
              of ik iets voor je kan betekenen, en zo niet dan zeg ik dat ook. Kost je
              dertig minuten.
            </p>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/gesprek">Vraag een gesprek aan</Button>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2.5 px-1 py-3.5 text-[0.9375rem] text-cream-dim transition-colors duration-300 hover:text-cream"
              >
                Of stuur een mail
                <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
