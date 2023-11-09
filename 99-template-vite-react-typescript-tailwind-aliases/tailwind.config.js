/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#d6e2f0',
        'title': '#1f3251',
        'font': '#7b879d'
      },
      fontSize: {
        xl: ['22px', { fontWeight: 700 }],
        base: ['15px', { fontWeight: 400 }],
      },
      boxShadow: {
        'main': '0px 5px 7px 0px rgba(0, 0, 0, 0.25)',
      }
    },


  },
  plugins: [],
}