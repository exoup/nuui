//Components
import Button from "./Button.jsx";
import Menu, { MenuControl, MenuContent, MenuItem, MenuDivider } from "../Menu/Menu.jsx";
//Icons
import { CheckIcon, ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline'

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

export const SplitButtonDefault = ({ children, ...args }) => (
    <Menu>
        <div className='flex flex-row'>
            <Button {...args} className={'rounded-r-none border-r-black/25 border-r'}>{children}</Button>
            <MenuControl>
                <Button color={args.color} radius={args.radius} size={args.size} variant={args.variant} className={'px-2.5 rounded-l-none'}>
                    <ChevronDownIcon className="size-6" />
                </Button>
            </MenuControl>
        </div>
        <MenuContent {...args} className={'w-44'}>
            <MenuItem><UserCircleIcon className="size-5" />Profile</MenuItem>
            <MenuItem><Cog6ToothIcon className="size-5" />Settings</MenuItem>
            <MenuDivider />
            <MenuItem disabled><ArrowRightStartOnRectangleIcon className="size-5" />Logout</MenuItem>
        </MenuContent>
    </Menu >
);

SplitButtonDefault.args = {
    children: 'Split Button'
};
SplitButtonDefault.storyName = 'Split Button';