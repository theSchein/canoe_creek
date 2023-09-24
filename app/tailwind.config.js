/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#618264',
        'secondary': '#79AC78',
        'tertiary': '#B0D9B1',
        'quaternary': '#D0E7D2',
        'background': '#618264'
    },
    },
  },
  plugins: [],
}
