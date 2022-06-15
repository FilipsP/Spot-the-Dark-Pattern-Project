import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";
import "../../css/notifications.css";


const NoteContent = (props) =>{

    return(
        <div className=''>
            <p>{props.content}</p>
        </div>
    )
}

const NoteName = (props) => {
    const [openNote,setOpenNote]  = useState(false)
    return(
        <div className='notification-frame'>
            
            <h1 className='notification-heading' onClick={() => {setOpenNote(!openNote)}}>{props.element.name}</h1>

            <CSSTransition
                in={openNote}
                timeout={300}
                classNames="animated-modal"
                unmountOnExit

            >
                <NoteContent
                
                    content={props.element.content}
                    setOpenNote = {setOpenNote}
                />
            </CSSTransition>
        </div>
    )
}

const Notifications = (props) => {


    return(
        <div className="notification-container modal">
            <i onClick={()=>{props.setOpenNotifications(false)}} className="bi bi-x-square exit-btn notification-exit"></i>
            {props.notifications.map(element =>
                <NoteName
                    key ={element.id}
                    element = {element}
                />
            )}


        </div>
    )
}

export default Notifications