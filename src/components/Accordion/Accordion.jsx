import { useState, Children, isValidElement, cloneElement } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { twMerge, twJoin } from "tailwind-merge";
import lookupOptions from "../../util/lookupOptions";
import mapObjectToString from "../../util/mapObjectToString";

export default function Accordion({ onChange = null, initialExpanded = [], accordionMode = true, flush = false, typography, color, radius, variant, className, children, ...args }) {

    const useDrawer = (initialExpanded) => {
        const [openDrawers, setOpenDrawers] = useState(initialExpanded);
        const toggleDrawer = (index, accordion) => {
            if (accordion) {
                setOpenDrawers((prevState) => prevState.includes(index) ? [] : [index]);
            } else {
                setOpenDrawers((prevState) => prevState.includes(index) ? prevState.filter((drawerIndex) => drawerIndex !== index) : [...prevState, index]);
            }
        };
        return [openDrawers, toggleDrawer];
    };

    const [openDrawers, toggleDrawer] = useDrawer(initialExpanded);

    const { accordion, typography: typographyOptions, themeColor } = useTheme();
    const { defaultOptions, styles } = accordion;
    const { initial, radii, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radius || defaultOptions.radius;
    const resolvedVariant = variant || defaultOptions.variant;
    const resolvedTypography = typography || resolvedColor || typographyOptions.defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const lookupClasses = twJoin(
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
    );
    const variantClasses = mapObjectToString(
        lookupOptions(typographyOptions.styles.variants, resolvedTypography, typographyOptions.defaultOptions.variant),
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor],
        flush && variants.reset
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className,
    );

    return (
        <div
            {...args}
            className={classes}>
            {
                Children.map(children, (child, index) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {
                            ariaId: `id-${index}`,
                            ariaControls: `controls-${index}`,
                            onChange,
                            expanded: openDrawers.includes(index),
                            onClick: () => toggleDrawer(index, accordionMode),
                            color: resolvedColor,
                            variant: resolvedVariant
                        })
                    }
                    return child;
                })
            }
        </div>
    )
}

export const Drawer = ({ ariaId, ariaControls, title, onClick = () => { }, onChange, expanded = false, icon = true, buttonProps, color, variant, className, children }) => {

    const handleClick = () => {
        if (onChange) {
            onChange(!expanded);
        }
        onClick();
    }

    const { accordion, themeColor } = useTheme();
    const { defaultOptions, styles } = accordion.drawer;
    const { initial, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedVariant = variant || defaultOptions.variant;

    const initialContentClasses = mapObjectToString(
        lookupOptions(initial, 'content', 'content'),
    );
    const initialButtonClasses = mapObjectToString(
        lookupOptions(initial, 'button', 'button'),
    )

    const initialClasses = mapObjectToString(initial);

    const containerVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['content']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['content']['style'][resolvedColor],
    );

    const buttonVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['button']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['button']['style'][resolvedColor],
    );

    const contentClasses = twMerge(
        ...initialClasses,
        ...initialContentClasses,
        ...containerVariant,
        className
    );

    const buttonClasses = twMerge(
        ...initialButtonClasses,
        ...buttonVariant,
        buttonProps?.className,
    );

    return (
        <div>
            <button
                {...buttonProps}
                aria-expanded={expanded}
                aria-controls={ariaControls}
                id={ariaId}
                role="button"
                onClick={handleClick}
                className={buttonClasses}>
                <h3 role="heading">
                    {title}
                </h3>
                {icon && <svg className="w-3 h-3 rotate-180 shrink-0 group-aria-expanded/expandable:rotate-0 motion-safe:transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>}
            </button>
            <div
                aria-labelledby={ariaId}
                id={ariaControls}
                className={twJoin('grid motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out',
                    expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] invisible')}>
                <div className="overflow-hidden">
                    <div data-open={expanded} className={contentClasses}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

// [Thanks for the black magic!](https://nemzes.net/posts/animating-height-auto/)