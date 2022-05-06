import React from "react";


function Avatar(props) {

    const myStyle = {
        color: "#696969",
        backgroundColor: "#e8e8e8",
        padding: "10px",
        marginLeft : "20px",
        fontFamily: "Arial"

    }
    const nameStyle = {
        width: "200px",

    }


    return(
        <div>
            <img
                className="profile-picture"
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
                <h2>Money - {props.money}€</h2>
                <h2>Points - {props.points}</h2>
                <h2>Lives - {props.lives}</h2>
                <button onClick={ () => {props.setRender(true)}}>Hide Profile</button>
            </div>
        </div>

    )
}

function Character(props) {


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
            <div >
                {props.isLoggedIn
                    ?<button  onClick={() => {props.setLoggedIn(false)}}>Go offline</button>
                    :<button  onClick={() => {props.setLoggedIn(true)}}>Go online</button>
                }
            </div>
            {props.isLoggedIn
                ? <p>You are online</p>
                : <p>"You are offline"<br/>
                    Go online to save progress</p>
            }
            <div>
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
                money = {props.money}

            />}
            </div>
            {props.isError && <p>No connection to server :(</p>}
        </div>

        )
}

export default Character