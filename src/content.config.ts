import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const headerSchema = z.object({
  image: z.string().optional(),
  overlay_image: z.string().optional(),
  teaser: z.string().optional(),
  overlay_filter: z.number().optional(),
  caption: z.string().optional(),
}).optional();

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,markdown}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    header: headerSchema,
    tags: z.array(z.string()).optional().default([]),
    toc: z.boolean().optional().default(true),
    date: z.coerce.date().optional(),
  }),
});

const guitar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guitar' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    toc: z.boolean().optional().default(false),
    toc_sticky: z.boolean().optional(),
    classes: z.string().optional(),
  }),
});

export const collections = { posts, guitar };
