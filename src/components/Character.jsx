import React, {useState, useEffect} from "react";

function Avatar(props) {
    return(
        <div>
            <img
                className='profile-picture'
                src={props.profilePictures[props.currentProfilePicture].name}
                alt={props.profilePictures[props.currentProfilePicture].description}
            /><br/>
            <button onClick = {() => props.solvePictureChange(-1)}>prev</button>
            <button onClick = {() => props.solvePictureChange(1)}>next</button>
            <h1>{props.profileName}</h1>
            <div className='stats-container'>
                <h2>Points - 4</h2>
                <h2>Lives - 2</h2>
            </div>
            <button onClick={ () => {props.setRender(true)}}>Back</button>
        </div>

    )
}

export function Character() {

    const [profile, setProfile] = useState(null);
    const [profilePictures, setProfilePictures] = useState([]);
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [render, setRender] = useState(true);



    useEffect(() => {
        fetch("http://localhost:8080/profile-pictures/", {method: 'GET'})
            .then(response => response.json())
            .then(body => setProfilePictures(body));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/profiles/17", {method: 'GET'})
            .then(response => response.json())
            .then(body => setProfile(body));
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
            />}


        </div>

        )
}