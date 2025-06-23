import TopBox from "./TopBox.tsx";
import HelloWorld from "./HelloWorld.tsx";
import ToggleMode from "./ToggleMode.tsx";

function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ToggleMode/>
            <TopBox/>
            <HelloWorld/>
        </div>
    );
}

export default Home;