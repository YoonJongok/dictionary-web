/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: {
        100: '#050505',
        200: '#1F1F1F',
        300: '#2D2D2D',
        400: '#3A3A3A',
      },
      grey: {
        100: '#2D2D2D',
        200: '#F4F4F4',
        300: '#E9E9E9',
        400: 'F757575',
      },
      purple: '#A445ED',
      red: '#FF5252',
    },

    extend: {},
  },
  plugins: [],
};

