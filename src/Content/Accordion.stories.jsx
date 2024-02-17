import { Fragment } from "react";
import Accordion, { Drawer } from "./Accordion";

export default {
    args: {
        themeClass: "primary",
        radiusClass: "round",
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
            options: ['round', 'square'],
            control: { type: 'inline-radio' }
        }
    }
};

export const AccordionComponent = ({ radiusClass, themeClass, flush, ...args }) => (
    <Accordion {...args}
        initialExpanded={[1]}
        themeClass={themeClass}
        radiusClass={radiusClass}
        className={`w-96`}
        accordion={false}
        onChange={(isOpen) => console.log('Drawer open status:', isOpen)}
        flush={flush}>
        <Drawer title="Info" themeClass={themeClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum ab odio aliquid fuga? Ea cumque, iste nulla praesentium quo dolorum esse rem perspiciatis iure. Architecto placeat minima mollitia aspernatur?
        </Drawer>
        <Drawer title="Drawer 2" themeClass={themeClass}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed atque alias, culpa illum officia quia fuga dolore rerum accusantium animi delectus ipsam dignissimos quas, ut officiis asperiores maiores debitis! Harum!
        </Drawer>
        <Drawer title="Drawer 3" themeClass={themeClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam enim commodi nisi incidunt doloremque totam dolore nobis voluptatem omnis quia odio ex, animi quibusdam facere, nostrum in dignissimos maiores.
        </Drawer>
    </Accordion>
);

AccordionComponent.storyName = "Accordion";