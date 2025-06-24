import HelloWorld from "./HelloWorld";
import ToggleMode from "./ToggleMode";
import Background from "./Background";

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