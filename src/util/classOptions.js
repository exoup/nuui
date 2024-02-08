export const buttonColorOptions = {
    primary: 'bg-primary text-primary-text hover:bg-primary-dark',
    secondary: 'bg-secondary text-secondary-text hover:bg-secondary-dark ring-1 ring-inset ring-light dark:bg-secondary-text/80 dark:text-secondary-dark dark:hover:bg-secondary-text dark:ring-dark',
    tertiary: 'bg-tertiary-dark text-white hover:bg-tertiary dark:bg-tertiary-text dark:text-tertiary dark:ring-1 dark:ring-tertiary dark:hover:text-tertiary-dark dark:hover:ring-tertiary',
    dark: 'bg-dark text-white hover:bg-dark/70 dark:hover:bg-white/20',
    success: 'bg-success text-success-text hover:bg-[#DCFCE7]',
};

export const radiusOptions = {
    round: 'rounded-md',
    sharp: 'rounded-none',
    full: 'rounded-full'
};

export const sizeOptions = {
    responsive: 'flex-1 flex-shrink-0',
    normal: 'min-w-24',
    wide: 'min-w-80',
    full: 'w-full min-w-full'
};

export const loadingOptions = {
    "three-quarter": 'inline-block after:content-[" "] after:block after:size-6 after:border-white after:border-b-transparent after:border-[4px] after:rounded-[50%] after:border-solid after:animate-spin',
    "three-quarter-dark": 'inline-block after:content-[" "] after:block after:size-6 after:border-dark dark:after:border-white after:border-b-transparent dark:after:border-b-transparent after:border-[4px] after:rounded-[50%] after:border-solid after:animate-spin'
};