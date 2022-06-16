import "../../css/login-register.css";
import {useState,useEffect} from "react";
import {CSSTransition} from "react-transition-group";

function Register(props) {

    const [nameValue, setNameValue] = useState("")
    const [characterNameValue, setCharacterNameValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [confirmPassValue, setConfirmPassValue] = useState("")
    const [registerError, setRegisterError] = useState("")

    const [startAnimation,setStartAnimation] = useState(false)

    useEffect(()=>{
        setStartAnimation(true)
    },[])


    const handleRegister = () => {
        setRegisterError("")
        if (nameValue.length && characterNameValue.length && passValue.length) {
            if (passValue === confirmPassValue) {
                props.registerUser(nameValue, passValue, characterNameValue, props.closeRegister, setRegisterError)
                props.openedLogIn(true)

            } else {
                alert("Enter the same pass twice to proceed")
            }
        } else {
            alert("Each input should contain at least one symbol")
        }
        if (registerError.length) {
            alert(registerError)
        }
    }

    return(
                <div className="modal-background transparent">
                    <CSSTransition
                        in={startAnimation}
                        timeout={300}
                        classNames="animated-modal"
                        onExited = {()=>{props.setRegister(false)}}
                    >
                <div className="form-container modal">
                    <div onClick={() => setStartAnimation(false)}><i className="bi bi-x-square exit-btn"></i></div>
                    <h1 className="main-heading modal-heading">Register</h1> 
                    
                    <div className="input-element">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                            className="input-field"
                            type="text"
                            id="register-username"
                            name="username"
                            placeholder="Username"
                            onChange={(event) => {setNameValue(event.target.value)}}
                        ></input>
                    </div>

                    <div className="input-element">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            className="input-field"
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Password"
                            onChange={(event) => {setPassValue(event.target.value)}}
                        ></input>
                    </div>

                    <div className="input-element">
                        <label className="form-label" htmlFor="confirm-password">Confirm password</label>
                        <input
                            className="input-field"
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="Confirm password"
                            onChange={(event) => {setConfirmPassValue(event.target.value)}}
                        ></input>

                    </div>
                    <div className="input-element">
                        <label className="form-label" htmlFor="character">Character</label>
                        <input
                            className="input-field"
                            type="text"
                            id="character"
                            name="character"
                            placeholder="Character name"
                            onChange={(event) => {setCharacterNameValue(event.target.value)}}
                        ></input>
                    </div>
                    <button
                        className="submit"
                        type="submit"
                        id="register-submit"
                        onClick={()=>{handleRegister()}}
                    >Register
                    </button>

                </div>
                </CSSTransition>
            </div>
    )

}


export default Register;