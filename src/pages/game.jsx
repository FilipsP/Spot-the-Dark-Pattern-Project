import {useState} from "react";
import LoginRegister from "../components/login-register";
import MainMenu from "../components/main-menu/main-menu";
import { child, update,get } from "firebase/database";
import {useEffect} from "react";
import {dbRef} from "../firebase";
import FinalScreen from "../components/final-screen/final-screen";

const defaultSave = {
    characterName: "Anonymous",
    spamMailNumber: 0,
    livesOwned: 3,
    pointsOwned: 0,
    profilePictureId: 3
}

function Game() {

    const [save, setSave] = useState(defaultSave);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [profiles, setProfiles] = useState([])
    const [inMenu, setInMenu] = useState(false);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [profilePictures, setProfilePictures] = useState([]);
    const [money, setMoney] = useState(999);
    const [disabledApps, setDisabledApps] = useState([]);
    const [gameOver, setGameOver] = useState(false)


    const connectUser = (username , password ) => {
        console.log(profiles)
        for (const profile in profiles) {
            if ( profiles[profile].username === username && profiles[profile].password === password){
                const newUser = {
                    id :  profiles[profile].id,
                    username:  profiles[profile].username
                }
                setIsLoading(false)
                return getSave(newUser)
            }
            else {
                setIsLoading(true)
                console.log("next user")
            }
        }
    }



    useEffect(() => {
        get(child(dbRef, `profile`)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true);
                setProfiles(snapshot.val());
                setIsLoading(false);
                console.log("Profiles received");
            } else {
                console.log("Try again");
            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
        });
    },[])

    useEffect(() => {
        console.log("checking for finish...")
        if (save.livesOwned < 1 || save.pointsOwned > 5 ) {
            console.log("finish!")
            return setGameOver(true)
        }
        console.log("not yet")
    },[save.livesOwned, save.pointsOwned])


    const getSave = (user) => {
        get(child(dbRef, '/save/' + user.id)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false)
                setIsLoading(true)
                console.log("DB user: " + snapshot.val().characterName)
                setLoggedIn(true)
                setInMenu(true)
                setIsLoading(false)
                setSave(snapshot.val());

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

    

    const registerUser = (username, password, characterName,closeRegister,setError) => {
        let newID = 0;
        for (const profile in profiles) {
            if (newID <= profiles[profile].id){
                newID = profiles[profile].id + 1
            }
            console.log(newID)
            if (profile.includes(username)) {
                return setError("Already registered");
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

        const updates = {};
        updates['/profile/' + username] = userData;
        updates['/save/' + newID ] = newSave;
        console.log(updates)

        closeRegister(false)
        alert("Successfully registered");
        return update(dbRef, updates);

    }



    return(
        <div>
            <h1>{isError && "Error :("}</h1>
            <h1>{isLoading && "Loading, please wait..."}</h1>
            <div>
                {gameOver?<FinalScreen save={save}/>:<div>
                {inMenu ?
                <div>
                <MainMenu
                    setInMenu = {setInMenu}
                    setLoggedIn = {setLoggedIn}
                    isLoggedIn = {isLoggedIn}
                    save = {save}
                    setSave = {setSave}
                    currentProfilePicture = {currentProfilePicture}
                    setCurrentPicture = {setCurrentPicture}
                    profilePictures = {profilePictures}
                    setProfilePictures = {setProfilePictures}
                    money = {money}
                    setMoney = {setMoney}
                    disabledApps={disabledApps}
                    setDisabledApps={setDisabledApps}
                    />
                    </div>
                    : <div>
                    {isLoggedIn ?
                        <button onClick={()=>{setLoggedIn(false)}}>LogOut</button>:
                        <LoginRegister
                            logIn = {setLoggedIn}
                            showMenu = {setInMenu}
                            connect = {connectUser}
                            registerUser = {registerUser}
                        />}
                    </div>}
                </div>}
            </div>
        </div>
    )
}

export default Game
