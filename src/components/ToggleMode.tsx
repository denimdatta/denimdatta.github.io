import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {CN} from "../lib/Utils";


function ToggleMode() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedThemeMode = localStorage.getItem("themeMode");
        if (storedThemeMode === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    });

    const toogleMode = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("themeMode", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("themeMode", "dark");
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={CN("fixed max-sm:hidden top-5 right-5 z-50 p-2 ")}>
            <button
                onClick={toogleMode}
                className={CN(
                    "rounded-full transition duration-1000 ",
                    "ease-in-out hover:scale-150 focus:outline-dotted"
                )}
            >
                {isDarkMode
                    ? <FaSun className="h-5 w-5 text-yellow-300"/>
                    : <FaMoon className="h-5 w-5 text-blue-900"/>
                }
            </button>
            <br/>
            <p className="text-xs">Toggle Theme</p>
        </div>
    );
}

export default ToggleMode;