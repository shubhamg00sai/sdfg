/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};