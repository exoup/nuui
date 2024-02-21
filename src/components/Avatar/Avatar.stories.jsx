import Avatar from "./Avatar";
import AvatarWithText, { Content, Title, Subtitle } from "./AvatarWithText";

export default {
    args: {
        themeClass: "primary",
        radiusClass: "full",
        src: "https://images.unsplash.com/photo-1552320764-9fc870798a3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=512&h=512",
        alt: "avatar",
        name: "Just Yogurt",
        flush: false
    },
    argTypes: {
        themeClass: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'inline-radio' }
        },
        radiusClass: {
            defaultValue: 'round',
            options: ['full', 'round', 'square'],
            control: { type: 'inline-radio' }
        },
        sizeClass: {
            defaultValue: 'lg',
            options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl'],
            control: { type: 'inline-radio' }
        }
    }
};

export const AvatarStory = ({ themeClass, radiusClass, sizeClass, src, alt, name, flush, ...args }) => (
    <Avatar {...args}
        themeClass={themeClass}
        radiusClass={radiusClass}
        sizeClass={sizeClass}
        src={src}
        alt={alt}
        name={name}
        flush={flush}
    />
);

AvatarStory.storyName = "Avatar";

export const AvatarWithTextStory = ({ themeClass, radiusClass, sizeClass, src, alt, name, flush, subtitle, ...args }) => (
    <AvatarWithText>
        <Avatar {...args}
            themeClass={themeClass}
            radiusClass={radiusClass}
            sizeClass={sizeClass}
            src={src}
            alt={alt}
            name={name}
            flush={flush}
        />
        <Content className="max-w-56" themeClass={themeClass}>
            <Title>{name}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Content>
    </AvatarWithText>
);

AvatarWithTextStory.storyName = "AvatarWithText";
AvatarWithTextStory.args = {
    subtitle: "Grocery Store"
}