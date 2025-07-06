import {CN} from "../lib/Utils";
import FlipCard from "./FlipCard";
import {SlCalender} from "react-icons/sl";
import {FaLocationDot} from "react-icons/fa6";

const experienceElements = [
	{
		"name": "Amazon",
		"frontContent": (
			<>
				{/* Header Logo */}
				<div className="w-full h-1/4 mt-[5%] inline-block">
					<img src="images/Logo_Amazon.svg" alt="Amazon Logo"
						 className="w-1/2 pt-2 pb-2 pl-[10%] pr-[30%] md:pr-[30%] inline-block"/>
					<img src="images/Flag_USA.svg" alt="USA"
						 className="w-[38%] pl-[25%] pr-[4%] inline-block"/>
					<img src="images/Flag_Canada.svg" alt="Canada"
						 className="w-[12%] pr-[3%] inline-block"/>
				</div>
				{/* Organization and Position */}
				<div className="w-full h-1/2">
					<h1 className="w-full h-1/2 mt-[10%] mb-[5%]">Amazon</h1>
					<h4 className="w-full h-1/2 mt-[5%] mb-[10%]">Software Development Engineer</h4>
				</div>
				{/* Tenure and Location */}
				<div className="w-full h-1/4 mb-[5%] md:mt-[5%]">
					<div className="w-full inline-block text-right">
						<SlCalender className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">July 2019 - June 2025</p>
					</div>
					<br/>
					<div className="w-full inline-block text-left">
						<FaLocationDot className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">Vancouver, BC, Canada</p>
					</div>
					<br/>
					<div className="w-full inline-block text-left">
						<FaLocationDot className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">Tempe, Arizona, USA</p>
					</div>
				</div>
			</>
		),
		"backContent": (
			<>
				<p>Placeholder 1 Content</p>
			</>
		),
	},
	{
		"name": "Aricent",
		"frontContent": (
			<>
				{/* Header Logo */}
				<div className="w-full h-1/4 mt-[5%] inline-block">
					<img src="images/Logo_Aricent.svg" alt="Aricent Logo"
						 className="w-1/2 pl-[1%] pr-[15%] md:pr-[5%] inline-block"/>
					<img src="images/Flag_India.svg" alt="India"
						 className="w-1/2 pl-[38%] md:pl-[38%] pr-[3%] inline-block"/>
				</div>
				{/* Organization and Position */}
				<div className="w-full h-1/2">
					<h1 className="w-full h-1/2 mt-[10%] mb-[5%]">Aricent</h1>
					<h4 className="w-full h-1/2 mt-[5%] mb-[10%]">Senior Software Engineer</h4>
				</div>
				{/* Tenure and Location */}
				<div className="w-full h-1/4 mb-[5%]">
					<div className="w-full inline-block text-right">
						<SlCalender className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">November 2012 - June 2017</p>
					</div>
					<br/>
					<div className="w-full inline-block text-left">
						<FaLocationDot className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">Bengaluru, Karnataka, India</p>
					</div>
				</div>
			</>
		),
		"backContent": (
			<>
				<p>Placeholder 2 Content</p>
			</>
		),
	},
	{
		"name": "Microsoft",
		"frontContent": (
			<>
				{/* Header Logo */}
				<div className="w-full h-1/4 mt-[5%] inline-block">
					<img src="images/Logo_Microsoft.svg" alt="Microsoft Logo"
						 className="w-1/2 pl-[10%] pr-[30%] md:pr-[30%] inline-block"/>
					<img src="images/Flag_India.svg" alt="India"
						 className="w-1/2 pl-[38%] md:pl-[38%] pr-[3%] inline-block"/>
				</div>
				{/* Organization and Position */}
				<div className="w-full h-1/2">
					<h1 className="w-full h-1/2 mt-[10%] mb-[5%]">Microsoft (R&D)</h1>
					<h4 className="w-full h-1/2 mt-[5%] mb-[10%]">Intern - SDET</h4>
				</div>
				{/* Tenure and Location */}
				<div className="w-full h-1/4 mb-[5%]">
					<div className="w-full inline-block text-right">
						<SlCalender className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">May 2011 - July 2011</p>
					</div>
					<br/>
					<div className="w-full inline-block text-left">
						<FaLocationDot className="w-[20%] h-5 inline-block pl-2"/>
						<p className="inline-block pr-2">Bengaluru, Karnataka, India</p>
					</div>
				</div>
			</>
		),
		"backContent": (
			<>
				<p>Placeholder 3 Content</p>
			</>
		),
	},
];

function WorkExperience() {
	return (
		<section id="work" className="relative px-4 py-16">
			<div className="row text-center">
				<h2 className={CN("text-3xl md:text-4xl font-bold mb-12 text-center")}>
					Work <span className="text-primary">Experience</span>
				</h2>
				<div className={CN("grid grid-cols-1 md:grid-cols-3 gap-12 items-center py-8")}>
					{experienceElements.map((exp, index) => (
						<FlipCard key={index} frontContent={exp.frontContent} backContent={exp.backContent} id={exp.name}/>
					))}
				</div>
			</div>
		</section>
	);
}

export default WorkExperience;
