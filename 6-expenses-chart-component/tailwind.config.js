/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8e9dd',
        orange: '#ec775f',
        white: '#fffaf5',
        accent: '#76b5bc',
        separator: '#F8E9DD',
        brown: '#382314'
      },
      fontSize: {
        md: '32px',
        lg: '48px',
      },
      borderRadius: {
        DEFAULT: '16px',
      }
    },
  },
  plugins: [],
}