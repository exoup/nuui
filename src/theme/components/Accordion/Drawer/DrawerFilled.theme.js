const FilledOptions = {
    button: {
        base: {
            initial: 'flex w-full items-center justify-between p-4 group/expandable'
        },
        style: {
            default: {
                light: 'aria-expanded:bg-gray-1',
                dark: 'aria-expanded:dark:bg-gray-11/90',
                hover: 'hover:bg-gray-1 hover:dark:bg-gray-11/90',
            }
        }
    },
    content: {
        base: {
            initial: ''
        },
        style: {
            default: {
                light: 'bg-gray-1',
                dark: 'dark:bg-gray-11/90'
            }
        }
    },
};

export default FilledOptions;