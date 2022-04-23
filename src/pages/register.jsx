import "../css/login-register.css";


function Register({closeRegister}) {

    return(
        <div>
            <div className="modal-background">
                <div className="form-container">
                
                    <div onClick={() => closeRegister(false)}><i className="bi bi-x-square exit-btn"></i></div>
                    <h1 className="main-heading modal-heading">Register</h1> 
                    
                    <div className="input-element">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input className="input-field" type="text" id="register-username" name="username" placeholder="Username"></input>
                    </div>

                    <div className="input-element">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="input-field" type="password" id="register-password" name="password" placeholder="Password"></input>
                    </div>

                    <div className="input-element">
                        <label className="form-label" htmlFor="confirm-password">Confirm password</label>
                        <input className="input-field" type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password"></input>
                    </div>
                    <button className="submit" type="submit" id="register-submit">Finished <i className="bi bi-check-circle-fill"></i></button>
                </div>
            </div>
        </div>
    )

}


export default Register;