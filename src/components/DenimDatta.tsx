import {useEffect, useState} from "react";
import {SlArrowDown} from "react-icons/sl";
import {CN} from "../lib/Utils";
import Typewriter from "typewriter-effect";
import {FaAmazon, FaGitAlt, FaGitkraken, FaJava} from "react-icons/fa";

function DenimDatta() {
    const [isScrolled, setIsScrolled] = useState(false);
    const wavyName = (
        <>
            <span className={CN("animate-wave-1 inline-block w-7 text-primary relative")}>D</span>
            <span className={CN("animate-wave-2 inline-block w-7 text-primary relative")}>E</span>
            <span className={CN("animate-wave-3 inline-block w-7 text-primary relative")}>N</span>
            <span className={CN("animate-wave-4 inline-block w-7 text-primary relative")}>I</span>
            <span className={CN("animate-wave-5 inline-block w-7 text-primary relative")}>M</span>
            <span className={CN("inline-block w-10 relative")}/>
            <span className={CN("animate-wave-1 inline-block w-7 text-foreground relative")}>D</span>
            <span className={CN("animate-wave-2 inline-block w-7 text-foreground relative")}>A</span>
            <span className={CN("animate-wave-3 inline-block w-7 text-foreground relative")}>T</span>
            <span className={CN("animate-wave-4 inline-block w-7 text-foreground relative")}>T</span>
            <span className={CN("animate-wave-5 inline-block w-7 text-foreground relative")}>A</span>
        </>
    );

    useEffect(() => {
        console.log(`DENIM:: ${isScrolled} :: ${window.scrollY}`)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [isScrolled]);

    return (
        <section id ="denimdatta"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">

            {/*Desktop Screen*/}
            <div className='row pb-10 gap-4 w-[75%] grid-cols-12 hidden md:flex md:visible'>
                <FaGitAlt className="col-1 h-10 animate-appear hidden md:flex md:visible"/>
                <FaJava className="col-1 h-10 animate-appear hidden md:flex md:visible"/>
                <h1 className="justify-center col-6 gap-4 relative hidden md:flex md:visible">
                    {wavyName}
                </h1>
                <FaAmazon className="col-1 h-10 animate-appear hidden md:flex md:visible"/>
                <FaGitkraken className="col-1 h-10 animate-appear hidden md:flex md:visible"/>
            </div>

            {/*Mobile Screen*/}
            <div className='md:hidden row pb-10 gap-4'>
                <h1 className="md:hidden justify-center inline-block gap-4 relative">
                    {wavyName}
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
                isScrolled ? "hidden" : ""
            )}>
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <SlArrowDown className="h-8 w-8 text-primary" />
            </div>
        </section>
    );
}

export default DenimDatta;