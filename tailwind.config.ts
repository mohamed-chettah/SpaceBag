import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "black-100": "#31333b",
        "black-200": "#443e3c",
        "gold-200": "#f0bf6c",
        'tumbleweed': {
          '50': '#fbf6f1',
          '100': '#f5eadf',
          '200': '#ead2be',
          '300': '#d5a47f',
          '400': '#cd8f6a',
          '500': '#c3734c',
          '600': '#b56041',
          '700': '#964b38',
          '800': '#793e33',
          '900': '#63342b',
          '950': '#351915',
        },


      },
      fontFamily: {
        'body': ['Open Sans']
      },
      screens : {
        '2xl' : '1550px'
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [
  ]
}
