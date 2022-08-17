import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import Character from "./Character";
import Settings from "./Settings";
import amazon_logo from "../../../img/amazon_logo.png";
import meta_logo from "../../../img/meta_logo.png";
import gmail_logo from "../../../img/gmail_logo.png";
import reddit_logo from "../../../img/reddit_logo.png";
import instagram_logo from "../../../img/instagram_logo.png";
import cnn_logo from "../../../img/cnn_logo.png";

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
            <div className="bell-container">
                <i data-count = {props.notificationNumber} onClick={()=>{props.openNotifications(true)}} className='bi bell bi-bell icon-btn'>
                </i>
            </div>
            <div className='container'>
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
                        defaultCharacters ={props.defaultCharacters}
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
                    defaultCharacters ={props.defaultCharacters}
                    money = {props.money}
                    openLoginRegister = {props.openLoginRegister}
                />
                <Settings
                    settingsStyle = "sidebar settings-sidebar "
                    getSave = {props.getSave}
                    closeSettings={props.setSettings}
                    isLoggedIn={props.isLoggedIn}
                    userID = {props.userID}
                    save={props.save}
                    disabledApps={props.disabledApps}
                    currentProfilePicture={props.currentProfilePicture}
                    musicOn = {props.on}
                    toggleMusic = {props.toggleMusic}
                />
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

export default IconsMenu