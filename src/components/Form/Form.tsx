import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-search.svg';

interface FormProps {
  setInput: (input: string) => void;
  input: string;
}

export const Form: React.FC<FormProps> = ({ setInput, input }) => {
  const [value, setValue] = React.useState<string>(input);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInput(value);

    setValue('');
  };

  return (
    <form className='relative w-full'>
      <input
        placeholder='Search vocabulary'
        className='w-full px-6 py-4 bg-grey-100 dark:bg-darkmode-container rounded-xl text-base  text-lightmode-primary dark:text-white placeholder-slate-400'
        onChange={handleInputChange}
        value={value}
      />

      <button
        type='submit'
        onClick={handleSubmit}
        className='absolute top-1/2 transform -translate-y-1/2 right-4'
      >
        <SearchIcon />
      </button>
    </form>
  );
};

