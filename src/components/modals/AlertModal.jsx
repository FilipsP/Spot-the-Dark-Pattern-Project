



function AlertModal(props) {


    return(
        <div className="modal-background">
            <div className='form-container modal'>
                <p className='note-text'>{props.content}</p>
                <div className='note-submit-container'>
                    <button className='submit note-submit' type='submit' onClick={ () => {props.closeAlert()}}>YES</button>
                    <button className='submit note-submit' type='submit' onClick={ () => {props.closeAlert()}}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default AlertModal