import React from 'react';
import FlexBoxColumn from '../FlexBoxColumn';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <FlexBoxColumn className='w-full  h-full min-h-screen dark:bg-black-900'>
      <FlexBoxColumn className='w-full max-w-[737px]  h-full min-h-screen mx-auto  px-7 tablet:px-10 py-6 tablet:py-14 gap-6 tablet:gap-12'>
        <Header />
        {children}
      </FlexBoxColumn>
    </FlexBoxColumn>
  );
};

