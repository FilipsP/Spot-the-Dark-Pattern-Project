import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";


function AlertModal(props) {

    const [startAnimation,setStartAnimation] = useState(false)
    useEffect(()=>{
        setStartAnimation(true)
    },[])

    return(
        <div className="modal-background">
            <CSSTransition
                in={startAnimation}
                timeout={300}
                classNames="animated-profile-sidebar"
                unmountOnExit
            >
            <div className='form-container modal'>
                <p className='note-text'>{props.content}</p>
                <div className='note-submit-container'>
                    <button className='submit note-submit' type='submit' onClick={ () => {props.closeAlert()}}>YES</button>
                    <button className='submit note-submit' type='submit' onClick={ () => {props.closeAlert()}}>OK</button>
                </div>
            </div>
            </CSSTransition>
        </div>
    )
}

export default AlertModal