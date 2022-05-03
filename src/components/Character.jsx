import React, {useState, useEffect} from "react";
import profile_pic from '../img/profile_pic.png';
import meta_logo from '../img/meta_logo.png';

const defaultCharacters = [{
    username : "Anonymous",
    name  : profile_pic,
    description : "Its me"
    },
    {username: "Spider-Man",
    name : meta_logo,
    description: "Spider-Meta"
    }]


function Avatar(props) {

    const myStyle = {
        color: "#696969",
        backgroundColor: "#e8e8e8",
        padding: "10px",
        marginLeft : "15px",
        marginRight : "10px",
        fontFamily: "Arial",
        textAlign : "center"
    }
    return(
        <div>
            <img
                className='profile-picture'
                src={props.profilePictures[props.currentProfilePicture].name}
                alt={props.profilePictures[props.currentProfilePicture].description}
            /><br/>
            <div >
                <button  style = {myStyle} onClick = {() => props.solvePictureChange(-1)}>prev</button>
                <button style = {myStyle} onClick = {() => props.solvePictureChange(1)}>next</button>
            </div>
            <h1>{props.profileName}</h1>
            <div className='stats-container'>
                <h2>Points - {props.points}</h2>
                <h2>Lives - {props.lives}</h2>
                <button onClick={ () => {props.setRender(true)}}>Hide Profile</button>
            </div>
        </div>

    )
}

export function Character(props) {

    const [onlinePictures, setOnlinePictures] = useState(false);
    const [profile, setProfile] = useState(null);
    const [profilePictures, setProfilePictures] = useState([]);
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [render, setRender] = useState(true);



    useEffect(() => {
        if (onlinePictures){
        fetch("http://localhost:8080/profile-pictures/", {method: 'GET'})
            .then(response => response.json())
            .then(body => setProfilePictures(body));
        }else {
            setProfilePictures(defaultCharacters)
        }
    }, []);


        useEffect(() => {
            if (props.isLoggedIn) {
                fetch("http://localhost:8080/profiles/17", {method: 'GET'})
                    .then(response => response.json())
                    .then(body => setProfile(body));
            }else {
                setProfile(defaultCharacters[0])
            }
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

    return(
        <div className='profile-container left-aligned'>
            {render? <button onClick={ () => {setRender(false)}}>Check Profile</button> :
            <Avatar
                solvePictureChange = {solvePictureChange}
                profilePictures = {profilePictures}
                currentProfilePicture = {currentProfilePicture}
                profileName = {profile.username}
                setRender = {setRender}
                lives = {props.lives}
                points = {props.points}
            />}
        </div>

        )
}