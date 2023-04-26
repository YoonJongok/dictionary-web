/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '640px',
      desktop: '1280px',
    },
    extend: {
      colors: {
        lightmode: {
          primary: '#2D2D2D',
        },
        darkmode: {
          primary: '#FFF',
          container: '#1F1F1F',
        },
        input: '#757575',
        accent: '#A445ED',
        black: {
          900: '#050505',
          100: '#3A3A3A',
        },
        grey: {
          100: '#F4F4F4',
          200: '#E9E9E9',
        },
        error: '#FF5252',
      },
    },
  },
  plugins: [],
};

