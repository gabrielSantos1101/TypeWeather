/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      vulcan: {
        50: '#f6f6f9',
        100: '#ececf2',
        200: '#d4d5e3',
        300: '#afb1ca',
        400: '#8488ac',
        500: '#646893',
        600: '#505279',
        700: '#414363',
        800: '#393a53',
        900: '#333447',
        950: '#16161f',
      },
      cinder: {
        50: '#f6f6f9',
        100: '#ececf2',
        200: '#d5d6e2',
        300: '#b0b2c9',
        400: '#8588ab',
        500: '#666a91',
        600: '#515478',
        700: '#434461',
        800: '#3a3c52',
        900: '#343546',
        950: '#13131a',
      },
      'port-gore': {
        50: '#eff4fe',
        100: '#e2e9fd',
        200: '#cbd6fa',
        300: '#abbbf6',
        400: '#8997f0',
        500: '#6d74e7',
        600: '#5451da',
        700: '#4742c0',
        800: '#3a389b',
        900: '#34357b',
        950: '#1f1e47',
      },
      'ship-cove': {
        50: '#f2f7fb',
        100: '#e7f0f8',
        200: '#d4e3f1',
        300: '#b9d0e8',
        400: '#9cb6dd',
        500: '#7894cc',
        600: '#6b82c0',
        700: '#5a6da8',
        800: '#4a5a89',
        900: '#414d6e',
        950: '#262c40',
      },
    },
  },
  plugins: [],
}
