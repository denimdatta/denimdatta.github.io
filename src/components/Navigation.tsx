import {useEffect, useState} from "react";
import {CN} from "../lib/Utils.ts";
import {IoMdCloseCircleOutline, IoMdMenu} from "react-icons/io";

const navigationItems = [
	{name: "Home", href: "#denimdatta"},
	{name: "About Me", href: "#about"},
	{name: "Timeline", href: "#timeline"},
	{name: "Career", href: "#work"},
	{name: "Skills", href: "#skills"},
	{name: "Projects", href: "#projects"},
];

function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.screenY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll)
	}, []);

	return (
		<nav
			className={CN("fixed w-full z-40 transition-all duration-300",
				isScrolled ? "py-0 bg-background/20 backdrop-blur-md shadow-xs" : "py-1")}
		>
			<div className="container flex items-center justify-between">
				<a className="flex items-center" href="">
					<img src="images/HeaderProfilePic.svg" className="h-15" alt="Profile Picture"/>
				</a>

				{/* desktop nav */}
				<div className="hidden md:flex space-x-8 px-15">
					{navigationItems.map((item, key) => (
						<a key={key} href={item.href} className="flex items-center">
                            <span
								className="relative z-10 text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </span>
						</a>
					))}
				</div>

				{/* mobile nav */}
				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden py-2 px-4 text-foreground z-50"
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				>
					{isMenuOpen ? <IoMdCloseCircleOutline size={24}/> : <IoMdMenu size={24}/>}{" "}
				</button>

				<div
					className={CN("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col",
						"items-center justify-center transition-all duration-300 md:hidden",
						isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
				>
					<div className="flex flex-col space-y-8 text-xl">
						{navigationItems.map((item, key) => (
							<a key={key} href={item.href} className="flex items-center"
							   onClick={() => setIsMenuOpen(false)}>
                                <span
									className="relative z-10 text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {item.name}
                                </span>
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>);
}

export default Navigation;
