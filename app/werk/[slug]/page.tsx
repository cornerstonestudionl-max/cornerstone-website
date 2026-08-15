import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, Eyebrow, Button, Arrow } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { projects } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} · concept`,
    description: project.headline,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="pt-32 sm:pt-36">
        <Container>
          <Link
            href="/werk"
            className="group inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.14em] text-stone uppercase transition-colors duration-300 hover:text-cream"
          >
            <Arrow className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            Alle projecten
          </Link>
        </Container>
      </section>

      <section className="pt-12 pb-16 lg:pt-16">
        <Container>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-[2px] border border-line px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.14em] text-stone uppercase">
                Concept
              </span>
              <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-stone uppercase">
                {project.sector}
              </span>
            </div>
            <h1 className="mt-8 text-h1 text-balance">{project.headline}</h1>
            <p className="mt-6 font-display text-h3 text-clay-bright">
              {project.client}
            </p>
          </div>

          <div
            className="mt-14 aspect-[16/9] rounded-[3px] lg:mt-16"
            style={{
              background: `linear-gradient(145deg, ${project.palette[0]} 0%, ${project.palette[0]} 50%, ${project.palette[1]} 170%)`,
            }}
          />
        </Container>
      </section>

      <Section tone="ink" className="pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="grid gap-14 lg:grid-cols-3 lg:gap-12">
            {[
              { label: "Wat er misging", body: project.problem },
              { label: "Wat ik anders deed", body: project.approach },
              { label: "Status", body: project.outcome },
            ].map((block, i) => (
              <Reveal key={block.label} delay={i * 80}>
                <div className="border-t border-line pt-7">
                  <Eyebrow>{block.label}</Eyebrow>
                  <p className="mt-6 text-lead leading-relaxed text-cream-dim text-pretty">
                    {block.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <Reveal className="max-w-xl">
              <Eyebrow tone="ink">Eerlijk gezegd</Eyebrow>
              <h2 className="mt-6 text-h2 text-balance">
                Dit is niet gebouwd. Nog niet.
              </h2>
              <p className="mt-6 text-lead text-ink/75 text-pretty">
                {project.client} heeft mij hier niet voor gevraagd en heeft dit
                waarschijnlijk nooit gezien. Ik zet het erbij omdat ik liever eerlijk
                ben over waar ik sta dan dat je er later achter komt.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <Link
                href={`/werk/${next.slug}`}
                className="group block rounded-[3px] border border-line-dark p-7 transition-colors duration-500 hover:border-ink lg:w-80"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.16em] text-ink/70 uppercase">
                  Volgende concept
                </span>
                <span className="mt-4 block font-display text-h3">{next.client}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.875rem] text-ink/75">
                  Bekijken
                  <Arrow className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="deep">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="text-h2 text-balance">Zo&apos;n analyse van je eigen site?</h2>
            <p className="mt-6 text-lead text-cream-dim text-pretty">
              Dat kost je niets. Stuur me je website en je krijgt binnen een week
              dezelfde behandeling: wat er misgaat, wat het je kost, en hoe het anders
              kan.
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
