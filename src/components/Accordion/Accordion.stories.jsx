import { Fragment } from "react";
import Accordion, { Drawer } from "./Accordion";

export default {
    args: {
        flush: false
    },
    argTypes: {
        color: {
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'tertiary', 'neutral'],
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