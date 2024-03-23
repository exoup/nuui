const OutlineOptions = {
    default: {
        base: {
            initial: 'border',
            light: 'bg-light-background border-light-border text-light-foreground',
            dark: 'dark:bg-dark-background dark:border-dark-border dark:text-dark-foreground',
        },
        hover: 'hover:bg-light-accent dark:hover:bg-dark-accent',
        active: 'active:bg-light-active/10 dark:active:bg-dark-active/10',
        disabled: 'disabled:opacity-30',
    }
};

export default OutlineOptions;