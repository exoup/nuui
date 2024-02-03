/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#4E73DF',
                secondary: '#36B9CC',
                tertiary: '#FF7849',
                grape: '#8165A8',
                info: '#858796',
                success: '#1CC88A',
                warning: '#F6C23E',
                danger: '#E74A3B',
                light: '#F8F9FC',
                dark: '#5A5C69'
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
}