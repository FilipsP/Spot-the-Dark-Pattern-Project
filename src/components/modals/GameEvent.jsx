import "../../css/event.css";
import AnswerButtons from "../buttons/AnswerButtons";


function GameEvent(props){
    console.log(props.app)
    return(
        <div>
            <div className='modal-background'>
                <div className="form-container event-container">
                    <p className='event-text'>{props.event[props.eventNumber].description}</p>
                    <AnswerButtons
                        app = {props.app}
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
                        checkForFinish = {props.checkForFinish}
                    />
                </div>
            </div>
        </div>
    )
}


export default GameEvent;