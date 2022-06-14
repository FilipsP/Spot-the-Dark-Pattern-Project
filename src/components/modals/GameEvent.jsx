import "../../css/event.css";
import AnswerButtons from "../buttons/AnswerButtons";
import {CSSTransition} from "react-transition-group";
import {useEffect,useState} from "react";


function GameEvent(props){
    const [startAnimation,setStartAnimation] = useState(false)

    useEffect(()=>{
        setStartAnimation(true)
    },[])

    return(
        <div>
            <div className='modal-background'>
                <CSSTransition
                    in={startAnimation}
                    timeout={300}
                    classNames="animated-modal"
                    unmountOnExit
                >
                <div className="form-container event-container modal">
                    <p className='event-text'>{props.event[props.eventNumber].description}</p>
                    <AnswerButtons
                        app = {props.app}
                        showApps = {props.showApps}
                        hidePage = {props.hidePage}
                        closeEvent = {props.closeEvent}
                        handleSaveUpdate = {props.handleSaveUpdate}
                        save = {props.save}
                        event = {props.event}
                        eventNumber = {props.eventNumber}
                        setEventNumber={props.setEventNumber}
                        money = {props.money}
                        setMoney = {props.setMoney}
                        disabledApps={props.disabledApps}
                        setDisabledApps={props.setDisabledApps}
                        handleLastAnswerTiming = {props.handleLastAnswerTiming}
                    />
                </div>
                </CSSTransition>
            </div>
        </div>
    )
}


export default GameEvent;