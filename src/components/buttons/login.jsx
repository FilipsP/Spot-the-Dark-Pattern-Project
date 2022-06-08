import "../../css/login-register.css";
import Skip from './Skip.jsx';
import {useState} from "react";





function Login(props){

    const [nameValue, setNameValue] = useState("")
    const [passValue, setPassValue] = useState("")



    function handleLogIn() {
        props.connect(nameValue,passValue,props.setOpenLogin);

    }

    return(
        <div>
            <div className="modal-background">
                <div className="form-container modal">
                    <div onClick={() => props.setOpenLogin(false)}><i className="bi bi-x-square exit-btn"></i></div>
                    <h1 className="main-heading modal-heading">Login</h1> 
                    
                    <div className="input-element">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            className="input-field"
                            type="text"
                            id="login-username"
                            name="username"
                            placeholder="Username"
                            value={nameValue}
                            onChange={(event) => {setNameValue(event.target.value)}}
                        >
                        </input>
                    </div>

                    <div className="input-element">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            className="input-field"
                            type="password"
                            id="login-password"
                            name="password"
                            placeholder="Password"
                            value={passValue}
                            onChange={(event) => {setPassValue(event.target.value)}}
                        >
                        </input>
                    </div>
                    <button
                        className="submit"
                        type="submit"
                        id="login-submit"
                        onClick={() => {handleLogIn()}}
                    >Login
                    </button>

                    <Skip setProgressNote = {props.setProgressNote}/>

                </div>
            </div>
        </div>
    )
}

export default Login;