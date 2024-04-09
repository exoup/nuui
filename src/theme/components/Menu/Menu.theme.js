// theme options
import FilledOptions from "./MenuFilled.theme";
// components
import item from "./MenuItem.theme";
import divider from "./MenuDivider.theme";

const menu = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'absolute z-10 min-w-fit my-2 p-1',
            shadow: 'shadow'
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

menu.item = item;
menu.divider = divider;
export { menu };