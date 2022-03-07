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
        sl: '1366px', // Small Large
        ml: '1440px', // Medium Large
        '3xl': '1600px',
        '4xl': '1920px',
      },
      letterSpacing: {
        75: '0.0075em',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
