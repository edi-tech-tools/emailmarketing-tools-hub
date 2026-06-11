/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: '#0a0a0a',
          100: '#141414',
          200: '#1c0a0a',
          300: '#dc2626',
          400: '#b91c1c',
          500: '#dc2626',
        },
        muted: {
          DEFAULT: '#a88282',
          light: '#e5c7c7',
        },
        surface: '#fef2f2',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
