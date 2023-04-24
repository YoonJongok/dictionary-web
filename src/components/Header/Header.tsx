import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg';
import { SelectBox, SelectObj } from './SelectBox/SelectBox';
import { DarkModeSwitch } from './DarkModeSwitch/DarkModeSwitch';
import FlexBoxRow from '../FlexBoxRow';

const typographyConfig: Array<SelectObj> = [
  { value: 'Sans Serif' },
  { value: 'Serif' },
  { value: 'Mono' },
];

export const Header: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <FlexBoxRow intent={'flexBetweenCenter'} className='p-6'>
      <Logo />
      <FlexBoxRow intent={'flexAroundCenter'} className='gap-4'>
        <SelectBox selectConfig={typographyConfig} />
        <div className='w-[2px] h-8 bg-grey-200'></div>
        <FlexBoxRow className='items-center gap-3'>
          <DarkModeSwitch isDarkMode={enabled} setDarkMode={setEnabled} />
          <MoonIcon className={`${enabled ? 'stroke-accent' : 'stroke-input'}`} />
        </FlexBoxRow>
      </FlexBoxRow>
    </FlexBoxRow>
  );
};

