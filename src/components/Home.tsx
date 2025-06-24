import HelloWorld from "./HelloWorld";
import ToggleMode from "./ToggleMode";
import Background from "./Background";
import Timeline from "./Timeline";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <Background/>
            <HelloWorld/>
            <Timeline/>
        </div>
    );
}

export default Home;