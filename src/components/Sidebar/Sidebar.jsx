import { useTheme } from "../../context/ThemeContext";
import { twJoin, twMerge } from "tailwind-merge";
import lookupOptions from "../../util/lookupOptions";
import mapObjectToString from "../../util/mapObjectToString";

// Sidebar will be similar to Menu
// Sidebar will have a Sidebar wrapper
// Will have SidebarControl for toggling open/close state
// Will have SidebarContent for wrapping SidebarItems
// Will have SidebarSubmenu for submenus (Optional)
// Will have SidebarItem for sidebar items
// Will have SidebarDivider for dividing sidebar items //

const Sidebar = ({ typography, color, radius, variant, className, children, ...args }) => {
    const { sidebar, typography: typographyOptions, themeColor } = useTheme();
    const { defaultOptions, styles } = sidebar;
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
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className,
    );

    return (
        <aside
            {...args}
            className={classes}>
            {children}
        </aside>
    )
};

export const SidebarContent = ({
    radius,
    className,
    children,
    ...args
}) => {

    const { sidebar } = useTheme();
    const { defaultOptions, styles } = sidebar.content;
    const { initial, radii } = styles;

    const resolvedRadius = radius || defaultOptions.radius;

    const initialClasses = mapObjectToString(initial);
    const lookupClasses = twJoin(
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
    );


    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        className
    );

    return (
        <ul
            {...args}
            className={classes}>
            {children}
        </ul>
    )
};

export const SidebarSubmenu = ({
    title,
    expanded = false,
    icon = false,
    disabled = false,
    detailsProps,
    summaryProps,
    color,
    radius,
    variant,
    className,
    children,
    ...args
}) => {

    const { sidebar, themeColor } = useTheme();
    const { defaultOptions, styles } = sidebar.submenu;
    const { initial, radii, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radius || defaultOptions.radius;
    const resolvedVariant = variant || defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const initialDetailsClasses = mapObjectToString(
        lookupOptions(initial, 'details', 'details'),
    );
    const initialSummaryClasses = mapObjectToString(
        lookupOptions(initial, 'summary', 'summary'),
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
    );
    const childrenVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['children']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['children']['style'][resolvedColor],
    )
    const detailsVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['details']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['details']['style'][resolvedColor],
    );
    const summaryVariant = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['summary']['base'],
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)['summary']['style'][resolvedColor],
    );

    const detailsClasses = twMerge(
        ...initialDetailsClasses,
        ...detailsVariant,
        detailsProps?.className,
    )

    const childrenClasses = twMerge(
        ...childrenVariant,
        className,
    );
    const summaryClasses = twMerge(
        ...initialClasses,
        ...initialSummaryClasses,
        ...summaryVariant,
        summaryProps?.className,
    );

    return (
        <li {...args}>
            <details
                {...detailsProps}
                open={expanded}
                className={detailsClasses}>
                <summary
                    {...summaryProps}
                    aria-disabled={disabled}
                    className={summaryClasses}>
                    <span className="flex items-center">
                        {icon &&
                            <span className="mr-2">{icon}</span>
                        }
                        {title}
                    </span>
                    <svg className="w-3 h-3 rotate-180 shrink-0 group-open/expandable:rotate-0 motion-safe:transition motion-safe:duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </summary>
                <ul className={childrenClasses}>
                    {children}
                </ul>
            </details>
        </li>
    );
};

export const SidebarItem = ({ active = false, disabled = false, color, variant, className, children, ...args }) => {

    const { sidebar, themeColor } = useTheme();
    const { defaultOptions, styles } = sidebar.item;
    const { initial, radii, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radii || defaultOptions.radius;
    const resolvedVariant = variant || defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const variantClasses = mapObjectToString(
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor],
    );

    const classes = twMerge(
        ...initialClasses,
        ...variantClasses,
        className
    );

    return (
        <li
            {...args}
            data-active={active}
            aria-disabled={disabled}
            role="button">
            <div className={classes}>
                {children}
            </div>
        </li>
    )
};

export const SidebarDivider = ({ className, ...args }) => {
    const { sidebar } = useTheme();
    const { styles } = sidebar.divider;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(...initialClasses, className);

    return <div {...args}
        role="separator"
        aria-orientation="horizontal"
        className={classes}>
    </div>;
};

export default Sidebar;