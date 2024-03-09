import { Fragment } from "react";
import Menu, { MenuControl, MenuContent, MenuItem, MenuDivider } from "./Menu";
import Avatar, { AvatarWithText, Content, Title, Subtitle } from "../Avatar/Avatar";
import Button from "../Button/Button";
import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default {
    args: {
        color: "primary",
        radius: "round",
    },
    argTypes: {
        color: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'inline-radio' }
        },
        radius: {
            defaultValue: 'round',
            options: ['round', 'sharp'],
            control: { type: 'inline-radio' }
        },
        alignment: {
            defaultValue: 'center',
            options: ['center', 'left', 'right'],
            control: { type: 'inline-radio' }
        },
    }
};

export const MenuStory = ({ ...args }) => (
    <div className="flex justify-between m-2">
        <Menu>
            <MenuControl>
                <Button {...args} className={'flex gap-2 place-content-center'}>
                    Button
                    <ChevronDownIcon className="size-6" />
                </Button>
            </MenuControl>
            <MenuContent {...args} className={'w-44'}>
                <MenuItem><UserCircleIcon className="size-5" />Profile</MenuItem>
                <MenuItem><Cog6ToothIcon className="size-5" />Settings</MenuItem>
                <MenuDivider />
                <MenuItem disabled><ArrowRightStartOnRectangleIcon className="size-5" />Logout</MenuItem>
            </MenuContent>
        </Menu>
    </div>
);

MenuStory.storyName = "Menu"

// export const MenuProfile = ({ alignment, themeClass, radiusClass, name, subtitle, ...args }) => (
//     <div className="flex justify-between m-2">
//         <Menu>
//             <MenuControl>
//                 <AvatarWithText className="cursor-pointer">
//                     <Avatar {...args}
//                         themeClass={themeClass}
//                         name={name}
//                         sizeClass="md"
//                     />
//                     <Content themeClass={themeClass}>
//                         <Title>{name}</Title>
//                         <Subtitle>{subtitle}</Subtitle>
//                     </Content>
//                     <ChevronDownIcon className="size-4 dark:text-white" />
//                 </AvatarWithText>
//             </MenuControl>
//             <MenuContent themeClass={themeClass} radiusClass={radiusClass} alignment={alignment} className="w-56">
//                 <MenuItem><UserCircleIcon className="size-5" />Profile</MenuItem>
//                 <MenuItem><Cog6ToothIcon className="size-5" />Settings</MenuItem>
//                 <MenuDivider />
//                 <MenuItem disabled={true}><ArrowRightStartOnRectangleIcon className="size-5" />Logout</MenuItem>
//             </MenuContent>
//         </Menu>
//     </div>
// );

// MenuProfile.storyName = "Profile Menu";
// MenuProfile.args = {
//     name: "Just Yogurt",
//     subtitle: "To brie or not to brie",
// };