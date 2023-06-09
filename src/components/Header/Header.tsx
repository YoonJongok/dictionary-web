import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MoonIcon } from '../../assets/images/icon-moon.svg';
import { TypographySelectBox } from './TypographySelectBox/TypographySelectBox';
import { DarkModeSwitch } from './DarkModeSwitch/DarkModeSwitch';
import FlexBoxRow from '../FlexBoxRow';
import { Divider } from '../Divider/Divider';
import { useTheme } from '../../context/ThemeProvider/ThemeProvider';

export const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <FlexBoxRow intent={'flexBetweenCenter'}>
      <Logo />
      <FlexBoxRow intent={'flexAroundCenter'} className='gap-4 tablet:gap-[26px]'>
        <TypographySelectBox />
        <Divider axis='vertical' />
        <FlexBoxRow className='items-center gap-3 tablet:gap-5'>
          <DarkModeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <MoonIcon className={`${isDarkMode ? 'stroke-accent' : 'stroke-input'}`} />
        </FlexBoxRow>
      </FlexBoxRow>
    </FlexBoxRow>
  );
};

