import { twMerge } from 'tailwind-merge'

export const Button = (props) => {
    const { type, disabled, id, role, onClick, className } = props;

    const commonProps = {
        id,
        role,
        onClick,
        type,
        disabled
    }

    return (
        <button {...commonProps} className={twMerge('text-red-500', className)}>
            {props.children}
        </button>
    )
};

Button.args = {
    children: 'Test',
    id: '',
    disabled: false,
    role: '',
}
Button.argTypes = {
    type: {
        defaultValue: 'button',
        options: ['button', 'submit', 'reset'],
        control: { type: 'inline-radio' }
    },
    onClick: {
        action: "clicked"
    }
}