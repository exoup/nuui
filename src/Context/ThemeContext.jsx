import { createContext, useContext } from 'react';

const ThemeContext = createContext('primary');

export const ThemeProvider = ({ children, themeColor = useContext(ThemeContext) }) => {
    return (
        <ThemeContext.Provider value={themeColor}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    };

    return context
};