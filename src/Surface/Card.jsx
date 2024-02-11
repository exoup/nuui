import { cardColorOptions, cardTextOptions, radiusOptions } from "../util/classOptions.js";
import { useTheme } from "../Context/ThemeContext.jsx";
import { twMerge } from "tailwind-merge";

export default function Card({ ref, colorClass = useTheme(), radiusClass = 'round', className, children }) {
    return (
        <article ref={ref} className={twMerge(
            'h-auto w-96 overflow-hidden shadow',
            cardColorOptions[colorClass],
            radiusOptions[radiusClass],
            className
        )}>
            {children}
        </article>
    )
}

export const Hero = (props) => {
    const { className, children } = props;
    return (
        <div className={twMerge(
            'h-auto w-full max-w-full',
            className
        )}>
            {children}
        </div>
    )
};

export const Content = (props) => {
    const { className, children, textClass = useTheme() } = props;
    return (
        <div className={twMerge(
            'm-4 font-medium',
            cardTextOptions[textClass],
            className
        )}>
            {children}
        </div>
    )
};

export const Title = (props) => {
    const { className, children } = props;
    return (
        <h2 className={twMerge(
            'text-2xl font-semibold mb-2',
            'text-gray-900 dark:text-white',
            className
        )}> 
            {children}
        </h2>
    )
};

export const Section = ({ sections, className }) => {
    return (
        <ul className={twMerge(
            'divide-y divide-gray-200',
            className
        )}>
            {
                sections.map(section => (
                    <li className="py-3 last-of-type:pb-0" key={section.name}>
                        {section.element}
                    </li>
                ))
            }
        </ul>
    );
};