/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22212f",
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
          // success_100: '#398044',
          // informative: '#839ef9',
          // informative__100: '#3462fe',
        },
        menu: {
          primary: '#365071',
          secondary: '#f0f3fa',
          third: '#6296b7',
          hover: '',
          gray: {
            '0': '#eeee',
          }
        },
        'textColor': {
          primary: '#eee',
        }
      }
    },
  },
  plugins: [],
}

