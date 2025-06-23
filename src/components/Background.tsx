import {useEffect, useState} from "react";

class Star {
    id: number;
    className: string;
    style: React.CSSProperties;

    // Star Constructor
    constructor(id: number) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.5;
        const animationDuration = Math.random() * 4 + 2;

        this.id = id;
        this.className = `star animate-pulse-subtle`;
        this.style = {
            height: size + "px",
            width: size + "px",
            left: x + "%",
            top: y + "%",
            opacity: opacity,
            animationDuration: animationDuration + "s",
        }
    }
}

class Meteor {
    id: number;
    className: string;
    style: React.CSSProperties;

    // Meteor Constructor
    constructor(id: number) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 20;
        const delay = Math.random() * 15;
        const animationDuration = Math.random() * 3 + 3;

        this.id = id;
        this.className = `meteor animate-meteor`;
        this.style = {
            height: size * 50 + "px",
            width: size * 2 + "px",
            left: x + "%",
            top: y + "%",
            animationDelay: delay + "s",
            animationDuration: animationDuration + "s",
            opacity: 0,
        }
    }
}

function Background() {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {
        const starCount = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < starCount; i++) {
            newStars.push(
                new Star(i)
            )
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const meteorCount = 5;
        const newMeteors = [];

        for (let i = 0; i < meteorCount; i++) {
            newMeteors.push(
                new Meteor(i)
            )
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className={star.className} style={star.style}/>
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className={meteor.className} style={meteor.style}/>
            ))}
        </div>
    );
}

export default Background;