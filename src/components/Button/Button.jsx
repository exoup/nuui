import { useTheme } from "../../context/ThemeContext";
import { twJoin, twMerge } from "tailwind-merge";
import lookupOptions from "../../util/lookupOptions";
import mapObjectToString from "../../util/mapObjectToString";

const Button = ({ color, radius, size, variant, className, children, ...args }) => {
    const { button, themeColor } = useTheme();
    const { defaultOptions, styles } = button;
    const { initial, radii, sizes, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radius || defaultOptions.radius;
    const resolvedSize = size || defaultOptions.size;
    const resolvedVariant = variant || defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const lookupClasses = twJoin(
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
        lookupOptions(sizes, resolvedSize, defaultOptions.size),
    );
    const variantClasses = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor]
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className,
    );

    return (
        <button
            {...args}
            type={args.type || 'button'}
            className={classes}>
            {children}
        </button>
    )
};

export { Button };