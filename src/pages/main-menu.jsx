import "../css/main-menu.css";
import "../css/pc.css";
import "../css/profile.css";
import amazon_logo from '../img/amazon_logo.png';
import meta_logo from '../img/meta_logo.png';
import gmail_logo from '../img/gmail_logo.png';
import reddit_logo from '../img/reddit_logo.png';
import cnn_logo from '../img/cnn_logo.png';
import instagram_logo from '../img/instagram_logo.png';
import Character from '../components/Character.jsx';
import {useState, useEffect} from "react";
import Amazon from "./apps/amazon";
import profile_pic from '../img/profile_pic.png';
import casual from "../img/avatars/casual.png";
import cool from "../img/avatars/cool.jpg";
import guy from "../img/avatars/guy.jpg";
import wtf from "../img/avatars/wtf.png";
//import {Character, Avatar} from ... if export function...
//import Character from ... if export default...



const defaultCharacters = [{
    username : "Anonymous",
    name  : profile_pic,
    description : "Its me"
},
    {username: "Casual",
        name : casual,
        description: "casual gamer"
    },
    {username: "MinTTr3Sss",
        name : cool,
        description: "cool logo"
    },
    {username: "ILoveAnime",
        name : wtf,
        description: "wtf"
    },
    {username: "Mares",
        name : guy,
        description: "Young Mares"
    }]

const notAllowed = {
    cursor: "not-allowed"
}

const allowed = {
    cursor: "pointer"
}

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
                    setLoggedIn = {props.setLoggedIn}
                    save = {props.save}
                    render = {props.render}
                    setRender = {props.setRender}
                    currentProfilePicture = {props.currentProfilePicture}
                    setCurrentPicture = {props.setCurrentPicture}
                    profilePictures = {props.profilePictures}
                    setProfilePictures = {props.setProfilePictures}
                    isLoading = {props.isLoading}
                    isError= {props.isError}
                    defaultCharacters ={defaultCharacters}
                    money = {props.money}
                />
                <div className='desktop right-aligned'>
                    <div className='pc-content'>
                        <div className='icon-grid'>
                            <div><img
                                className='icon'
                                src={amazon_logo}
                                alt='Amazon logo'
                                style={props.disabledApps.includes("Amazon") ?notAllowed:allowed}
                                onClick={() => {props.chooseApp("Amazon")}}>
                            </img></div>
                            <div><img
                                className='icon'
                                src={meta_logo}
                                alt='Meta logo'
                                style= {props.disabledApps.includes("Meta")?notAllowed:allowed}
                                onClick={() => {props.chooseApp("Meta")}}>
                            </img></div>
                            <div><img
                                className='icon'
                                src={gmail_logo}
                                alt='Gmail logo'
                                style= {props.disabledApps.includes("Gmail")?notAllowed:allowed}
                                onClick={() => {props.chooseApp("Gmail")}}></img></div>
                            <div><img
                                className='icon'
                                src={reddit_logo}
                                alt='Reddit logo'
                                style= {props.disabledApps.includes("Reddit")?notAllowed:allowed}
                                onClick={() => {props.chooseApp("Reddit")}}>
                            </img></div>
                            <div><img
                                className='icon'
                                src={instagram_logo}
                                alt='Instagram logo'
                                style= {props.disabledApps.includes("Instagram")?notAllowed:allowed}
                                onClick={() => {props.chooseApp("Instagram")}}>
                            </img></div>
                            <div><img
                                className='icon'
                                src={cnn_logo}
                                alt='CNN logo'
                                style= {props.disabledApps.includes("CNN news")?notAllowed:allowed}
                                onClick={() => {props.chooseApp("CNN news")}}>
                            </img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MainMenu(props){

    const [render, setRender] = useState(true);
    const [appChoice, setAppChoice] = useState(true);
    const [chosenApp, setApp] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const setProfilePictures = props.setProfilePictures
    const setLoggedIn = props.setLoggedIn
    const isLoggedIn = props.isLoggedIn
    const setCurrentPicture = props.setCurrentPicture

    useEffect(() => {
        setCurrentPicture(0)
        if (isLoggedIn){
            fetch("http://localhost:8080/profile-pictures/", {method: 'GET'})
                .then(response => response.json())
                .then(body => {
                    setIsError(false);
                    setIsLoading(false);
                    setProfilePictures(body)
                })
                .catch((error) => {
                    setIsLoading(false);
                    setLoggedIn(false);
                    setIsError(true);
                    console.log(error);
                });
        }else {
            setProfilePictures(defaultCharacters)
        }
    }, [isLoggedIn, setCurrentPicture, setLoggedIn, setProfilePictures]);



    function chooseApp(app) {
        setApp(null)
        const appIsDisabled = props.disabledApps.includes(app)
        console.log(appIsDisabled)
        if (appIsDisabled) {
            setApp(<h2>"{app}" was temporally disabled. Donate to unlock it.</h2>)
        }else {
            if (app === "Amazon") {
                console.log("Amazon is chosen and not disabled")
                setApp(<Amazon
                    showApps = {setAppChoice}
                    hidePage = {setApp}
                    setSave = {props.setSave}
                    save = {props.save}
                    money = {props.money}
                    setMoney = {props.setMoney}
                    disabledApps={props.disabledApps}
                    setDisabledApps={props.setDisabledApps}
                />)
                setAppChoice(false)
            }else {
                setAppChoice(true)
                setApp(<h2>Your choice "{app}" is <strong>not</strong> Included in Prototype</h2>)
            }
        }
    }

    return (
        <div>
            {chosenApp}
            {appChoice && <IconsMenu
                isLoggedIn = {props.isLoggedIn}
                setLoggedIn = {props.setLoggedIn}
                chooseApp = {chooseApp}
                save = {props.save}
                render = {render}
                setRender = {setRender}
                currentProfilePicture = {props.currentProfilePicture}
                setCurrentPicture = {props.setCurrentPicture}
                profilePictures = {props.profilePictures}
                setProfilePictures = {props.setProfilePictures}
                isLoading = {isLoading}
                isError= {isError}
                money = {props.money}
                disabledApps = {props.disabledApps}
            />}

        </div>
    )
}

export default MainMenu;