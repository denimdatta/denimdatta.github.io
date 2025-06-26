import ToggleMode from "./ToggleMode";
import Background from "./Background";
import Timeline from "./Timeline";
import Navigation from "./Navigation";
import DenimDatta from "./DenimDatta";

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