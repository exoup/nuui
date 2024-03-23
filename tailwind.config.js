/*eslint no-undef: "error"*/
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    variants: {},
    plugins: [require('@tailwindcss/forms'), require('./src/resources/nuui.js')],
};