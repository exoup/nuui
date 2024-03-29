//Components
import Sidebar, { SidebarContent, SidebarDivider, SidebarItem, SidebarSubmenu } from "./Sidebar";
//Icons
import { Cog6ToothIcon, UserGroupIcon, HomeModernIcon, ChatBubbleBottomCenterTextIcon, WrenchIcon } from '@heroicons/react/24/outline'

export const SidebarStory = ({ ...args }) => (
    <Sidebar {...args} className="w-80 h-[calc(100vh-10rem)]">
        <SidebarContent>
            <SidebarItem><HomeModernIcon className="size-5 mr-2" />Home</SidebarItem>
            <SidebarSubmenu icon={<UserGroupIcon className="size-5" />} title="Team" expanded>
                <SidebarItem active ><ChatBubbleBottomCenterTextIcon className="size-5 mr-2" />Chat</SidebarItem>
                <SidebarItem><WrenchIcon className="size-5 mr-2" />Team Settings</SidebarItem>
            </SidebarSubmenu>
            <SidebarItem>
                <Cog6ToothIcon className="size-5 mr-2" />Account
            </SidebarItem>
        </SidebarContent>
        <SidebarDivider />
    </Sidebar>
)

SidebarStory.storyName = "Sidebar"
SidebarStory.args = {
    color: 'default',
    radius: 'sharp',
}
SidebarStory.argTypes = {
    color: {
        defaultValue: 'default',
        options: ['default'],
        control: { type: 'inline-radio' }
    },
    radius: {
        defaultValue: 'sharp',
        options: ['sharp'],
        control: { type: 'inline-radio' }
    }
}