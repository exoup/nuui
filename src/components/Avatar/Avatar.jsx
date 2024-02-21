import { useEffect, useState, useRef } from "react";
import { avatarSizeOptions, avatarSurfaceColorOptions, avatarTextOptions, radiusOptions } from "../../context/classOptions.js";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext.jsx";

const getInitials = (name) => {
    const names = name.split(' ');
    let initials = '';
    names.forEach((word) => {
        initials += word.charAt(0).toUpperCase();
    })
    return initials;
};

export default function Avatar({ name, src, alt, className, themeClass = useTheme(), radiusClass = 'full', sizeClass = 'lg', flush, ...props }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const avatarImageRef = useRef(null);

    useEffect(() => {
        setImageLoaded(false);

        if (avatarImageRef.current) {
            if (typeof src === 'string') {
                avatarImageRef.current.src = src;
                avatarImageRef.current.onload = () => {
                    setImageLoaded(true);
                };
                avatarImageRef.current.onerror = () => {
                    setImageLoaded(false);
                };
            }
        }

        return () => {
            if (avatarImageRef.current) {
                avatarImageRef.current.onload = null;
                avatarImageRef.current.onerror = null;
            };
        };
    }, [src]);

    return (
        <div
            className={twMerge(
                "overflow-hidden",
                avatarSizeOptions[sizeClass],
                avatarSurfaceColorOptions[themeClass],
                avatarTextOptions[themeClass],
                radiusOptions[radiusClass],
                flush ? 'bg-transparent dark:bg-transparent border-none hover:bg-transparent dark:hover:bg-transparent text-gray-600 dark:text-white' : '',
                className
            )}
            {...props}
        >
            <img ref={avatarImageRef} hidden={!imageLoaded} className="size-full" alt={alt || name} />
            {!imageLoaded && <div className="flex items-center justify-center size-full font-bold">
                {name ? getInitials(name) : 'U'}
            </div>}
        </div>
    )
};