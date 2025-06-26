import {useEffect, useState} from "react";
import {CN} from "../lib/Utils.ts";
const navigationItems = [
    {name: "Home", href: "#denimdatta"},
    {name: "About Me", href: "#about"},
    {name: "Career", href: "#timeline"},
    {name: "Skills", href: "#skills"},
];
function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

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

                <div className="hidden md:flex space-x-8">
                    {navigationItems.map((item, key) => (<a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        {item.name}
                    </a>))}
                </div>
            </div>
        </nav>);
}

export default Navigation;