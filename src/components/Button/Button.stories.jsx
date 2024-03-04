import { Fragment } from "react";
//Components
import Button from "./Button.jsx"; 2
import { IconButton } from "./discard/IconButton.jsx";
import { Icon } from '../Icon/Icon.jsx';
import { Follower } from "../Textual/Follower.jsx";
//Icons
import { ArrowUpIcon, CheckIcon } from '@heroicons/react/24/outline'

export default {
    args: {
        children: 'Button',
        disabled: false,
    },
    argTypes: {
        onClick: {
            action: "clicked"
        },
        color: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'radio' }
        },
        radius: {
            defaultValue: 'round',
            options: ['round', 'sharp', 'full'],
            control: { type: 'inline-radio' }
        },
        size: {
            defaultValue: 'normal',
            options: ['normal', 'wide', 'full', 'reset'],
            control: { type: 'inline-radio' }
        },
        variant: {
            defaultValue: 'solid',
            options: ['solid', 'outline', 'ghost'],
            control: { type: 'inline-radio' }
        }
    }
};

export const Default = ({ children, ...args }) => (
    <Button {...args}>{children}</Button>
);

export const PillButtonDefault = ({ children, ...args }) => (
    <Button {...args}>{children}</Button>
);

PillButtonDefault.args = {
    children: 'Pill Button',
    size: 'wide',
    radius: 'full'
};
PillButtonDefault.storyName = 'Pill Button';

export const ShapeButtonDefault = ({ ...args }) => (
    <Button {...args}>
        <CheckIcon className="size-14 p-2" />
    </Button>
);

ShapeButtonDefault.args = {
    radius: 'full',
    size: 'reset'
};
ShapeButtonDefault.storyName = 'Shape Button';

export const IconButtonDefault = ({ children, ...args }) => (
    <Button {...args} className={'flex gap-2 place-content-center'}>
        <CheckIcon className="size-6" />
        {children}
    </Button>
);

IconButtonDefault.args = {
    children: 'Icon Button'
};
IconButtonDefault.storyName = 'Icon Button';

// TODO: SplitButton to be two buttons in a button group.