import "../../css/main-menu.css";
import "../../css/sidebar.css";
import "../../css/profile.css";
import {useState, useEffect} from "react";
import profile_pic from '../../img/profile_pic.png';
import casual from "../../img/avatars/casual.png";
import cool from "../../img/avatars/cool.jpg";
import guy from "../../img/avatars/guy.jpg";
import wtf from "../../img/avatars/wtf.png";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
import shopBackground from "../../img/apps-background/comfirmshaming2.jpg";
import redditBackground from "../../img/apps-background/reddit_bg.png";
import gmailBackground from "../../img/apps-background/gmail_bg.png";
import cnnBackground from "../../img/apps-background/cnn_bg.PNG";
import metaBackground from "../../img/apps-background/meta_bg.png";
import instaBackground from "../../img/apps-background/confirmshaming_zoom.png";
import UnitedApp from "./UnitedApp";
import AlertModal from "../modals/AlertModal";
import ProgressNote from "../modals/ProgressNote";
import MainMenuTutorial from "../noteContent/MainMenuTutorial";
import IconsMenu from "./main-menu-elements/IconsMenu";



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

function MainMenu(props){

    const [appChoice, setAppChoice] = useState(true);
    const [chosenApp, setApp] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [note, setNote] = useState(true);


    const loggedIn = props.isLoggedIn

    useEffect(() => {
        props.setCurrentPicture(0)
        if (loggedIn){
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
    }, [loggedIn]);



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
                    appURL = shopBackground
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

    useEffect(()=>{
        props.checkForFinish()
        // eslint-disable-next-line
    },[appChoice])

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
                    defaultCharacters = {defaultCharacters}

                />:chosenApp}
                {appChoice?<div>{chosenApp}</div>:""}
            </div>
        </div>
    )
}

export default MainMenu;