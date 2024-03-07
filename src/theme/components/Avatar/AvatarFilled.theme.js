const FilledOptions = {
    primary: {
        base: {
            initial: 'bg-primary-500',
            hover: 'hover:bg-primary-700',
            text: 'text-white'
        }
    },
    secondary: {
        base: {
            initial: 'border-2',
            light: 'bg-secondary-50 border-light',
            dark: 'dark:bg-zinc-900 dark:border-zinc-800',
            text: 'text-secondary-text dark:text-secondary-50'
        }
    },
    tertiary: {
        base: {
            light: 'bg-tertiary-500',
            dark: 'dark:border-2 dark:bg-tertiary-text dark:border-tertiary-400',
            hover: 'hover:bg-tertiary-600 dark:hover:border-tertiary-300',
            text: 'text-white dark:text-tertiary-400 dark:hover:text-tertiary-300'
        }
    },
    neutral: {
        base: {
            initial: 'border-2',
            light: 'bg-white border-neutral-700',
            dark: 'dark:bg-neutral-800 dark:border-neutral-800',
            hover: 'hover:bg-neutral-50 dark:hover:bg-neutral-900',
            text: 'text-neutral-700 dark:text-white',
        }
    },
};

export default FilledOptions;