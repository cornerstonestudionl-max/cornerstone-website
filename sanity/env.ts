/**
 * Instellingen voor Sanity.
 *
 * Zolang NEXT_PUBLIC_SANITY_PROJECT_ID leeg is, blijft de site gewoon werken:
 * hij valt dan terug op de teksten in lib/site.ts. Vul je het projectnummer
 * in, dan haalt de site alles uit Sanity en kun je op /studio bewerken.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

/** Staat Sanity aan? Eén plek waar dat bepaald wordt. */
export const sanityAan = projectId.length > 0;
