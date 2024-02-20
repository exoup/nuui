import { buttonColorOptions, radiusOptions, sizeOptions } from "../../context/classOptions";
import { useTheme } from "../../context/ThemeContext.jsx";
import { LoadingIcon } from "../Icon/Icon.jsx";

export const PillButton = (props) => {
    const themeColor = useTheme();
    const { type = 'button', disabled, id, role, ref, onClick, loading = false, loadingClass, themeClass = themeColor, radiusClass = 'full', sizeClass = 'wide' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`${buttonColorOptions[themeClass]} ${radiusOptions[radiusClass]} ${sizeOptions[sizeClass]} py-2.5 px-5 max-h-11 shadow font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {
                loading ? <LoadingIcon loadingClass={loadingClass} /> : props.children
            }
        </button>
    )
};