import { useRef, useCallback, useEffect } from "react";
import { useMenu, MenuProvider, useOnClickOutside } from "./MenuContext.jsx";
import { twMerge, twJoin } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext.jsx";
import mapObjectToString from "../../util/mapObjectToString";
import lookupOptions from "../../util/lookupOptions";

export default function Menu({ children, className }) {

    return (
        <MenuProvider>
            <span className={twMerge(className)}>
                {children}
            </span>
        </MenuProvider>
    )
};

export const MenuControl = ({ children }) => {

    const { toggleMenu, setButtonRef, buttonRef } = useMenu();
    const buttonGroupRef = useRef(null)

    const handleClick = useCallback(() => {
        setButtonRef(buttonGroupRef);
        toggleMenu();
    }, [setButtonRef, toggleMenu]);

    return (
        <div
            ref={buttonRef}
            className="size-max"
            onClick={handleClick}>
            {children}
        </div >
    );

};

export const MenuContent = ({ alignment = 'center', typography, color, radius, variant, className, children, ...args }) => {
    const menuRef = useRef(null);
    const { isOpen, toggleMenu, buttonRef } = useMenu();

    const handleMenuPosition = (alignment) => {
        if (!isOpen) {
            return;
        }
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const menuRect = menuRef.current.getBoundingClientRect();
        const menuPosition = {};

        switch (alignment) {
            case 'left':
                menuPosition.left = buttonRect.left;
                menuPosition.top = buttonRect.top + buttonRect.height;
                break;
            case 'right':
                menuPosition.left = buttonRect.left + buttonRect.width - menuRect.width;
                menuPosition.top = buttonRect.top + buttonRect.height;
                break;
            default:
            case 'center':
                menuPosition.left = buttonRect.left + buttonRect.width / 2 - menuRect.width / 2;
                menuPosition.top = buttonRect.top + buttonRect.height;
                break;
        }

        if (menuPosition.left < 0) {
            menuPosition.left = buttonRect.left;
        } else if (menuPosition.left + menuRect.width > window.innerWidth) {
            menuPosition.left = buttonRect.left + buttonRect.width - menuRect.width;
        }

        if (menuPosition.top < 0) {
            menuPosition.top = 0;
        } else if (menuPosition.top + menuRect.height > window.innerHeight) {
            menuPosition.top = window.innerHeight - menuRect.height;
        }

        menuRef.current.style.left = `${menuPosition.left}px`;
        menuRef.current.style.top = `${menuPosition.top}px`;
    };

    const handleOutsideClick = () => {
        if (isOpen) {
            toggleMenu();
        }
    };

    useEffect(() => {
        handleMenuPosition(alignment);
    }, [isOpen, alignment]);

    useOnClickOutside(menuRef, handleOutsideClick, buttonRef);

    const { menu, typography: typographyOptions, themeColor } = useTheme();
    const { defaultOptions, styles } = menu;
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
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor]
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className,
    );

    return (
        isOpen ?
            <div
                {...args}
                ref={menuRef}
                hidden={!isOpen}
                className={classes}>
                {children}
            </div> : null
    )
};

export const MenuItem = ({ disabled = false, className, children, ...args }) => {

    const { menu } = useTheme();
    const { styles } = menu.item;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <button
            {...args}
            disabled={disabled}
            className={classes}>
            {children}
        </button>
    )
};

export const MenuDivider = ({ className, ...args }) => {

    const { menu } = useTheme();
    const { styles } = menu.divider;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <div
            {...args}
            className={classes}>
        </div>
    )
}

// /* Always center carot to middle of button. */
// /* TODO: Break carot out into own component. */
// /* {carot && <div className="size-4 bg-white z-[12] border-t border-l border-slate-300 rotate-45 rounded-tl-sm"></div>} */
// <div className="size-4 bg-white z-[11] top-[3.71rem] absolute border-t border-l border-slate-300 rotate-45 rounded-tl-sm"></div>