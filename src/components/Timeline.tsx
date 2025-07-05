import type {JSX} from "react";
import {FaBriefcase, FaMagnifyingGlass} from "react-icons/fa6";
import {PiStudentFill} from "react-icons/pi";
import {CN} from "../lib/Utils";

class TimelineElement {
	type: string;
	name: string;
	duration: string;
	location: string;
	title: string;
	synopsis: string;
	symbol: JSX.Element;

	// Constructor
	constructor(type: string, name: string, duration: string,
				location: string, title: string, synopsis: string) {
		this.type = type.toLowerCase();
		this.name = name;
		this.duration = duration;
		this.location = location;
		this.title = title;
		this.synopsis = synopsis;

		const symCN = "w-9 h-10 m-auto p-1 block animate-beat-subtle";

		if (this.type === "work") {
			this.symbol = <FaBriefcase className={symCN}/>;
		} else if (this.type === "study") {
			this.symbol = <PiStudentFill className={symCN}/>;
		} else {
			this.symbol = <FaMagnifyingGlass className={symCN}/>;
			this.type = "others";
		}
	}
}

const timelineElements = [
	new TimelineElement("Work", "Amazon Development Centre Canada ULC", "January 2023 – June 2025",
		"Vancouver, BC, Canada", "Software Developer Engineer",
		"Design, development and delivery of feature modules to enable sellers to " +
		"pragmatically add and manage listing items in Amazon"),
	new TimelineElement("Work", "Amazon.Com Services LLC", "July 2019 - January 2023",
		"Tempe, Arizona, USA", "Software Developer Engineer",
		"Design, development and delivery of feature modules to enable sellers to " +
		"pragmatically add and manage listing items in Amazon"),
	new TimelineElement("Work", "CIS Dept., Arizona State University", "June 2018 – May 2019",
		"Tempe, Arizona, USA", "Research Aide",
		"Responsible for helping with developing python scripts to generate results for the Research needs."),
	new TimelineElement("Study", "Arizona State University", "August 2017 - May 2019",
		"Tempe, Arizona, USA", "Master of Computer Science ",
		""),
	new TimelineElement("Work", "Aricent Technology (Holding) Limited", "November 2012 – June 2017",
		"Bengaluru, Karnataka, India", "Software Engineer",
		"Design, development, and delivery of feature modules. Involved in all the phases of Software Development Life " +
		"Cycle. Led cross-functional team on major feature development and delivery."),
	new TimelineElement("Work", "Microsoft (R&D)", "May 2011 – July 2011",
		"Bengaluru, Karnataka, India", "Intern - SDET",
		"Designed and automated test cases for List Manager Automation, part of Microsoft adCenter Project."),
	new TimelineElement("Study", "KIIT University", "August 2008 - May 2012",
		"Bhubaneswar, Odisha, India", "Bachelor of Technology, Computer Science and Engineering ",
		""),
	new TimelineElement("Testing", "Burdwan Municipal High School", "January 1996 - May 2008",
		"Burdwan, West Bengal, India", "Building Foundation",
		""),
];

function Timeline() {

	return (
		<section id="timeline" className="relative py-16">
			<div>
				<h2 className={CN("text-3xl md:text-4xl font-bold mb-12 text-center")}>
					<span className="text-primary">My</span> Career
				</h2>
				<div
					className="flex flex-col md:grid grid-cols-10 mx-auto p-2 text-blue-50 z-1 py-8"
				>
					{timelineElements.map((te, index) => (
						<div key={index} className="flex md:contents">
							{/* Timeline with Symbol on Left Side */}
							<div className="col-start-3 col-end-4 md:mx-auto relative">
								<div className="h-full w-10 flex items-center justify-center">
									<div className="h-full w-1 bg-red-800 pointer-events-none"></div>
								</div>
								<div className={CN(te.type, "timelineCircle")}>
									{te.symbol}
								</div>
							</div>
							{/* TimeBox */}
							<div className={CN(te.type, "col-start-4 col-end-9 timlineBox animate-appear-clear")}>
								<div className="w-full inline-block">
									<div className="w-[75%] mb-1 inline-block text-red-200">
										<p className="h-1/2 font-semibold text-lg mb-1">{te.name}</p>
										<p className="h-1/2 font-semibold text-sm mb-1">{te.title}</p>
									</div>
									<div className="w-[25%] mb-1 inline-block text-yellow-200">
										<p className="h-1/2 right-0 font-thin text-sm text-right mb-1 p-0 italic inline-block">{te.duration}</p>
										<p className="h-1/2 right-0 font-thin text-sm text-right mb-1 p-0 italic inline-block">{te.location}</p>
									</div>
								</div>
								<p className="leading-tight text-justify text-black">
									{te.synopsis}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Timeline;
