import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {CN} from "../lib/Utils";

function ToggleMode() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		if (typeof window === "undefined") {
			return true;
		}
		return localStorage.getItem("themeMode") !== "light";
	});

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDarkMode);
		localStorage.setItem("themeMode", isDarkMode ? "dark" : "light");
		toggleBG(isDarkMode);
	}, [isDarkMode]);

	const toggleMode = () => {
		setIsDarkMode((prev) => !prev);
	};

	const toggleBG = (isModeDark: boolean) => {
		const darkBG = document.querySelector(".animated-bg-dark");
		const lightBG = document.querySelector(".animated-bg-light");
		if (!darkBG || !lightBG) {
			return;
		}

		darkBG.classList.toggle("hidden", !isModeDark);
		lightBG.classList.toggle("hidden", isModeDark);
	};

	return (
		<div className={CN("fixed z-50 right-0 p-2")}>
			<button
				onClick={toggleMode}
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
			<p className="text-xs max-sm:hidden">Toggle Theme</p>
		</div>
	);
}

export default ToggleMode;
