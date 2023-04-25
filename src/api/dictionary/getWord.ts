import { z } from 'zod';
import { apiService } from '../apiService';

const WordSchema = z.array(
  z.object({
    word: z.string(),
    phonetic: z.string().optional(),
    phonetics: z.array(
      z
        .object({
          text: z.string().optional(),
          audio: z.string().optional(),
        })
        .optional()
    ),
    origin: z.string().optional(),
    meanings: z
      .array(
        z.object({
          partOfSpeech: z.string(),
          definitions: z.array(
            z.object({
              definition: z.string().optional(),
              example: z.string().optional(),
              synonyms: z.array(z.string().optional()),
              antonyms: z.array(z.string().optional()),
            })
          ),
        })
      )
      .optional(),
  })
);

type Word = z.infer<typeof WordSchema>;

export const getWordByInput = async (word: string): Promise<Word> => {
  const response = await apiService.get(`/${word}`);
  WordSchema.parse(response.data);
  return response.data;
};

