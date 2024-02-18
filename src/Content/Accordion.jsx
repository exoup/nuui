import { useState, Children, isValidElement, cloneElement } from "react";
import { radiusOptions, surfaceColorOptions, childSurfaceColorOptions, textOptions } from "../util/classOptions";
import { useTheme } from "../Context/ThemeContext.jsx";
import { twMerge, twJoin } from "tailwind-merge";

export default function Accordion({ themeClass = useTheme(), radiusClass = 'round', className, children, onChange = null, initialExpanded = [], accordion = true, flush = false }) {

    const useDrawer = (initialExpanded) => {
        const [openDrawers, setOpenDrawers] = useState(initialExpanded);
        const toggleDrawer = (index, accordion) => {
            if (accordion) {
                setOpenDrawers((prevState) => prevState.includes(index) ? [] : [index]);
            } else {
                setOpenDrawers((prevState) => prevState.includes(index) ? prevState.filter((drawerIndex) => drawerIndex !== index) : [...prevState, index]);
            };
        };
        return [openDrawers, toggleDrawer];
    };

    const [openDrawers, toggleDrawer] = useDrawer(initialExpanded);

    return (
        <div className={twMerge(
            'h-auto overflow-hidden shadow divide-y divide-inherit',
            surfaceColorOptions[themeClass],
            radiusOptions[radiusClass],
            textOptions[themeClass],
            flush ? 'border-none shadow-none rounded-none' : '',
            className
        )}>
            {
                Children.map(children, (child, index) => {
                    if (isValidElement(child)) {
                        return cloneElement(child, {
                            onChange,
                            expanded: openDrawers.includes(index),
                            onClick: () => toggleDrawer(index, accordion)
                        })
                    }
                    return child;
                })
            }
        </div>
    )
};

export const Drawer = ({ themeClass = useTheme(), title, children, className, onChange, expanded = false, onClick = () => { }, }) => {

    const handleClick = () => {
        if (onChange) {
            onChange(!expanded);
        }
        onClick();
    }

    return (
        <div aria-expanded={expanded} className={twMerge(
            "group/expandable font-medium",
            className
        )}>
            <button className="flex w-full items-center justify-between p-4" type="button" onClick={handleClick}>
                {title}
                <svg className="w-3 h-3 rotate-180 shrink-0 group-aria-expanded/expandable:rotate-0 motion-safe:transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
            </button>
            <div className={twJoin('grid motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out',
                expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] invisible')}>
                <div className="overflow-hidden">
                    <div className={twMerge(
                        'p-4 pt-4 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out',
                        'group-aria-expanded/expandable:border-t border-t-0 shadow-inner',
                        childSurfaceColorOptions[themeClass]
                    )}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

// [Thanks for the black magic!](https://nemzes.net/posts/animating-height-auto/)