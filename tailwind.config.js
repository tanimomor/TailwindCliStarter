/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './templates/**/*.{html,js}',
  ],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      }
    },
  },
  plugins: [],
}

