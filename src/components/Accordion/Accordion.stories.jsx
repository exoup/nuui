import Accordion, { Drawer } from "./Accordion";

export default {
    args: {
        flush: false
    },
    argTypes: {
        color: {
            defaultValue: 'default',
            options: ['default'],
            control: { type: 'radio' }
        },
        radius: {
            defaultValue: 'round',
            options: ['round', 'sharp'],
            control: { type: 'inline-radio' }
        },
    }
};

export const AccordionComponent = ({ ...args }) => (
    <Accordion {...args}
        className={`w-96`}
        onChange={(isOpen) => console.log('Drawer open status:', isOpen)}>
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
);

AccordionComponent.storyName = "Accordion";

export const NonAccordionComponent = ({ ...args }) => (
    <Accordion {...args}
        initialExpanded={[1, 2]}
        className={`w-96`}
        accordionMode={false}
        onChange={(isOpen) => console.log('Drawer open status:', isOpen)}>
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
);

NonAccordionComponent.storyName = "OpenableAccordion";

export const CustomnAccordionComponent = ({ ...args }) => (
    <Accordion {...args} className={`w-96 divide-none space-y-4`}>
        <Drawer title="Drawer 1"
            buttonProps={
                {
                    className: "rounded-t-md border bg-gray-1 border-gray-1 aria-expanded:border-gray-4 aria-expanded:border-b-0 aria-expanded:bg-transparent",
                }
            }
            className={`rounded-b-md data-[open=true]:border data-[open=true]:border-t-0 border-gray-4 bg-transparent`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum ab odio aliquid fuga? Ea cumque, iste nulla praesentium quo dolorum esse rem perspiciatis iure. Architecto placeat minima mollitia aspernatur?
        </Drawer>
        <Drawer title="Drawer 2"
            buttonProps={
                {
                    className: "rounded-md border bg-gray-1 border-gray-1 aria-expanded:rounded-b-none aria-expanded:border-gray-4 aria-expanded:border-b-0 aria-expanded:bg-transparent",
                }
            }
            className={`rounded-b-md data-[open=true]:border data-[open=true]:border-t-0 border-gray-4 bg-transparent`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed atque alias, culpa illum officia quia fuga dolore rerum accusantium animi delectus ipsam dignissimos quas, ut officiis asperiores maiores debitis! Harum!
        </Drawer>
        <Drawer title="Drawer 3"
            buttonProps={
                {
                    className: "rounded-md border bg-gray-1 border-gray-1 aria-expanded:rounded-b-none aria-expanded:border-gray-4 aria-expanded:border-b-0 aria-expanded:bg-transparent",
                }
            }
            className={`rounded-b-md data-[open=true]:border data-[open=true]:border-t-0 border-gray-4 bg-transparent`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam enim commodi nisi incidunt doloremque totam dolore nobis voluptatem omnis quia odio ex, animi quibusdam facere, nostrum in dignissimos maiores.
        </Drawer>
    </Accordion>
);

CustomnAccordionComponent.storyName = "CustomAccordion";
CustomnAccordionComponent.args = {
    flush: true
}