/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5722',
        secondary: '#1D295D',
        accent: '#FA3C00',
        'brand-orange': '#FF5722',
        'brand-orange-dark': '#e64a19',
        'brand-blue': '#1D295D',
        'brand-bg': '#FFF8F5',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
