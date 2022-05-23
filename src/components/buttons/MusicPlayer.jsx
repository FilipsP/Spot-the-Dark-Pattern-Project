import useSound from 'use-sound';

import music from "../../music/Morning-Routine-Lofi-Study-Music.mp3"
import { useState} from "react";

const Player = () => {
    const [play, { stop }] = useSound(music);
    const [on, toggle] = useState(false);


    const handleClick = () => {
        if (on){
            stop()
            toggle(false)
        }
        else {
            play()
            toggle(true)
        }
    }
    return (

        <div className="setting-element">
            <p className="setting-text" >Music</p>
            <label className="switch">
                <input type="checkbox"></input>
                <span onClick={()=>handleClick()}  className="slider round"></span>
            </label>
        </div>

    );

};

export default Player;