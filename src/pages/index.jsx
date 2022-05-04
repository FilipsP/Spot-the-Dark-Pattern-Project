import {useState} from "react";
import LoginRegister from "./login-register";
import MainMenu from "./main-menu";

function Index() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [inMenu, setInMenu] = useState(false);
    const [lives, setLives] = useState(3);
    const [points, setPoints] = useState(0);


    return(
        <div>
            <h1>This is an "index.jsx" </h1>

            <div>
                {inMenu ?
                <MainMenu
                    isLoggedIn = {isLoggedIn}
                    lives = {lives}
                    points = {points}
                    setLives = {setLives}
                    setPoints = {setPoints}/> :
                <div>
                    {isLoggedIn ?
                        <button>LogOut</button>:
                        <LoginRegister
                            logIn = {setLoggedIn}
                            showMenu = {setInMenu} />}
                </div>}
            </div>
        </div>
    )
}

export default Index
