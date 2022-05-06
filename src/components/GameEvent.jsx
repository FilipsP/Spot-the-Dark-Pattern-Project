import "./event.css";
import Buttons from "./buttons/Buttons";


function GameEvent(props){
    return(
        <div>
            <div className='modal-background'>
                <div className="form-container event-container">
                    <p className='event-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                    <Buttons
                        showApps = {props.showApps}
                        hidePage = {props.hidePage}
                        closeEvent = {props.closeEvent}
                        setSave = {props.setSave}
                        save = {props.save}
                    />
                </div>
            </div>
        </div>
    )
}


export default GameEvent;