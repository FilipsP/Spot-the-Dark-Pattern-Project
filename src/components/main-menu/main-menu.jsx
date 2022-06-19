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
import amazonBackground from "../../img/apps-background/amazon_bg_2.png";
import redditBackground from "../../img/apps-background/reddit_bg.png";
import gmailBackground from "../../img/apps-background/gmail_bg.png";
import cnnBackground from "../../img/apps-background/cnn_bg.PNG";
import metaBackground from "../../img/apps-background/meta_bg.png";
import instaBackground from "../../img/apps-background/confirmshaming_zoom.png";
import UnitedApp from "./UnitedApp";
import {CSSTransition} from 'react-transition-group';
import AlertModal from "../modals/AlertModal";
import Settings from "./main-menu-elements/Settings";
import ProgressNote from "../modals/progressNote";
import MainMenuTutorial from "../noteContent/MainMenuTutorial";



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

    const [profileOpened, setProfileOpened] = useState(false);




    return(
        <div>
            <div className='container'>
                <div className='bell-container'>

                    <i onClick={()=>{props.openNotifications(true)}} className='bi bi-bell icon-btn'>
                        <div className='notification-count'>{props.notificationNumber}</div>
                    </i>
                </div>
                <div onClick={() => {setProfileOpened(!profileOpened)}}><i className='bi bi-person-circle icon-btn profile-btn'></i></div>

                <CSSTransition
                    in={profileOpened}
                    unmountOnExit
                    timeout={500}
                    classNames="animated-profile-sidebar"
                >
                <Character //sidebar character
                    profileStyle={"sidebar profile-sidebar show-sidebar"}
                    setProfileOpened={setProfileOpened}
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
                    openLoginRegister = {props.openLoginRegister}
                />
                </CSSTransition>
                <Character
                    profileStyle={"sidebar profile-sidebar"}
                    isLoggedIn = {props.isLoggedIn}
                    setLoggedIn = {props.setLoggedIn}
                    save = {props.save}
                    currentProfilePicture = {props.currentProfilePicture}
                    setCurrentPicture = {props.setCurrentPicture}
                    profilePictures = {props.profilePictures}
                    setProfilePictures = {props.setProfilePictures}
                    isLoading = {props.isLoading}
                    isError= {props.isError}
                    defaultCharacters ={defaultCharacters}
                    money = {props.money}
                    openLoginRegister = {props.openLoginRegister}
                />
                <Settings
                    settingsStyle = "sidebar settings-sidebar "
                    getSave = {props.getSave}
                    getEventSaves={props.getEventSaves}
                    closeSettings={props.setSettings}
                    isLoggedIn={props.isLoggedIn}
                    userID = {props.userID}
                    save={props.save}
                    disabledApps={props.disabledApps}
                    currentProfilePicture={props.currentProfilePicture}
                    musicOn = {props.on}
                    toggleMusic = {props.toggleMusic}
                />
                {/*<SettingsSideBar*/}
                {/*    getSave = {props.getSave}*/}
                {/*    getEventSaves={props.getEventSaves}*/}
                {/*    closeSettings={props.setSettings}*/}
                {/*    isLoggedIn={props.isLoggedIn}*/}
                {/*    userID = {props.userID}*/}
                {/*    save={props.save}*/}
                {/*    disabledApps={props.disabledApps}*/}
                {/*    currentProfilePicture={props.currentProfilePicture}*/}
                {/*    musicOn = {props.on}*/}
                {/*    toggleMusic = {props.toggleMusic}*/}
                {/*/>*/}
                    <div className='icon-frame menu-frame'>
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
    const [note, setNote] = useState(true);




    useEffect(() => {
        props.setCurrentPicture(0)
        if (props.isLoggedIn){
            props.checkForFinish()
            get(child(dbRef, `profilePicture`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setIsError(false);
                    setIsLoading(true)
                    setIsLoading(false);
                    props.setProfilePictures(snapshot.val());
                    props.setCurrentPicture(props.save.profilePictureId)
                } else {
                    alert("No data available");
                    props.setProfilePictures(defaultCharacters);
                }
            }).catch((error) => {
                    setIsLoading(false);
                    setIsError(true);
                    props.setProfilePictures(defaultCharacters);
                    console.log(error);
                });
        }else {
            props.setProfilePictures(defaultCharacters);
        }
        // eslint-disable-next-line
    }, [props.isLoggedIn]);



    const handleDonate = () => {
        alert("You have donated 300€ but got nothing ")
        props.setMoney(props.money-300)
    }


    const buildAppToShow = (app,appPath) => {
        setApp(<UnitedApp
            app = {app}
            appPath = {appPath}
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
                case "Instagram":
                    appURL = instaBackground
                    buildAppToShow(app,appURL)
                    break;
                default :
                    setAppChoice(true)
                    setApp(<AlertModal closeAlert = {closeAlert} content = {app + " is available in ultimate edition. Upgrade to unlock it."}/>)

            }
        }
    }

    const closeAlert = () => {
        handleDonate()
        setApp(null)
    }

    return (
        <div>
            {/*{appChoice && <BackButton setInAppsMenu = {props.setInMenu}/>}*/}
            <div>
                {note&&<ProgressNote
                    content = {<MainMenuTutorial/>}
                    continue = {setNote}
                    state = {note}
                />}
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
                    getSave = {props.getSave}
                    getEventSaves={props.getEventSaves}
                    closeSettings={props.setSettings}
                    userID = {props.userID}
                    openLoginRegister = {props.openLoginRegister}
                    openNotifications = {props.openNotifications}
                    notificationNumber={props.notificationNumber}
                    gameisLoading = {props.gameIsLoading}

                />:chosenApp}
                {appChoice?<div>{chosenApp}</div>:""}
            </div>
        </div>
    )
}

export default MainMenu;