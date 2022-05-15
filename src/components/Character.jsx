import React from "react";
import '../css/profile.css'

function Avatar(props) {




    return(
        <div>
        <div className='profile-picture-container'>
            <img
                className="profile-picture"
                src={props.profilePictures[props.currentProfilePicture].name}
                alt={props.profilePictures[props.currentProfilePicture].description}
            />
            <div className='picture-btn-container'>
                <button className='change-picture-btn' onClick = {() => props.solvePictureChange(-1)}><i class="bi bi-chevron-left"></i></button>
                <button className='change-picture-btn' onClick = {() => props.solvePictureChange(1)}><i class="bi bi-chevron-right"></i></button>
            </div>
            <div>
        </div>

                <h1 className='profile-name'>
                    {props.online?props.profileName:props.defaultCharacters[props.currentProfilePicture].username}
                </h1>
            </div>
            <div className='stats-container'>
                <h2>Money - {props.money}€</h2>
                <h2>Points - {props.points}</h2>
                <h2>Lives - {props.lives}</h2>
                <button className='profile-mode-btn' onClick={ () => {props.setRender(true)}}>Hide Profile</button>
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
                    ?<button className='profile-mode-btn'  onClick={() => {props.setLoggedIn(false)}}>Go offline</button>
                    :<button className='profile-mode-btn'  onClick={() => {props.setLoggedIn(true)}}>Go online</button>
                }
            </div>
            {props.isLoggedIn
                ? <p>You are online</p>
                : <p>You are offline<br/>
                    Go online to save progress</p>
            }
            <div>
            {props.render? <button className='profile-mode-btn' onClick={ () => {props.setRender(false)}}>Check Profile</button> :
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