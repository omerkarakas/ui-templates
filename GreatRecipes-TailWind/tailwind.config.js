/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6161',
        secondary: {
          100: '#E2E2D5',
          200: '#888882',
        },
      },
    },
  },
  plugins: [],
};
