const BackButton = (props) => {

    const handleBack = () => {
      props.setInAppsMenu(false)
    }
    return(
            <div  onClick={() => {handleBack()}}>
                <i className="bi bi-arrow-left-circle icon-btn back-btn"></i>
            </div>
    )
}

export default BackButton