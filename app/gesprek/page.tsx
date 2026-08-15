import type { Metadata } from "next";
import { Container, Section, Eyebrow, Arrow } from "@/components/ui";
import { Reveal } from "@/components/reveal-item";
import { ContactForm } from "@/components/contact-form";
import { site, BUILD_DAYS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vraag een gesprek aan",
  description:
    "Laat je gegevens achter en ik neem binnen één werkdag contact op. Vrijblijvend, en je hoort eerlijk of ik iets voor je kan betekenen.",
};

export default function Gesprek() {
  return (
    <>
      <section className="pt-40 pb-16 sm:pt-48 lg:pt-52">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-8 text-h1 text-balance">
                Vertel wat er speelt. Ik bel je terug.
              </h1>
              <p className="mt-8 text-lead text-cream-dim text-pretty">
                Geen agenda waarin je een blokje moet uitzoeken dat toch niet
                uitkomt. Vul het formulier in, dan neem ik binnen één werkdag
                contact op en zoeken we samen een moment dat wel past.
              </p>

              <div className="mt-12 border-t border-line">
                {[
                  {
                    t: "Wat we bespreken",
                    d: "Wat je bedrijf doet, welke klanten je meer wilt, en wat je huidige site daaraan in de weg zit.",
                  },
                  {
                    t: "Wat je eruit haalt",
                    d: "Een eerlijk oordeel, een richtprijs, en een datum waarop je live zou kunnen staan.",
                  },
                  {
                    t: "Wat het kost",
                    d: "Niets. En ik bel je daarna niet achterna. Als je iets wilt, dan hoor ik dat vanzelf.",
                  },
                ].map((item) => (
                  <div key={item.t} className="border-b border-line py-6">
                    <h2 className="font-display text-h3">{item.t}</h2>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-cream-dim text-pretty">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-stone uppercase">
                  Liever meteen
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="group inline-flex min-h-11 items-center gap-2.5 font-display text-h3 text-cream transition-colors duration-300 hover:text-clay-bright"
                  >
                    {site.phone}
                    <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex min-h-11 items-center gap-2.5 text-lead text-cream-dim transition-colors duration-300 hover:text-cream"
                  >
                    {site.email}
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-11 items-center gap-2.5 text-lead text-cream-dim transition-colors duration-300 hover:text-cream"
                  >
                    WhatsApp
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            <Reveal>
              <div className="rounded-[3px] border border-line bg-ink-raise p-7 sm:p-9 lg:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section tone="cream">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow tone="ink">Nog niet zover</Eyebrow>
            <h2 className="mt-6 text-h2 text-balance">
              Vraag eerst een gratis check van je huidige site aan.
            </h2>
            <p className="mt-6 text-lead text-ink/75 text-pretty">
              Zet je website in het formulier hierboven en schrijf erbij dat je een
              check wilt. Binnen een week krijg je een video van een paar minuten
              terug met wat me opvalt en wat het je waarschijnlijk kost aan gemiste
              aanvragen. Geen verplichting.
            </p>
            <p className="mt-8 font-mono text-[0.75rem] tracking-[0.1em] text-ink/70">
              Reactie binnen 1 werkdag · live op dag {BUILD_DAYS} na akkoord
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
