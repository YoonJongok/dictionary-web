import React, { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className='w-full h-full min-h-screen'>{children}</div>;
};

