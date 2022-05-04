import "../css/main-menu.css";
import "../css/pc.css";
import "../css/profile.css";
import amazon_logo from '../img/amazon_logo.png';
import meta_logo from '../img/meta_logo.png';
import gmail_logo from '../img/gmail_logo.png';
import reddit_logo from '../img/reddit_logo.png';
import cnn_logo from '../img/cnn_logo.png';
import instagram_logo from '../img/instagram_logo.png';
import {Character} from '../components/Character.jsx';
import {useState} from "react";
import Amazon from "./apps/amazon";

//import {useEffect, useState} from 'react';

// <div className='profile-container left-aligned'>M
//     <img className='profile-picture' src={}></img>
//     <h1>Nickname</h1>
//     <div className='stats-contaier'>
//         <h2>Points - 2</h2>
//     </div>
// </div>

function IconsMenu(props) {
    return(
        <div>
            <div className='container'>
                <Character
                    isLoggedIn = {props.isLoggedIn}
                    lives = {props.lives}
                    points = {props.points}
                />
                <div className='desktop right-aligned'>
                    <div className='pc-content'>
                        <div className='icon-grid'>
                            <div><img className='icon' src={amazon_logo} alt='Amazon logo' onClick={() => {props.appNumber("Amazon")}}></img></div>
                            <div><img className='icon' src={meta_logo} alt='Meta logo' onClick={() => {props.appNumber("Meta")}}></img></div>
                            <div><img className='icon' src={gmail_logo} alt='Gmail logo' onClick={() => {props.appNumber("Gmail")}}></img></div>
                            <div><img className='icon' src={reddit_logo} alt='Reddit logo' onClick={() => {props.appNumber("Reddit")}}></img></div>
                            <div><img className='icon' src={instagram_logo} alt='Instagram logo' onClick={() => {props.appNumber("Instagram")}}></img></div>
                            <div><img className='icon' src={cnn_logo} alt='CNN logo' onClick={() => {props.appNumber("CNN news")}}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MainMenu(props){


    const [appChoice, setAppChoice] = useState(true);
    const [chosenApp, setApp] = useState(null);

    function chooseApp(app) {
        setAppChoice(false)
        setApp(null)
        if (app === "Amazon") {
            setApp(<Amazon/>)
        } else {
            setAppChoice(true)
            setApp(<h2>"Your choice "{app}" is <strong>not</strong> Included in Prototype"</h2>)
        }
    }

    return (
        <div>
            {chosenApp}
            {appChoice && <IconsMenu
                isLoggedIn = {props.isLoggedIn}
                lives = {props.lives}
                points = {props.points}
                appNumber = {chooseApp}
            />}

        </div>
    )
}

export default MainMenu;