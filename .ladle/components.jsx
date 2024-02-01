import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";

export const Provider = ({ children, globalState }) => {
    useEffect(() => {
        if (globalState.theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [globalState.theme]);
    return <div className="p-4">{children}</div>;
};