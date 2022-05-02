import '../css/settings.css';


function Settings({closeSettings}){
return(
    <div>
        <div className="modal-background">
            <div className="settings-container">
                    <div onClick={() => closeSettings(false)}><i className="bi bi-x-square exit-btn"></i></div>
                    <h1 className="main-heading modal-heading">Options</h1>
                    <div className="setting-element">
                        <p className="setting-text">Theme</p>
                        <label className="switch">
                            <input type="checkbox"></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="setting-element">
                        <p className="setting-text">Save progress</p>
                        <button className="option-btn">Save</button>
                    </div>
                    <div className="setting-element">
                        <p className="setting-text">Clear saves</p>
                        <button className="option-btn">Clear</button>
                    </div>
                </div>
            </div>
    </div>
);
}

export default Settings;