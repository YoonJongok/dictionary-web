import { apiService } from '../apiService';

export const getWordByInput = async (word: string) => {
  const response = await apiService.get(`/${word}`);
  return response.data;
};

