const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      base: colors.slate,
      primary: colors.teal
    },
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '24px',
        md: '40px'
      },
      screens: {
        DEFAULT: '100%',
        sm: '640px',
        md: '768px',
        lg: '1024px'
      }
    }
  },
  plugins: []
};
