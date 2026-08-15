import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityAan } from "./env";

/**
 * Alleen aanmaken als er een projectnummer is. Zonder dat nummer valt de
 * site terug op de teksten in lib/site.ts, zie lib/content.ts.
 */
export const client = sanityAan
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
