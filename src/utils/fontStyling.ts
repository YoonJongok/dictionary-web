export type FontFamily = 'Inter' | 'Inconsolata' | 'Lora';

export type KeyValuePair = { key: string; value: string };

export const FontFamilyOptions: Array<KeyValuePair> = [
  { key: 'Inter', value: 'Inter' },
  { key: 'Inconsolata', value: 'Inconsolata' },
  { key: 'Lora', value: 'Lora' },
];

export type ExtendedFontFamilyOptions = { key: string; weightOptions: KeyValuePair[] };
