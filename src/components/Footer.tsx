import {FaArrowUp} from "react-icons/fa";

function Footer() {
    return (
        <footer className="py-2 px-4 bg-footer relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <div className="container text-sm text-muted-foreground flex items-center justify-between">
                <div className="pl-1">
                    {new Date().toDateString()}
                </div>
                <div className="pr-5">
                    Denim Datta
                </div>
                <a href="#denimdatta"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                    <FaArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;