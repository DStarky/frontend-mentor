/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': 'hsl(14, 88%, 65%)',
        'bold': 'hsl(238, 29%, 16%)',
        'font': 'hsl(237, 12%, 33%)',
        'gray': 'hsl(240, 6%, 50%)',
      },
      fontSize: {
        xl: ['32px', { fontWeight: 700 }],
        lg: ['14px', { fontWeight: 700 }],
        base: ['14px', { fontWeight: 400 }],
        sm: ['12px']
      },
      boxShadow: {
        'main': '0px 50px 50px -20px rgba(53, 18, 122, 0.50)',
      },
      backgroundImage: {
        'background': 'linear-gradient(hsl(273, 75%, 66%) 0%, hsl(240, 73%, 65%) 100%)',
        'divider': 'hsl(240, 5%, 91%)',
      }
    },


  },
  plugins: [],
}