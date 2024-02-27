import { useRef, useCallback, useEffect } from "react";
import { useMenu, MenuProvider, useOnClickOutside } from "./MenuContext.jsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext.jsx";
import { radiusOptions, surfaceColorOptions, textOptions } from "../../context/classOptions.js";

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
        <div ref={buttonRef} className="size-max" onClick={handleClick}>
            {children}
        </div >
    );

};

export const MenuContent = ({ children, className, themeClass = useTheme(), radiusClass = 'round', alignment = 'center' }) => {
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

    return (
        isOpen ?
            <div
                ref={menuRef}
                hidden={!isOpen}
                className={twMerge(
                    'absolute z-10 min-w-fit w-44 my-2 p-1 shadow',
                    surfaceColorOptions[themeClass],
                    radiusOptions[radiusClass],
                    textOptions[themeClass],
                    className
                )}>
                {children}
            </div> : null
    )
};

export const MenuItem = ({ children, className, disabled = false, ...args }) => {
    return (
        <button {...args} disabled={disabled} className={twMerge(
            'flex items-center w-full py-2 px-3 rounded-[inherit] gap-2',
            'disabled:opacity-30 dark:disabled:opacity-40 disabled:hover:!bg-transparent disabled:cursor-not-allowed',
            'hover:bg-[rgba(0,0,0,0.15)] dark:hover:bg-[rgba(0,0,0,0.45)]',
            className
        )}>
            {children}
        </button>
    )
};

export const MenuDivider = ({ className }) => {
    return (
        <div className={twMerge(
            'border-t border-inherit my-1',
            className
        )}>
        </div>
    )
}

// /* Always center carot to middle of button. */
// /* TODO: Break carot out into own component. */
// /* {carot && <div className="size-4 bg-white z-[12] border-t border-l border-slate-300 rotate-45 rounded-tl-sm"></div>} */
// <div className="size-4 bg-white z-[11] top-[3.71rem] absolute border-t border-l border-slate-300 rotate-45 rounded-tl-sm"></div>