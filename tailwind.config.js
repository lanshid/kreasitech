/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./{src,public}/**/*.{html,js,ts,jsx,tsx}", "./src/Pages/*.tsx", "./src/Components/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

