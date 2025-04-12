import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)'],
        mono: ['var(--font-ibm-mono)'],
      },
      screens: {
        sl: '1366px', // Small Large
        ml: '1440px', // Medium Large
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
      },
      letterSpacing: {
        75: '0.0075em',
      },
      colors: {
        dark: '#2E2D2D',
      },
    },
  },
  plugins: [],
} satisfies Config;
