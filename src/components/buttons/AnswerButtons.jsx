import React from "react";

const AnswerButtons = (props) => {

    const closeApp = (options) => {
            props.closeEvent(false)
            props.hidePage(true)
            props.showApps(true)
    }


    const handleNegativeAnswer = () => {
        const question = props.event[props.eventNumber]
        console.log(question)
        const newSave = {
            lives: props.save.lives - question.lives,
            points: props.save.points ,
            spamMail: props.save.spamMail + 1,
            name: props.save.name
        }
        props.setSave(newSave)
        if (props.event[props.eventNumber +1]) {
            props.setEventNumber(props.eventNumber + 1)
        }else {
            props.setMoney(props.money-99)
            const newDisabledApps = props.disabledApps
            newDisabledApps.push("Amazon")
            console.log(newDisabledApps)
            props.setDisabledApps(newDisabledApps)
            closeApp()
        }
    }

    const handlePositiveAnswer = () => {
        const question = props.event[props.eventNumber]
        console.log(question)
        const newSave = {
            lives: props.save.lives,
            points: props.save.points + question.points,
            spamMail: props.save.spamMail,
            name: props.save.name
        }
        props.setSave(newSave)
        const newDisabledApps = props.disabledApps
        newDisabledApps.push("Amazon")
        console.log(newDisabledApps)
        props.setDisabledApps(newDisabledApps)
        closeApp()

    }



    return(
        <div className='buttons-container'>
            <button  type= "button" className='event-button' onClick={() => handlePositiveAnswer()}>{props.event[props.eventNumber].positive}</button>
            <button type= "button" className='event-button' onClick={() => handleNegativeAnswer()}>{props.event[props.eventNumber].negative}</button>
        </div>
    )
}

export default AnswerButtons