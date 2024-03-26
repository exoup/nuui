import Menu, { MenuControl, MenuContent, MenuItem, MenuDivider } from "./Menu";
import Avatar, { AvatarWithText, Content, Title, Subtitle } from "../Avatar/Avatar";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { ChevronDownIcon, UserCircleIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export default {
    args: {
        color: "default",
        radius: "round",
    },
    argTypes: {
        color: {
            defaultValue: "default",
            options: ["default"],
            control: { type: "inline-radio" },
        },
        radius: {
            defaultValue: "round",
            options: ["round", "sharp"],
            control: { type: "inline-radio" },
        },
        alignment: {
            defaultValue: "center",
            options: ["center", "left", "right"],
            control: { type: "inline-radio" },
        },
    },
};

export const MenuStory = ({ ...args }) => (
    <Menu>
        <MenuControl>
            <Button {...args} className={"flex gap-2 place-content-center"}>
                Button
                <ChevronDownIcon className='size-6' />
            </Button>
        </MenuControl>
        <MenuContent {...args} className={"w-44"}>
            <MenuItem>
                <UserCircleIcon className='size-5' />
                Profile
            </MenuItem>
            <MenuItem>
                <Cog6ToothIcon className='size-5' />
                Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem disabled>
                <ArrowRightStartOnRectangleIcon className='size-5' />
                Logout
            </MenuItem>
        </MenuContent>
    </Menu>
);

MenuStory.storyName = "Menu";

export const MenuProfile = ({ name, subtitle, ...args }) => (
    <Menu>
        <MenuControl>
            <AvatarWithText className='cursor-pointer'>
                <Avatar {...args} radius='full' name={name} />
                <Content typography={args.color}>
                    <Title>{name}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </Content>
                <ChevronDownIcon className='size-4 dark:text-white' />
            </AvatarWithText>
        </MenuControl>
        <MenuContent {...args} className='w-56'>
            <MenuItem>
                <UserCircleIcon className='size-5' />
                Profile
            </MenuItem>
            <MenuItem>
                <Cog6ToothIcon className='size-5' />
                Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem disabled>
                <ArrowRightStartOnRectangleIcon className='size-5' />
                Logout
            </MenuItem>
        </MenuContent>
    </Menu>
);

MenuProfile.storyName = "Profile Menu";
MenuProfile.args = {
    name: "Just Yogurt",
    subtitle: "To brie or not to brie",
};

export const MenuLogin = ({ ...args }) => (
    <Menu>
        <MenuControl>
            <Button {...args} className={"flex gap-2 place-content-center"}>
                Login
            </Button>
        </MenuControl>
        <MenuContent {...args} className={"p-6"}>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()} action="#">
                <Input color={args.color} radius={args.radius} label={"Username"} required />
                <Input color={args.color} radius={args.radius} label={"Password"} type={"password"} required />
                <div className="flex justify-between items-center gap-2">
                    <label className="flex items-center gap-2"><input type="checkbox" className="checked:text-roman-5" />Remember me</label>
                    <a href="#" className="hover:underline text-roman-9 dark:text-roman-5">Forgot Password?</a>
                </div>
                <Button {...args} type="submit">Login</Button>
                <MenuDivider />
                <a href="#" className="hover:underline text-tertiary-500 self-center">Sign up Here</a>
            </form>
        </MenuContent>
    </Menu>
);

MenuLogin.storyName = "Login Menu";