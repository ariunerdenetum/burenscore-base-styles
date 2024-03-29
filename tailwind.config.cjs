/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'btn-primary': '0 4px 8px rgba(53, 48, 134, 0.4)',
        'card-primary': '0 4px 4px rgba(0,0,0,0.05)',
      },
      transitionTimingFunction: {
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      fontFamily: {
        primary: 'Inter',
      },
      height: {
        input: '40px',
      },
    },

    colors: {
      transparent: 'transparent',
      background: '#F8F8FA',
      'brand-primary': '#e72d52',
      'brand-secondary': '#003473',
      primary: '#353086',
      secondary: '#33ACB8',
      success: '#0D9488',
      error: '#DC2626',
      info: '#33BFFF',
      warning: '#F4BD50',
      white: '#ffffff',
      default: '#181818',
      body: '#606C80',
      dark: '#2a2149',
      gray: {
        50: '#EBEEF2',
        100: '#DADEE6',
        200: '#B8BFCC',
        290: '#9AA4B5',
        300: '#98A2B3',
        310: '#f5f6fa',
        400: '#7A8699',
        500: '#606C80',
        600: '#475366',
        700: '#323C4D',
        800: '#606C80',
        900: '#606C80',
      },
      black: {
        300: '#2f3542',
        400: '#222f3e',
        500: '#294566',
        600: '#2d3436',
        700: '',
        800: '#2C3A47',
        900: '#000000',
      },
      blue: {
        100: '#A3B6CC',
        500: '#54a0ff',
        600: '#2e86de',
      },
      green: {
        300: '#17E933',
        400: '#1dd1a1',
        500: '#2ecc71',
        600: '#10ac84',
        700: '#26de81',
        800: '#20bf6b',
      },
      red: {
        500: '#e74c3c',
        600: '#e84118',
      },
      yellow: {
        400: '#fbc531',
        500: '#fed330',
        600: '#f6b93b',
        700: '#f7b731',
      },
    },
  },
  plugins: [],
}
