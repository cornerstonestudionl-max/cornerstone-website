import type { SchemaTypeDefinition } from "sanity";

/**
 * De inhoudstypen die je in de studio kunt bewerken.
 *
 * De veldnamen zijn gelijk aan die in lib/site.ts, zodat de site zonder
 * vertaalslag met beide overweg kan.
 */

const regelLijst = {
  name: "includes",
  title: "Wat er in zit",
  type: "array",
  of: [{ type: "string" }],
  description: "Eén regel per punt. De volgorde is de volgorde op de site.",
};

const instellingen: SchemaTypeDefinition = {
  name: "instellingen",
  title: "Bedrijfsgegevens",
  type: "document",
  // Er is er maar één van, dus geen nieuwe aanmaken.
  fields: [
    { name: "name", title: "Bedrijfsnaam", type: "string" },
    { name: "founder", title: "Voornaam", type: "string" },
    { name: "city", title: "Stad", type: "string" },
    {
      name: "region",
      title: "Werkgebied",
      type: "string",
      description: "Bijvoorbeeld: Amsterdam en omstreken",
    },
    { name: "email", title: "E-mailadres", type: "string" },
    { name: "phone", title: "Telefoonnummer", type: "string" },
    {
      name: "phoneHref",
      title: "Telefoonnummer om te bellen",
      type: "string",
      description: "Internationale notatie, bijvoorbeeld +31682593240",
    },
    {
      name: "whatsapp",
      title: "WhatsApp-nummer",
      type: "string",
      description: "Zonder plus, bijvoorbeeld 31682593240",
    },
    { name: "legalName", title: "Juridische naam", type: "string" },
    { name: "kvk", title: "KvK-nummer", type: "string" },
    { name: "vat", title: "Btw-nummer", type: "string" },
    { name: "iban", title: "IBAN", type: "string" },
    {
      name: "tagline",
      title: "Slogan",
      type: "string",
      description: "Staat groot in de footer.",
    },
  ],
  preview: { select: { title: "name", subtitle: "city" } },
};

const pakket: SchemaTypeDefinition = {
  name: "pakket",
  title: "Pakket",
  type: "document",
  fields: [
    { name: "name", title: "Naam", type: "string" },
    { name: "price", title: "Prijs", type: "string", description: "Bijvoorbeeld €2.950" },
    { name: "priceNote", title: "Toelichting bij de prijs", type: "string" },
    { name: "pitch", title: "Eén zin eronder", type: "string" },
    {
      name: "featured",
      title: "Uitlichten",
      type: "boolean",
      description: "Het uitgelichte pakket krijgt een donkere kaart en een label.",
      initialValue: false,
    },
    regelLijst,
    {
      name: "volgorde",
      title: "Volgorde",
      type: "number",
      description: "Laag getal staat links.",
    },
  ],
  orderings: [
    { name: "volgorde", title: "Volgorde", by: [{ field: "volgorde", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "price" } },
};

const abonnement: SchemaTypeDefinition = {
  name: "abonnement",
  title: "Onderhoudsabonnement",
  type: "document",
  fields: [
    { name: "name", title: "Naam", type: "string" },
    { name: "price", title: "Bedrag per maand", type: "string" },
    { name: "pitch", title: "Eén zin eronder", type: "string" },
    { name: "featured", title: "Uitlichten", type: "boolean", initialValue: false },
    regelLijst,
    { name: "volgorde", title: "Volgorde", type: "number" },
  ],
  orderings: [
    { name: "volgorde", title: "Volgorde", by: [{ field: "volgorde", direction: "asc" }] },
  ],
  preview: { select: { title: "name", subtitle: "price" } },
};

const fase: SchemaTypeDefinition = {
  name: "fase",
  title: "Dag uit het traject",
  type: "document",
  fields: [
    { name: "days", title: "Welke dag", type: "string", description: "Bijvoorbeeld: Dag 2 tot 3" },
    { name: "from", title: "Eerste dagnummer", type: "number" },
    { name: "to", title: "Laatste dagnummer", type: "number" },
    { name: "title", title: "Titel", type: "string" },
    { name: "summary", title: "Toelichting", type: "text", rows: 3 },
    { name: "you", title: "Wat de klant doet", type: "text", rows: 2 },
    { name: "me", title: "Wat jij doet", type: "text", rows: 2 },
    { name: "done", title: "Wat er aan het eind klaar is", type: "text", rows: 2 },
  ],
  orderings: [
    { name: "volgorde", title: "Op dagnummer", by: [{ field: "from", direction: "asc" }] },
  ],
  preview: { select: { title: "title", subtitle: "days" } },
};

const project: SchemaTypeDefinition = {
  name: "project",
  title: "Project of concept",
  type: "document",
  fields: [
    { name: "client", title: "Bedrijfsnaam", type: "string" },
    {
      name: "slug",
      title: "Webadres",
      type: "slug",
      options: { source: "client", maxLength: 96 },
    },
    { name: "sector", title: "Branche", type: "string" },
    {
      name: "concept",
      title: "Is dit een concept?",
      type: "boolean",
      description: "Aan laten staan zolang het geen echte opdracht was.",
      initialValue: true,
    },
    { name: "headline", title: "Kop", type: "string" },
    { name: "problem", title: "Wat er misging", type: "text", rows: 3 },
    { name: "approach", title: "Wat je anders deed", type: "text", rows: 3 },
    { name: "outcome", title: "Resultaat of status", type: "text", rows: 2 },
    {
      name: "palette",
      title: "Twee kleuren voor het vlak",
      type: "array",
      of: [{ type: "string" }],
      description: "Twee hexcodes, bijvoorbeeld #1F3A34 en #C1633D.",
      validation: (regel: any) => regel.length(2),
    },
    { name: "volgorde", title: "Volgorde", type: "number" },
  ],
  orderings: [
    { name: "volgorde", title: "Volgorde", by: [{ field: "volgorde", direction: "asc" }] },
  ],
  preview: { select: { title: "client", subtitle: "sector" } },
};

const vraag: SchemaTypeDefinition = {
  name: "vraag",
  title: "Veelgestelde vraag",
  type: "document",
  fields: [
    { name: "q", title: "Vraag", type: "string" },
    { name: "a", title: "Antwoord", type: "text", rows: 5 },
    { name: "volgorde", title: "Volgorde", type: "number" },
  ],
  orderings: [
    { name: "volgorde", title: "Volgorde", by: [{ field: "volgorde", direction: "asc" }] },
  ],
  preview: { select: { title: "q" } },
};

export const schemaTypes: SchemaTypeDefinition[] = [
  instellingen,
  pakket,
  abonnement,
  fase,
  project,
  vraag,
];
