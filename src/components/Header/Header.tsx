import React, { useState } from 'react';
import { FlexBox } from '../FlexBox/FlexBox';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg';
import { SelectBox } from './SelectBox/SelectBox';
import { Switch } from '@headlessui/react';

export const Header: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <FlexBox intent={'row'} modifier={'flexBetweenCenter'}>
      <Logo />
      <FlexBox intent={'row'} modifier={'flexAroundCenter'} className='gap-4'>
        <SelectBox />
        <div className='w-[2px] h-8 bg-grey-200'></div>
        <FlexBox intent={'row'} className='items-center'>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className='sr-only'>Use setting</span>
            <span
              aria-hidden='true'
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <MoonIcon />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

