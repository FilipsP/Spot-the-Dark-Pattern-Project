import { useState} from "react";
import MainMenu from "../components/main-menu/MainMenu";
import { child, update,get } from "firebase/database";
import {useEffect} from "react";
import {dbRef} from "../firebase";
import FinalScreen from "../components/final-screen/FinalScreen";
import Settings from "../components/main-menu/main-menu-elements/Settings";
import profile_pic from "../img/profile_pic.png";
import casual from "../img/avatars/casual.png";
import cool from "../img/avatars/cool.jpg";
import wtf from "../img/avatars/wtf.png";
import guy from "../img/avatars/guy.jpg";
import {CSSTransition} from "react-transition-group";
import LoginRegisterModal from "../components/modals/LoginRegister";
import Notifications from "../components/modals/Notifications";
import ErrorBoundary from "../components/errors/ErrorBoundary";
import {getCurrentDateNTimeInEstonia} from "../functions/getCurrentDateNTimeInEstonia";

const defaultSave = {
    characterName: "Anonymous",
    spamMailNumber: 0,
    wrongAnswers: 0,
    pointsOwned: 0,
    profilePictureId: 3,
    lastAnswerTime: ''
}

function Game() {

    const [notifications, setNotifications] = useState([]);
    const [notificationNumber, setNotificationsNumber] = useState(0);
    const [openNotifications, setOpenNotifications] = useState(false);
    const [logInRegisterOpened, setLogInRegister] = useState(false);
    const [userID,setUserID] = useState("")
    const [save, setSave] = useState(defaultSave);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [profiles, setProfiles] = useState([])
    const [inMenu, setInMenu] = useState(true);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [profilePictures, setProfilePictures] = useState([
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
        }]);
    const [money, setMoney] = useState(999);
    const [disabledApps, setDisabledApps] = useState([]);
    const [gameOver, setGameOver] = useState(false)
    const [openSettings, setSettings] = useState(false);
    const [on, toggle] = useState(false);


    useEffect(()=>{
        setNotificationsNumber(notifications.length)
    },[notifications])


    useEffect(()=>{
        get(child(dbRef, `/notifications/Main`)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true);
                setNotifications(snapshot.val())
                console.log("got notifications")

            } else {
                console.error("Failed to get notifications");
            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
        });
    },[])

    const handleSaveUpdate = (newSave) => {
        setSave(newSave)
        checkForFinish()
    }



    const checkForFinish = () => {
        console.log("checking for finish...")
        if (disabledApps.length >= 6 ) {
            console.log("finish!")
            return setGameOver(true)
        }
        return setGameOver(false)
    }




    const handleLastAnswerTiming = () => {
        console.log("handleAnswerTiming")
        const newSave = save;
        newSave["lastAnswerTime"] = getCurrentDateNTimeInEstonia()
        console.log(newSave)
        setSave(newSave)
        console.log(save)
    }


    const toggleMusic = () => {
        return toggle(!on)
    }


    const getEventSaves = (id) => {
        console.log("user id:" + id)
        get(child(dbRef, `/eventSave/`+ id)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true);
                const tempDisabledApps = snapshot.val()
                console.log(tempDisabledApps)
                let disabledAppsToAdd=[];
                for (const app in tempDisabledApps) {
                    if (tempDisabledApps[app] === true){
                        disabledAppsToAdd.push(app)
                    }
                }
                console.log("list of disabled apps: "+disabledAppsToAdd)
                setDisabledApps(disabledAppsToAdd);
                setIsLoading(false);
            } else {
                console.error("user event saves not found");
            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
        });
    }

    const connectUser = (username , password ) => {
        setIsLoading(true)
        for (const profile in profiles) {
            if ( profiles[profile].username === username){
                if (profiles[profile].password === password) {
                    const newUser = {
                        id: profiles[profile].id,
                        username: profiles[profile].username
                    }
                    setUserID(newUser.id)
                    setIsLoading(false)
                    alert("You have successfully logged in")
                    setLogInRegister(()=>false)
                    return getSave(newUser.id)


                }
                return alert("Wrong password")
            }
        }
        return alert("Couldn't find this user :(")
    }



    useEffect(() => {
        get(child(dbRef, `profile`)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true);
                setProfiles(snapshot.val());
                setIsLoading(false);
            } else {
                console.error("Failed to get profiles");
            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
        });
    },[isLoading])

    // useEffect(() => {
    //     console.log("checking for finish...")
    //     if (save.livesOwned < 1 || save.pointsOwned > 5 ) {
    //         console.log("finish!")
    //         return setGameOver(true)
    //     }
    //     return setGameOver(false)
    // },[save.livesOwned, save.pointsOwned])


    const getSave = (id) => {
        get(child(dbRef, '/save/' + id)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false)
                setIsLoading(true)
                setLoggedIn(true)
                setInMenu(true)
                setSave(snapshot.val());
                setIsLoading(false)


            } else {
                return console.log("No data available");

            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
            setLoggedIn(false)
            setInMenu(false)
            setSave(defaultSave);
        });
        console.log("got save")
        return getEventSaves(id)
    }



    const registerUser = async (username, password, characterName, closeRegister) => {
        setIsLoading(true)
        let newID = 0;
        for (const profile in profiles) {
            if (newID <= profiles[profile].id) {
                newID = profiles[profile].id + 1
            }
            if (profile.includes(username)) {
                return alert("Already registered");
            }
        }

        const userData = {
            id: newID,
            username: username,
            password: password
        };
        const newSave = {
            characterName: characterName,
            spamMailNumber: 0,
            wrongAnswers: 0,
            pointsOwned: 0,
            profilePictureId: 0
        };

        const freshEventSave = {
            Amazon: false,
            CNN: false,
            Gmail: false,
            Instagram: false,
            Meta: false,
            Reddit: false
        }


        const updates = {};
        updates['/profile/' + username] = userData;
        updates['/save/' + newID] = newSave;
        updates['/eventSave/' + newID] = freshEventSave;
        console.log("Successfully registered");
        closeRegister(false)
        return update(dbRef, updates)
    }



    return(
        <div>
            {inMenu&&<div onClick={()=>{setSettings(true)}}><i className="bi bi-gear icon-btn settings-btn"></i></div>}
            <CSSTransition
                in={openSettings}
                unmountOnExit
                timeout={500}
                classNames="animated-settings-sidebar"
            >
                <Settings
                    getSave = {getSave}
                    openSettings={setSettings}
                    isLoggedIn={isLoggedIn}
                    userID = {userID}
                    save={save}
                    disabledApps={disabledApps}
                    currentProfilePicture={currentProfilePicture}
                    musicOn = {on}
                    toggleMusic = {toggleMusic}
                    settingsStyle = "sidebar settings-sidebar show-sidebar"

                />
            </CSSTransition>
            <h1>{isError && "Error :("}</h1>
            <ErrorBoundary>
                <CSSTransition
                    in={openNotifications}
                    unmountOnExit
                    timeout={500}
                    classNames="animated-notification"
                >
                    <Notifications
                        notifications ={notifications}
                        setOpenNotifications = {setOpenNotifications}
                    />
                </CSSTransition>
            </ErrorBoundary>
            <div>
                {gameOver?<FinalScreen
                    currentProfilePicture={currentProfilePicture}
                    userID = {userID}
                    save={save}
                    isLoggedIn = {isLoggedIn}
                    disabledApps={disabledApps}
                    setSettings = {setSettings}

                />:<div>
                {inMenu &&
                <div>
                    <MainMenu
                        setInMenu = {setInMenu}
                        setLoggedIn = {setLoggedIn}
                        isLoggedIn = {isLoggedIn}
                        save = {save}
                        handleSaveUpdate = {handleSaveUpdate}
                        currentProfilePicture = {currentProfilePicture}
                        setCurrentPicture = {setCurrentPicture}
                        profilePictures = {profilePictures}
                        setProfilePictures = {setProfilePictures}
                        money = {money}
                        setMoney = {setMoney}
                        disabledApps={disabledApps}
                        setDisabledApps={setDisabledApps}
                        handleLastAnswerTiming = {handleLastAnswerTiming}
                        checkForFinish = {checkForFinish}
                        musicOn = {on}
                        toggleMusic = {toggleMusic}
                        getSave = {getSave}
                        getEventSaves={getEventSaves}
                        closeSettings={setSettings}
                        userID = {userID}
                        openLoginRegister = {setLogInRegister}
                        openNotifications = {setOpenNotifications}
                        notificationNumber={notificationNumber}
                        gameIsLoading = {isLoading}

                    />
                </div>}
                {logInRegisterOpened && <LoginRegisterModal
                    setLogInRegister = {setLogInRegister}
                    logIn = {setLoggedIn}
                    connect = {connectUser}
                    registerUser = {registerUser}
                    connectUser = {connectUser}
                />}
            </div>}
        </div>
    </div>
    )
}

export default Game
