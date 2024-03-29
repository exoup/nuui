// theme options
import FilledOptions from "./SubmenuFilled.theme";

export const submenu = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'flex py-2 px-4 cursor-pointer',
            disabled: 'aria-disabled:opacity-30 dark:aria-disabled:opacity-40 aria-disabled:hover:!bg-transparent aria-disabled:pointer-events-none',
            focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none'
        },
        variants: {
            solid: FilledOptions,
        }
    }
};

export default submenu;