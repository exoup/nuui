const FilledOptions = {
    primary: {
        base: {
            light: 'bg-primary-500 text-primary-text',
        },
        shadow: 'hover:shadow-primary-500/10',
        hover: 'hover:!bg-primary-700',
        active: 'active:opacity-90',
        disabled: {
            light: 'disabled:opacity-70'
        }
    },
    secondary: {
        base: {
            light: 'bg-secondary-500 text-white',
        },
        shadow: 'hover:shadow-secondary-500/10',
        hover: 'hover:bg-secondary-600',
        active: 'active:bg-secondary-700',
        disabled: {
            light: 'disabled:bg-secondary-100 disabled:text-secondary-400',
            dark: 'disabled:dark:bg-secondary-950 disabled:dark:text-secondary-700'
        }
    },
    tertiary: {
        base: {
            light: 'bg-tertiary-500 text-white',
        },
        shadow: 'hover:shadow-tertiary-500/15',
        hover: 'hover:bg-tertiary-600',
        active: 'active:bg-tertiary-700',
        disabled: {
            light: 'disabled:bg-tertiary-100 disabled:text-tertiary-400',
            dark: 'disabled:dark:bg-tertiary-950 disabled:dark:text-tertiary-700'
        }
    },
    neutral: {
    }
};

export default FilledOptions;