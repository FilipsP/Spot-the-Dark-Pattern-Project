import "../../css/event.css"
import "../../css/responseAnimations.css"
import SpotTheDarkPatternInput from "./SpotTheDarkPatternInput";
import React, {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import AnswerButton from "./AnswerButton";


const Answers = (props) => {

    const focusedInput = useRef(null)
    const [showButtons,setShowButtons] = useState(true)
    const [eventTries,setEventTries] = useState(1)

    const handleInput = (answer)=>{
        console.log(eventTries)
        if (props.event[props.eventNumber].positive.toString() === answer.toString()){
            return handlePositiveAnswer()
        }
        if (eventTries>props.event[props.eventNumber].tries){
            return handleNegativeAnswer()
        }
        alert("Try Again!")
        return setEventTries((eventTries)=>eventTries+1)
    }

    const closeApp = () => {
         setTimeout(()=>{
            props.closeEvent(false)
            props.hidePage(true)
            props.showApps(true)
        },1200)
    }

    const handleLastQuestion = () => {
        const newDisabledApps = props.disabledApps
        newDisabledApps.push(props.app)
        props.setType("")
        props.setDisabledApps(newDisabledApps)
        closeApp()
    }

    const getIfLastQuestion = ()=> {
        if (props.event[props.eventNumber + 1]!==undefined) {
            setTimeout(() => {
                props.setEventNumber((event)=>event+1)
                setShowButtons(true)
                console.log("not last")
                return false
            }, 500)
        }else {
            console.log("last")
            return true
        }
    }

    const handleNegativeAnswer = () => {
        if (showButtons) {
            setShowButtons(false)
            const question = props.event[props.eventNumber]
            const newSave = props.save
            newSave["spamMailNumber"] = props.save.spamMailNumber + 1
            newSave["wrongAnswers"] = props.save.wrongAnswers + 1
            props.handleSaveUpdate(newSave)
            props.setThumb("bi bi-hand-thumbs-down-fill icon-btn thumb-btn")
            props.setAnswerAnimation(true)
            props.handleLastAnswerTiming()
            if (getIfLastQuestion()) {
                console.log("last question finished")
                props.setMoney(props.money - question.money)
                handleLastQuestion()
            }
        }
    }

    const handlePositiveAnswer = () => {
        if (showButtons) {
            setShowButtons(false)
            const question = props.event[props.eventNumber]
            const newSave = props.save
            newSave["pointsOwned"] = props.save.pointsOwned + question.points
            props.handleLastAnswerTiming()
            props.setThumb("bi bi-hand-thumbs-up-fill icon-btn thumb-btn")
            props.setAnswerAnimation(true)
            props.handleSaveUpdate(newSave)
            if (getIfLastQuestion()) {
                console.log("last question finished")
                handleLastQuestion()
            }
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
                        handleInput = {handleInput}
                    />:
                <CSSTransition
                    in={showButtons}
                    unmountOnExit
                    timeout={500}
                    classNames="animated-buttons"
                >
                <div className='buttons-container' ref={focusedInput}>
                    <ul style={{listStyleType:"none"}}>
                        {props.event[props.eventNumber].allVariants.map((variant)=>
                            <AnswerButton
                                key = {variant}
                                content = {variant}
                                handleInput = {handleInput}
                            />)}
                    </ul>
                </div>
                </CSSTransition>
            }
        </>

    )
}

export default Answers