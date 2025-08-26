module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Montserrat"', 'ui-sans-serif', 'system-ui'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular']
      },
      colors: {
        primary: '#00E0A3',
        accent: '#FF5A7A'
      }
    }
  },
  plugins: [],
}
