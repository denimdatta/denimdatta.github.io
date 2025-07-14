import {CN} from "../lib/Utils";
import {FaArrowRight, FaExternalLinkAlt, FaGithub} from "react-icons/fa";

const projects = [
	{
		id: 1,
		title: "Protfolio Website",
		description: "A simple portfolio website built using React and Tailwind CSS.",
		image: "images/projects/Portfolio.png",
		tags: ["React", "Tailwind CSS", "TypeScript"],
		githubUrl: "https://github.com/denimdatta/denimdatta.github.io",
		demoUrl: "https://denimdatta.github.io",
	},
	{
		id: 2,
		title: "Malware Family Analysis",
		description: "Tool to extract/collect data from predefined websites for a given Malware name " +
			"and parse it to obtain the Malware summary using Python and Java",
		image: "images/projects/MalwareFamilyAnalysis.jpeg",
		tags: ["Java", "Python", "Academic Project"],
		githubUrl: "https://github.com/arpitmohanty9/NLP_MalwareFamilyAnalysis",
		demoUrl: "",
	},
	{
		id: 3,
		title: "Secure Banking System",
		description: "Developed a skeleton secure banking system (SBS) with limited  functional, performance, " +
			"and security requirements for secure banking transactions and user account management. ",
		image: "images/projects/SecureBankingSystem.png",
		tags: ["Java", "Academic Project"],
		githubUrl: "https://github.com/kjayashr/secure-banking-system-group3",
		demoUrl: "",
	},
];

function isEmptyString(value: string | null | undefined): boolean {
	return value === null || value === undefined || value === "";
};

function Projects() {
	return (
		<section id="projects"
				 className={CN("relative px-4 py-24")}>
			<div className={CN("container mx-auto max-w-5xl")}>
				<h2 className={CN("text-3xl md:text-4xl font-bold mb-12 text-center")}>
					Featured <span className="text-primary">Projects</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my projects, from both academic and personal scope.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div key={key}
							 className={CN("group bg-card rounded-lg overflow-hidden shadow-xs card-hover")}>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className={CN("w-full h-full object-cover transition-transform",
										"duration-500 group-hover:scale-110")}
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4 justify-center">
									{project.tags.map((tag, index) => (
										<span key={index}
											  className={CN("px-2 py-1 text-xs font-medium border",
												  "rounded-full bg-secondary text-secondary-foreground")}>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex items-center justify-center">
									<div className="flex space-x-10">
										<a
											href={project.githubUrl}
											target="_blank"
											className={CN("px-6 py-2 rounded-full",
												"transition-colors duration-300 bg-primary")}
										>
											<span className={CN("text-foreground")}>
												<FaGithub size={20}/>
											</span>
										</a>
										<a
											href={project.demoUrl}
											target="_blank"
											className={CN("px-6 py-2 rounded-full",
												"transition-colors duration-300 bg-primary",
												isEmptyString(project.demoUrl) ? "pointer-events-none opacity-50" : "")}
										>
											<span
												className={CN("text-foreground")}>
												<FaExternalLinkAlt size={20}/>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					))};
				</div>

				<div className="schoolbell-regular text-glow text-center mt-12 animate-beat-subtle">
					<a className={CN("cosmic-button w-fit flex items-center mx-auto gap-2")}
					   target="_blank"
					   href="https://github.com/denimdatta"
					>
						Check My Github <FaArrowRight size={16}/> <FaGithub size={24}/>
					</a>
				</div>

			</div>
		</section>
	);
}

export default Projects;
