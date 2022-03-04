module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans'],
        mono: ['IBM Plex Mono'],
      },
      screens: {
        ml: '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      letterSpacing: {
        75: '0.0075em',
      },
    },
  },
  plugins: [],
};
