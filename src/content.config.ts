import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resume = defineCollection({
  loader: glob({ base: "./src/content/resume", pattern: "**/*.md" }),
  schema: z.object({
    lang: z.enum(["pt", "en"]),
    locale: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    name: z.string(),
    contacts: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),
  }),
});

export const collections = { resume };
