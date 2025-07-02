import {CN} from "../lib/Utils";

function Projects() {
    return (
        <section id ="projects"
            className="relative px-4 py-16">
            <div className="row text-center">
                <h2 className={CN("text-3xl md:text-4xl font-bold mb-12 text-center")}>
                    My <span className="text-primary">Projects</span>
                </h2>
                <div className="py-8">
                    <h3>Placeholder</h3>
                </div>
            </div>
        </section>
    );
}

export default Projects;