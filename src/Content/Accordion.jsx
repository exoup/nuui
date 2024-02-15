import { useState, Children, isValidElement, cloneElement } from "react";
import { radiusOptions, cardColorOptions } from "../util/classOptions";
import { useTheme } from "../Context/ThemeContext.jsx";
import { twMerge, twJoin } from "tailwind-merge";

export default function Accordion({ colorClass = useTheme(), radiusClass = 'round', className, children, onChange = null, initialExpanded = [], accordion = true }) {

    const useDrawer = (initialExpanded) => {
        const [openDrawers, setOpenDrawers] = useState(initialExpanded);

        const toggleDrawer = (index) => {
            if (openDrawers.includes(index)) {
                if (accordion) {
                    setOpenDrawers([]);
                } else {
                    setOpenDrawers(openDrawers.filter((drawerIndex) => drawerIndex !== index));
                }
            } else {
                if (!accordion) {
                    setOpenDrawers([...openDrawers, index]);
                } else {
                    setOpenDrawers([index]);
                }
            }
        }
        return [openDrawers, toggleDrawer];
    };

    const [openDrawers, toggleDrawer] = useDrawer(initialExpanded);

    return (
        <div className={twMerge(
            'h-auto overflow-hidden shadow',
            '',
            cardColorOptions[colorClass],
            radiusOptions[radiusClass],
            className
        )}>
            {
                Children.map(children, (child, index) => {
                    if (isValidElement(child) && child.type.name === "Drawer") {
                        return cloneElement(child, {
                            onChange,
                            expanded: openDrawers.includes(index),
                            onClick: () => toggleDrawer(index)
                        })
                    }
                    return child;
                })
            }
        </div>
    )
};

export const Drawer = ({ title, children, className, onChange, expanded = false, onClick = () => { }, }) => {

    const handleClick = () => {
        if (onChange) {
            onChange(!expanded);
        }
        onClick();
    }

    return (
        <div className={twMerge(
            "",
            className
        )}>
            <button className="w-full text-start" type="button" onClick={handleClick}>{title}</button>
            <div className={twJoin('grid motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-in-out',
                // [Thanks for the black magic!](https://nemzes.net/posts/animating-height-auto/)
                expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] invisible')}>
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    );
};