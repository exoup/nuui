import FilledOptions from './ButtonFilled.theme';
import OutlineOptions from './ButtonOutline.theme';

const button = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        size: 'normal',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'shadow-md font-semibold text-center cursor-pointer align-middle',
            disabled: 'disabled:shadow-none disabled:pointer-events-none',
            transition: 'motion-safe:transition-all',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none',
            full: 'rounded-full'
        },
        sizes: {
            reset: '',
            normal: 'px-6 py-2.5',
            wide: 'px-24 py-2.5',
            full: 'block w-full py-2.5'
        },
        variants: {
            solid: FilledOptions,
            outline: OutlineOptions
        }
    }
};

export { button };