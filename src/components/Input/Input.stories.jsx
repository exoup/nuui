import Input from "./Input.jsx"

export default {
    args: {
        label: 'Username',
    },
    argTypes: {
        color: {
            defaultValue: 'default',
            options: ['default', 'primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'inline-radio' }
        },
        radius: {
            defaultValue: 'round',
            options: ['round', 'sharp'],
            control: { type: 'inline-radio' }
        },
        variant: {
            defaultValue: 'floating',
            options: ['floating', 'stacked'],
            control: { type: 'inline-radio' }
        }
    }
};

export const InputStory = ({ ...args }) => (
    <div className="w-72">
        <Input {...args} />
    </div>
);

InputStory.storyName = "Input";