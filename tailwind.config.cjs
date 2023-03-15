/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main-layout': 'minmax(50px,150px) 3fr minmax(50px,150px)',
      },
      gridColumn: {
        'main-layout-item': '2',
      },
    },
  },
  plugins: [],
}

module.exports = config
