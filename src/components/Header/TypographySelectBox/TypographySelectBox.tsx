import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ReactComponent as ChevronUpDownIcon } from '../../../assets/images/icon-arrow-down.svg';
import { FlexBoxRow } from '../../FlexBoxRow/FlexBoxRow';
import { Typography, TypographyKey, useTheme } from '../../../context/ThemeProvider/ThemeProvider';

export const typographyConfig: Typography[] = [
  {
    key: 'Sans Serif',
    value: 'Inter, sans-serif',
  },
  { key: 'Serif', value: 'Lora, serif' },
  { key: 'Mono', value: 'Inconsolata, monospace' },
];

export const TypographySelectBox: React.FC = () => {
  const { isDarkMode, switchFont, font } = useTheme();

  const [selected, setSelected] = useState<Typography>(font);

  const handleFontChange = (value: TypographyKey) => {
    const newTypography = typographyConfig.find(
      (typography) => typography.key === value
    ) as Typography;

    setSelected(newTypography);
    switchFont(newTypography);
  };

  return (
    <Listbox value={selected.key} onChange={handleFontChange}>
      <div className='relative mt-1 w-[120px] cursor-pointer'>
        <Listbox.Button className='cursor-pointer relative w-full rounded-lg  pb-1 pl-3  text-left text-base text-lightmode-primary dark:text-white font-bold focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white'>
          <FlexBoxRow intent={'flexStartCenter'} className='gap-3'>
            {selected.key} <ChevronUpDownIcon />
          </FlexBoxRow>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm cursor-pointer'>
            {typographyConfig.map((typography, typographyIdx) => (
              <Listbox.Option
                key={typographyIdx}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-3 text-gray-900 dark:text-white ${
                    active && isDarkMode ? 'bg-black-900' : ''
                  } ${active && !isDarkMode ? 'bg-amber-100' : ''}`
                }
                value={typography.key}
              >
                {({ selected }) => (
                  <span
                    className={`block  ${selected ? 'font-medium' : 'font-light text-slate-500'}`}
                  >
                    {typography.key}
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

