const OutlineOptions = {
    default: {
        base: {
            initial: 'border',
            light: 'bg-light-background border-light-border text-light-foreground',
            dark: 'dark:bg-dark-background dark:border-dark-border dark:text-dark-foreground',
        },
        hover: 'hover:bg-light-accent dark:hover:bg-dark-accent',
        active: 'active:bg-light-active/10 dark:active:bg-dark-active/10',
        focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7 focus-visible:ring-offset-2 focus-visible:dark:ring-offset-dark-background',
        disabled: 'disabled:opacity-30',
    }
};

export default OutlineOptions;