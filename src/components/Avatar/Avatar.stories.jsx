import Avatar, { AvatarWithText, Content, Title, Subtitle } from "./Avatar";

export default {
    args: {
        src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "avatar",
        name: "John Yogurt",
        flush: false
    },
    argTypes: {
        color: {
            defaultValue: 'default',
            options: ['default'],
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
    src: '',
    subtitle: "Grocery Store",
    size: "xl"
}