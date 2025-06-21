import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";

function TopBox() {
    return (
        <>
            <div style={{width:'40%', display: 'inline-block'}}></div>
            <div style={{width:'20%', display: 'inline-block'}}>
                {ProfilePicture()}
            </div>
            <div style={{width:'40%', display: 'inline-block'}}></div>
        </>
    );
}

function ProfilePicture() {
    const centerStyle = {
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    };

    const profilePic = <img style={centerStyle} src="images/ProfilePic.jpeg" className="img-fluid" alt="Profile Picture"/>;
    const careerPic = <img style={centerStyle} src="images/LogoSnapshot.jpg" className="img-fluid" alt="Career Picture"/>;

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