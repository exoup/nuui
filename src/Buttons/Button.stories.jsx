import { colorOptions, radiusOptions, loadingOptions } from "../util/classOptions";

export default {
    args: {
        children: 'Default',
        disabled: false,
        loading: false,
        id: '',
        role: '',
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
            options: ['primary', 'secondary', 'tertiary', 'grape', 'info', 'success', 'warning', 'danger', 'light', 'dark', 'body'],
            control: { type: 'radio' }
        },
        radiusClass: {
            defaultValue: 'round',
            options: ['round', 'sharp', 'full'],
            control: { type: 'radio' }
        },
        loadingClass: {
            defaultValue: 'three-quarter',
            options: ['three-quarter'],
            control: { type: 'radio' }
        }
    }
}

export const Button = (props) => {
    const { type, disabled, id, role, onClick, loading = false, loadingClass = 'three-quarter', colorClass = 'primary', radiusClass = 'round' } = props;

    const commonProps = {
        id,
        role,
        onClick,
        type,
        disabled
    }

    colorOptions;
    radiusOptions;
    loadingOptions;

    return (
        <button {...commonProps} className={`${colorOptions[colorClass]} ${radiusOptions[radiusClass]} text-white h-11 min-w-24 py-2.5 px-5 shadow-sm hover:bg-opacity-85 disabled:hover:bg-opacity-100 font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all`}>
            {
                loading ? <span className={`${loadingOptions[loadingClass]}`}></span> : props.children
            }
        </button>
    )
};

export const SplitButton = (props) => {
    const { type, disabled, id, role, onClick } = props;

    const commonProps = {
        id,
        role,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={'py-2.5 px-5 rounded-full shadow-sm bg-primary hover:bg-opacity-85 disabled:hover:bg-opacity-100 text-white font-semibold text-center cursor-pointer disabled:cursor-not-allowed transition-all'}>
            {props.iconClass}
            {props.children}
        </button>
    )
};