import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';

export const Form = () => {
  return (
    <form className='relative w-full'>
      <input
        placeholder='Search vocabulary'
        className='w-full px-6 py-4 bg-grey-100 rounded-xl text-base  text-lightmode-primary placeholder-slate-400'
      />

      <div className='absolute top-1/2 transform -translate-y-1/2 right-4'>
        <SearchIcon />
      </div>
    </form>
  );
};

