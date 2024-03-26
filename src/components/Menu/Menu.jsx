import { useRef, useCallback, useEffect, Children, cloneElement, isValidElement } from "react";
import { useMenu, MenuProvider, useOnClickOutside } from "./MenuContext.jsx";
import { twMerge, twJoin } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext.jsx";
import mapObjectToString from "../../util/mapObjectToString";
import lookupOptions from "../../util/lookupOptions";

const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Menu({ children, className }) {
    return (
        <MenuProvider>
            <div className={twMerge('size-max', className)}>{children}</div>
        </MenuProvider>
    );
}

export const MenuControl = ({ children }) => {
    const { toggleMenu, isOpen, setButtonRef, buttonRef, buttonControllerId, setButtonControllerId, menuId, setMenuId } = useMenu();
    const buttonGroupRef = useRef(null);

    const handleClick = useCallback(() => {
        setButtonRef(buttonGroupRef);
        toggleMenu();
    }, [setButtonRef, toggleMenu]);

    useEffect(() => {
        setMenuId(`menu-${generateId()}`);
        setButtonControllerId(`menu-button-${generateId()}`);
    }, [setButtonControllerId, setMenuId]);

    return (
        <div ref={buttonRef}>
            {
                Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {
                            ...child.props,
                            id: buttonControllerId,
                            role: "button",
                            "aria-controls": menuId,
                            "aria-expanded": String(isOpen),
                            "aria-haspopup": "true",
                            onClick: handleClick,
                            tabIndex: 0
                        });
                    }
                    return child;
                })
            }
        </div>
    );
};

export const MenuContent = ({
    alignment = "center",
    typography,
    color,
    radius,
    variant,
    className,
    children,
    ...args
}) => {
    const menuRef = useRef(null);
    const { isOpen, toggleMenu, buttonRef, buttonControllerId, menuId } = useMenu();

    const handleMenuPosition = useCallback(() => {
        if (!isOpen || !buttonRef.current || !menuRef.current) return;
        const { left, top, width, height } =
            buttonRef.current.getBoundingClientRect();
        const menuWidth = menuRef.current.offsetWidth;
        const menuHeight = menuRef.current.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        let leftPos;

        switch (alignment) {
            case "left":
                leftPos = left;
                break;
            case "right":
                leftPos = left + width - menuWidth;
                break;
            default:
                leftPos = left + width / 2 - menuWidth / 2;
        }
        const topPos = top + height;

        menuRef.current.style.left = Math.max(10, Math.min(leftPos, windowWidth - menuWidth)) + "px";
        menuRef.current.style.top = Math.max(0, Math.min(topPos, windowHeight - menuHeight)) + "px";
        menuRef.current.firstChild.focus({
            focusVisible: true
        });
    },
        [isOpen, buttonRef, alignment]
    );

    const handleOutsideClick = () => {
        if (isOpen) {
            toggleMenu();
        }
    };

    const handleEscape = useCallback((e) => {
        if (isOpen) {
            if (e.key === "Escape") {
                buttonRef.current?.firstChild?.focus();
                toggleMenu();
            }
        }
    }, [isOpen, toggleMenu, buttonRef]);

    useEffect(() => {
        const handleDocumentKeyDown = (e) => handleEscape(e);
        document.addEventListener('keydown', handleDocumentKeyDown);

        return () => document.removeEventListener('keydown', handleDocumentKeyDown);
    }, [handleEscape]);

    useEffect(() => {
        handleMenuPosition();
    }, [isOpen, alignment, handleMenuPosition]);

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
        lookupOptions(radii, resolvedRadius, defaultOptions.radius)
    );
    const variantClasses = mapObjectToString(
        lookupOptions(typographyOptions.styles.variants, resolvedTypography, typographyOptions.defaultOptions.variant),
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor]
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className
    );

    return (
        <div {...args}
            ref={menuRef}
            id={menuId}
            tabIndex={-1}
            role="menu"
            aria-labelledby={buttonControllerId}
            aria-orientation="vertical"
            hidden={!isOpen}
            className={classes}>
            {children}
        </div>
    );
};

export const MenuItem = ({ disabled = false, className, children, ...args }) => {
    const { menu } = useTheme();
    const { styles } = menu.item;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(...initialClasses, className);

    return (
        <button {...args}
            type={args.type || 'button'}
            tabIndex={0}
            disabled={disabled}
            role="menuitem"
            className={classes}>
            {children}
        </button>
    );
};

export const MenuDivider = ({ className, ...args }) => {
    const { menu } = useTheme();
    const { styles } = menu.divider;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(...initialClasses, className);

    return <div {...args}
        role="separator"
        aria-orientation="horizontal"
        className={classes}>
    </div>;
};

// /* Always center carot to middle of button. */
// /* TODO: Break carot out into own component. */
// /* {carot && <div className="size-4 bg-white z-[12] border-t border-l border-slate-300 rotate-45 rounded-tl-sm"></div>} */
// <div className="size-4 bg-white z-[11] top-[3.71rem] absolute border-t border-l border-slate-300 rotate-45 rounded-tl-sm"></div>
