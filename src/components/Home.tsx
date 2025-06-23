import HelloWorld from "./HelloWorld.tsx";
import ToggleMode from "./ToggleMode.tsx";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <HelloWorld/>
        </div>
    );
}

export default Home;