import React from 'react';
import { FlexBoxColumn } from '../../FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from '../../FlexBoxRow/FlexBoxRow';
import { ReactComponent as DotIcon } from '../../../assets/images/icon-dot.svg';

interface SectionBodyProps {
  meaning?: {
    partOfSpeech: string;
    definitions: {
      definition?: string;
      example?: string;
      synonyms: Array<string | undefined>;
      antonyms: Array<string | undefined>;
    }[];
  };
}

export const SectionBody: React.FC<SectionBodyProps> = ({ meaning }) => {
  return (
    <FlexBoxColumn className='items-start gap-4'>
      <p className='text-input text-lg font-extralight'>Meaning</p>
      <ul className='text-lightmode-primary'>
        {meaning?.definitions.map((definition) => (
          <FlexBoxRow key={crypto.randomUUID()} intent={'flexStartStart'} className='gap-[20px] '>
            <div className='pt-[10px]'>
              <DotIcon />
            </div>
            <li>{definition?.definition}</li>
          </FlexBoxRow>
        ))}
      </ul>

      <FlexBoxColumn className='mt-6'>
        {meaning?.definitions[0]?.synonyms && meaning.definitions[0].synonyms.length > 0 && (
          <>
            <p className='text-input text-lg font-extralight'>Synonyms</p>
            {meaning?.definitions.map(({ synonyms }) => {
              return (
                <p key={crypto.randomUUID()} className='text-accent text-lg font-semibold'>
                  {synonyms.join(', ')}
                </p>
              );
            })}
          </>
        )}
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

