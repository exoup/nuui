// theme options
import FilledOptions from "./SidebarFilled.theme";
// components
import content from "./SidebarContent.theme";
import divider from "./SidebarDivider.theme";
import item from "./Item/SidebarItem.theme";
import submenu from "./Submenu/SidebarSubmenu.theme";

export const sidebar = {
    defaultOptions: {
        color: 'default',
        radius: 'sharp',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'flex flex-col h-screen',
        },
        radii: {
            sharp: 'rounded-none',
        },
        variants: {
            solid: FilledOptions
        }
    }
};

sidebar.content = content;
sidebar.divider = divider;
sidebar.item = item;
sidebar.submenu = submenu;
export default sidebar;