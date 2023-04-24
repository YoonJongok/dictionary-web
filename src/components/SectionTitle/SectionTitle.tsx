import React from 'react';
import { FlexBoxRow } from '../FlexBoxRow/FlexBoxRow';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <FlexBoxRow intent={'flexStartCenter'} fullWidth className='gap-6 py-8'>
      <p className='font-semibold text-xl'>{title}</p>
      <div className='w-full h-[1px] bg-grey-200'></div>
    </FlexBoxRow>
  );
};

