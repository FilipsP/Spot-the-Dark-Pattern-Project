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

    const [isOnline, setIsOnline] = useState(false);
    const [profile, setProfile] = useState(null);
    const [profilePictures, setProfilePictures] = useState([]);
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [render, setRender] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const styleGoOnline = {
        marginBottom : "10px",
        textAlign: "center"
    }


    useEffect(() => {
        setCurrentPicture(0)
        if (isOnline){
            fetch("http://localhost:8080/profile-pictures/", {method: 'GET'})
                .then(response => response.json())
                .then(body => {
                    setIsLoading(false);
                    setProfilePictures(body)
                })
                .catch((error) => {
                setIsLoading(false);
                setIsOnline(false);
                setIsError(true);
                console.log(error);
            });

        }else {
            setProfilePictures(defaultCharacters)
        }
    }, [ isOnline]);


        useEffect(() => {
            if (isOnline) {
                fetch("http://localhost:8080/profiles/17", {method: 'GET'})
                    .then(response => response.json())
                    .then(body => {
                        setIsLoading(false);
                        setProfile(body)
                    })
                    .catch((error) => {
                    setIsLoading(false);
                    setIsOnline(false);
                    setIsError(true);
                    console.log(error);
                });
            }else {
                setProfile(defaultCharacters[0])
            }
        }, [isOnline]);



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
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <div className='profile-container left-aligned'>
            {isOnline
                ?<button style={styleGoOnline} onClick={() => {setIsOnline(false)}}>Go offline</button>
                :<button style={styleGoOnline} onClick={() => {setIsOnline(true)}}>Go online</button>
            }
            <p>{isOnline
                ? "You are online"
                : "You are offline"
            }</p>
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
            {isError && <div>Error fetching data.</div>}
            <div>

            </div>

        </div>

        )
}