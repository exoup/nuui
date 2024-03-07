// theme options
import FilledOptions from "./AvatarFilled.theme";
// components
import withtext from "./AvatarWithText.theme";
import content from "./AvatarContent.theme";
import title from "./AvatarTitle.theme";
import subtitle from "./AvatarSubtitle.theme";

export const avatar = {
    defaultOptions: {
        color: 'primary',
        radius: 'full',
        size: 'lg',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'overflow-hidden',
        },
        image: 'flex items-center justify-center size-full font-bold',
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none',
            full: 'rounded-full'
        },
        sizes: {
            sm: 'size-8 text-sm',
            md: 'size-10 text-base',
            lg: 'size-12 text-lg',
            xl: 'size-14 text-xl',
            '2xl': 'size-16 text-2xl',
            '4xl': 'size-24 text-4xl',
        },
        variants: {
            reset: {
                initial: 'border-none',
                light: 'bg-transparent hover:bg-transparent text-gray-600',
                dark: 'dark:bg-transparent dark:hover:bg-transparent dark:text-white',
            },
            solid: FilledOptions,
        }
    }
};

avatar.withtext = withtext;
avatar.content = content;
avatar.title = title;
avatar.subtitle = subtitle;
export default avatar;