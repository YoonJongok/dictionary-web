import React, { useState } from 'react';
import { FlexBox } from '../FlexBox/FlexBox';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg';
import { SelectBox, SelectObj } from '../SelectBox/SelectBox';
import { Switch } from '@headlessui/react';

const typographyConfig: Array<SelectObj> = [
  { value: 'Sans Serif' },
  { value: 'Serif' },
  { value: 'Mono' },
];

export const Header: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <FlexBox intent={'row'} modifier={'flexBetweenCenter'} className='p-6'>
      <Logo />
      <FlexBox intent={'row'} modifier={'flexAroundCenter'} className='gap-4'>
        <SelectBox selectConfig={typographyConfig} />
        <div className='w-[2px] h-8 bg-grey-200'></div>
        <FlexBox intent={'row'} className='items-center gap-3'>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`cursur-pointer relative inline-flex px-[2px] items-center h-[22px] w-[42px] shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75
            ${enabled ? 'bg-accent' : 'bg-input'}
            `}
          >
            <span
              className={`cursur-pointer inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out
            ${enabled ? 'translate-x-5' : 'translate-x-0'}
            `}
            />
          </Switch>
          <MoonIcon className={`${enabled ? 'stroke-accent' : 'stroke-input'}`} />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

