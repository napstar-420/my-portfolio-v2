import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#075FE4',
        secondary: '#2E81FF',
        'neutral-800': '#1B1F24',
        'neutral-700': '#2D343F',
        'neutral-600': '#5D6C83',
        'neutral-500': '#8895AA',
        'neutral-400': '#C3CAD5',
        'neutral-300': '#E4E7EC',
        'neutral-200': '#F0F2F4',
        'neutral-100': '#FFFFFF',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
