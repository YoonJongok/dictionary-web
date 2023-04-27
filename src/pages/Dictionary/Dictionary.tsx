import React, { useState } from 'react';
import { FlexBoxColumn } from '../../components/FlexBoxColumn/FlexBoxColumn';
import WordHeader from './WordHeader';
import Form from '../../components/Form';
import SectionTitle from '../../components/Section/SectionTitle';
import SectionBody from '../../components/Section/SectionBody';
import { Divider } from '../../components/Divider/Divider';
import { getWordByInput } from '../../api/dictionary/getWord';
import { useQuery } from '@tanstack/react-query';
import { getValidAudio } from '../../utils/audio';

export const Dictionary: React.FC = () => {
  const [input, setInput] = useState('');

  const { data, isLoading, status } = useQuery({
    queryKey: ['word', input],
    queryFn: () => getWordByInput(input),
  });

  const fetchedAudio = getValidAudio(data);

  const isNounExist = data && data[0]?.meanings && data[0].meanings[0];
  const isVerbExist = data && data[0]?.meanings && data[0].meanings[1];

  return (
    <FlexBoxColumn className='items-start text-lightmode-primary dark:bg-black-900 leading-relaxed tracking-wide gap-0 tablet:gap-6'>
      <Form {...{ input, setInput }} />
      {status === 'loading' && <p className='text-input'>Loading...</p>}
      {status === 'error' && <p className='text-input'>Can't find the word</p>}
      {!isLoading && data && data.length > 0 && (
        <>
          <WordHeader word={data[0].word} phonetic={data[0].phonetic} audio={fetchedAudio} />
          <FlexBoxColumn className='w-full'>
            {isNounExist && (
              <>
                <SectionTitle title='noun' />
                <SectionBody meaning={data[0].meanings?.[0]} />
              </>
            )}
            {isVerbExist && (
              <>
                <SectionTitle title='verb' />
                <SectionBody meaning={data[0].meanings?.[1]} />
              </>
            )}
            {data[0].sourceUrls && (
              <>
                <Divider axis='horizontal' />
                <FlexBoxColumn className='py-7 text-left gap-2' fullWidth>
                  <div className='w-fit border-b-[1px] border-input '>
                    <p className='text-input text-base font-extralight'>Source</p>
                  </div>
                  <p className=' text-base font-light dark:text-white'>{data[0].sourceUrls[0]}</p>
                </FlexBoxColumn>
              </>
            )}
          </FlexBoxColumn>
        </>
      )}
    </FlexBoxColumn>
  );
};

