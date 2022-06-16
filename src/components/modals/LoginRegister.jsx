import "../../css/login-register-menu.css"
import {useState} from 'react';
import Register from "../buttons/register";
import Login from "../buttons/login";
import ProgressNote from "./progressNote";
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
                onExited = {()=>{props.setLogInRegister(false)}}
            >
            <div className="form-container event-container modal">
                <div onClick={ () => {setStartAnimation(false)}}><i className="bi bi-x-square exit-btn"></i></div>
                <h1 className="main-heading centered">Please register or log in</h1>
                <div className="login-register-container">
                    <div className="item-container">
                        <div onClick={()=>{setRegister(true)}}>
                            <i className="bi bi-person-plus-fill big-icon"></i>
                            <p className="register-text">Register</p>
                        </div>
                        {openRegister && <Register
                            setProgressNote = {setProgressNote}
                            setRegister={setRegister}
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

                {openProgressNote && <ProgressNote
                    continue = {setProgressNote}
                    content = {<SkipNoteContent/>}
                    state = {openProgressNote}

                />}
            </div>
            </CSSTransition>
        </div>)
}

export default LoginRegisterModal