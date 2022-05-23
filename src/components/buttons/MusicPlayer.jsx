import useSound from 'use-sound';

import music from "../../music/Morning-Routine-Lofi-Study-Music.mp3"

const Player = (props) => {
    const [play, { stop }] = useSound(music);



    const handleClick = () => {
        console.log(props.on)
        if (props.on){
            console.log("turned off")
            props.toggleMusic()
            stop()
        }
        else {
            props.toggleMusic()
            play()

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