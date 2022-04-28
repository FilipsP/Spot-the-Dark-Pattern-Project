import "../css/login-register.css";
import {useState} from 'react';
import ProgressNote from './progressNote';

function Login({closeLogin}){

    const [openProgressNote, setProgressNote] = useState(false);

    return(
        <div>
            <div className="modal-background">
                <div className="form-container">
                    <div onClick={() => closeLogin(false)}><i className="bi bi-x-square exit-btn"></i></div>
                    <h1 className="main-heading modal-heading">Login</h1> 
                    
                    <div className="input-element">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="input-field" type="text" id="login-username" name="username" placeholder="Username"></input>
                    </div>

                    <div className="input-element">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="input-field" type="password" id="login-password" name="password" placeholder="Password"></input>
                    </div>
                    <button className="submit" type="submit" id="login-submit">Finished <i className="bi bi-check-circle-fill"></i></button>


                    <div className="modal-skip-btn" onClick={()=>setProgressNote(true)}>
                        <i className="bi bi-arrow-right-square-fill"></i>
                        <p>Skip</p>
                    </div>
                {openProgressNote && <ProgressNote closeProgressNote={setProgressNote} />}

                </div>
            </div>
        </div>
    )
}

export default Login;