import FilledOptions from './ButtonFilled.theme';
import OutlineOptions from './ButtonOutline.theme';

export const button = {
    defaultOptions: {
        color: 'primary',
        radius: 'round',
        size: 'normal',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'py-2.5 px-5 max-h-11 shadow-md font-semibold text-center cursor-pointer',
            disabled: 'disabled:shadow-none disabled:pointer-events-none',
            transition: 'motion-safe:transition-all',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none',
            full: 'rounded-full'
        },
        sizes: {
            responsive: 'flex-1 flex-shrink-0',
            normal: 'min-w-24',
            wide: 'min-w-80',
            full: 'w-full min-w-full'
        },
        variants: {
            solid: FilledOptions,
            outline: OutlineOptions
        }
    }
};

export default button;