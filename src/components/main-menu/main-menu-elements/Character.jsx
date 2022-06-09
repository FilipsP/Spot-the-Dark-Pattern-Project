import React from "react";
import '../../../css/profile.css'


// function Avatar(props) {
//
//     return(
//         <div className='sidebar profile-sidebar'>
//             <div className='profile-picture-container'>
//                 <img className='profile-picture'
//                      src={props.profilePictures[props.currentProfilePicture].path}
//                      alt={props.profilePictures[props.currentProfilePicture].description}
//                 />
//                 <div className='picture-btn-container'>
//                     <button className='change-picture-btn' onClick = {() => props.solvePictureChange(-1)}><i className="bi bi-chevron-left"></i></button>
//                     <button className='change-picture-btn' onClick = {() => props.solvePictureChange(1)}><i className="bi bi-chevron-right"></i></button>
//                 </div>
//                 <h1 className='profile-name'>
//                     {props.online?props.profileName:props.defaultCharacters[props.currentProfilePicture].username}
//                 </h1>
//                 <div className='stats-container'>
//                     {props.save.lastAnswerTime && <h3>Last answer on: {props.save.lastAnswerTime}</h3>}
//                     <h2>Money : {props.money}€</h2>
//                     <h2>Points : {props.save.pointsOwned}</h2>
//                     <h2>Lives : {props.save.livesOwned}</h2>
//                 </div>
//             </div>
//         </div>
//
//         // <div>
//         // <div className='profile-picture-container'>
//         //     <img
//         //         className="profile-picture"
//         //         src={props.profilePictures[props.currentProfilePicture].path}
//         //         alt={props.profilePictures[props.currentProfilePicture].description}
//         //     />
//         //     <div className='picture-btn-container'>
//         //         <button className='change-picture-btn' onClick = {() => props.solvePictureChange(-1)}><i className="bi bi-chevron-left"></i></button>
//         //         <button className='change-picture-btn' onClick = {() => props.solvePictureChange(1)}><i className="bi bi-chevron-right"></i></button>
//         //     </div>
//         //     <div>
//         // </div>
//         //
//         //         <h1 className='profile-name'>
//         //             {props.online?props.profileName:props.defaultCharacters[props.currentProfilePicture].username}
//         //         </h1>
//         //     </div>
//         //     <div className='stats-container'>
//         //         {props.save.lastAnswerTime && <h3>Last answer on: {props.save.lastAnswerTime}</h3>}
//         //         <h2>Money : {props.money}€</h2>
//         //         <h2>Points : {props.save.pointsOwned}</h2>
//         //         <h2>Lives : {props.save.livesOwned}</h2>
//         //         <button className='profile-mode-btn' onClick={ () => {props.setRender(true)}}>Hide Profile</button>
//         //     </div>
//         // </div>
//
//     )
// }

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
            <div className='sidebar profile-sidebar'>
                <div className='profile-picture-container'>
                    <img className='profile-picture'
                        src={props.profilePictures[props.currentProfilePicture].path}
                        alt={props.profilePictures[props.currentProfilePicture].description}
                    />
                    <div className='picture-btn-container'>
                        <button className='change-picture-btn' onClick = {() => solvePictureChange(-1)}><i className="bi bi-chevron-left"></i></button>
                        <button className='change-picture-btn' onClick = {() => solvePictureChange(1)}><i className="bi bi-chevron-right"></i></button>
                    </div>
                    <h1 className='profile-name'>
                        {props.online?props.save.characterName:props.defaultCharacters[props.currentProfilePicture].username}
                    </h1>
                    <div className='stats-container'>
                        {props.save.lastAnswerTime && <h3>Last answer on: {props.save.lastAnswerTime}</h3>}
                        <h2>Money : {props.money}€</h2>
                        <h2>Points : {props.save.pointsOwned}</h2>
                        <h2>Lives : {props.save.livesOwned}</h2>
                        {props.isLoggedIn
                            ?<div>
                                <button className='profile-mode-btn' onClick={()=>{props.setLoggedIn(false)}}>
                                    <p>Log out</p>
                                </button>
                            </div>
                            : <p className="register-text">You are not logged in<br/>
                                Log in to save progress</p>
                        }
                    </div>
                </div>
            {/*<div>*/}
            {/*{props.render? <button className='profile-mode-btn' onClick={ () => {props.setRender(false)}}>Check Profile</button> :*/}
            {/*<Avatar*/}
            {/*    solvePictureChange = {solvePictureChange}*/}
            {/*    profilePictures = {props.profilePictures}*/}
            {/*    currentProfilePicture = {props.currentProfilePicture}*/}
            {/*    profileName = {props.save.characterName}*/}
            {/*    setRender = {props.setRender}*/}
            {/*    save = {props.save}*/}
            {/*    online = {props.isLoggedIn}*/}
            {/*    defaultCharacters = {props.defaultCharacters}*/}
            {/*    money = {props.money}*/}

            {/*/>}*/}
            {/*</div>*/}

            {props.isError && <p className="register-text">No connection to server :(</p>}
        </div>

        )
}

export default Character