/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2463',
          dark: '#071a4a',
          light: '#163990',
        },
        accent: {
          DEFAULT: '#3DDC97',
          dark: '#2ab578',
          light: '#64e5ae',
        },
        warning: {
          DEFAULT: '#FFC857',
          dark: '#fbb424',
          light: '#ffd78a',
        },
        error: {
          DEFAULT: '#E63946',
          dark: '#c01d2b',
          light: '#eb636e',
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'inner-lg': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};