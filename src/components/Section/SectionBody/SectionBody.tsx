import React from 'react';
import { FlexBoxColumn } from '../../FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from '../../FlexBoxRow/FlexBoxRow';
import { ReactComponent as DotIcon } from '../../../assets/images/icon-dot.svg';
import { Meaning } from '../../../api/dictionary/dictionary.types';

interface SectionBodyProps {
  meaning?: Meaning;
}

export const SectionBody: React.FC<SectionBodyProps> = ({ meaning }) => {
  return (
    <FlexBoxColumn className='items-start gap-4'>
      <p className='text-input text-lg font-extralight'>Meaning</p>
      <ul className='text-lightmode-primary dark:text-white tablet:pl-[22px]'>
        {meaning?.definitions.map((definition) => (
          <FlexBoxRow key={crypto.randomUUID()} intent={'flexStartStart'} className='gap-[20px] '>
            <div className='pt-[10px]'>
              <DotIcon />
            </div>
            <li>{definition?.definition}</li>
          </FlexBoxRow>
        ))}
      </ul>

      <FlexBoxColumn className='mt-6 gap-3'>
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

