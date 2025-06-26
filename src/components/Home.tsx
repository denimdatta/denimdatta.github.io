import ToggleMode from "./ToggleMode";
import Background from "./Background";
import Timeline from "./Timeline";
import Navigation from "./Navigation";
import HelloWorld from "./HelloWorld";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <Background/>
            <Navigation/>
            <HelloWorld/>
            <Timeline/>
        </div>
    );
}

export default Home;