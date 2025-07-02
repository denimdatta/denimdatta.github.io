import {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";
import {CN} from "../lib/Utils";

function ToggleMode() {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const animatedBG = document.getElementsByClassName("animated-bg");
	const darkBG = document.getElementsByClassName("animated-bg-dark")[0];
	const lightBG = document.getElementsByClassName("animated-bg-light")[0];

	useEffect(() => {
		const storedThemeMode = localStorage.getItem("themeMode");
		if (storedThemeMode === "light") {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		} else {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		}

		toogleBG(isDarkMode);
	});

	const toogleMode = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("themeMode", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("themeMode", "dark");
		}
		setIsDarkMode(!isDarkMode);

		toogleBG(isDarkMode);
	};

	const toogleBG = (isModeDark: boolean) => {
		if (animatedBG.length > 0 && darkBG != null && lightBG != null) {
			if (isModeDark) {
				darkBG.classList.remove("hidden");
				lightBG.classList.add("hidden");
			} else {
				darkBG.classList.add("hidden");
				lightBG.classList.remove("hidden");
			}
		}
	};

	return (
		<div className={CN("fixed z-50 right-0 p-2")}>
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
			<p className="text-xs max-sm:hidden">Toggle Theme</p>
		</div>
	);
}

export default ToggleMode;
