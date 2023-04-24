import React, { useState } from 'react';
import { FlexBoxColumn } from '../../components/FlexBoxColumn/FlexBoxColumn';
import WordHeader from './WordHeader';
import Form from '../../components/Form';
import SectionTitle from '../../components/Section/SectionTitle';
import SectionBody from '../../components/Section/SectionBody';
import { Divider } from '../../components/Divider/Divider';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

export const Dictionary: React.FC = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <FlexBoxColumn className='items-center text-lightmode-primary  px-7'>
      <Form />
      <WordHeader />
      <FlexBoxColumn>
        <SectionTitle title='noun' />
        <SectionBody />
      </FlexBoxColumn>

      <FlexBoxColumn className='mb-8'>
        <SectionTitle title='verb' />
        <SectionBody />
      </FlexBoxColumn>
      <Divider />
      <FlexBoxColumn className='py-7 text-left' fullWidth>
        <p className='text-input underline text-base font-extralight'>Meaning</p>
        <p className=' text-base font-light'>https://en.wiktionary.org/wiki/keyboard</p>
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

