module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'diverlingua-aqua': '#0099CC',
        'diverlingua-pink': '#F531A3',
        'diverlingua-pink-hover': '#bf2880',
        'diverlingua-light-blue': '#23CDF7',
        'diverlingua-blue': '#0f7f9b'
      },
      fontFamily: {
        header: ['Source Sans Pro'],
        small: ['Radex Pro'],
        display: ['Noto Sans']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
