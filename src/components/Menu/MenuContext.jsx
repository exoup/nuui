import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const MenuContext = createContext(null);

export const useMenu = () => {
    const context = useContext(MenuContext);

    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider');
    }

    return context;
};

export const MenuProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [buttonRef, setButtonRef] = useState(null);

    const toggleMenu = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    return (
        <MenuContext.Provider value={{ isOpen, toggleMenu, buttonRef, setButtonRef }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useOnClickOutside = (ref, handler, excludeRef) => {
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target) || excludeRef?.current?.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler, excludeRef]);
};