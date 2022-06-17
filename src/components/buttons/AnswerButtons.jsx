
import SpotTheDarkPatternInput from "./SpotTheDarkPatternInput";
import React, {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";


const AnswerButtons = (props) => {

    const focusedInput = useRef(null)
    const [showButtons,setShowButtons] = useState(true)

    const closeApp = () => {
         setTimeout(()=>{
            props.closeEvent(false)
            props.hidePage(true)
            props.showApps(true)
        },1200)
    }



    const handleNegativeAnswer = () => {
        setShowButtons(false)
        const question = props.event[props.eventNumber]
        const newSave = props.save
        newSave["spamMailNumber"] = props.save.spamMailNumber + 1
        newSave["wrongAnswers"] = props.save.wrongAnswers + 1
        props.handleSaveUpdate(newSave)
        props.setThumb("bi bi-hand-thumbs-down icon-btn thumb-btn")
        props.setAnswerAnimation(true)
        props.handleLastAnswerTiming()
        if (props.event[props.eventNumber +1]) {
            props.setEventNumber(props.eventNumber + 1)
            setShowButtons(true)
        }else {
            props.setMoney(props.money-question.money)
            const newDisabledApps = props.disabledApps
            newDisabledApps.push(props.app)
            console.log(newDisabledApps)
            props.setType()
            props.setDisabledApps(newDisabledApps)
            closeApp()
        }
    }

    const handlePositiveAnswer = () => {
        setShowButtons(false)
        const question = props.event[props.eventNumber]
        const newSave = props.save
        newSave["pointsOwned"] = props.save.pointsOwned + question.points
        props.handleLastAnswerTiming()
        props.setThumb("bi bi-hand-thumbs-up icon-btn thumb-btn")
        props.setAnswerAnimation(true)
        props.handleSaveUpdate(newSave)
        if (props.event[props.eventNumber +1]) {
            props.setEventNumber(props.eventNumber + 1)
            setShowButtons(true)
        }else {
            const newDisabledApps = props.disabledApps
            newDisabledApps.push(props.app)
            props.setType()
            console.log(newDisabledApps)
            props.setDisabledApps(newDisabledApps)
            closeApp()
        }
    }

    const scrollToBottom = () => {
        focusedInput.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom()
    }, []);

    return(
        <>
            {props.inputEvent?<SpotTheDarkPatternInput
                        currentEvent = {props.event[props.eventNumber]}
                        handlePositiveAnswer={handlePositiveAnswer}
                        handleNegativeAnswer={handleNegativeAnswer}
                    />:
                <CSSTransition
                    in={showButtons}
                    unmountOnExit
                    timeout={500}
                    classNames="animated-buttons"
                >
                <div className='buttons-container' ref={focusedInput}>
                    <button  type= "button" className='event-button' onClick={() => handlePositiveAnswer()}>{props.event[props.eventNumber].positive}</button>
                    <button type= "button" className='event-button' onClick={() => handleNegativeAnswer()}>{props.event[props.eventNumber].negative}</button>
                </div>
                </CSSTransition>
            }
        </>

    )
}

export default AnswerButtons