/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      24: '6rem',
      32: '8rem'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
