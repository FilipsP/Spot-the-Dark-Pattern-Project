import {CSSTransition} from "react-transition-group";


const GoodAnswer = (props) => {
    return(
        <CSSTransition
            in={props.opened}
            unmountOnExit
            timeout={500}
            classNames="animated-profile-sidebar"
            onEntered = {()=>props.setOpened(false)}
        >
            <i className="bi bi-hand-thumbs-up"></i>
        </CSSTransition>
    )
}
export default GoodAnswer