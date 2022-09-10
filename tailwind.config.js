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
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'theme-gray': {
          700: '#575E5C',
          600: '#A3A9A7',
          500: '#B3BCB9',
          300: '#D3E0DD',
          100: '#E9F2F0'
        },
        'marine': {
          900: '#1B3E39',
          700: '#2E6962',
          500: '#4D9C93',
          300: '#52B6AA',
          100: '#DFF7F5',
        },
        'theme-dark': 'var(--color-theme-dark)',
        'theme-light': 'var(--color-theme-light)',
      },
      keyframes: {
        alternate: {
          '0%, to': {
            left: '0',
            right: '80%'
          },
          '25%, 75%': {
            left: '0',
            right: '0',
          },
          '50%': {
            left: '80%',
            right: '0'
          }
        },
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
        marquee: {
          "0%": {
            left: "0",
          },

          "100%": {
            left: "-100%",
          },
        },
      },
      animation: {
        alternate: 'alternate 2s cubic-bezier(0, 0, 0.58, 1) infinite',
        shake: 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        marquee: "marquee 90s linear infinite",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  important: true
}


