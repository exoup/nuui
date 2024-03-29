import Card, { Content, Hero, Title } from "../Card/Card";
import Button from '../Button/Button';
import Input from "../Input/Input";
import "../../resources/styles.css";

export const LoginPage = ({ ...args }) => (
    <Card {...args} className={"flex flex-row size-full"}>
        <Hero className="heroPatternTopography bg-roman-3 w-3/5" />
        <Content variant={args.color} className="flex flex-col w-2/5 p-20 place-content-center">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()} action="#">
                <Title className="text-2xl">Login</Title>
                <Input color={args.color} radius={args.radius} label={"Username"} required />
                <Input color={args.color} radius={args.radius} label={"Password"} type={"password"} required />
                <span className="flex justify-between items-center gap-2">
                    <label className="flex items-center gap-2"><input type="checkbox" className="checked:text-roman-3" />Remember me</label>
                    <a href="#" className="hover:underline text-roman-5">Forgot Password?</a>
                </span>
                <Button {...args} type="submit">Login</Button>
                <a href="#" className="hover:underline text-tertiary-500 self-center">Sign up Here</a>
            </form>
        </Content>
    </Card>
)

LoginPage.argTypes = {
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
}