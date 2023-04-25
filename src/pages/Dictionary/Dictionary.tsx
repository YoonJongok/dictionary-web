import React, { useEffect, useState } from 'react';
import { FlexBoxColumn } from '../../components/FlexBoxColumn/FlexBoxColumn';
import WordHeader from './WordHeader';
import Form from '../../components/Form';
import SectionTitle from '../../components/Section/SectionTitle';
import SectionBody from '../../components/Section/SectionBody';
import { Divider } from '../../components/Divider/Divider';
import { getWordByInput } from '../../api/dictionary/getWord';
import { useQuery } from '@tanstack/react-query';

export const Dictionary: React.FC = () => {
  const [input, setInput] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['word', input],
    queryFn: () => getWordByInput(input),
  });

  console.log(data);

  return (
    <FlexBoxColumn className='items-center text-lightmode-primary  px-7'>
      <Form {...{ input, setInput }} />
      {!isLoading && data && data.length > 0 && (
        <>
          <WordHeader word={data[0].word} phonetic={data[0].phonetic} />
          {data[0].meanings && (
            <>
              <FlexBoxColumn>
                <SectionTitle title='noun' />
                <SectionBody meaning={data[0]?.meanings[0]} />
              </FlexBoxColumn>

              <FlexBoxColumn className='mb-8'>
                <SectionTitle title='verb' />
                <SectionBody meaning={data[0]?.meanings[1]} />
              </FlexBoxColumn>
              <Divider />
              <FlexBoxColumn className='py-7 text-left gap-2' fullWidth>
                <p className='text-input underline text-base font-extralight'>Source</p>
                {data[0].sourceUrls && (
                  <p className=' text-base font-light'>{data[0].sourceUrls[0]}</p>
                )}
              </FlexBoxColumn>
            </>
          )}
        </>
      )}
    </FlexBoxColumn>
  );
};

