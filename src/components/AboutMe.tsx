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
                    </div>

                    <div className={CN("grid grid-cols-1 gap-6")}>
                        <div className={CN("gradient-border p-6 card-hover")}>
                        </div>
                        <div className={CN("gradient-border p-6 card-hover")}>
                        </div>
                        <div className={CN("gradient-border p-6 card-hover")}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;