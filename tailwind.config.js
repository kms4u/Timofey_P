/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Chivo Mono': ['"Chivo Mono"', 'monospace'],
      },
      colors: {
        lightBlue: '#97aabe',
        lightViolet: '#7580a3',
        sandy: '#bbb2bd',
        darkGreen: '#0d1e25',
        Center: '#0d2026',
        darkG: '#32424b',
        TextHover: '#7e98a9',
      },
      backgroundImage: {
        'Tokyo': "url('../img/Tokyo.jpg')",
      },
    },
  },
  plugins: [],
}

