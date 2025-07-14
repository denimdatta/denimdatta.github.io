import {FaArrowUp} from "react-icons/fa";
import {GetDayOfWeek} from "../lib/Utils";

function Footer() {
	const date = new Date();
	return (
		<footer className="py-2 px-1 bg-footer relative flex flex-wrap justify-between items-center">
			<div className="container text-muted-foreground flex items-center justify-between">
				<div className="text-sm animate-pulse-subtle">
					{date.toDateString().substring(4)}
				</div>
				<div className="dancing-script-medium px-2 text-2xl animate-heartbeat">
					Denim Datta
				</div>
				<div className="text-sm animate-pulse-subtle">
					{GetDayOfWeek(date)}
				</div>
				<a href="#denimdatta"
				   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
				>
					<FaArrowUp size={20}/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
