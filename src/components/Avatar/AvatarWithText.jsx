import { textOptions } from "../../context/classOptions.js";
import { useTheme } from "../../context/ThemeContext.jsx";
import { twMerge } from "tailwind-merge";

export default function AvatarWithText({ children, className }) {
    return (
        <div className={twMerge(
            "flex items-center gap-4",
            className
        )}>
            {children}
        </div>
    );
};

export const Content = ({ children, className, themeClass = useTheme() }) => {
    return (
        <div className={twMerge(
            'truncate',
            textOptions[themeClass],
            className
        )}>
            {children}
        </div>
    )
}
export const Title = ({ children, className }) => {
    return (
        <h4 className={twMerge(
            'block text-base font-semibold text-inherit tracking-normal leading-relaxed',
            className
        )}>
            {children}
        </h4>
    )
}

export const Subtitle = ({ children, className }) => {
    return (
        <p className={twMerge(
            'block text-sm font-normal text-inherit tracking-normal leading-normal',
            className
        )}>
            {children}
        </p>
    )
}