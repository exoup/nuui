const OutlineOptions = {
    primary: {
        base: 'border text-primary-500 border-primary-500',
        hover: 'hover:text-primary-600 hover:border-primary-600',
        active: 'active:text-primary-700 active:border-primary-700',
        disabled: {
            light: 'disabled:border-primary-200 disabled:text-primary-200',
            dark: 'disabled:dark:border-primary-900 disabled:dark:text-primary-900'
        }
    },
    secondary: {
        base: 'border text-secondary-600 border-secondary-600',
        hover: 'hover:text-secondary-700 hover:border-secondary-700',
        active: 'active:text-secondary-800 active:border-secondary-800',
        disabled: {
            light: 'disabled:border-secondary-200 disabled:text-secondary-200',
            dark: 'disabled:dark:border-secondary-900 disabled:dark:text-secondary-900'
        }
    },
    tertiary: {
        base: 'border text-tertiary-500 border-tertiary-500',
        hover: 'hover:text-tertiary-700 hover:border-tertiary-700',
        active: 'active:text-tertiary-800 active:border-tertiary-800',
        disabled: {
            light: 'disabled:text-tertiary-200 disabled:border-tertiary-200',
            dark: 'disabled:dark:text-tertiary-900 disabled:dark:border-tertiary-900'
        }
    },
    neutral: {
    }
};

export default OutlineOptions;