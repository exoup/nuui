// theme options
import FilledOptions from "./AccordionFilled.theme";
// components
import { drawer } from "./Drawer/AccordionDrawer.theme";

const accordion = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'h-auto overflow-hidden shadow divide-y divide-inherit',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none'
        },
        variants: {
            reset: 'border-none shadow-none rounded-none',
            solid: FilledOptions,
        }
    }
};

accordion.drawer = drawer;
export { accordion };