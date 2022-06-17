import React from "react";
import SpotTheDarkPatternInput from "./SpotTheDarkPatternInput";


const AnswerButtons = (props) => {



    const closeApp = () => {
            props.closeEvent(false)
            props.hidePage(true)
            props.showApps(true)
    }



    const handleNegativeAnswer = () => {
        const question = props.event[props.eventNumber]
        const newSave = props.save
        newSave["spamMailNumber"] = props.save.spamMailNumber + 1
        newSave["wrongAnswers"] = props.save.wrongAnswers + 1
        props.handleSaveUpdate(newSave)
        alert("Poor choice...")
        props.handleLastAnswerTiming()
        if (props.event[props.eventNumber +1]) {
            props.setEventNumber(props.eventNumber + 1)
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
        const question = props.event[props.eventNumber]
        const newSave = props.save
        newSave["pointsOwned"] = props.save.pointsOwned + question.points
        alert("Good choice ☺")
        props.handleLastAnswerTiming()
        props.handleSaveUpdate(newSave)
        if (props.event[props.eventNumber +1]) {
            props.setEventNumber(props.eventNumber + 1)
        }else {
            const newDisabledApps = props.disabledApps
            newDisabledApps.push(props.app)
            props.setType()
            console.log(newDisabledApps)
            props.setDisabledApps(newDisabledApps)
            closeApp()
        }
    }



    return(
        <>
        {props.inputEvent?<SpotTheDarkPatternInput
                    currentEvent = {props.event[props.eventNumber]}
                    handlePositiveAnswer={handlePositiveAnswer}
                    handleNegativeAnswer={handleNegativeAnswer}


                />:
            <div className='buttons-container'>
                <button  type= "button" className='event-button' onClick={() => handlePositiveAnswer()}>{props.event[props.eventNumber].positive}</button>
                <button type= "button" className='event-button' onClick={() => handleNegativeAnswer()}>{props.event[props.eventNumber].negative}</button>
            </div>}
        </>

    )
}

export default AnswerButtons