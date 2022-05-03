import {useState} from "react";
import LoginRegister from "./login-register";
import MainMenu from "./main-menu";

function Index() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [inMenu, setInMenu] = useState(false);
    return(
        <div>
            <h1>This is an "index" page</h1>

            <div>
                {inMenu ?
                <MainMenu isLoggedIn = {isLoggedIn} /> :
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
