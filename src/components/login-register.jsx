import "../css/login-register-menu.css"
import {useState} from 'react';
import Register from './buttons/register';
import Login from './buttons/login';
import Skip from './buttons/Skip.jsx';
import ProgressNote from "./modals/progressNote";




function LoginRegister(props) {

    const [openRegister, setRegister] = useState(false);
    const [openLogin, setLogin] = useState(false);
    const [openProgressNote, setProgressNote] = useState(false);


    return(<div>
        
        <div className="container">
            <h1 className="main-heading">Please register or login</h1>
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
                    />}
                </div>
                <div className="item-container">
                    <div onClick={()=>{setLogin(true)}}>
                        <i className="bi bi-person-fill big-icon"></i>
                        <p className="register-text">Login</p>
                    </div>
                    {openLogin && <Login
                        setProgressNote = {setProgressNote}
                        LoggedIn = {props.logIn}
                        closeLogin={setLogin}
                        connect = {props.connect}
                    />}
                </div>
            </div>
            
            <Skip openProgressNote = {openProgressNote} setProgressNote = {setProgressNote}/>
            {openProgressNote && <ProgressNote showMenu = {props.showMenu} />}


        </div>
    </div>)
}

export default LoginRegister;