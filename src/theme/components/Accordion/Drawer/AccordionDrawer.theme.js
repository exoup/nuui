import FilledOptions from "./DrawerFilled.theme";

export const drawer = {
    defaultOptions: {
        color: 'default',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'p-4 pt-4',
            // expanded: 'data-[open=true]',
            transition: 'motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out'
        },
        variants: {
            solid: FilledOptions
        }
    }
};

export default drawer;