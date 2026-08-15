"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schema";
import { apiVersion, dataset, projectId } from "./sanity/env";

/**
 * De beheeromgeving op /studio.
 *
 * Als er nog geen projectnummer is, gebruiken we een tijdelijke waarde zodat
 * de build niet struikelt. De studiopagina zelf toont dan een uitleg in plaats
 * van de beheeromgeving.
 */
export default defineConfig({
  basePath: "/studio",
  title: "Cornerstone Studio",
  projectId: projectId || "placeholder",
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhoud")
          .items([
            S.listItem()
              .title("Bedrijfsgegevens")
              .child(
                S.document().schemaType("instellingen").documentId("instellingen"),
              ),
            S.divider(),
            S.documentTypeListItem("pakket").title("Pakketten"),
            S.documentTypeListItem("abonnement").title("Onderhoudsabonnementen"),
            S.divider(),
            S.documentTypeListItem("fase").title("De veertien dagen"),
            S.documentTypeListItem("project").title("Werk"),
            S.documentTypeListItem("vraag").title("Veelgestelde vragen"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
