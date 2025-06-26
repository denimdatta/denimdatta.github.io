import {useEffect, useState} from "react";
import {CN} from "../lib/Utils.ts";
import {IoMdCloseCircleOutline, IoMdMenu} from "react-icons/io";

const navigationItems = [
    {name: "Home", href: "#denimdatta"},
    {name: "About Me", href: "#about"},
    {name: "Career", href: "#timeline"},
    {name: "Skills", href: "#skills"},
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
            className={CN("fixed w-full z-40 transition-all duration-300 px-[10%]",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-lg shadow-xs" : "py-5")}
        >
            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                >
                    <span className="relative z-10 text-foreground">
                        <span className="text-glow"> Denim </span>{" "}Datta
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navigationItems.map((item, key) => (<a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        {item.name}
                    </a>))}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <IoMdCloseCircleOutline size={24}/> : <IoMdMenu size={24}/>}{" "}
                </button>

                <div
                    className={CN("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden", isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navigationItems.map((item, key) => (<a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>))}
                    </div>
                </div>
            </div>
        </nav>);
}

export default Navigation;