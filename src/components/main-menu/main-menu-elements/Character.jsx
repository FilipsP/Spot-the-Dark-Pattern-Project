import React from "react";
import '../../../css/profile.css'

const logInButton = {
    borderTopRightRadius: "9px",
    borderTopLeftRadius: "9px",
    borderBottomRightRadius: "3px",
    borderBottomLeftRadius: "3px",
    border: "solid gray 2px",
    backgroundColor: "black",
    textAlign:"center",
    fontStyle:"italic",
    fontSmooth:"large",
    padding:"2px",
    borderBottom: "black"
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
        
            <div className={props.profileStyle}>
            <div onClick={() => {props.setProfileOpened(false)}}><i className='bi bi-x-lg icon-btn close-sidebar-icon close-profile-btn'></i></div>
                {props.isLoggedIn
                    ?<div>
                        <button className='profile-mode-btn' onClick={()=>{props.setLoggedIn(false)}}>
                            <p>Log out</p>
                        </button>
                    </div>
                    : <div style={{textAlign:"center",borderBottom:"solid black 3px"}}><p>You are not logged in<br/>
                        Log in to save progress:</p>
                        <i style={logInButton} className= "bi bi-activity" onClick={()=>{props.openLoginRegister(true)}}>Log in</i></div>
                }
                <div className='profile-picture-container'>
                    <img className='profile-picture'
                        src={props.profilePictures[props.currentProfilePicture].path}
                        alt={props.profilePictures[props.currentProfilePicture].description}
                    />
                    <div className='picture-btn-container'>
                        <button className='change-picture-btn' onClick = {() => solvePictureChange(-1)}><i className="bi bi-caret-left-fill"></i></button>
                        <button className='change-picture-btn' onClick = {() => solvePictureChange(1)}><i className="bi bi-caret-right-fill"></i></button>
                    </div>
                    <h1 className='profile-name'>
                        {props.isLoggedIn?props.save.characterName:props.defaultCharacters[props.currentProfilePicture].username}
                    </h1>
                    <div className='stats-container'>
                        {props.save.lastAnswerTime && <h3>Last answer on: {props.save.lastAnswerTime}</h3>}
                        <h2>Money : {props.money}€</h2>
                        <h2>Points : {props.save.pointsOwned}</h2>
                        <h2>Wrong answers : {props.save.wrongAnswers}</h2>
                    </div>
                </div>
            {props.isError && <p className="register-text">No connection to server try again:*add connect button*</p>}
        </div>
        )
}

export default Character