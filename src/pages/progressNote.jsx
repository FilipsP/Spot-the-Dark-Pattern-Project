
import { Link } from 'react-router-dom';
import "../css/progress-note.css";

function ProgressNote(){
    return (
        <div>
            <div className='modal-background'>
                <div className='form-container'>
                    <h1 className='main-heading modal-heading'>Note</h1>
                    <p className='note-text'>Please note, that if you are not registered, you can lose progress after closing the game.</p>

                        <Link to="/welcome" className='link'>
                            <div className='note-submit-container'>
                            <button className='submit note-submit' type='submit'>Continue</button>
                            </div>
                        </Link>

                </div>
            </div>
        </div>
    )
}

export default ProgressNote;