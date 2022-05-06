import "./event.css";
import AnswerButtons from "./buttons/AnswerButtons";


function GameEvent(props){
    return(
        <div>
            <div className='modal-background'>
                <div className="form-container event-container">
                    <p className='event-text'>{props.event[props.eventNumber].description}</p>
                    <AnswerButtons
                        showApps = {props.showApps}
                        hidePage = {props.hidePage}
                        closeEvent = {props.closeEvent}
                        setSave = {props.setSave}
                        save = {props.save}
                        event = {props.event}
                        eventNumber = {props.eventNumber}
                        setEventNumber={props.setEventNumber}
                        money = {props.money}
                        setMoney = {props.setMoney}
                        disabledApps={props.disabledApps}
                        setDisabledApps={props.setDisabledApps}
                    />
                </div>
            </div>
        </div>
    )
}


export default GameEvent;