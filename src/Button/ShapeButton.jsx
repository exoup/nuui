import { buttonColorOptions, radiusOptions } from "../util/classOptions.js";
import { useTheme } from "../Context/ThemeContext.jsx";

export const ShapeButton = (props) => {
    const themeColor = useTheme();
    const { type = 'button', disabled, id, role, ref, onClick, colorClass = themeColor, radiusClass = 'full' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`flex ${buttonColorOptions[colorClass]} ${radiusOptions[radiusClass]} size-12 shadow-lg font-semibold overflow-hidden cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {
                props.children
            }
        </button>
    )
};