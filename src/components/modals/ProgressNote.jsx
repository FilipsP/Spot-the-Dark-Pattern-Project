
import "../../css/progress-note.css";
import {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";


function ProgressNote(props){
    const [startAnimation,setStartAnimation] = useState(false)

    useEffect(()=>{
        setStartAnimation(true)
    },[])


    return (
        <div>
            <div className='modal-background'>
                <CSSTransition
                    in={startAnimation}
                    timeout={300}
                    classNames="animated-modal"
                    onExited = {()=>props.continue(!props.state)}
                >
                <div className='form-container modal'>
                    <h1 className='main-heading modal-heading'>Note</h1>
                    {props.content}
                    <div className='note-submit-container'>
                    <button className='submit note-submit' type='submit' onClick={ () => {setStartAnimation(false)}}>Continue</button>
                    </div>
                </div>
                </CSSTransition>
            </div>
        </div>
    )
}

export default ProgressNote;