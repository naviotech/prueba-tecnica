/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "mobile-light": 'url("/img/image-mobile-light.png")',
        "desktop-light": 'url("/img/image-desktop-light.png")',
        "mobile-dark": 'url("/img/image-mobile.png")',
        "desktop-dark": 'url("/img/desktop-dark.png")',
      }
    },
  },
  plugins: [],
}