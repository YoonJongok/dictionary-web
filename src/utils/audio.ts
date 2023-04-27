import { Word } from '../api/dictionary/dictionary.types';

export function getValidAudio(data: Word[] | undefined): string | undefined {
  if (!data || !data?.length || !data[0]?.phonetics?.length) {
    return;
  }

  const audiosWithSamePhonetic = data[0].phonetics.filter(
    (phonetic) => phonetic?.text === data[0]?.phonetic && !!phonetic?.audio
  );

  if (audiosWithSamePhonetic.length) {
    return audiosWithSamePhonetic[0]?.audio;
  }

  return;
}

export async function playAudio(audioFile: string) {
  const audio = new Audio(audioFile);

  await audio.play();
}

