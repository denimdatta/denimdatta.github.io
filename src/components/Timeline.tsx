import {type JSX, useEffect, useRef, useState} from "react";
import {FaBriefcase, FaMagnifyingGlass} from "react-icons/fa6";
import {PiStudentFill} from "react-icons/pi";
import {CN, IsNullOrEmpty} from "../lib/Utils";

class TimelineElement {
	type: string;
	name: string;
	duration: string;
	location: string;
	title: string;
	synopsis: string;
	symbol: JSX.Element;
	timebox: JSX.Element;

	// Constructor
	constructor(type: string, name: string, duration: string,
				location: string, title: string, synopsis: string);

	constructor(type: string, name: string, duration: string, location: string,
				title: string, synopsis: string, logoLocation: string);

	constructor(type: string, name: string, duration: string, location: string,
				title: string, synopsis: string, logoLocation?: string) {
		this.type = type.toLowerCase();
		this.name = name;
		this.duration = duration;
		this.location = location;
		this.title = title;
		this.synopsis = synopsis;
		this.timebox = <div/>;

		const symCN = "w-15 h-15 m-auto p-1 animate-beat-subtle";

		if (!IsNullOrEmpty(logoLocation)) {
			this.symbol = <img src={logoLocation} className={symCN} alt={this.name} loading="lazy" decoding="async"/>;
		} else if (this.type === "work") {
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
		"pragmatically add and manage listing items in Amazon", "images/Logo_Amazon.svg"),
	new TimelineElement("Work", "Amazon.Com Services LLC", "July 2019 - January 2023",
		"Tempe, Arizona, USA", "Software Developer Engineer",
		"Design, development and delivery of feature modules to enable sellers to " +
		"pragmatically add and manage listing items in Amazon", "images/Logo_Amazon.svg"),
	new TimelineElement("Work", "CIS Dept., Arizona State University", "June 2018 – May 2019",
		"Tempe, Arizona, USA", "Research Aide",
		"Responsible for helping with developing python scripts to generate results for the Research needs.",
		"images/Logo_ASU.svg"),
	new TimelineElement("Study", "Arizona State University", "August 2017 - May 2019",
		"Tempe, Arizona, USA", "Master of Computer Science ",
		"", "images/Logo_ASU.svg"),
	new TimelineElement("Work", "Aricent Technology (Holding) Limited", "November 2012 – June 2017",
		"Bengaluru, Karnataka, India", "Software Engineer",
		"Design, development, and delivery of feature modules. Involved in all the phases of Software Development " +
		"Life Cycle. Led cross-functional team on major feature development and delivery.",
		"images/Logo_Aricent_Letter.svg"),
	new TimelineElement("Work", "Microsoft (R&D)", "May 2011 – July 2011",
		"Bengaluru, Karnataka, India", "Intern - SDET",
		"Designed and automated test cases for List Manager Automation, part of Microsoft adCenter Project.",
		"images/Logo_Microsoft.svg"),
	new TimelineElement("Study", "KIIT University", "August 2008 - May 2012",
		"Bhubaneswar, Odisha, India", "Bachelor of Technology, Computer Science and Engineering ",
		"", "images/Logo_KIIT.svg"),
	new TimelineElement("Study", "Burdwan Municipal High School", "January 1996 - May 2008",
		"Burdwan, West Bengal, India", "Building Foundation", "", ""),
];

function useTest(te: TimelineElement) {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => setVisible(entry.isIntersecting));
		});
		if (domRef.current) {
			observer.observe(domRef.current);
		}
		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current)
			}
		};
	}, []);

	return (
		<div
			ref={domRef}
			className={CN(te.type, "col-start-4 col-end-9 timlineBox",
				`${isVisible}`,
				isVisible ? "animate-appear-clear" : "opacity-0"
			)}
		>
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
	);

}

function Timeline() {
	for (let i = 0; i < timelineElements.length; i++) {
		timelineElements[i].timebox = useTest(timelineElements[i]);
	}

	return (
		<section id="timeline" className="relative py-16">
			<div>
				<h2 className={CN("tourney-regular text-glow text-3xl md:text-4xl font-bold mb-12 text-center")}>
					<span className="text-primary">My</span> Career
				</h2>
				<div
					className="flex flex-col md:grid grid-cols-10 mx-auto p-2 text-blue-50 z-1 py-8"
				>
					{timelineElements.map((te, index) => (
						<div key={index} className="flex md:contents">
							{/* Timeline with Symbol on Left Side */}
							<div className="col-start-3 col-end-4 md:mx-auto relative">
								<div className="h-full w-15 flex flex-col items-center justify-center">
									<div className="h-1/3 w-1 bg-red-800 pointer-events-none relative"></div>
									<div className="h-1/3 w-1 pointer-events-none relative"></div>
									<div className="h-1/3 w-1 bg-red-800 pointer-events-none relative"></div>
								</div>
								<div className={CN("timelineCircle flex items-center justify-center align-middle")}>
									{te.symbol}
								</div>
							</div>
							{useTest(te)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Timeline;
