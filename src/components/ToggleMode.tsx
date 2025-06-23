import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";


function ToggleMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedThemeMode = localStorage.getItem("themeMode");
        if (storedThemeMode === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
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
        <button onClick={toogleMode}>
            {isDarkMode
                ? <FaSun className="h-5 w-5 text-yellow-300"/>
                : <FaMoon className="h-5 w-5 text-blue-900"/>
            }
        </button>
    );
}

export default ToggleMode;