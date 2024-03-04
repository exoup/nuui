import { createContext, useContext } from 'react';
import theme from '../theme';

const ThemeContext = createContext(theme);

const ThemeProvider = ({ themeObjects = theme, themeColor, children }) => {
    const mergedTheme = {
        ...themeObjects,
        themeColor: themeColor
    };

    return (
        <ThemeContext.Provider value={mergedTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    };

    return context
};

export { ThemeContext, ThemeProvider, useTheme }