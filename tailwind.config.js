/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      bgcolor: '#23272F',
      textcolor: '#EBECEF',
      bglight: '#F8F9FA',
      header: '#333A45',
      activelink: '#149ECA',
      startlink: '#087EA4',
      warning: '#E3401B',
      lightwarning: '#FFD5CC',

    },
    extend: {
      gridTemplateColumns: {
        'main': '280px 1fr'
      },
      height: {
        'fs': 'calc(100vh - 72px)',
        'home': 'calc(100vh - 136px)',
      }
    },
  },
  plugins: [],
}

