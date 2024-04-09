import { useTheme } from "../../context/ThemeContext";
import { twJoin, twMerge } from "tailwind-merge";
import lookupOptions from "../../util/lookupOptions";
import mapObjectToString from "../../util/mapObjectToString";

const Card = ({ color, radius, variant, className, children, ...args }) => {
    const { card, themeColor } = useTheme();
    const { defaultOptions, styles } = card;
    const { initial, radii, variants } = styles;

    const resolvedColor = color || themeColor || defaultOptions.color;
    const resolvedRadius = radius || defaultOptions.radius;
    const resolvedVariant = variant || defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const lookupClasses = twJoin(
        lookupOptions(radii, resolvedRadius, defaultOptions.radius),
    );
    const variantClasses = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)[resolvedColor]
    );

    const classes = twMerge(
        ...initialClasses,
        lookupClasses,
        ...variantClasses,
        className,
    );

    return (
        <article
            {...args}
            className={classes}>
            {children}
        </article>
    )
};

const Hero = ({ className, children, ...args }) => {
    const { card } = useTheme();
    const { styles } = card.hero;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <div
            {...args}
            className={classes}>
            {children}
        </div>
    )
};

const Content = ({ variant, className, children, ...args }) => {
    const { card, themeColor } = useTheme();
    const { defaultOptions, styles } = card.content;
    const { initial, variants } = styles;

    const resolvedVariant = variant || themeColor || defaultOptions.variant;

    const initialClasses = mapObjectToString(initial);
    const variantClasses = mapObjectToString(
        lookupOptions(variants, resolvedVariant, defaultOptions.variant)
    );

    const classes = twMerge(
        ...initialClasses,
        variantClasses,
        className,
    );

    return (
        <div
            {...args}
            className={classes}>
            {children}
        </div>
    )
};

const Title = ({ className, children, ...args }) => {
    const { card } = useTheme();
    const { styles } = card.title;
    const { initial } = styles;

    const initialClasses = mapObjectToString(initial);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <h2
            {...args}
            className={classes}>
            {children}
        </h2>
    )
};

const Section = ({ sections, className }) => {
    const { card } = useTheme();
    const { styles } = card.section;
    const { initial, section } = styles;

    const initialClasses = mapObjectToString(initial);
    const sectionClassses = mapObjectToString(section);

    const classes = twMerge(
        ...initialClasses,
        className,
    );

    return (
        <ul className={classes}>
            {
                sections.map(section => (
                    <li className={sectionClassses} key={section.name}>
                        {section.element}
                    </li>
                ))
            }
        </ul>
    )
};

Card.Content = Content;
Card.Hero = Hero;
Card.Section = Section;
Card.Title = Title;
export default Card;