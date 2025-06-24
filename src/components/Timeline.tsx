import type {JSX} from "react";
import {FaLaptop} from "react-icons/fa";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {PiStudentFill} from "react-icons/pi";

class TimelineElement {
    name: string;
    duration: string;
    location: string;
    title: string;
    synopsis: string;
    symbol: JSX.Element;
    color: string;

    // Constructor
    constructor(type: string, name: string, duration: string,
                location: string, title: string, synopsis: string) {
        this.name = name;
        this.duration = duration;
        this.location = location;
        this.title = title;
        this.synopsis = synopsis;

        const symCN = "w-9 h-10 m-auto p-1 block";

        if (type.toLowerCase() === "work") {
            this.symbol = <FaLaptop className={symCN}/>;
            this.color = "blue-500";
        } else if (type.toLowerCase() === "study") {
            this.symbol = <PiStudentFill className={symCN}/>;
            this.color = "green-500";
        } else {
            this.symbol = <FaMagnifyingGlass className={symCN}/>;
            this.color = "gray-500";
        }
    }
}

const timelineElementsTest = [
    new TimelineElement("Work", "name1", "duration1",
        "location1", "title1",
        "1Liner1"),
    new TimelineElement("Work", "name2", "duration2",
        "location2", "title2",
        "1Liner2"),
    new TimelineElement("Study", "name3", "duration3",
        "location3", "title3",
        "1Liner3"),
    new TimelineElement("Work", "name4", "duration4",
        "location4", "title4",
        "1Liner4"),
    new TimelineElement("Study", "name5", "duration5",
        "location5", "title5",
        "1Liner5"),
    new TimelineElement("Test", "name6", "duration6",
        "location6", "title6",
        "1Liner6"),
];

function Timeline() {

    return (
        <div>
            <h1>Test Block</h1>
            <h3>My Career</h3>
            <div
                className="flex flex-col md:grid grid-cols-10 mx-auto p-2 text-blue-50 z-1"
            >
                {timelineElementsTest.map((te, index) => (
                    <div key={index} className="flex md:contents">
                        <div className="col-start-3 col-end-4 md:mx-auto relative">
                            <div className="h-full w-10 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                            </div>
                            <div
                                className={`w-10 h-10 absolute top-1/2 text-center -mt-5 rounded-full bg-${te.color} shadow`}
                            >
                                {te.symbol}
                            </div>
                        </div>
                        <div
                            className={`bg-${te.color} col-start-4 col-end-10 p-4 rounded-xl my-4 shadow-md`}
                        >
                            <div className="w-full inline-block">
                                <div className="w-[75%] mb-1 inline-block text-red-200">
                                    <p className="h-1/2 font-semibold text-lg mb-1">{te.name}</p>
                                    <p className="h-1/2 font-semibold text-sm mb-1">{te.title}</p>
                                </div>
                                <div className="w-[25%] mb-1 inline-block text-yellow-200">
                                    <p className="h-1/2 right-0 font-thin text-sm text-right mb-1 p-0 italic inline-block">{te.duration}</p>
                                    <p className="h-1/2 right-0 font-thin text-sm text-right mb-1 p-0 italic inline-block">{te.location}</p>
                                </div>
                            </div>
                            <p className="leading-tight text-justify text-black">
                                {te.synopsis}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;