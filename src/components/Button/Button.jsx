import { buttonColorOptions, radiusOptions, sizeOptions } from "../../context/classOptions";
import { LoadingIcon } from "../Icon/Icon.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";

export const Button = (props) => {
    const themeColor = useTheme();
    const { type = 'button', disabled, id, role, ref, onClick, loading = false, loadingClass, themeClass = themeColor, radiusClass = 'round', sizeClass = 'normal' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`${buttonColorOptions[themeClass]} ${radiusOptions[radiusClass]} ${sizeOptions[sizeClass]} py-2.5 px-5 max-h-11 shadow font-semibold text-center cursor-pointer disabled:cursor-not-allowed disabled:bg-light  transition-all`}>
            {
                loading ? <LoadingIcon loadingClass={loadingClass} /> : props.children
            }
        </button>
    )
};