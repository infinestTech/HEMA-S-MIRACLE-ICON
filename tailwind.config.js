/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'herobg' : "url('../images/hero2.jpg')"
      }
    },
  },
  plugins: [],
}

