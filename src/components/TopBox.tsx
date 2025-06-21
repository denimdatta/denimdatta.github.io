import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";

function TopBox() {
    return (
        <>
            {ProfilePicture()}
        </>
    );
}

function ProfilePicture() {
    const profilePic = <img src="images/ProfilePic.jpeg" className="img-fluid" alt="Profile Picture"/>;
    const careerPic = <img src="images/LogoSnapshot.jpg" className="img-fluid" alt="Career Picture"/>;
    const [showFront, setShowFront] = useState(true);

    return (
        <div
            onMouseEnter={() => setShowFront(false)}
            onMouseLeave={() => setShowFront(true)}>
            {showFront ? profilePic : careerPic}
        </div>
    );
}


export default TopBox;