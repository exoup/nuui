// theme options
import FilledOptions from "./SubmenuFilled.theme";
import TextOptions from "./SubmenuText.theme";

export const submenu = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'flex cursor-pointer',
            disabled: 'aria-disabled:opacity-30 dark:aria-disabled:opacity-40 aria-disabled:hover:!bg-transparent aria-disabled:pointer-events-none',
            focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-7',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none'
        },
        variants: {
            solid: FilledOptions,
            text: TextOptions,
        }
    }
};

export default submenu;