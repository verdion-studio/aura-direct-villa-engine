/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0A0D10',
          darkSurface: '#12171E',
          darkCard: '#171F29',
          darkBorder: '#232D3B',
          
          light: '#FBFBFA',
          lightSurface: '#FFFFFF',
          lightCard: '#F4F4F1',
          lightBorder: '#E5E4DE',

          gold: '#C5A059',
          goldLight: '#E8D5B5',
          goldDark: '#8F6F33',
          sand: '#ECE7DE',
          muted: '#8E98A4',
          mutedLight: '#68727D',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Didot', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestLuxury: '0.2em',
      },
    },
  },
  plugins: [],
};
