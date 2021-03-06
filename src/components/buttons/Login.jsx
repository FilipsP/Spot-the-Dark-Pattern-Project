import "../../css/login-register.css";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {useEffect} from "react";





function Login(props){

    const [nameValue, setNameValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [startAnimation,setStartAnimation] = useState(false)

    useEffect(()=>{
        setStartAnimation(true)
    },[])


    function handleLogIn() {
        props.connect(nameValue,passValue)
        setStartAnimation(false)
        props.openedLoginRegister(false)

    }

    return(
            <div className="modal-background transparent">
                <CSSTransition
                    in={startAnimation}
                    timeout={300}
                    classNames="animated-modal"
                    onExited = {()=>{props.setOpenLogin(false)}}
                >
                <div className="form-container modal">
                    <div onClick={() => setStartAnimation(false)}><i className="bi bi-x-square exit-btn"></i></div>
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


                </div>
                </CSSTransition>
            </div>
    )
}

export default Login;