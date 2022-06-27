/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'green': {
            '100': '#EFFCEE',
            '200': '#DFF9DC',
            '300': '#CEF6CA',
            '400': '#9DEE96',
            '500': '#5CE250',
            '600': '#2DC11F',
            '700': '#1D7B14',
            '800': '#0C3509',
            '850': '#082306',
            '900': '#041103'
          },

          'blue': {
            '100': '#E1EBF4',
            '200': '#D2E1EF',
            '300': '#A4C2DF',
            '400': '#77A3CF',
            '500': '#598FC5',
            '600': '#3E78B2',
            '700': '#2A5279',
            '800': '#15293C',
            '850': '#0B151E',
            '900': '#050A0F'
          },

          'cyan': {
            '100': '#EFF9FA',
            '200': '#E0F3F6',
            '300': '#C0E7EC',
            '400': '#89D2DC',
            '500': '#52BDCB',
            '600': '#2F909D',
            '700': '#1C575E',
            '800': '#0E2C2F',
            '850': '#091E1F',
            '900': '#050F10'
          },

          'purple': {
            '100': '#F6F2F8',
            '200': '#E3D7EA',
            '300': '#BEA1CE',
            '400': '#AC87C0',
            '500': '#8654A0',
            '600': '#643F78',
            '700': '#432D4E',
            '800': '#211627',
            '850': '#160F1A',
            '900': '#0B070D'
          },

          'pink': {
            '100': '#FFEBF1',
            '200': '#FFD6E3',
            '300': '#FFADC7',
            '400': '#FF729F',
            '500': '#FF1F66',
            '600': '#E00047',
            '700': '#A30034',
            '800': '#52001A',
            '850': '#29000D',
            '900': '#140006'
          },


        },
      },
      fontFamily: {
        'brand-serif-joan': 'Joan',

        'brand-sans-serif-lato': 'Lato',


        'brand-cursive-comfortaa':'Comfortaa',

        'brand-cursive-monoton':'Monoton',

        'brand-cursive-poiretOne': 'Poiret One'
        }
    },
  },
  plugins: [],
}
