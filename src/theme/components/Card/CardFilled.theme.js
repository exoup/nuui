const FilledOptions = {
    primary: {
        base: {
            initial: 'border',
            light: 'bg-white border-gray-300',
            dark: 'dark:bg-gray-800 dark:border-gray-700'
        }
    },
    secondary: {
        base: {
            initial: 'border',
            light: 'bg-secondary-50 border-light',
            dark: 'dark:bg-zinc-900 dark:border-zinc-800'
        }
    },
    tertiary: {
        base: {
            initial: 'border',
            light: 'bg-white border-tertiary-200',
            dark: 'dark:bg-tertiary-text dark:border-tertiary'
        }
    },
    neutral: {
        base: {
            initial: 'border',
            light: 'bg-neutral-50 border-neutral-700',
            dark: 'dark:bg-neutral-900 dark:border-neutral-800'
        }
    }
};

export default FilledOptions;