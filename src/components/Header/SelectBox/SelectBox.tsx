import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ReactComponent as ChevronUpDownIcon } from '../../../assets/images/icon-arrow-down.svg';

export type SelectObj = { value: string };

interface SelectBoxProps {
  selectConfig: Array<SelectObj>;
}

export const SelectBox: React.FC<SelectBoxProps> = ({ selectConfig }) => {
  const [selected, setSelected] = useState(selectConfig[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1 w-[120px] cursor-pointer'>
        <Listbox.Button className='cursor-pointer relative w-full rounded-lg  py-2 pl-3  text-left text-base text-lightmode-primary dark:text-white font-bold focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white'>
          <span className='block '>{selected.value}</span>
          <span className='absolute inset-y-0 right-0 flex items-center'>
            <ChevronUpDownIcon />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm cursor-pointer'>
            {selectConfig.map((config, typographyIdx) => (
              <Listbox.Option
                key={typographyIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-3 text-gray-900 ${
                    active ? 'bg-amber-100' : ''
                  }`
                }
                value={config}
              >
                {({ selected }) => (
                  <span
                    className={`block  ${selected ? 'font-medium' : 'font-light text-slate-500'}`}
                  >
                    {config.value}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

