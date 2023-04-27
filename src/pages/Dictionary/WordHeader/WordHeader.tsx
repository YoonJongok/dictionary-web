import React from 'react';
import { FlexBoxRow } from '../../../components/FlexBoxRow/FlexBoxRow';
import { FlexBoxColumn } from '../../../components/FlexBoxColumn/FlexBoxColumn';
import { ReactComponent as PlayIcon } from '../../../assets/images/icon-play.svg';
import { playAudio } from '../../../utils/audio';

interface WordHeaderProps {
  word: string;
  audio?: string;
  phonetic?: string;
}

export const WordHeader: React.FC<WordHeaderProps> = ({ word, audio, phonetic }) => {
  return (
    <FlexBoxRow intent={'flexBetweenCenter'} className='w-full mobile:mt-6'>
      <FlexBoxColumn className='gap-3 tracking-wider'>
        <h1 className='text-4xl tablet:text-6xl font-medium dark:text-white '>{word}</h1>
        {phonetic && <p className='text-xl font-normal text-accent tracking-widest'>{phonetic}</p>}
      </FlexBoxColumn>
      {!!audio && (
        <button onClick={() => playAudio(audio)}>
          <PlayIcon width={60} height={60} />
        </button>
      )}
    </FlexBoxRow>
  );
};

