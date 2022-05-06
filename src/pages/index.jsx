import {useState} from "react";
import LoginRegister from "./login-register";
import MainMenu from "./main-menu";


function Index() {

   // const [tempProfiles, setTempProfiles] = useState([]);
    const [save, setSave] = useState({
        lives:3,
        points:0,
        spamMail:1,
        name:" Anonymous"
    });
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [inMenu, setInMenu] = useState(false);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const connectUser = (username, password) => {
        fetch("http://localhost:8080/profiles/", {method: 'GET'})
            .then(response => response.json())
            .then(body => {
                setIsError(false);
                setIsLoading(false);
                //setTempProfiles(body)

            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });
    }



    return(
        <div>
            <h1>This is an "index.jsx" </h1>
            <h1>{isError && "Error :("}</h1>
            <h1>{isLoading && "Loading, please wait..."}</h1>
            <div>
                {inMenu ?
                <MainMenu
                    setLoggedIn = {setLoggedIn}
                    isLoggedIn = {isLoggedIn}
                    save = {save}
                    setSave = {setSave}
                    />
                    : <div>
                    {isLoggedIn ?
                        <button>LogOut</button>:
                        <LoginRegister
                            logIn = {setLoggedIn}
                            showMenu = {setInMenu}
                            connect = {connectUser}
                        />}
                </div>}
            </div>
        </div>
    )
}

export default Index
