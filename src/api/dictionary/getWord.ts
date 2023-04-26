import { z } from 'zod';
import { apiService } from '../apiService';
import { Word, WordSchema } from './dictionary.types';

export const getWordByInput = async (word: string): Promise<Word[]> => {
  if (word.length === 0) return [];

  const response = await apiService.get(`/${word ?? ''}`);
  const parsed = z.array(WordSchema).safeParse(response.data);

  if (!parsed.success) {
    throw new Error(parsed.error.message);
  }

  return response.data;
};

