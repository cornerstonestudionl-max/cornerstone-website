import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Eyebrow, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werk",
  description:
    "Concepten voor bestaande bedrijven uit de regio: wat er mis was met hun site, en hoe het anders kan.",
};

export default function Werk() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 lg:pt-52">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Werk</Eyebrow>
            <h1 className="mt-8 text-h1 text-balance">
              Concepten, eerlijk gelabeld als concepten.
            </h1>
            <div className="mt-8 max-w-xl space-y-5 text-lead text-cream-dim text-pretty">
              <p>
                Cornerstone Studio is net begonnen. Ik kan een portfolio vol
                nietszeggende logo&apos;s neerzetten en hopen dat je niet doorvraagt,
                maar dat lijkt me een slechte start.
              </p>
              <p>
                Dus dit: bestaande bedrijven uit de regio waarvan ik de site tegenkwam,
                en waarvoor ik ongevraagd een nieuwe versie ontwierp. Geen opdracht,
                geen factuur. Wel precies hoe ik denk en werk.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section tone="ink" className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 70}>
                <Link
                  href={`/werk/${project.slug}`}
                  className="group grid overflow-hidden rounded-[4px] border border-line transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-line-strong hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)] lg:grid-cols-[1.1fr_1fr]"
                >
                  <div
                    className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]"
                    style={{
                      background: `linear-gradient(145deg, ${project.palette[0]} 0%, ${project.palette[0]} 55%, ${project.palette[1]} 190%)`,
                    }}
                  >
                    <span className="absolute top-5 left-5 rounded-[2px] bg-scrim px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-on-accent uppercase backdrop-blur-sm">
                      Concept
                    </span>
                    <div className="absolute inset-0 flex items-end p-8">
                      <span className="font-display text-3xl text-on-accent/95 text-balance lg:text-4xl">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-8 lg:p-12">
                    <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-stone uppercase">
                      {project.sector}
                    </span>
                    <h2 className="mt-5 text-h2 text-balance">{project.headline}</h2>
                    <p className="mt-5 text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
                      {project.problem}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-cream transition-colors duration-300 group-hover:text-clay-bright">
                      Lees het hele concept
                      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow tone="ink">Jouw bedrijf hierboven?</Eyebrow>
            <h2 className="mt-6 text-h2 text-balance">
              Ik maak er ook een voor jou. Vrijblijvend.
            </h2>
            <p className="mt-6 text-lead text-ink/75 text-pretty">
              Stuur me je huidige website. Binnen een week krijg je een video van een
              paar minuten terug: wat me opvalt, wat het je waarschijnlijk kost, en hoe
              de bovenkant van je nieuwe homepage eruit zou kunnen zien. Zonder
              verplichting, en zonder dat ik je daarna blijf bellen.
            </p>
            <div className="mt-10">
              <Button href="/gesprek" variant="ink">
                Vraag een gratis check aan
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
