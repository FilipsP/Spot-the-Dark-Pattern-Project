import React from "react";

const Buttons = (props) => {

    const closeApp = () => {
        props.closeEvent(false)
        props.hidePage(true)
        props.showApps(true)
    }

    const livesToTake = (value) => {
        const newSave = {
            lives: props.save.lives - value,
            points: props.save.points,
            spamMail: props.save.spamMail,
            name: props.save.name
        }
        props.setSave(newSave)
    }
    const pointsToAdd = (value) => {
        const newSave = {
            lives: props.save.lives,
            points: props.save.points + value,
            spamMail: props.save.spamMail,
            name: props.save.name
        }
        props.setSave(newSave)
    }



    return(
        <div className='buttons-container' onClick={() => closeApp()}>
            <button  type= "button" className='event-button' onClick={() => pointsToAdd(1)}>Good</button>
            <button type= "button" className='event-button' onClick={() => livesToTake(1)}>Bad</button>
        </div>
    )
}

export default Buttons