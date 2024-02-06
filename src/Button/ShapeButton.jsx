import { buttonColorOptions, radiusOptions } from "../util/classOptions.js";

export const ShapeButton = (props) => {
    const { type = 'button', disabled, id, role, ref, onClick, colorClass = 'primary', radiusClass = 'full' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`flex ${buttonColorOptions[colorClass]} ${radiusOptions[radiusClass]} size-12 shadow-sm font-semibold overflow-hidden cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {
                props.children
            }
        </button>
    )
};