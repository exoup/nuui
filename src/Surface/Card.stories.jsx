import { Fragment } from "react";
//Components
import Card, { Content, Hero, Title, Section } from "./Card";
import { Button } from '../Button/Button';
import "../util/styles.css";

export default {
    args: {
        themeClass: "primary",
        radiusClass: "round",
    },
    argTypes: {
        themeClass: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
            control: { type: 'inline-radio' }
        },
        radiusClass: {
            defaultValue: 'round',
            options: ['round', 'square'],
            control: { type: 'inline-radio' }
        },
    }
};

export const CardWithHero = ({ themeClass, textClass, ...args }) => (
    <Card {...args} colorClass={themeClass} className="w-80">
        <Hero className="h-64 bg-slate-600 heroPatternClouds" />
        <Content textClass={themeClass}>
            <Title>This is a card component.</Title>
            <p>It uses a Hero with a background-image.</p>
            <br />
            <p className="mb-4">It also has a full-size Button.</p>
            <Button colorClass={themeClass} sizeClass="full">Button</Button>
        </Content>
    </Card>
);

export const CardWithImage = ({ themeClass, textClass, className, ...args }) => (
    <Card {...args}>
        <Hero className={`h-96`}>
            <img className={`h-96 w-full object-cover`} src="https://source.unsplash.com/user/erondu/800x600" alt="Hero Image" />
        </Hero>
        <Content>
            <Title>This is a hero image card.</Title>
            <p>It uses a Hero and an img.</p>
        </Content>
    </Card>
);

export const CardWithSection = ({ themeClass, textClass, ...args }) => (
    <Card {...args}>
        <Content>
            <Title className="text-xl">This is a section card.</Title>
            <Section sections={[
                { name: "Section 1", element: <p>Section 1</p> },
                { name: "Section 2", element: <p>Section 2</p> },
                { name: "Section 3", element: <p>Section 3</p> },
                { name: "Section 4", element: <p>Section 4</p> },
            ]} />
        </Content>
    </Card>
);