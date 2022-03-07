// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
      },
      screens: {
        sl: '1366px', // Small Large
        ml: '1440px', // Medium Large
        '3xl': '1600px',
        '4xl': '1920px',
      },
      letterSpacing: {
        75: '0.0075em',
      },
      colors: {
        dark: '#2E2D2D',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
