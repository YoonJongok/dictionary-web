import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';

interface FormProps {
  setInput: (input: string) => void;
  input: string;
}

export const Form: React.FC<FormProps> = ({ setInput, input }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className='relative w-full' onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder='Search vocabulary'
        className='w-full px-6 py-4 bg-grey-100 rounded-xl text-base  text-lightmode-primary placeholder-slate-400'
        onChange={handleInputChange}
        value={input}
      />

      <div className='absolute top-1/2 transform -translate-y-1/2 right-4'>
        <SearchIcon />
      </div>
    </form>
  );
};

