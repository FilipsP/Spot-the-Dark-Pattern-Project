import React, {useState} from "react";
import '../../../css/profile.css'
import {CSSTransition} from "react-transition-group";

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
    padding:"0.04rem",
    borderBottom: "black"
}

const characterStatsValue = {
    fontSize: "1.3rem",
    color:"gray",
}

const characterStatName = {
    fontSize:"1.7rem",
}

function Character(props) {

    const [startAvatarAnimation,setStartAvatarAnimation] = useState(true)

    function solvePictureChange(number) {

        setStartAvatarAnimation(false)

        setTimeout(()=>{
            if (props.currentProfilePicture + number < props.profilePictures.length && props.currentProfilePicture + number > -1) {
                props.setCurrentPicture(props.currentProfilePicture + number)
            }
            if (props.currentProfilePicture + number < 0) {
                props.setCurrentPicture(props.profilePictures.length - 1)
            }
            if (props.currentProfilePicture + number > props.profilePictures.length - 1) {
                props.setCurrentPicture(0)
            }
        },500)

    }

    const handleLogOut = ()=> {
        props.setCurrentPicture(0)
        props.setLoggedIn(false)
    }


    return(
        
            <div className={props.profileStyle}>
            <div onClick={() => {props.setProfileOpened(false)}}><i className='bi bi-x-lg icon-btn close-sidebar-icon close-profile-btn'></i></div>
                {props.isLoggedIn
                    ?<div>
                        <button className='profile-mode-btn' onClick={()=>{handleLogOut()}}>
                            <p>Log out</p>
                        </button>
                    </div>
                    : <div style={{textAlign:"center",borderBottom:"solid black 3px"}}><p>You are not logged in<br/>
                        ↓Log in to save progress↓</p>
                        <i style={logInButton} className= "bi bi-activity" onClick={()=>{props.openLoginRegister(true)}}>Log in</i></div>
                }
                <div className='profile-picture-container'>
                    {props.save.lastAnswerTime && <span
                        style={{opacity:"0.5",textAlign:"center",marginBottom:"0.5rem"}}>Last answer on: {props.save.lastAnswerTime}</span>}
                    <CSSTransition
                        in={startAvatarAnimation}
                        unmountOnExit
                        timeout={500}
                        classNames="animated-buttons"
                        onExited = {()=>setStartAvatarAnimation(true)}
                    >
                    <img className='profile-picture'
                        src={props.profilePictures[props.currentProfilePicture].path}
                        alt={props.profilePictures[props.currentProfilePicture].description}
                    />
                    </CSSTransition>
                    <div className='picture-btn-container'>
                        <button className='change-picture-btn' onClick = {() => solvePictureChange(-1)}><i className="bi bi-caret-left-fill"></i></button>
                        <button className='change-picture-btn' onClick = {() => solvePictureChange(1)}><i className="bi bi-caret-right-fill"></i></button>
                    </div>
                    <h1 className='profile-name'>
                        {props.isLoggedIn?props.save.characterName:props.defaultCharacters[props.currentProfilePicture].username}
                    </h1>
                    <div className='stats-container'>
                        <div style={{borderBottom: "solid 0.2rem",borderBottomColor:"rgba(211,211,211,0.3)"}}><span style={characterStatName}>Money : </span><span style={characterStatsValue}>{props.money}€</span></div>
                        <div style={{borderBottom: "solid 0.3rem",borderBottomColor:"rgba(211,211,211,0.2)"}}><span style={characterStatName}>Points : </span><span style={characterStatsValue}>{props.save.pointsOwned}</span></div>
                        <div style={{borderBottom: "solid 0.4rem",borderBottomColor:"rgba(211,211,211,0.1)"}}><span style={characterStatName}>Wrong answers : </span><span style={characterStatsValue}>{props.save.wrongAnswers}</span></div>

                    </div>
                </div>
            {props.isError && <p className="register-text">No connection to server try again:*add connect button*</p>}
        </div>
        )
}

export default Character