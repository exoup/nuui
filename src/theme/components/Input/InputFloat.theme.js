const FloatOptions = {
    input: {
        base: {
            initial: 'peer block w-full bg-transparent border-2',
            animation: 'motion-safe:transition-all',
            reset: 'focus:ring-0 focus-visible:outline-0',
            light: 'border-gray-300 bg-white',
            dark: 'dark:bg-zinc-900 dark:border-zinc-800',
        },
        style: {
            default: {
                light: 'focus-within:border-inherit',
                dark: 'dark:focus-within:border-inherit'
            },
            primary: {
                light: 'focus-within:border-primary-500',
                dark: 'dark:focus-within:border-primary-500'
            },
            secondary: {
                light: 'focus-within:border-secondary-500',
                dark: 'dark:focus-within:border-secondary-500'
            },
            tertiary: {
                light: 'focus-within:border-tertiary-500',
                dark: 'dark:focus-within:border-tertiary-500'
            }
        }
    },
    label: {
        base: {
            initial: 'px-1 scale-75 select-none pointer-events-none',
            position: 'absolute z-[1] left-3 top-0 -translate-y-1/2 origin-[0]',
            placeholder: 'peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2',
            peerfocus: 'peer-focus-within:scale-75 peer-focus-within:top-0 peer-focus-within:-translate-y-1/2',
            animation: 'motion-safe:transition-all',
            light: 'bg-white',
            dark: 'dark:bg-zinc-900',
        },
        style: {
            default: {
                light: 'peer-focus-within:text-inherit',
            },
            primary: {
                light: 'peer-focus-within:text-primary-500',
            },
            secondary: {
                light: 'peer-focus-within:text-secondary-500',
            },
            tertiary: {
                light: 'peer-focus-within:text-tertiary-500',
            }
        }
    },
};

export default FloatOptions;

// const OverlapOptions = {
//     input: {
//         base: 'block w-full px-4 bg-transparent peer',
//         animation: 'transition-all',
//         reset: 'border-none focus:ring-0 focus-visible:outline-0',
//     },
//     label: {
//         base: 'w-full pointer-events-none',
//         position: 'absolute top-1/2 left-3 -translate-y-1/2',
//         focus: 'peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:translate-y-[unset] peer-focus:px-1',
//         animation: 'transition-all',
//     },
// };

// export default OverlapOptions;