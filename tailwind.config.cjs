/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        'screen-full': '100dvh',
      },
      height: {
        'screen-full': '100dvh',
      },
      gridTemplateRows: {
        'main-layout': '100px 1fr',
      },
      gridTemplateColumns: {
        'main-layout': 'minmax(50px,150px) 3fr minmax(50px,150px)',
      },
      gridColumn: {
        'main-layout-item': '2',
      },
      backgroundImage: {
        grass: 'url(~/public/grass-bg.webp)',
      },
    },
  },
  plugins: [],
}

module.exports = config
