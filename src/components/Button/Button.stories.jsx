import { Fragment } from "react";
//Components
import Button from "./Button.jsx";
import { PillButton } from "./PillButton.jsx";
import { IconButton } from "./IconButton.jsx";
import { ShapeButton } from "./ShapeButton.jsx";
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
            options: ['responsive', 'normal', 'wide', 'full'],
            control: { type: 'inline-radio' }
        },
        variant: {
            defaultValue: 'solid',
            options: ['solid', 'outline', 'ghost'],
            control: { type: 'inline-radio' }
        }
    }
}

export const Default = ({ children, ...args }) => (
    <Button {...args}>{children}</Button>
);

export const PillButtonDefault = ({ children, ...args }) => (
    <PillButton {...args}>{children}</PillButton>
);

PillButtonDefault.args = {
    children: 'Pill Button',
    sizeClass: 'wide',
    radiusClass: 'full'
};
PillButtonDefault.storyName = 'Pill Button';

export const IconButtonDefault = ({ children, loading, loadingClass, ...args }) => {
    return (
        <IconButton {...args}>
            {
                <Icon loading={loading} loadingClass={loadingClass} icons={[
                    { name: "CheckIcon", element: <CheckIcon /> },
                ]} />
            }
            <Follower>
                {children}
            </Follower>
        </IconButton>
    )
};
IconButtonDefault.storyName = 'Icon Button';

export const ShapeButtonDefault = ({ loading, loadingClass, ...args }) => {
    return (
        <ShapeButton {...args}>
            {
                <Icon loading={loading} loadingClass={loadingClass} icons={[
                    { name: "ArrowUpIcon", element: <ArrowUpIcon /> }
                ]} />
            }
        </ShapeButton>
    )
};
ShapeButtonDefault.args = {
    radiusClass: 'full',
};
ShapeButtonDefault.argTypes = {
    sizeClass: {
        defaultValue: '',
        options: [],
        control: { type: 'radio' }
    },
};
ShapeButtonDefault.storyName = 'Shape Button';