import React from 'react';
import { FlexBoxRow } from '../../FlexBoxRow/FlexBoxRow';
import { Divider } from '../../Divider/Divider';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <FlexBoxRow intent={'flexStartCenter'} fullWidth className='gap-6 py-8'>
      <p className='font-semibold text-xl dark:text-white'>{title}</p>
      <Divider />
    </FlexBoxRow>
  );
};

