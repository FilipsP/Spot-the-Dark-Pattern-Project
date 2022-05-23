import '../../css/settings.css';
import saveGame from "../functions/saveGame";
import clearSave from "../functions/clearSave";
import Player from "./MusicPlayer";


function Settings(props){

    const handleSaveGame = () => {
        saveGame(props.userID, props.save, props.isLoggedIn,props.disabledApps,props.currentProfilePicture)
            .then(() => props.getSave(props.userID))
    }

    const handleClearSave = () => {
        clearSave(props.userID, props.save)
            .then(() => props.getSave(props.userID))
            .then(() => props.getEventSaves())
            .then(()=>alert("Successfully cleared"))
            .catch(() => console.error("Oops, error while clearing save"))
    }


return(
    <div>
        <div className="modal-background">
            <div className="settings-container">
                    <div onClick={() => props.closeSettings(false)}><i className="bi bi-x-square exit-btn"></i></div>
                    <h1 className="main-heading modal-heading">Options</h1>

                    <Player  toggleMusic = {props.toggleMusic} on = {props.musicOn}/>

                    <div className="setting-element">
                        <p className="setting-text" >Theme</p>
                        <label className="switch">
                            <input type="checkbox"></input>
                            <span  onClick={()=>alert("This feature will be added later")} className="slider round"></span>
                        </label>
                    </div>
                {props.isLoggedIn &&<div>
                        <div className="setting-element">
                            <p className="setting-text">Save progress</p>
                            <button className="option-btn" onClick={()=>handleSaveGame()}>Save</button>
                        </div>
                        <div className="setting-element">
                            <p className="setting-text">Clear saves</p>
                            <button className="option-btn" onClick={()=>handleClearSave()}>Clear</button>
                        </div>
                    </div>}
                </div>
            </div>
    </div>
);
}

export default Settings;