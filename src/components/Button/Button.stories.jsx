import { Fragment } from "react";
//Components
import { Button } from "./Button.jsx";
import { PillButton } from "./PillButton.jsx";
import { LeadingButton } from "./LeadingButton.jsx";
import { ShapeButton } from "./ShapeButton.jsx";
import { Icon } from '../Icon/Icon.jsx';
import { Follower } from "../Textual/Follower.jsx";
//Icons
import { ArrowUpIcon, CheckIcon } from '@heroicons/react/24/outline'

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
            control: { type: 'inline-radio' },
        },
        onClick: {
            action: "clicked"
        },
        themeClass: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'success', 'neutral'],
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

export const LeadingButtonDefault = ({ children, loading, loadingClass, ...args }) => {
    return (
        <LeadingButton {...args}>
            {
                <Icon loading={loading} loadingClass={loadingClass} icons={[
                    { name: "CheckIcon", element: <CheckIcon /> },
                ]} />
            }
            <Follower>
                {children}
            </Follower>
        </LeadingButton>
    )
};
LeadingButtonDefault.storyName = 'Leading Button';

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