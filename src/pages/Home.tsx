import ToggleMode from "../components/ToggleMode";
import Background from "../components/Background";
import Navigation from "../components/Navigation";
import DenimDatta from "../components/DenimDatta";
import AboutMe from "../components/AboutMe";
import Timeline from "../components/Timeline";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <Background/>
            <Navigation/>
            <DenimDatta/>
            <AboutMe/>
            <Timeline/>
            <WorkExperience/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Home;