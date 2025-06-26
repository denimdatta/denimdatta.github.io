import ToggleMode from "../components/ToggleMode";
import Background from "../components/Background";
import Timeline from "../components/Timeline";
import Navigation from "../components/Navigation";
import DenimDatta from "../components/DenimDatta";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <Background/>
            <Navigation/>
            <DenimDatta/>
            <Timeline/>
        </div>
    );
}

export default Home;