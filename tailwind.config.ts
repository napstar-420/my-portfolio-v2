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
        primary: '#075fe4',
        light: '#c3cad5',
        muted: '#2d343f',
        'background-secondary': '#22282f',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
export default config;
