import React from "react";


function Avatar(props) {

    const myStyle = {
        color: "#696969",
        backgroundColor: "#e8e8e8",
        padding: "10px",
        marginLeft : "53px",
        marginRight : "25px",
        fontFamily: "Arial",
        textAlign : "center",
        justifyContent: "center",
        alignItems: "center"

    }
    const nameStyle = {
        textAlign: "center",
        width: "300px"

    }


    return(
        <div >
            <img width= "240" height = "240"
                className="profile-container"
                src={props.profilePictures[props.currentProfilePicture].name}
                alt={props.profilePictures[props.currentProfilePicture].description}
            /><br/>
            <div >
                <button style = {myStyle} onClick = {() => props.solvePictureChange(-1)}>prev</button>
                <button style = {myStyle} onClick = {() => props.solvePictureChange(1)}>next</button>
            </div>
            <div >
                <h1 style={nameStyle}>
                    {props.online?props.profileName:props.defaultCharacters[props.currentProfilePicture].username}
                </h1>
            </div>
            <div className='stats-container'>
                <h2>Points - {props.points}</h2>
                <h2>Lives - {props.lives}</h2>
                <button onClick={ () => {props.setRender(true)}}>Hide Profile</button>
            </div>
        </div>

    )
}

export function Character(props) {



    const styleGoOnline = {
        marginBottom : "10px",
        textAlign: "center"
    }




    function solvePictureChange(number) {
        if (props.currentProfilePicture + number < props.profilePictures.length && props.currentProfilePicture + number > -1 ) {
            props.setCurrentPicture(props.currentProfilePicture + number)
        }
        if (props.currentProfilePicture + number < 0) {
            props.setCurrentPicture(props.profilePictures.length-1)
        }
        if (props.currentProfilePicture + number > props.profilePictures.length-1) {
            props.setCurrentPicture(0)
        }
    }


    return(
        <div className='profile-container left-aligned'>
            {props.isLoggedIn
                ?<button style={styleGoOnline} onClick={() => {props.setLoggedIn(false)}}>Go offline</button>
                :<button style={styleGoOnline} onClick={() => {props.setLoggedIn(true)}}>Go online</button>
            }
            <p>{props.isLoggedIn
                ? "You are online"
                : "You are offline"
            }</p>
            {props.render? <button onClick={ () => {props.setRender(false)}}>Check Profile</button> :
            <Avatar
                solvePictureChange = {solvePictureChange}
                profilePictures = {props.profilePictures}
                currentProfilePicture = {props.currentProfilePicture}
                profileName = {props.save.name}
                setRender = {props.setRender}
                lives = {props.save.lives}
                points = {props.save.points}
                online = {props.isLoggedIn}
                defaultCharacters = {props.defaultCharacters}

            />}
            {props.isError && <p>No connection to server :(</p>}
        </div>

        )
}