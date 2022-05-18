const BackButton = (props) => {

    const handleBack = () => {
      props.setInAppsMenu(false)
    }
    return(
            <div  onClick={() => {handleBack()}} className='back-btn-container'>
                <i className="bi bi-arrow-left-circle back-btn"></i>
                <p className='back-btn-text'>Back to <br/>log in</p>
            </div>
    )
}

export default BackButton