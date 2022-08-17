import "../../css/event.css";
import Answers from "../buttons/Answers";
import {CSSTransition} from "react-transition-group";
import React,{useEffect,useState} from "react";




function GameEvent(props){
    const [startAnimation,setStartAnimation] = useState(false)

    useEffect(()=>{
        props.setType()
        // eslint-disable-next-line
    },[props.eventNumber, props.event, props.setType])


    useEffect(()=>{
        setStartAnimation(true)
    },[])




    return(
        <div >
            <CSSTransition
                in={startAnimation}
                timeout={300}
                classNames="animated-modal"
                unmountOnExit
            >
            <div className='event-frame'>
                <p className='integrated-event-text'>{props.event[props.eventNumber].description}</p>
                <Answers
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
                    inputEvent={props.inputEvent}
                    setType={props.setType}
                    setAnswerAnimation={props.setAnswerAnimation}
                    setThumb = {props.setThumb}
                />
            </div>
            </CSSTransition>
        </div>
    )
}


export default GameEvent;