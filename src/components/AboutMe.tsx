import {FaBriefcase, FaCode} from "react-icons/fa6";
import {PiStudentFill} from "react-icons/pi";
import {CN} from "../lib/Utils";

function AboutMe() {
	return (
		<section id="about" className="relative px-4 py-16">
			{" "}
			<div className="container mx-auto max-w-5xl">
				<h2 className={CN("text-3xl md:text-4xl font-bold mb-12 text-center")}>
					About <span className="text-primary">Me</span>
				</h2>

				<div className={CN("grid grid-cols-1 md:grid-cols-3 gap-12 items-center py-8")}>

					<div className="space-y-6">
						<h3 className={CN("text-2xl font-semibold")}>Software Development Engineer</h3>

						<p className="text-muted-foreground">
							Over 10 years of industry experience working in different phases of software
							development lifecycle. Involved in Designing, Developing, Testing and Deployment of
							feature modules in REST API.
						</p>

						<p className="text-muted-foreground">
							I'm passionate about building efficient and scalable application and dedicated to
							continuous learning and apply new technologies and procedures in real world.
							I enjoy Test-Driven development and CI/CD. Strong team player with experience
							collaborating with cross-functional teams to achieve project goals
						</p>

						<div className={CN("flex flex-col sm:flex-row gap-4 pt-4 justify-center")}>
							<a href="files/Resume.pdf" download="DenimDatta_Resume" className={CN(
								"px-6 py-2 rounded-full border border-primary text-primary",
								"hover:bg-primary/10 transition-colors duration-300")}
							>
								Download Resume
							</a>
						</div>
					</div>

					<div className={CN("grid grid-cols-1 md:col-span-2 gap-6")}>
						<div className={CN("gradient-border p-6 card-hover")}>
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<FaCode className="h-6 w-6 text-primary"/>
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">Programmer</h4>
									<p className="text-muted-foreground">
										Proficient in Java, JUnit, Git, AWS Technologies like DynamoDB, SQS, CloudWatch.
										<br/>
										Working knowledge of Python, Perl, Shell Scripting, SQL, TypeScript.
										<br/>
										Basic familiarity with C, C++, C#, Android Programming, HTML, CSS, React,
										JavaScript.
									</p>
								</div>
							</div>
						</div>
						<div className={CN("gradient-border p-6 card-hover")}>
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<FaBriefcase className="h-6 w-6 text-primary"/>
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">Software Developer</h4>
									<p className="text-muted-foreground">
										10+ years of experience in Software Development, working in different
										phases of Software Development Lifecycle.
										<br/>
										6 years of experience in Amazon in Listings Management team, developing
										REST API to enable sellers to programmatically add and manage listings
										items in Amazon.
									</p>
								</div>
							</div>
						</div>
						<div className={CN("gradient-border p-6 card-hover")}>
							<div className="flex items-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<PiStudentFill className="h-7 w-7 text-primary"/>
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">Computer Science</h4>
									<p className="text-muted-foreground">
										Master of Computer Science from Arizona State University, Tempe, Arizona,
										USA; graduated on 2019.
										<br/>
										Bachelor of Technology, Computer Science and Engineering from KIIT, Bhubaneswar,
										Odisha, India; graduated on 2012.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
