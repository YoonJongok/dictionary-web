import React from 'react';

interface DividerProps {
  axis: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({ axis = 'horizontal' }) => {
  if (axis === 'vertical') {
    return <div className='w-[2px] h-8 bg-grey-200'></div>;
  }

  return <div className='w-full h-[1px] bg-grey-200'></div>;
};

