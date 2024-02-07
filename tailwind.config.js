/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#4E6FDF', //
                "primary-text": '#FFFFFF',
                "primary-dark": '#264ACA',
                secondary: '#F2EDEB',
                "secondary-text": '#111827',
                "secondary-dark": '#EBE3E0',
                tertiary: '#FF7683',
                "tertiary-text": '#141414',
                "tertiary-dark": '#FF6674',
                dark: '#454555',
                "dark-text": '#FFFFFF',
                light: '#AAAABC',
                "light-text": '#191919',
                success: '#B2EDC5',
                "success-text": '#10512A',
                "background-dark": '#191919',
                "background-dark-text": '#FF7A88',
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
}