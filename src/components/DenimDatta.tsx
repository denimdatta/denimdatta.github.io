import {SlArrowDown} from "react-icons/sl";
import {CN} from "../lib/Utils";
function DenimDatta() {
    return (
        <section id ="denimdatta"
            className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className='row'>
                <h1 style={{textAlign: 'center'}}>Denim Datta</h1>
            </div>
            <div className={CN("absolute bottom-8 left-1/2 transform -translate-x-1/2",
                "flex flex-col items-center animate-bounce",
            )}>
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <SlArrowDown className="h-8 w-8 text-primary" />
            </div>
        </section>
    );
}

export default DenimDatta;