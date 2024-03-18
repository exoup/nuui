import Card, { Content, Hero, Title, Section } from "./Card";
import Accordion, { Drawer } from "../Accordion/Accordion";
import Button from '../Button/Button';
import Input from "../Input/Input";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import "../../resources/styles.css";

//Theme
import { useLadleContext } from "@ladle/react";
//

export default {
    args: {
        color: "default",
        radius: "round",
    },
    argTypes: {
        color: {
            defaultValue: 'default',
            options: ['default'],
            control: { type: 'inline-radio' }
        },
        radius: {
            defaultValue: 'round',
            options: ['round', 'sharp'],
            control: { type: 'inline-radio' }
        },
        variant: {
            defaultValue: 'solid',
            options: ['solid'],
            control: { type: 'inline-radio' }
        }
    }
};

export const CardWithHero = ({ ...args }) => {

    //Dynamically set the variant based on light theme.
    const { globalState } = useLadleContext();
    const isDark = globalState.theme === "dark";
    const variant = isDark ? 'outline' : 'solid'

    return (
        <Card {...args} className="w-80">
            <Hero className="h-64 bg-slate-600 heroPatternClouds" />
            <Content variant={args.color}>
                <Title>This is a card component.</Title>
                <p>It uses a Hero with a background-image.</p>
                <p className="mb-4">It also has a full-size Button.</p>
                <Button {...args} variant={variant} size="full">Button</Button>
            </Content>
        </Card>
    )
};

export const CardWithImage = ({ ...args }) => (
    <Card {...args} className="w-96">
        <Hero className={`h-auto`}>
            <img className={`h-auto w-full object-cover`} src="https://source.unsplash.com/user/erondu/700x400" alt="Hero Image" />
        </Hero>
        <Content variant={args.color}>
            <Title>This is a hero image card.</Title>
            <p className="mb-4">It uses a Hero with an img child and also has a LeadingButton using a div wrapper to position rightly.</p>
            <div className="flex justify-end">
                <Button {...args} className={'flex gap-2 place-content-center'}>
                    Button
                    <ChevronDoubleRightIcon className="size-6" />
                </Button>
            </div>
        </Content>
    </Card>
);

export const CardWithSection = ({ ...args }) => (
    <Card {...args}>
        <Content variant={args.color}>
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

export const CardWithAccordion = ({ ...args }) => (
    <Card {...args}>
        <Hero className="h-64 bg-primary dark:bg-tertiary heroPatternCogs" />
        <Content variant={args.color}>
            <Title className="text-xl">This is an accordion card.</Title>
            <Accordion
                {...args}
                flush={true}>
                <Drawer title="Drawer 1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum ab odio aliquid fuga? Ea cumque, iste nulla praesentium quo dolorum esse rem perspiciatis iure. Architecto placeat minima mollitia aspernatur?
                </Drawer>
                <Drawer title="Drawer 2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed atque alias, culpa illum officia quia fuga dolore rerum accusantium animi delectus ipsam dignissimos quas, ut officiis asperiores maiores debitis! Harum!
                </Drawer>
                <Drawer title="Drawer 3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam enim commodi nisi incidunt doloremque totam dolore nobis voluptatem omnis quia odio ex, animi quibusdam facere, nostrum in dignissimos maiores.
                </Drawer>
            </Accordion>
        </Content>
    </Card>
);

export const CardWithLogin = ({ ...args }) => (
    <Card {...args} className="pb-2 border-l-tertiary-500 border-l-8 rounded-l-md">
        <Content variant={args.color} className="flex flex-col place-content-center">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()} action="#">
                <Title className="text-2xl">Login</Title>
                <Input color={args.color} label={"Username"} required />
                <Input color={args.color} label={"Password"} type={"password"} required />
                <div className="flex justify-between items-center gap-2">
                    <label className="flex items-center gap-2"><input type="checkbox" className="checked:text-tertiary-500" />Remember me</label>
                    <a href="#" className="hover:underline text-tertiary-500">Forgot Password?</a>
                </div>
                <Button {...args} type="submit" className="w-3/4 self-center">Login</Button>
            </form>
        </Content>
    </Card >
)

CardWithLogin.args = {
    radius: "round",
};