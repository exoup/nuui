const FilledOptions = {
    default: {
        base: {
            light: 'bg-light-contrast text-light-background',
            dark: 'dark:bg-dark-contrast dark:text-dark-background',
        },
        shadow: 'hover:shadow-dark-accent/20',
        hover: 'hover:bg-light-foreground dark:hover:bg-dark-foreground',
        active: 'active:bg-light-active dark:active:bg-dark-active',
        focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7 focus-visible:ring-offset-2 focus-visible:dark:ring-offset-dark-background',
        disabled: {
            light: 'disabled:opacity-30',
        }
    }
};

export default FilledOptions;