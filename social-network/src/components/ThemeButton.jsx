import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeButton(){
    const {theme, toggleTheme} = useTheme();

    return(
        <div>
            <button onclick={toggleTheme} className="">
                Switch to {theme === 'light'? 'Dark': 'Light'}
            </button>
        </div>
    )
}