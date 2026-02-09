/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"'],
        mono: ['"JetBrains Mono"'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
