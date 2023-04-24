import React from 'react';
import { FlexBoxColumn } from '../../FlexBoxColumn/FlexBoxColumn';
import { FlexBoxRow } from '../../FlexBoxRow/FlexBoxRow';
import { ReactComponent as DotIcon } from '../../../assets/images/icon-dot.svg';

export const SectionBody = () => {
  return (
    <FlexBoxColumn className='gap-4'>
      <p className='text-input text-lg font-extralight'>Meaning</p>
      <ul className='text-lightmode-primary'>
        <FlexBoxRow intent={'flexStartStart'} className='gap-[20px] '>
          <div className='pt-[10px]'>
            <DotIcon />
          </div>
          <li>
            a word or phrase that is used to refer to a person, animal, place, thing, feeling, or
            idea, especially one that is particular to a particular language or group of people.
          </li>
        </FlexBoxRow>
      </ul>

      <FlexBoxRow intent={'flexStartCenter'} className='gap-10 mt-6'>
        <p className='text-input text-lg font-extralight'>Synonyms</p>
        <p className='text-accent text-lg font-semibold'>Meaning Meaning</p>
      </FlexBoxRow>
    </FlexBoxColumn>
  );
};

