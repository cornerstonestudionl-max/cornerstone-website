import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  naam?: string;
  bedrijf?: string;
  email?: string;
  telefoon?: string;
  website?: string;
  wanneer?: string;
  bericht?: string;
  /** Verborgen veld. Alleen bots vullen dit in. */
  honeypot?: string;
};

/** Simpele snelheidsbegrenzer per IP. Genoeg voor een site van deze omvang. */
const recent = new Map<string, number[]>();
const VENSTER_MS = 10 * 60 * 1000;
const MAX_PER_VENSTER = 5;

function teVaak(ip: string) {
  const nu = Date.now();
  const eerder = (recent.get(ip) ?? []).filter((t) => nu - t < VENSTER_MS);
  eerder.push(nu);
  recent.set(ip, eerder);
  return eerder.length > MAX_PER_VENSTER;
}

function schoon(waarde: unknown, max = 2000) {
  return typeof waarde === "string" ? waarde.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ fout: "Ongeldig verzoek." }, { status: 400 });
  }

  // Bot: doe alsof het gelukt is, dan blijft hij niet proberen.
  if (schoon(data.honeypot)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "onbekend";
  if (teVaak(ip)) {
    return NextResponse.json(
      { fout: "Je hebt net al een bericht gestuurd. Probeer het later opnieuw." },
      { status: 429 },
    );
  }

  const naam = schoon(data.naam, 120);
  const email = schoon(data.email, 200);
  const bedrijf = schoon(data.bedrijf, 160);
  const telefoon = schoon(data.telefoon, 40);
  const website = schoon(data.website, 300);
  const wanneer = schoon(data.wanneer, 80);
  const bericht = schoon(data.bericht, 4000);

  const ontbreekt: string[] = [];
  if (!naam) ontbreekt.push("naam");
  if (!email) ontbreekt.push("email");
  if (!bericht) ontbreekt.push("bericht");
  if (ontbreekt.length) {
    return NextResponse.json(
      { fout: "Niet alle verplichte velden zijn ingevuld.", velden: ontbreekt },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { fout: "Dat e-mailadres klopt niet.", velden: ["email"] },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const van = process.env.CONTACT_FROM_EMAIL;

  /**
   * Waar de aanvraag heen gaat. Zolang je de testafzender van Resend
   * (onboarding@resend.dev) gebruikt, accepteert Resend alleen je eigen
   * accountadres als ontvanger. Daarom staat dit los van het adres dat je op
   * de site toont. Verifieer je eigen domein en dit mag weg.
   */
  const naar = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !van) {
    console.error(
      "RESEND_API_KEY of CONTACT_FROM_EMAIL ontbreekt. Zie .env.example.",
    );
    return NextResponse.json(
      {
        fout:
          "Het formulier is nog niet gekoppeld aan de mailserver. Mail zolang rechtstreeks naar " +
          site.email,
      },
      { status: 503 },
    );
  }

  const regels = [
    ["Naam", naam],
    ["Bedrijf", bedrijf],
    ["E-mail", email],
    ["Telefoon", telefoon],
    ["Huidige website", website],
    ["Wil live zijn", wanneer],
  ].filter(([, v]) => v);

  const tekst =
    regels.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nBericht:\n${bericht}\n`;

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#1E1B18">
      <p style="margin:0 0 18px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#A65534">
        Nieuwe aanvraag via ${site.domain}
      </p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:22px">
        ${regels
          .map(
            ([k, v]) =>
              `<tr><td style="padding:5px 20px 5px 0;color:#6B6154;white-space:nowrap">${k}</td><td style="padding:5px 0"><strong>${escape(v)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <div style="padding:16px 18px;background:#F4F0EA;border-left:3px solid #C1633D;white-space:pre-wrap">${escape(bericht)}</div>
      <p style="margin-top:22px">
        <a href="mailto:${escape(email)}" style="color:#A65534">Direct antwoorden aan ${escape(naam)}</a>
      </p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Cornerstone Studio <${van}>`,
      to: [naar],
      replyTo: email,
      subject: `Aanvraag van ${naam}${bedrijf ? ` (${bedrijf})` : ""}`,
      text: tekst,
      html,
    });

    if (error) {
      console.error("Resend gaf een fout:", error);
      return NextResponse.json(
        {
          fout:
            "Versturen lukte niet. Mail rechtstreeks naar " +
            site.email +
            " of bel " +
            site.phone +
            ".",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Onverwachte fout bij versturen:", err);
    return NextResponse.json(
      {
        fout:
          "Versturen lukte niet. Mail rechtstreeks naar " +
          site.email +
          " of bel " +
          site.phone +
          ".",
      },
      { status: 502 },
    );
  }
}

function escape(waarde: string) {
  return waarde
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
