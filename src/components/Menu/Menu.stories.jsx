import { Fragment } from "react";
import Menu, { MenuControl, MenuContent, MenuItem, MenuDivider } from "./Menu";
import Avatar from "../Avatar/Avatar";
import AvatarWithText, { Content, Title, Subtitle } from "../Avatar/AvatarWithText";
import { IconButton } from "../Button/IconButton";
import { Icon } from "../Icon/Icon";
import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Follower } from "../Textual/Follower";
import Accordion, { Drawer } from "../Accordion/Accordion";

export default {
    args: {
        themeClass: "primary",
        radiusClass: "round",
    },
    argTypes: {
        themeClass: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'inline-radio' }
        },
        radiusClass: {
            defaultValue: 'round',
            options: ['round', 'square'],
            control: { type: 'inline-radio' }
        },
        alignment: {
            defaultValue: 'center',
            options: ['center', 'left', 'right'],
            control: { type: 'inline-radio' }
        },
    }
};

export const MenuStory = ({ alignment, themeClass, radiusClass, ...args }) => (
    <div className="flex justify-between m-2">
        <Menu>
            <MenuControl>
                <IconButton themeClass={themeClass} radiusClass={radiusClass}>
                    <Follower>
                        Menu
                    </Follower>
                    <Icon icons={[
                        { name: "ChevronDownIcon", element: <ChevronDownIcon /> },
                    ]} />
                </IconButton>
            </MenuControl>
            <MenuContent themeClass={themeClass} radiusClass={radiusClass} alignment={alignment}>
                <MenuItem><UserCircleIcon className="size-5" />Profile</MenuItem>
                <MenuItem><Cog6ToothIcon className="size-5" />Settings</MenuItem>
                <MenuDivider />
                <MenuItem disabled={true}><ArrowRightStartOnRectangleIcon className="size-5" />Logout</MenuItem>
            </MenuContent>
        </Menu>
    </div>
);

MenuStory.storyName = "Menu"

export const MenuProfile = ({ alignment, themeClass, radiusClass, name, subtitle, ...args }) => (
    <div className="flex justify-between m-2">
        <Menu>
            <MenuControl>
                <AvatarWithText className="cursor-pointer">
                    <Avatar {...args}
                        themeClass={themeClass}
                        name={name}
                        sizeClass="md"
                    />
                    <Content themeClass={themeClass}>
                        <Title>{name}</Title>
                        <Subtitle>{subtitle}</Subtitle>
                    </Content>
                    <ChevronDownIcon className="size-4 dark:text-white" />
                </AvatarWithText>
            </MenuControl>
            <MenuContent themeClass={themeClass} radiusClass={radiusClass} alignment={alignment} className="w-56">
                <MenuItem><UserCircleIcon className="size-5" />Profile</MenuItem>
                <MenuItem><Cog6ToothIcon className="size-5" />Settings</MenuItem>
                <MenuDivider />
                <MenuItem disabled={true}><ArrowRightStartOnRectangleIcon className="size-5" />Logout</MenuItem>
            </MenuContent>
        </Menu>
    </div>
);

MenuProfile.storyName = "Profile Menu";
MenuProfile.args = {
    name: "Just Yogurt",
    subtitle: "To brie or not to brie",
};