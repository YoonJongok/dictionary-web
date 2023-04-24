import React from 'react';
import FlexBoxColumn from '../FlexBoxColumn';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <FlexBoxColumn className='w-full h-full min-h-screen'>
      <Header />
      {children}
    </FlexBoxColumn>
  );
};

