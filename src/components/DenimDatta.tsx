import {SlArrowDown} from "react-icons/sl";
import {CN} from "../lib/Utils";
import Typewriter from "typewriter-effect";
function DenimDatta() {
    return (
        <section id ="denimdatta"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className='row pb-10'>
                <h1 className="text-center">
                    <span className={CN("animate-wave-1 inline-block w-7 text-primary")}>D</span>
                    <span className={CN("animate-wave-2 inline-block w-7 text-primary")}>E</span>
                    <span className={CN("animate-wave-3 inline-block w-7 text-primary")}>N</span>
                    <span className={CN("animate-wave-4 inline-block w-7 text-primary")}>I</span>
                    <span className={CN("animate-wave-5 inline-block w-7 text-primary")}>M</span>
                    <span className={CN("inline-block w-10")}/>
                    <span className={CN("animate-wave-1 inline-block w-7 text-foreground")}>D</span>
                    <span className={CN("animate-wave-2 inline-block w-7 text-foreground")}>A</span>
                    <span className={CN("animate-wave-3 inline-block w-7 text-foreground")}>T</span>
                    <span className={CN("animate-wave-4 inline-block w-7 text-foreground")}>T</span>
                    <span className={CN("animate-wave-5 inline-block w-7 text-foreground")}>A</span>
                </h1>
            </div>

            <div className="row wrap-normal text-2xl font-sans pt-20 w-[75%]">
                <div>
                    <Typewriter options={{
                        strings: [
                            "Master in Computer Science.",
                            "10+ years of industrial experience.",
                            "Skilled in Java and AWS technologies like CloudWatch, DynamoDB, SQS.",
                        ],
                        autoStart: true,
                        loop: true,
                        cursor: '_',
                    }}/>
                </div>
            </div>

            <div className={CN("absolute bottom-8 left-1/2 transform -translate-x-1/2",
                "flex flex-col items-center animate-bounce",
            )}>
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <SlArrowDown className="h-8 w-8 text-primary" />
            </div>
        </section>
    );
}

export default DenimDatta;