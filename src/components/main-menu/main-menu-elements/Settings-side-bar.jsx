import Player from "../../buttons/MusicPlayer";

function SettingsSideBar(props) {
    return(
        <div className='sidebar settings-sidebar'>
            <div><i className='bi bi-x-lg icon-btn close-sidebar-icon close-settings-btn'></i></div>
            <div className='settings-container'>
                <h1>Options</h1>
                <Player  toggleMusic = {props.toggleMusic} on = {props.musicOn}/>
                <div className="setting-element">
                    <p className="setting-text" >Theme</p>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span  onClick={()=>alert("This feature will be added later")} className="slider round"></span>
                    </label>
                </div>
                {props.isLoggedIn &&
                <>
                    <div className="setting-element">
                        <p className="setting-text">Save progress</p>
                        <button className="option-btn">Save</button>
                    </div>
                    <div className="setting-element">
                        <p className="setting-text">Clear saves</p>
                        <button className="option-btn">Clear</button>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default SettingsSideBar
