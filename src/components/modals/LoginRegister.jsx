import "../../css/login-register-menu.css"
import {useState} from 'react';
import Register from "../buttons/register";
import Login from "../buttons/login";
import ProgressNote from "./progressNote";
import Skip from "../buttons/Skip";
import SkipNoteContent from "../noteContent/SkipNoteContent";
import {useEffect} from "react";
import {CSSTransition} from "react-transition-group";



function LoginRegisterModal(props) {

    const [openRegister, setRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openProgressNote, setProgressNote] = useState(false);
    const [startAnimation,setStartAnimation] = useState(false)

    useEffect(()=>{
        setStartAnimation(true)
    },[])

    return(
        <div className="modal-background">
            <CSSTransition
                in={startAnimation}
                timeout={300}
                classNames="animated-modal"
                unmountOnExit
            >
            <div className="form-container event-container modal">
                <h1 className="main-heading">Please register or log in</h1>
                <div className="login-register-container">
                    <div className="item-container">
                        <div onClick={()=>{setRegister(true)}}>
                            <i className="bi bi-person-plus-fill big-icon"></i>
                            <p className="register-text">Register</p>
                        </div>
                        {openRegister && <Register
                            setProgressNote = {setProgressNote}
                            closeRegister={setRegister}
                            registerUser = {props.registerUser}
                            openedLogIn={setOpenLogin}
                            connect = {props.connect}
                        />}
                    </div>
                    <div className="item-container">
                        <div onClick={()=>{setOpenLogin(true)}}>
                            <i className="bi bi-person-fill big-icon"></i>
                            <p className="register-text">Log in</p>
                        </div>
                        {openLogin && <Login
                            setOpenLogin ={setOpenLogin}
                            setProgressNote = {setProgressNote}
                            LoggedIn = {props.logIn}
                            openedLogIn={setOpenLogin}
                            connect = {props.connect}
                        />}
                    </div>
                </div>

                <Skip setProgressNote = {setProgressNote}/>
                {openProgressNote && <ProgressNote
                    continue = {props.showMenu}
                    content = {<SkipNoteContent/>}
                    state = {props.state}

                />}
            </div>
            </CSSTransition>
        </div>)
}

export default LoginRegisterModal