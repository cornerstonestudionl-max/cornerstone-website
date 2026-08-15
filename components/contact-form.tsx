"use client";

import { useId, useRef, useState } from "react";
import { Arrow } from "@/components/ui";
import { site } from "@/lib/site";

type Status = "rust" | "bezig" | "gelukt" | "mislukt";

const wanneerOpties = [
  "Zo snel mogelijk",
  "Binnen een maand",
  "Binnen drie maanden",
  "Ik oriënteer me nog",
];

const veldBasis =
  "w-full rounded-[3px] border bg-transparent px-4 py-3.5 text-[0.9375rem] text-cream transition-colors duration-200 placeholder:text-stone/70 focus:border-clay focus:outline-none";

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("rust");
  const [melding, setMelding] = useState("");
  const [fouteVelden, setFouteVelden] = useState<string[]>([]);
  const meldingRef = useRef<HTMLDivElement>(null);

  async function verstuur(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "bezig") return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("bezig");
    setMelding("");
    setFouteVelden([]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("gelukt");
        form.reset();
      } else {
        setStatus("mislukt");
        setFouteVelden(Array.isArray(body.velden) ? body.velden : []);
        setMelding(
          body.fout ?? `Versturen lukte niet. Mail naar ${site.email} of bel ${site.phone}.`,
        );
      }
    } catch {
      setStatus("mislukt");
      setMelding(
        `Versturen lukte niet, misschien is je verbinding weg. Mail naar ${site.email} of bel ${site.phone}.`,
      );
    }

    window.requestAnimationFrame(() => meldingRef.current?.focus());
  }

  if (status === "gelukt") {
    return (
      <div
        className="corner-mark rounded-[3px] border border-line bg-ink-raise p-10 lg:p-12"
        role="status"
      >
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-[3px] bg-clay-deep"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F4F0EA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 12.5 9.5 18 20 6.5" />
          </svg>
        </span>
        <h2 className="mt-7 font-display text-h2 text-balance">
          Je bericht staat in mijn inbox.
        </h2>
        <p className="mt-5 max-w-md text-lead text-cream-dim text-pretty">
          Ik neem binnen één werkdag contact met je op. Heb je haast, bel dan
          gerust, dan hebben we het vandaag nog gehad.
        </p>
        <a
          href={`tel:${site.phoneHref}`}
          className="mt-8 inline-flex min-h-11 items-center gap-2.5 font-display text-h3 text-cream transition-colors duration-300 hover:text-clay-bright"
        >
          {site.phone}
          <Arrow className="h-5 w-5" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={verstuur} noValidate className="space-y-5">
      {/* Voor bots. Blijft leeg bij echte bezoekers. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-hp`}>Laat dit veld leeg</label>
        <input id={`${id}-hp`} name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Veld
          id={`${id}-naam`}
          name="naam"
          label="Je naam"
          required
          autoComplete="name"
          fout={fouteVelden.includes("naam")}
        />
        <Veld
          id={`${id}-bedrijf`}
          name="bedrijf"
          label="Bedrijfsnaam"
          autoComplete="organization"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Veld
          id={`${id}-email`}
          name="email"
          label="E-mailadres"
          type="email"
          required
          autoComplete="email"
          fout={fouteVelden.includes("email")}
        />
        <Veld
          id={`${id}-telefoon`}
          name="telefoon"
          label="Telefoonnummer"
          type="tel"
          autoComplete="tel"
          hint="Handig als je liever gebeld wordt"
        />
      </div>

      <Veld
        id={`${id}-website`}
        name="website"
        label="Je huidige website"
        placeholder="www.jouwbedrijf.nl"
        hint="Ik kijk er vooraf naar, dan hoeven we daar in het gesprek geen tijd aan te besteden"
      />

      <div>
        <label
          htmlFor={`${id}-wanneer`}
          className="block text-[0.8125rem] font-medium text-cream"
        >
          Wanneer wil je live zijn?
        </label>
        <select
          id={`${id}-wanneer`}
          name="wanneer"
          defaultValue={wanneerOpties[0]}
          className={`${veldBasis} mt-2 cursor-pointer appearance-none border-line bg-ink-raise bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-12 hover:border-line-strong`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23A99C8B' stroke-width='1.5'><path d='M3 6l5 5 5-5'/></svg>\")",
          }}
        >
          {wanneerOpties.map((optie) => (
            <option key={optie} value={optie}>
              {optie}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor={`${id}-bericht`}
          className="block text-[0.8125rem] font-medium text-cream"
        >
          Waar loop je tegenaan?{" "}
          <span className="font-normal text-clay-bright">verplicht</span>
        </label>
        <p className="mt-1 text-[0.8125rem] text-stone">
          Een paar zinnen is genoeg. Wat je doet, wat er nu misgaat, wat je wilt
          bereiken.
        </p>
        <textarea
          id={`${id}-bericht`}
          name="bericht"
          rows={5}
          required
          aria-invalid={fouteVelden.includes("bericht") || undefined}
          className={`${veldBasis} mt-2 resize-y ${
            fouteVelden.includes("bericht") ? "border-clay-bright" : "border-line"
          }`}
        />
      </div>

      <div
        ref={meldingRef}
        tabIndex={-1}
        role={status === "mislukt" ? "alert" : undefined}
        className="focus:outline-none"
      >
        {status === "mislukt" && melding ? (
          <p className="rounded-[3px] border border-clay-bright/50 bg-clay-deep/10 px-4 py-3.5 text-[0.9375rem] text-cream text-pretty">
            {melding}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "bezig"}
          className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-[3px] bg-clay-deep px-7 py-3.5 text-[0.9375rem] font-medium text-on-accent transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-clay-press disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "bezig" ? (
            <>
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-spin rounded-full border-2 border-on-accent/30 border-t-on-accent"
              />
              Versturen
            </>
          ) : (
            <>
              Verstuur je aanvraag
              <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="text-[0.8125rem] leading-relaxed text-stone">
          Reactie binnen één werkdag. Je gegevens gaan alleen naar mij.
        </p>
      </div>
    </form>
  );
}

function Veld({
  id,
  name,
  label,
  type = "text",
  required,
  placeholder,
  autoComplete,
  hint,
  fout,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  hint?: string;
  fout?: boolean;
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div>
      <label htmlFor={id} className="block text-[0.8125rem] font-medium text-cream">
        {label}{" "}
        {required ? (
          <span className="font-normal text-clay-bright">verplicht</span>
        ) : (
          <span className="font-normal text-stone">optioneel</span>
        )}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-[0.8125rem] text-stone text-pretty">
          {hint}
        </p>
      ) : null}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-describedby={hintId}
        aria-invalid={fout || undefined}
        className={`${veldBasis} mt-2 ${fout ? "border-clay-bright" : "border-line"}`}
      />
    </div>
  );
}
