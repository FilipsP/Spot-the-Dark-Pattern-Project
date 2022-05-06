

function Skip(props) {
    return(
        <div className="modal-skip-btn" onClick={()=>props.setProgressNote(true)}>
            <i className="bi bi-arrow-right-square-fill"></i>
            <p>Skip</p>
        </div>

    )
}

export default Skip