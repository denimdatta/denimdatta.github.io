import HelloWorld from "./HelloWorld.tsx";
import ToggleMode from "./ToggleMode.tsx";
import Background from "./Background.tsx";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <Background/>
            <HelloWorld/>
        </div>
    );
}

export default Home;