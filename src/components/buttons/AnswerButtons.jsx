import React from "react";

const AnswerButtons = (props) => {


    const closeApp = () => {
            props.closeEvent(false)
            props.hidePage(true)
            props.showApps(true)
    }


    const handleNegativeAnswer = () => {
        const question = props.event[props.eventNumber]
        const newSave = {
            spamMailNumber: props.save.spamMail + 1,
            livesOwned: props.save.livesOwned - question.lives,
            pointsOwned: props.save.pointsOwned,
            characterName: props.save.characterName,
            profilePictureId: 5
        }
        props.setSave(newSave)
        if (props.event[props.eventNumber +1]) {
            props.setEventNumber(props.eventNumber + 1)
        }else {
            props.setMoney(props.money-99)
            const newDisabledApps = props.disabledApps
            newDisabledApps.push(props.app)
            console.log(newDisabledApps)
            props.setDisabledApps(newDisabledApps)
            closeApp()
        }
    }

    const handlePositiveAnswer = () => {
        const question = props.event[props.eventNumber]
        const newSave = {
            livesOwned: props.save.livesOwned,
            pointsOwned: props.save.pointsOwned + question.points,
            spamMailNumber: props.save.spamMail,
            characterName: props.save.characterName,
            profilePictureId: 5
        }
        props.setSave(newSave)
        const newDisabledApps = props.disabledApps
        newDisabledApps.push(props.app)
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