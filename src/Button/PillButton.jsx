import { buttonColorOptions, radiusOptions, sizeOptions } from "../util/classOptions";
import { LoadingIcon } from "../Icon/Icon.jsx";
import { useTheme } from "../Context/ThemeContext.jsx";

export const PillButton = (props) => {
    const themeColor = useTheme();
    const { type = 'button', disabled, id, role, ref, onClick, loading = false, loadingClass, colorClass = themeColor, radiusClass = 'full', sizeClass = 'wide' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`${buttonColorOptions[colorClass]} ${radiusOptions[radiusClass]} ${sizeOptions[sizeClass]} py-2.5 px-5 max-h-11 shadow-sm font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {
                loading ? <LoadingIcon loadingClass={loadingClass} /> : props.children
            }
        </button>
    )
};