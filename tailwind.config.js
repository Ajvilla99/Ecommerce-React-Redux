/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        growHeight: 'growHeight 1s ease-in-out',
      },
      keyframes: {
        growHeight: {
          '0%': { height: '0' },
          '100%': { height: '380px' },
        },
      },
      width: {
        'desktop' : '1180px'
      },
      colors: {
        primary: "#0F1C2E",
        secondary: "#FB6340",
        "primary-light": "#97CDF5",
        "secondary-light": "#FFA8B4",
        gray: {
          primary: '#dad9d9'
        },
        actions: {
          error: '#e15b5c',
          error_100: '#963838',
          success: '#3482f9',
          discount: '#f8853E',
        },
        menu: {
          primary: '#0F1C2E',
          "primary-light": '#628ecb',
          secondary: '#3a3c49',
          third: '#6296b7',
          hover: '',
        },
        'textColor': {
          primary: '#eee',
        }
      }
    },
  },
  plugins: [],
}

