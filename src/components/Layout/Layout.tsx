import React, { FC, ReactNode } from 'react';
import { FlexBox } from '../FlexBox/FlexBox';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <FlexBox intent={'column'} className='w-full h-full min-h-screen'>
      <Header />
      {children}
    </FlexBox>
  );
};

