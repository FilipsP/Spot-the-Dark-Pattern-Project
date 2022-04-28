import "../css/login-register-menu.css"
import {useState} from 'react';
import Register from './register';
import Login from './login';
import ProgressNote from './progressNote';



function LoginRegister() {

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
                    {openRegister && <Register closeRegister={setRegister} />}
                </div>
                <div className="item-container">
                    <div onClick={()=>{setLogin(true)}}>
                        <i className="bi bi-person-fill big-icon"></i>
                        <p className="register-text">Login</p>
                    </div>
                    {openLogin && <Login closeLogin={setLogin} />}
                </div>
            </div>
            
            <div className="skip-btn" onClick={()=>setProgressNote(true)}>
                    <i className="bi bi-arrow-right-square-fill"></i>
                    <p>Skip</p>
                </div>
                {openProgressNote && <ProgressNote closeProgressNote={setProgressNote} />}


        </div>
    </div>)
}

export default LoginRegister;