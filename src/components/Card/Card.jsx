import { surfaceColorOptions, textOptions, radiusOptions } from "../../context/classOptions.js";
import { useTheme } from "../../context/ThemeContext.jsx";
import { twMerge } from "tailwind-merge";

export default function Card({ ref, themeClass = useTheme(), radiusClass = 'round', className, children }) {
    return (
        <article ref={ref} className={twMerge(
            'h-auto w-96 overflow-hidden shadow',
            surfaceColorOptions[themeClass],
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
    const { className, children, themeClass = useTheme() } = props;
    return (
        <div className={twMerge(
            'm-4',
            textOptions[themeClass],
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
            className
        )}>
            {children}
        </h2>
    )
};

export const Section = ({ sections, className }) => {
    return (
        <ul className={twMerge(
            'divide-y divide-inherit',
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