import {FaArrowUp} from "react-icons/fa";

function Footer() {
    const date = new Date();
    return (
        <footer className="py-2 px-1 bg-footer relative flex flex-wrap justify-between items-center">
            <div className="container text-muted-foreground flex items-center justify-between">
                <div className="text-sm animate-pulse-subtle">
                    {date.toDateString().substring(4)}
                </div>
                <div className="px-2 text-lg animate-heartbeat">
                    Denim Datta
                </div>
                <div className="text-sm animate-pulse-subtle">
                    {getDayOfWeek(date)}
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


function getDayOfWeek(date: Date) {
    const dayOfWeek = date.getDay();
    return isNaN(dayOfWeek) ? null :
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

export default Footer;