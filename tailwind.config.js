/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    container: {
      padding: '1rem'
    },
    extend: {
      colors: {
        'primary': '#0E0E0E',
      },
    },
  },
  plugins: [],
}

