import { Fragment } from "react";
//Components
import Card, { Content, Hero, Title, Section } from "./Card";
import Accordion, { Drawer } from "../Accordion/Accordion";
import { Button } from '../Button/Button';
import { LeadingButton } from "../Button/LeadingButton";
import { Icon } from "../Icon/Icon";
import { Follower } from "../Textual/Follower";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import "../../resources/styles.css";

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

export const CardWithHero = ({ themeClass, ...args }) => (
    <Card {...args} themeClass={themeClass} className="w-80">
        <Hero className="h-64 bg-slate-600 heroPatternClouds" />
        <Content themeClass={themeClass}>
            <Title>This is a card component.</Title>
            <p>It uses a Hero with a background-image.</p>
            <p className="mb-4">It also has a full-size Button.</p>
            <Button themeClass={themeClass} sizeClass="full">Button</Button>
        </Content>
    </Card>
);

export const CardWithImage = ({ themeClass, ...args }) => (
    <Card {...args} themeClass={themeClass} className="">
        <Hero className={`h-auto`}>
            <img className={`h-auto w-full object-cover`} src="https://source.unsplash.com/user/erondu/700x400" alt="Hero Image" />
        </Hero>
        <Content themeClass={themeClass}>
            <Title>This is a hero image card.</Title>
            <p className="mb-4">It uses a Hero with an img child and also has a LeadingButton using a div wrapper to position rightly.</p>
            <div className="flex justify-end">
                <LeadingButton themeClass={themeClass}>
                    <Follower>
                        Leading
                    </Follower>
                    {
                        <Icon icons={[
                            { name: "ChevronDoubleRightIcon", element: <ChevronDoubleRightIcon /> },
                        ]} />
                    }
                </LeadingButton>
            </div>
        </Content>
    </Card>
);

export const CardWithSection = ({ themeClass, ...args }) => (
    <Card {...args} themeClass={themeClass}>
        <Content themeClass={themeClass}>
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

export const CardWithAccordion = ({ themeClass, radiusClass, flush, ...args }) => (
    <Card {...args} themeClass={themeClass} radiusClass={radiusClass}>
        <Hero className="h-64 bg-primary dark:bg-tertiary heroPatternCogs" />
        <Content themeClass={themeClass}>
            <Title className="text-xl">This is an accordion card.</Title>
            <Accordion
                themeClass={themeClass}
                flush={flush}>
                <Drawer title="Drawer 1" themeClass={themeClass}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum ab odio aliquid fuga? Ea cumque, iste nulla praesentium quo dolorum esse rem perspiciatis iure. Architecto placeat minima mollitia aspernatur?
                </Drawer>
                <Drawer title="Drawer 2" themeClass={themeClass}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed atque alias, culpa illum officia quia fuga dolore rerum accusantium animi delectus ipsam dignissimos quas, ut officiis asperiores maiores debitis! Harum!
                </Drawer>
                <Drawer title="Drawer 3" themeClass={themeClass}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam enim commodi nisi incidunt doloremque totam dolore nobis voluptatem omnis quia odio ex, animi quibusdam facere, nostrum in dignissimos maiores.
                </Drawer>
            </Accordion>
        </Content>
    </Card>
);

CardWithAccordion.args = {
    themeClass: "primary",
    radiusClass: "round",
    flush: true
}