/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0B0F12',
          surface: '#12181F',
          card: '#18202A',
          border: '#283545',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          goldDark: '#997D22',
          sand: '#E6DEC8',
          stone: '#A0AAB5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
