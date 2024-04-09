import { useTheme } from "../../context/ThemeContext";
import { twMerge } from "tailwind-merge";
import lookupOptions from "../../util/lookupOptions";
import mapObjectToString from "../../util/mapObjectToString";

const Input = ({ containerProps, labelProps, label, placeholder, typography, color, radius, variant, className, ...args }) => {
    const { input, typography: typographyOptions, themeColor } = useTheme();
    const { defaultOptions, styles } = input;
    const { initial, radii, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radius || defaultOptions.radius;
    const resolvedVariant = variant || defaultOptions.variant;
    const resolvedTypography = typography || themeColor || typographyOptions.defaultOptions.variant;

    const initialContainerClasses = mapObjectToString(
        lookupOptions(initial, 'container', 'container'),
        lookupOptions(typographyOptions.styles.variants, resolvedTypography, typographyOptions.defaultOptions.variant),
    );
    const initialInputClasses = mapObjectToString(
        lookupOptions(initial, 'input', 'input'),
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
    );
    const initialLabelClasses = mapObjectToString(
        lookupOptions(initial, 'label', 'label'),
    );
    const inputVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['input']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['input']['style'][resolvedColor],
    );
    const labelVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['label']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['label']['style'][resolvedColor],
    );

    const id = args.id || Math.random().toString(36).substring(2, 9);
    const containerClasses = twMerge(
        ...initialContainerClasses,
        containerProps?.className
    );
    const inputClasses = twMerge(
        ...initialInputClasses,
        ...inputVariant,
        className
    );
    const labelClasses = twMerge(
        ...initialLabelClasses,
        ...labelVariant,
        labelProps?.className
    );

    return (
        <div
            {...containerProps}
            className={containerClasses}>
            <input
                {...args}
                id={id}
                placeholder={placeholder || ' '}
                type={args.type || 'text'}
                className={inputClasses}
                aria-labelledby={id}
            />
            <label
                {...labelProps}
                htmlFor={id}
                className={labelClasses}>
                {label}
            </label>
        </div >
    )
};

export { Input };