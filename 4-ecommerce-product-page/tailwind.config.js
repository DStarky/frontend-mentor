/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': 'hsl(26, 100%, 55%)',
        'orange-pale': 'hsl(25, 100%, 94%)',
        'orange-hover': 'hsl(26, 100%, 71%)',
        'font': 'hsl(219, 9%, 45%)',
        'dark': 'hsl(220, 13%, 13%)',
        'hover': 'hsl(220, 14%, 75%)',
        'bg-count': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'backdrop': 'hsla(0, 0%, 0%, 0.75)',
        'thumb': 'hsla(0, 0%, 100%, 0.25)',
      },
      fontSize: {
        lg: ['44px', { fontWeight: 700, lineHeight: '109%' }],
        'subtitle': ['13px', { fontWeight: 700, letterSpacing: '2px' }],
        'price': ['28px', { fontWeight: 700 }],
        'price-old': ['16px', { fontWeight: 700, lineHeight: '162.5%' }],
        base: ['16px', { fontWeight: 400, lineHeight: '162.5%' }],
        'item': ['15px', { lineHeight: '173%' }],
        'item-menu': ['26px', { fontWeight: 700, lineHeight: '144%' }]
      },
      boxShadow: {
        'main': '0px 20px 50px -20px rgba(28, 29, 30, 0.50);',
      },
      backgroundImage: {
        'background': 'linear-gradient(hsl(273, 75%, 66%) 0%, hsl(240, 73%, 65%) 100%)',
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
  future: {
    hoverOnlyWhenSupported: true,
  },
}