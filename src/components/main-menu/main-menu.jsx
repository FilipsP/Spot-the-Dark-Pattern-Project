import "../../css/main-menu.css";
import "../../css/sidebar.css";
import "../../css/profile.css";
import amazon_logo from '../../img/amazon_logo.png';
import meta_logo from '../../img/meta_logo.png';
import gmail_logo from '../../img/gmail_logo.png';
import reddit_logo from '../../img/reddit_logo.png';
import cnn_logo from '../../img/cnn_logo.png';
import instagram_logo from '../../img/instagram_logo.png';
import Character from './main-menu-elements/Character.jsx';
import {useState, useEffect} from "react";
import profile_pic from '../../img/profile_pic.png';
import casual from "../../img/avatars/casual.png";
import cool from "../../img/avatars/cool.jpg";
import guy from "../../img/avatars/guy.jpg";
import wtf from "../../img/avatars/wtf.png";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
import BackButton from "../buttons/Back";
import amazonBackground from "../../img/apps-background/amazon_bg_2.png";
import redditBackground from "../../img/apps-background/reddit_bg.png";
import gmailBackground from "../../img/apps-background/gmail_bg.png";
import cnnBackground from "../../img/apps-background/cnn_bg.PNG";
import metaBackground from "../../img/apps-background/meta_bg.png";
import UnitedApp from "./UnitedApp";
import SettingsSideBar from "./main-menu-elements/Settings-side-bar";
import {
    CSSTransition,
    TransitionGroup,
    } from 'react-transition-group';


//import {Character, Avatar} from ... if export function...
//import Character from ... if export default...


const defaultCharacters = [
    {
        username : "Anonymous",
        path  : profile_pic,
        description : "Its me"
    }, {
        username: "Casual",
        path : casual,
        description: "casual gamer"
    }, {
        username: "MinTTr3Sss",
        path : cool,
        description: "cool logo"
    }, {
        username: "ILoveAnime",
        path : wtf,
        description: "wtf"
    }, {
        username: "Mares",
        path : guy,
        description: "Young Mares"
    }]

const notAllowed = {
    cursor: "not-allowed"
}

const allowed = {
    cursor: "pointer"
}



function IconsMenu(props) {

    const [profileStyle, setProfileStyle] = useState("sidebar profile-sidebar");
    const [profileOpened, setProfileOpened] = useState(false);
    
    function showProfile(){
        if(profileOpened){
            setProfileStyle("sidebar profile-sidebar");
            setProfileOpened(false);
        }else{
            setProfileStyle("sidebar profile-sidebar show-sidebar");
            setProfileOpened(true);
        }
    }   

    return(
        <div>
            <div className='container'>
                <div onClick={() => {showProfile()}}><i class='bi bi-person-circle icon-btn profile-btn'></i></div>
                <TransitionGroup>
                <CSSTransition

                    timeout={500}
                    classNames="animated-profile-sidebar"
                >
                <Character
                    profileStyle={profileStyle}
                    isLoggedIn = {props.isLoggedIn}
                    setLoggedIn = {props.setLoggedIn}
                    save = {props.save}
                    // render = {props.render}
                    // setRender = {props.setRender}
                    currentProfilePicture = {props.currentProfilePicture}
                    setCurrentPicture = {props.setCurrentPicture}
                    profilePictures = {props.profilePictures}
                    setProfilePictures = {props.setProfilePictures}
                    isLoading = {props.isLoading}
                    isError= {props.isError}
                    defaultCharacters ={defaultCharacters}
                    money = {props.money}
                />
                </CSSTransition>
                </TransitionGroup>
            
                <SettingsSideBar/>
                    <div className='icon-frame'>
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
                                style= {props.disabledApps.includes("CNN")?notAllowed:allowed}
                                onClick={() => {props.chooseApp("CNN")}}>
                            </img></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

function MainMenu(props){

    // const [render, setRender] = useState(true);
    const [appChoice, setAppChoice] = useState(true);
    const [chosenApp, setApp] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        props.setCurrentPicture(0)
        if (props.isLoggedIn){
            props.checkForFinish()
            props.setCurrentPicture(props.save.profilePictureId)
            get(child(dbRef, `profilePicture`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setIsError(false);
                    setIsLoading(true)
                    setIsLoading(false);
                    return props.setProfilePictures(snapshot.val());
                } else {
                    alert("No data available");
                    return props.setProfilePictures(defaultCharacters);
                }
            }).catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                });
        }else {
            return props.setProfilePictures(defaultCharacters);
        }
        // eslint-disable-next-line
    }, [props.isLoggedIn]);



    const handleDonate = () => {
        alert("You have donated 300€ but got nothing ")
        props.setMoney(props.money-300)
    }


    const buildAppToShow = (app,appURL) => {
        setApp(<UnitedApp
            app = {app}
            appURL = {appURL}
            showApps = {setAppChoice}
            hidePage = {setApp}
            handleSaveUpdate = {props.handleSaveUpdate}
            save = {props.save}
            money = {props.money}
            setMoney = {props.setMoney}
            disabledApps={props.disabledApps}
            setDisabledApps={props.setDisabledApps}
            handleLastAnswerTiming = {props.handleLastAnswerTiming}
        />)
        setAppChoice(false)
    }



    function chooseApp(app) {
        let appURL;
        setApp(null)
        const appIsDisabled = props.disabledApps.includes(app)
        if (appIsDisabled) {
            setApp(<AlertModal closeAlert = {closeAlert} content = {app + " was temporally disabled. Donate to unlock it."}/>)
        }else {
            switch (app) {
                case "Amazon":
                    appURL = amazonBackground
                    buildAppToShow(app,appURL)
                    break;
                case "Gmail":
                    appURL = gmailBackground
                    buildAppToShow(app,appURL)
                    break;
                case "Meta":
                    appURL = metaBackground
                    buildAppToShow(app,appURL)
                    break;
                case "CNN":
                    appURL = cnnBackground
                    buildAppToShow(app,appURL)
                    break;
                case "Reddit":
                    appURL = redditBackground
                    buildAppToShow(app,appURL)
                    break;
                default :
                    setAppChoice(true)
                    setApp(<h2>Your choice "{app}" is <strong>not</strong> Included in Prototype</h2>)
            }
        }
    }

    const closeAlert = () => {
        handleDonate()
        setApp(null)
    }

    return (
        <div>
            {appChoice && <BackButton setInAppsMenu = {props.setInMenu}/>}
            <div>
                {appChoice ? <IconsMenu
                    chosenApp = {chosenApp}
                    isLoggedIn = {props.isLoggedIn}
                    setLoggedIn = {props.setLoggedIn}
                    chooseApp = {chooseApp}
                    save = {props.save}
                    // render = {render}
                    // setRender = {setRender}
                    currentProfilePicture = {props.currentProfilePicture}
                    setCurrentPicture = {props.setCurrentPicture}
                    profilePictures = {props.profilePictures}
                    setProfilePictures = {props.setProfilePictures}
                    isLoading = {isLoading}
                    isError= {isError}
                    money = {props.money}
                    disabledApps = {props.disabledApps}
                    lastAnswerTime = {props.lastAnswerTime}
                    musicOn = {props.on}
                    toggleMusic = {props.toggleMusic}
                />:chosenApp}
                {appChoice?<div>{chosenApp}</div>:""}
            </div>
        </div>
    )
}

export default MainMenu;