
import "../../css/progress-note.css";

function ProgressNote(props){
    return (
        <div>
            <div className='modal-background'>
                <div className='form-container modal'>
                    <h1 className='main-heading modal-heading'>Note</h1>
                    {props.content}
                    <div className='note-submit-container'>
                    <button className='submit note-submit' type='submit' onClick={ () => {props.continue(!props.state)}}>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressNote;