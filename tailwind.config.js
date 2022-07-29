/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "nav-height": "var(--nav-height)",
        "changable_height": "var(--height-top)",

      },

      width: {
        "modal-side": "var(--modal-side)",
      },
    },
  },
  plugins: [],
  important: true
}
