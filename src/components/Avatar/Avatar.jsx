import { useEffect, useState, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { twJoin, twMerge } from "tailwind-merge";
import lookupOptions from "../../util/lookupOptions";
import mapObjectToString from "../../util/mapObjectToString";

const getInitials = (name) => {
    const names = name.split(' ');
    let initials = '';
    names.forEach((word) => {
        initials += word.charAt(0).toUpperCase();
    })
    return initials;
};

const Avatar = ({ name, src, alt, flush = false, color, radius, size, variant, className, ...args }) => {

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
        };

        return () => {
            if (avatarImageRef.current) {
                avatarImageRef.current.onload = null;
                avatarImageRef.current.onerror = null;
            };
        };
    }, [src]);

    const { avatar, themeColor } = useTheme();
    const { defaultOptions, styles } = avatar;
    const { initial, image, radii, sizes, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radius || defaultOptions.radius;
    const resolvedSize = size || defaultOptions.size;
    const resolvedVariant = variant || defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const imageClasses = mapObjectToString(image);
    const lookupClasses = twJoin(
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
        lookupOptions(sizes, resolvedSize, defaultOptions.size),
    );
    const variantClasses = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor],
        flush && variants.reset
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className,
    );

    return (
        <div
            {...args}
            className={classes}>
            <img ref={avatarImageRef} hidden={!imageLoaded} className="size-full" alt={alt || name} />
            {!imageLoaded && <div className={imageClasses}>
                {name ? getInitials(name) : 'U'}
            </div>}
        </div>
    )
};

export const AvatarWithText = ({ className, children, onClick = () => { }, ...args }) => {
    const { avatar } = useTheme();
    const { styles } = avatar.withtext;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <div
            {...args}
            onClick={onClick}
            className={classes}>
            {children}
        </div>
    )
};

export const Content = ({ typography, className, children, ...args }) => {
    const { avatar, typography: typographyOptions, themeColor } = useTheme();
    const { styles } = avatar.content;
    const { initial } = styles;

    const resolvedTypography = typography || themeColor || typographyOptions.defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const variantClasses = mapObjectToString(
        lookupOptions(typographyOptions.styles.variants, resolvedTypography, typographyOptions.defaultOptions.variant),
    );

    const classes = twMerge(
        ...initialClasses,
        variantClasses,
        className,
    );

    return (
        <div
            {...args}
            className={classes}>
            {children}
        </div>
    )
};

export const Title = ({ className, children, ...args }) => {
    const { avatar } = useTheme();
    const { styles } = avatar.title;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <h4
            {...args}
            className={classes}>
            {children}
        </h4>
    )
};

export const Subtitle = ({ className, children, ...args }) => {
    const { avatar } = useTheme();
    const { styles } = avatar.subtitle;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <p
            {...args}
            className={classes}>
            {children}
        </p>
    )
};

export default Avatar;