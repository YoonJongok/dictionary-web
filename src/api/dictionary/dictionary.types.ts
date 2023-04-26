import { z } from 'zod';

export const phoneticSchema = z
  .object({
    text: z.string().optional(),
    audio: z.string().optional(),
  })
  .optional();

export const sourceUrlSchema = z.string().optional();

export const definitionSchema = z.object({
  definition: z.string().optional(),
  example: z.string().optional(),
  synonyms: z.array(z.string().optional()),
  antonyms: z.array(z.string().optional()),
});

export const meaningSchema = z.object({
  partOfSpeech: z.string(),
  definitions: z.array(definitionSchema),
});

export const WordSchema = z.object({
  word: z.string(),
  phonetic: z.string().optional(),
  phonetics: z.array(phoneticSchema).optional(),
  origin: z.string().optional(),
  sourceUrls: z.array(sourceUrlSchema).optional(),
  meanings: z.array(meaningSchema).optional(),
  error: z.string().optional(),
});

export type Meaning = z.infer<typeof meaningSchema>;

export type Word = z.infer<typeof WordSchema>;

