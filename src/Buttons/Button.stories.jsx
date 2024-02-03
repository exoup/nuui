import { Fragment } from "react";
import { buttonColorOptions, radiusOptions, sizeOptions, loadingOptions } from "../util/classOptions";

export default {
    args: {
        children: 'Default',
        disabled: false,
        loading: false,
    },
    argTypes: {
        type: {
            defaultValue: 'button',
            options: ['button', 'submit', 'reset'],
            control: { type: 'inline-radio' }
        },
        onClick: {
            action: "clicked"
        },
        colorClass: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'grape', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
            control: { type: 'radio' }
        },
        radiusClass: {
            defaultValue: 'round',
            options: ['round', 'sharp', 'full'],
            control: { type: 'radio' }
        },
        sizeClass: {
            defaultValue: 'normal',
            options: ['responsive', 'normal', 'wide', 'full'],
            control: { type: 'radio' }
        },
        loadingClass: {
            defaultValue: 'three-quarter',
            options: ['three-quarter', 'three-quarter-dark'],
            control: { type: 'radio' }
        }
    }
}

export const Button = (props) => {
    const { type, disabled, id, role, ref, onClick, loading = false, loadingClass = 'three-quarter', colorClass = 'primary', radiusClass = 'round', sizeClass = 'normal' } = props;

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
                loading ? <span className={`${loadingOptions[loadingClass]}`}></span> : props.children
            }
        </button>
    )
};

export const PillButton = Button.bind({});
PillButton.args = {
    label: "PillButton",
    sizeClass: 'wide',
    radiusClass: 'full'
};

export const LeadingButton = (props) => {
    const { type, disabled, id, role, ref, onClick, loading = false, loadingClass = 'three-quarter', colorClass = 'primary', radiusClass = 'round', sizeClass = 'normal' } = props;

    const commonProps = {
        id,
        role,
        ref,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={`${buttonColorOptions[colorClass]} ${radiusOptions[radiusClass]} ${sizeOptions[sizeClass]} max-h-11 shadow-sm font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {
                loading ? <span className={`${loadingOptions[loadingClass]}`}></span> :
                    <>
                        <span className={`inline-block py-2.5 px-3 bg-[rgba(0,0,0,0.15)] ${radiusOptions[radiusClass]}`}>A</span>
                        <span className="px-5">{props.children}</span>
                    </>
            }
        </button>
    )
};