const FloatOptions = {
    input: {
        base: {
            initial: 'peer block w-full',
            animation: 'motion-safe:transition-all',
            reset: 'focus:ring-0 focus-visible:outline-0',
        },
        style: {
            default: {
                initial: 'border-2',
                light: 'bg-light-background border-light-border',
                dark: 'dark:bg-dark-background dark:border-dark-border'
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
        },
        style: {
            default: {
                light: 'bg-light-background peer-focus-within:text-light-foreground',
                dark: 'dark:bg-dark-background peer-focus-within:text-dark-foreground'
            },
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