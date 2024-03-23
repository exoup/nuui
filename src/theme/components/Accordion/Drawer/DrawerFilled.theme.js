const FilledOptions = {
    button: {
        base: {
            initial: 'flex w-full items-center justify-between p-4 group/expandable'
        },
        style: {
            default: {
                light: 'aria-expanded:bg-light-accent',
                dark: 'aria-expanded:dark:bg-dark-accent',
                hover: 'hover:bg-light-accent hover:dark:bg-dark-accent',
            }
        }
    },
    content: {
        base: {
            initial: ''
        },
        style: {
            default: {
                light: 'bg-light-accent',
                dark: 'dark:bg-dark-accent'
            }
        }
    },
};

export default FilledOptions;