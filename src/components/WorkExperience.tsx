import {CN} from "../lib/Utils";
import FlipCard from "./FlipCard";

const experienceElements = [
	{
		"name": "PH1",
		"frontContent": (
			<>
				<h4>Placeholder 1</h4>
			</>
		),
		"backContent": (
			<>
				<p>Placeholder 1 Content</p>
			</>
		),
	},
	{
		"name": "PH2",
		"frontContent": (
			<>
				<h4>Placeholder 2</h4>
			</>
		),
		"backContent": (
			<>
				<p>Placeholder 2 Content</p>
			</>
		),
	},
	{
		"name": "PH3",
		"frontContent": (
			<>
				<h4>Placeholder 3</h4>
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
