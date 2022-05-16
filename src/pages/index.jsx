import {useState} from "react";
import LoginRegister from "./login-register";
import MainMenu from "./main-menu";
import { ref, child, push, update,get,set } from "firebase/database";
import {useEffect} from "react";
import {db, dbRef} from "../firebase";
import FinalScreen from "./final-screen";

const defaultSave = {
    characterName: "Anonymous",
    spamMailNumber: 0,
    livesOwned: 3,
    pointsOwned: 0,
    profilePictureId: 3
}

function Index() {

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


    useEffect(() => {
        get(child(dbRef, `profile`)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true)
                setProfiles(snapshot.val())
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

    const connectUser = (username , password ) => {
        console.log(profiles)
        profiles.forEach(element => {
            if (element.username === username && element.password === password){
                const newUser = {
                    id : element.id,
                    username: element.username
                }

                console.log("username: " + newUser.username)
                console.log("new user: " + newUser.id)
                setIsLoading(false)
                return getSave(newUser)
            }
            else {
                setIsLoading(true)
                console.log("next user")
            }
        })
    }







    const registerUser = (username, password, characterName,closeRegister) => {

        for (const profile in profiles) {
            if (profile.includes(username)) {
                alert("Already registered");
                return;
            }
        }
        const userData = {
            id: profiles.length,
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

        // Write the new post's data simultaneously in the posts list and the user's post list.

        const updates = {};
        updates['/profile/' + username] = userData;
        updates['/save/' + profiles.length ] = newSave;

        closeRegister(false)
        return update(ref(db), updates);
    }



    return(
        <div>   <h1>{gameOver?"Game over" : " Game is ongoing" }</h1>
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

export default Index
