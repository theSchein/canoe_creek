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
        'primary': '#42b883',
        'secondary': '#347474',
        'tertiary': '#35495e',
        'quaternary': '#ff7e67',
        'background': '#35495e'
    },
    },
  },
  plugins: [],
}
