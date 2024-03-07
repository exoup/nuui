export const typography = {
    defaultOptions: {
        variant: 'primary'
    },
    styles: {
        variants: {
            primary: {
                light: 'text-gray-700',
                dark: 'dark:text-gray-300',
            },
            secondary: {
                light: 'text-secondary-text',
                dark: 'dark:text-secondary-50',
            },
            tertiary: {
                light: 'text-tertiary-text',
                dark: 'dark:text-white',
            },
            neutral: {
                light: 'text-zinc-800',
                dark: 'dark:text-neutral-50',
            }
        }
    }
};

export default typography;