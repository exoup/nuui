import { Fragment } from "react";
import Accordion, { Drawer } from "./Accordion";

export const AccordionComponent = ({ ...args }) => (
    <Accordion {...args} initialExpanded={[0, 1]} accordion={true} onChange={(isOpen) => console.log('Drawer open status:', isOpen)}>
        <Drawer title="Drawer 1">
            Testing drawer 1
        </Drawer>
        <Drawer title="Drawer 2">
            Testing drawer 2
        </Drawer>
        <Drawer title="Drawer 3">
            Testing drawer 3
        </Drawer>
    </Accordion >
);

AccordionComponent.storyName = "Accordion";