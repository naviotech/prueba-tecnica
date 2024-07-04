/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "mobile-light": 'url("./public/img/image-mobile-light.png")',
        "desktop-light": 'url("./public/img/image-desktop-light.png")',
        "mobile-dark": 'url("./public/img/image-mobile.png")',
        "desktop-dark": 'url("./public/img/desktop-dark.png")',
      }
    },
  },
  plugins: [],
}