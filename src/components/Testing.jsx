
import ButtonControl from './ButtonControl';
import "../css/test.css"
import React, {useEffect, useRef, useState} from "react";
import '../img/profile_pic.png'
import Form from "./Forms";
import {Link} from "react-router-dom";



// eslint-disable-next-line
// import { useLocation } from "react-router-dom";
// make class StatusChecker => constructor() => super() => this.state = {pathInList : false} => 
// this.checkIfPathInList = this.checkIfPathInList.bind(this) => const location = useLocation(); =>
// location.pathname gives you the path like "/test" => take list of path => 
// like ["/","/test","/","/login-register"] => checkIfPathInList = () => {return result}  => 
// if location in list => this.setState(prevState => ({pathInList: !prevState.pathInList })); =>
// if pathInList ? lastRightLocation = setLastRightLocation :  <Redirect to="/" />
// const setLastRightLocation = () => {return location.pathname}








function Avatar(props) {
    return(
        <div>
            <img width= "240" height = "290"
                 src={props.profilePictures[props.currentProfilePicture].name}
                 alt={props.profilePictures[props.currentProfilePicture].description}
            /><br/>
            <button onClick = {() => props.solvePictureChange(-1)}>prev</button>
            <button onClick = {() => props.solvePictureChange(1)}>next</button>
        </div>
    )
}

function CallPictures() {


    const [profilePictures, setProfilePictures] = useState([]);
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [render, setRender] = useState(true);





    useEffect(() => {
        fetch("http://localhost:8080/profile-pictures/", {method: 'GET'})
            .then(response => response.json())
            .then(body => setProfilePictures(body));


    }, []);


    function solvePictureChange(number) {
        if (currentProfilePicture + number < profilePictures.length && currentProfilePicture + number > -1 ) {
            setCurrentPicture(currentProfilePicture + number)
        }
        if (currentProfilePicture + number < 0) {
            setCurrentPicture(profilePictures.length-1)
        }
        if (currentProfilePicture + number > profilePictures.length-1) {
            setCurrentPicture(0)
        }
    }

    const inputEl = useRef(null);

    function onButtonClick()  {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    }



    return (
        <div>
            <div>
                {render? <button onClick={ () => {setRender(false)}}>Choose Avatar</button> :
                    <Avatar
                        solvePictureChange = {solvePictureChange}
                        profilePictures = {profilePictures}
                        currentProfilePicture = {currentProfilePicture}
                    />}
                <p>{currentProfilePicture}</p>
                <p>{profilePictures.length}</p>
                <Form
                    profilePictures = {profilePictures}
                    buttonClick = {onButtonClick}
                    inputEl = {inputEl}
                />
            </div>
        </div>
    )
}


function Testing() {
    return(
        <div className="Not-Found-Page">
            <div>
                <h1><strong>THIS IS A TEST PAGE</strong></h1>
            </div>
            <div>
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
            <div>
                <ButtonControl
                    eventID = {question.eventID}
                    eventType = {question.eventType}
                    author = {question.author}
                    buttons = {question.buttons}
                    description = {question.description}
                    lives =  {user.lives}
                    points = {user.points}
                    pointsGiven = {question.pointsGiven}
                /> {/*info from "DB"(↓const question↓) goes to the button menu(ButtonControl)↑
                    There it goes to the question description and buttons */}
                <CallPictures />
            </div>
        </div>

    );
}
// eslint-disable-next-line
{/*↓local pseudo DB↓ */}
const user = {
    lives : 3,
    points : 0
}

const question = { 
    eventID : 1 ,
    eventType : "Test",
    pointsGiven: "1",
    author : "Mr.Random",
    description : "Good or Bad?",
    buttons : {
        1 : "Good answer",
        2 : "Bad answer"
    }
}



export default Testing;