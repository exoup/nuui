import Avatar, { AvatarWithText, Content, Title, Subtitle } from "./Avatar";

export default {
    args: {
        src: "https://images.unsplash.com/photo-1552320764-9fc870798a3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&w=512&h=512",
        alt: "avatar",
        name: "John Yogurt",
        flush: false
    },
    argTypes: {
        color: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'inline-radio' }
        },
        radius: {
            defaultValue: 'full',
            options: ['full', 'round', 'sharp'],
            control: { type: 'inline-radio' }
        },
        size: {
            defaultValue: '4xl',
            options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl'],
            control: { type: 'inline-radio' }
        }
    }
};

export const AvatarStory = ({ ...args }) => (
    <Avatar {...args} />
);

AvatarStory.storyName = "Avatar";

export const AvatarWithTextStory = ({ name, subtitle, color, ...args }) => (
    <AvatarWithText>
        <Avatar {...args} name={name} color={color} />
        <Content className="max-w-56" typography={color}>
            <Title>{name}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Content>
    </AvatarWithText>
);

AvatarWithTextStory.storyName = "AvatarWithText";
AvatarWithTextStory.args = {
    subtitle: "Grocery Store",
    size: "xl"
}