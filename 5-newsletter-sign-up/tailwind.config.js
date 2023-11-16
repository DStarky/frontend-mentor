/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#c5c5c5',
        'main': '#2a2833',
        'font': '#7b879d'
      },
      fontSize: {
        xl: ['22px', { fontWeight: 700 }],
        base: ['15px', { fontWeight: 400 }],
      },
      boxShadow: {
        'button': '0px 20px 35px 0px rgba(255, 90, 102, 0.35)',
      },
      backgroundImage: {
        'li': "url('images/icon-list.svg')",
        'gradient': "linear-gradient(90deg, rgba(255,83,123,1) 0%, rgba(253,106,62,1) 100%)",
      },
      backgroundSize: {
        '200%': '200%',
      },
      animation: {
        'fade-in': 'fade-in 0.3s linear'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          }
        }
      }
    },


  },
  plugins: [],
}