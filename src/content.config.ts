import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galleries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galleries' }),
  schema: z.object({
    title: z.string(),
    titlePl: z.string().optional(),
    description: z.string(),
    descriptionPl: z.string().optional(),
    order: z.number(),
    coverColor: z.string().default('#111111'),
    photos: z.array(z.object({
      id: z.number(),
      src: z.string(),
      caption: z.string().optional(),
      captionPl: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
    })).default([]),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    lang: z.enum(['en', 'pl']),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const portfolios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolios' }),
  schema: z.object({
    handle: z.string(),
    type: z.enum(['story', 'post', 'colab']),
    approvedEmails: z.array(z.string()).default([]),
    sessionDate: z.string().optional(),
    location: z.string().optional(),
    contentUrl: z.string().optional(),
    photos: z.array(z.object({
      id: z.number(),
      driveId: z.string(),
    })).default([]),
  }),
});

export const collections = { galleries, journal, portfolios };
