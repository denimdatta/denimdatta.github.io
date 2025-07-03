import {useState} from "react";
import {CN} from "../lib/Utils";
import {FaJava, FaPython} from "react-icons/fa";
import {DiSqllite} from "react-icons/di";
import {GiCamel} from "react-icons/gi";
import {
	SiAmazon,
	SiAmazoncloudwatch,
	SiAmazondynamodb,
	SiAmazons3,
	SiAmazonsqs,
	SiApacheant,
	SiApachemaven,
	SiAwslambda,
	SiCplusplus,
	SiCsswizardry,
	SiEclipseide,
	SiGit,
	SiGitkraken,
	SiIntellijidea,
	SiJavascript,
	SiJunit5,
	SiPycharm,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import {FaC} from "react-icons/fa6";
import {PiFileHtmlLight, PiGitFork} from "react-icons/pi";

const iconCN = CN("w-10 h-10 m-auto p-1 inline-block text-primary/50");

const skills = [
	/* Backend */
	{
		name: "Java",
		type: "backend",
		exp: 10,
		icon: <FaJava className={CN(iconCN)}/>,
	},
	{
		name: "SQL",
		type: "backend",
		exp: 4,
		icon: <DiSqllite className={CN(iconCN)}/>,
	},
	{
		name: "Perl",
		type: "backend",
		exp: 5,
		icon: <GiCamel className={CN(iconCN, "rotate-y-[180deg]")}/>,
	},
	{
		name: "Python",
		type: "backend",
		exp: 2,
		icon: <FaPython className={CN(iconCN)}/>,
	},
	{
		name: "C++",
		type: "backend",
		exp: 1,
		icon: <SiCplusplus className={CN(iconCN)}/>,
	},
	{
		name: "C",
		type: "backend",
		exp: 2,
		icon: <FaC className={CN(iconCN)}/>
	},

	/* AWS */
	{
		name: "S3",
		type: "aws",
		exp: 3,
		icon: <SiAmazons3 className={CN(iconCN)}/>,
	},
	{
		name: "Lambda",
		type: "aws",
		exp: 1,
		icon: <SiAwslambda className={CN(iconCN)}/>,
	},
	{
		name: "CloudWatch",
		type: "aws",
		exp: 5,
		icon: <SiAmazoncloudwatch className={CN(iconCN)}/>,
	},
	{
		name: "SQS",
		type: "aws",
		exp: 3,
		icon: <SiAmazonsqs className={CN(iconCN)}/>,
	},
	{
		name: "DynamoDB",
		type: "aws",
		exp: 4,
		icon: <SiAmazondynamodb className={CN(iconCN)}/>,
	},
	{
		name: "SNS",
		type: "aws",
		exp: 1,
		icon: <SiAmazon className={CN(iconCN)}/>,
	},

	/* Frontend */
	{
		name: "TypeScript",
		type: "frontend",
		exp: 1,
		icon: <SiTypescript className={CN(iconCN)}/>,
	},
	{
		name: "HTML",
		type: "frontend",
		exp: 0.2,
		icon: <PiFileHtmlLight className={CN(iconCN)}/>,
	},
	{
		name: "CSS",
		type: "frontend",
		exp: 0.2,
		icon: <SiCsswizardry className={CN(iconCN)}/>,
	},
	{
		name: "JavaScript",
		type: "frontend",
		exp: 0.2,
		icon: <SiJavascript className={CN(iconCN)}/>,
	},
	{
		name: "React",
		type: "frontend",
		exp: 0.2,
		icon: <SiReact className={CN(iconCN)}/>,
	},
	{
		name: "Tailwind",
		type: "frontend",
		exp: 0.2,
		icon: <SiTailwindcss className={CN(iconCN)}/>,
	},

	/* Tool */
	{
		name: "JUnit",
		type: "tools",
		exp: 6,
		icon: <SiJunit5 className={CN(iconCN)}/>,
	},
	{
		name: "Git",
		type: "tools",
		exp: 7,
		icon: <SiGit className={CN(iconCN)}/>,
	},
	{
		name: "Ant",
		type: "tools",
		exp: 3,
		icon: <SiApacheant className={CN(iconCN)}/>,
	},
	{
		name: "Maven",
		type: "tools",
		exp: 2,
		icon: <SiApachemaven className={CN(iconCN)}/>,
	},
	{
		name: "InteliJ",
		type: "tools",
		exp: 7,
		icon: <SiIntellijidea className={CN(iconCN)}/>,
	},
	{
		name: "Eclipse",
		type: "tools",
		exp: 4,
		icon: <SiEclipseide className={CN(iconCN)}/>,
	},
	{
		name: "PyCharm",
		type: "tools",
		exp: 2,
		icon: <SiPycharm className={CN(iconCN)}/>,
	},
	{
		name: "GitKraken",
		type: "tools",
		exp: 1,
		icon: <SiGitkraken className={CN(iconCN)}/>,
	},
	{
		name: "Fork Git Client",
		type: "tools",
		exp: 6,
		icon: <PiGitFork className={CN(iconCN)}/>,
	},
];

const categories = ["all", "backend", "aws", "frontend", "tools"];

function Skills() {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = skills
		.filter(
			(skill) => activeCategory === "all" || skill.type === activeCategory,
		)
		.sort((a, b) => b.exp - a.exp);

	return (
		<section id="skills" className="relative px-4 py-16">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					<span className="text-primary">My</span> Skills
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12 py-8">
					{categories.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category)}
							className={CN(
								"px-5 py-2 transition-colors duration-300 capitalize rounded-full",
								activeCategory === category
									? "bg-primary text-primary-foreground"
									: "bg-secondary/70 text-forefround hover:bd-secondary",
							)}
						>
							{/*Hacky way, as capitalize keyword is not working*/}
							{category.substring(0, 1).toUpperCase() +
								category.substring(1, category.length).toLowerCase()}
						</button>
					))}
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="bg-card p-6 rounded-lg shadow-xs card-hover"
						>
							<div className="text-left mb-4 w-[60%]">
								<h3 className="font-semibold text-lg">
									{skill.icon} {skill.name}
								</h3>
							</div>
							<div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
								<div
									className="bg-primary h-2 rounded-full origin-left animate-[grow_5s_ease-out]"
									style={{width: (skill.exp * 100) / 11 + "%"}}
								/>
							</div>

							<div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.exp}Y
                </span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Skills;
