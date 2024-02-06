import { cloneElement } from "react";
import { loadingOptions } from "../util/classOptions";

export const Icon = ({ icons, loading, loadingClass }) => {
    return (
        <span className={`flex px-2 py-1.5 bg-[rgba(0,0,0,0.15)]`}>
            {
                loading ? <LoadingIcon loadingClass={loadingClass} /> :
                    icons.map(icon => (
                        <div className="size-8 m-auto" key={icon.name}>
                            {icon.element}
                        </div>
                    ))
            }
        </span>
    )
};

export const LoadingIcon = ({ loadingClass = 'three-quarter' }) => {
    return (
        <span className={`${loadingOptions[loadingClass]} m-auto px-1`}></span>
    )
}