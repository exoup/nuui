import { buttonColorOptions, radiusOptions, sizeOptions } from "../../context/classOptions.js";
import { useTheme } from "../../context/ThemeContext.jsx";

export const LeadingButton = (props) => {
    const themeColor = useTheme();
    const { type = 'button', disabled, id, role, ref, onClick, themeClass = themeColor, radiusClass = 'round', sizeClass = 'normal' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`flex ${buttonColorOptions[themeClass]} ${radiusOptions[radiusClass]} ${sizeOptions[sizeClass]} max-h-11 min-h-11 shadow font-semibold overflow-hidden cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {props.children}
        </button>
    )
};