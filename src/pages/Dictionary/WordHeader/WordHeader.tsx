import React from 'react';
import { FlexBoxRow } from '../../../components/FlexBoxRow/FlexBoxRow';
import { FlexBoxColumn } from '../../../components/FlexBoxColumn/FlexBoxColumn';
import { ReactComponent as PlayIcon } from '../../../assets/images/icon-play.svg';

interface WordHeaderProps {
  word: string;
  phonetic?: string | undefined;
}

export const WordHeader: React.FC<WordHeaderProps> = ({ word, phonetic }) => {
  return (
    <FlexBoxRow intent={'flexBetweenCenter'} className='w-full pt-7'>
      <FlexBoxColumn className='gap-3'>
        <h1 className='text-4xl font-medium'>{word}</h1>
        {phonetic && <p className='text-xl font-normal text-accent'>{phonetic}</p>}
      </FlexBoxColumn>
      <PlayIcon width={60} height={60} />
    </FlexBoxRow>
  );
};

