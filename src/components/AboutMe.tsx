import {FaBriefcase, FaCode} from "react-icons/fa6";
import {PiStudentFill} from "react-icons/pi";
import {CN} from "../lib/Utils.ts";

function AboutMe() {
    return (
        <section id ="about" className="relative px-4 py-24">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className={CN("text-3xl md:text-4xl font-bold mb-12 text-center")}>
                    About <span className="text-primary">Me</span>
                </h2>

                <div className={CN("grid grid-cols-1 md:grid-cols-2 gap-12 items-center")}>

                    <div className="space-y-6">
                        <h3 className={CN("text-2xl font-semibold")}>Software Development Engineer</h3>

                        <p className="text-muted-foreground">
                        </p>

                        <p className="text-muted-foreground">
                        </p>

                        <div className={CN("flex flex-col sm:flex-row gap-4 pt-4 justify-center")}>
                            <a href="" className={CN(
                                "px-6 py-2 rounded-full border border-primary text-primary",
                                "hover:bg-primary/10 transition-colors duration-300")}
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className={CN("grid grid-cols-1 gap-6")}>
                        <div className={CN("gradient-border p-6 card-hover")}>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaCode className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Code</h4>
                                    <p className="text-muted-foreground">
                                        {"<Code Description>"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={CN("gradient-border p-6 card-hover")}>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <FaBriefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Developer</h4>
                                    <p className="text-muted-foreground">
                                        {"<Work Description>"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={CN("gradient-border p-6 card-hover")}>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PiStudentFill className="h-7 w-7 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Education</h4>
                                    <p className="text-muted-foreground">
                                        {"<Education Description>"}
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