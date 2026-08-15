import { client } from "@/sanity/client";
import { sanityAan } from "@/sanity/env";
import {
  site as siteStandaard,
  packages as pakkettenStandaard,
  plans as abonnementenStandaard,
  phases as fasenStandaard,
  projects as projectenStandaard,
  faqs as vragenStandaard,
  type Package,
  type Plan,
  type Phase,
  type Project,
} from "@/lib/site";

/**
 * Eén laag tussen de pagina's en de inhoud.
 *
 * Staat Sanity aan, dan komt alles daaruit. Staat het uit, of geeft Sanity
 * niets terug, dan gebruikt de site de teksten uit lib/site.ts. Zo blijft de
 * site altijd werken, ook als Sanity er even uit ligt.
 */

async function haal<T>(query: string, standaard: T): Promise<T> {
  if (!sanityAan || !client) return standaard;
  try {
    const data = await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
    if (Array.isArray(data)) return data.length ? data : standaard;
    return data ?? standaard;
  } catch (fout) {
    console.error("Ophalen uit Sanity mislukt, val terug op lib/site.ts:", fout);
    return standaard;
  }
}

export type Site = typeof siteStandaard;

export async function getSite(): Promise<Site> {
  const uitSanity = await haal<Partial<Site> | null>(
    `*[_type == "instellingen"][0]`,
    null,
  );
  // Ontbrekende velden vallen terug op de standaard, dus nooit een leeg adres.
  return { ...siteStandaard, ...(uitSanity ?? {}) };
}

export async function getPackages(): Promise<Package[]> {
  return haal<Package[]>(
    `*[_type == "pakket"] | order(volgorde asc){
      "id": _id, name, price, priceNote, pitch, featured, includes
    }`,
    pakkettenStandaard,
  );
}

export async function getPlans(): Promise<Plan[]> {
  return haal<Plan[]>(
    `*[_type == "abonnement"] | order(volgorde asc){
      "id": _id, name, price, pitch, featured, includes
    }`,
    abonnementenStandaard,
  );
}

export async function getPhases(): Promise<Phase[]> {
  return haal<Phase[]>(
    `*[_type == "fase"] | order(from asc){
      days, from, to, title, summary, you, me, done
    }`,
    fasenStandaard,
  );
}

export async function getProjects(): Promise<Project[]> {
  return haal<Project[]>(
    `*[_type == "project"] | order(volgorde asc){
      "slug": slug.current, client, sector, concept, headline,
      problem, approach, outcome, palette
    }`,
    projectenStandaard,
  );
}

export async function getFaqs(): Promise<{ q: string; a: string }[]> {
  return haal(
    `*[_type == "vraag"] | order(volgorde asc){ q, a }`,
    vragenStandaard as unknown as { q: string; a: string }[],
  );
}
