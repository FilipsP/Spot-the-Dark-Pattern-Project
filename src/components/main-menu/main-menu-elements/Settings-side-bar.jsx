
function SettingsSideBar() {
    return(
        <div className='sidebar right-aligned'>
            <div className='settings-container'>
                <h1>Options</h1>
                <div className="setting-element">
                    <p className="setting-text" >Theme</p>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span  onClick={()=>alert("This feature will be added later")} className="slider round"></span>
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
    )
}

export default SettingsSideBar
