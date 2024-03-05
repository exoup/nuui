// theme options
import FilledOptions from "./CardFilled.theme";
// components
import hero from "./CardHero.theme";
import content from "./CardContent.theme";
import title from "./CardTitle.theme";
import section from "./CardSection.theme";

export const card = {
    defaultOptions: {
        color: 'primary',
        radius: 'round',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'w-96 overflow-hidden shadow',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none'
        },
        variants: {
            solid: FilledOptions,
        }
    }
};

card.hero = hero;
card.content = content;
card.title = title;
card.section = section;
export default card;