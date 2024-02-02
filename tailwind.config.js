/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                body: '#F8F9FC',
                primary: '#4E73DF',
                secondary: '#858796',
                tertiary: '#8165A8',
                success: '#1CC88A',
                info: '#36B9CC',
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