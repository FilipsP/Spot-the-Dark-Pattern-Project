import { useState} from "react";
import LoginRegister from "../components/login-register";
import MainMenu from "../components/main-menu/main-menu";
import { child, update,get } from "firebase/database";
import {useEffect} from "react";
import {dbRef} from "../firebase";
import FinalScreen from "../components/final-screen/final-screen";
import Settings from "../components/buttons/settings";
import profile_pic from "../img/profile_pic.png";
import casual from "../img/avatars/casual.png";
import cool from "../img/avatars/cool.jpg";
import wtf from "../img/avatars/wtf.png";
import guy from "../img/avatars/guy.jpg";

const defaultSave = {
    characterName: "Anonymous",
    spamMailNumber: 0,
    livesOwned: 3,
    pointsOwned: 0,
    profilePictureId: 3,
    lastAnswerTime: ''
}

function Game() {


    const [userID,setUserID] = useState("")
    const [save, setSave] = useState(defaultSave);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [profiles, setProfiles] = useState([])
    const [inMenu, setInMenu] = useState(false);
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



    const handleSaveUpdate = (newSave) => {
        setSave(newSave)
        checkForFinish()
    }



    const checkForFinish = () => {
        console.log("checking for finish...")
        if (save.livesOwned < 1 || save.pointsOwned > 5 ) {
            console.log("finish!")
            return setGameOver(true)
        }
        return setGameOver(false)
    }




    const handleLastAnswerTiming = () => {
        console.log("handleAnswerTiming")
        const newSave = save;
        newSave["lastAnswerTime"] = new Date().toLocaleString('EST', { timeZone: 'UTC' }) + "";
        console.log(newSave)
        setSave(newSave)
        console.log(save)
    }


    const toggleMusic = () => {
      return toggle(!on)
    }


    const getEventSaves = () => {
        if (isLoggedIn){
            get(child(dbRef, `/eventSave/`+ userID)).then((snapshot) => {
                console.error("user id: "+ userID)
                if (snapshot.exists()) {
                    setIsError(false);
                    setIsLoading(true);
                    setDisabledApps(snapshot.val())
                    console.log(disabledApps)
                    if (disabledApps){
                        let disabledAppsToAdd=[];
                        for (const app in disabledApps) {
                            if (disabledApps[app] === true){
                                disabledAppsToAdd.push(app)
                            }
                        }
                        console.log("list of disabled apps: "+disabledAppsToAdd)
                        setDisabledApps(disabledAppsToAdd);
                        setIsLoading(false);
                    }

                } else {
                    console.error("Failed to get saves for events");
                }
            }).catch((error) => {
                console.error(error);
                setIsError(true);
            });
        }else {
            console.error("Log in to get event saves")
            setDisabledApps([]);
        }
        // eslint-disable-next-line
    }

    const connectUser = (username , password, setOpenLogIn ) => {
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
                    setOpenLogIn(false)
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
                console.log("No data available");

            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
            setLoggedIn(false)
            setInMenu(false)
            setSave(defaultSave);
        });
    }



    const registerUser = async (username, password, characterName, closeRegister, setError) => {
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
            livesOwned: 3,
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
            {openSettings && <Settings
                getSave = {getSave}
                getEventSaves={getEventSaves}
                closeSettings={setSettings}
                isLoggedIn={isLoggedIn}
                userID = {userID}
                save={save}
                disabledApps={disabledApps}
                currentProfilePicture={currentProfilePicture}
                musicOn = {on}
                toggleMusic = {toggleMusic}

            />}
            <h1>{isError && "Error :("}</h1>
            <h1>{isLoading && "Loading, please wait..."}</h1>
            <div>
                {gameOver?<FinalScreen
                    currentProfilePicture={currentProfilePicture}
                    userID = {userID}
                    save={save}
                    isLoggedIn = {isLoggedIn}
                    disabledApps={disabledApps}
                    setSettings = {setSettings}

                />:<div>
                {inMenu ?
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

                    />
                    </div>
                    :
                    <LoginRegister
                        logIn = {setLoggedIn}
                        showMenu = {setInMenu}
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
