import {useState} from "react";

const EndScreenGiveawayAlert = (props) => {

    const [nameValue, setNameValue] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [petsName, setPetsName] = useState("")
    const [address, setAddress] = useState("")

  return(
      <div className="form-container modal" >
              <div onClick={() => props.modal(false)}><i className="bi bi-x-square exit-btn"></i></div>
              <h1 className="main-heading modal-heading">In order to get the price please enter your name and email here:</h1>
              <div className="input-element">
                  <label className="form-label" htmlFor="name">Full Name</label>
                  <input
                      className="input-field"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full name"
                      value={nameValue}
                      onChange={(event) => {setNameValue(event.target.value)}}
                  ></input>
              </div>

              <div className="input-element">
                  <label className="form-label" htmlFor="mail">Email</label>
                  <input
                      className="input-field"
                      type="text"
                      id="mail"
                      name="mail"
                      value={emailAddress}
                      placeholder="Email address"
                      onChange={(event) => {setEmailAddress(event.target.value)}}
                  ></input>
              </div>

              <div className="input-element">
                  <label className="form-label" htmlFor="pets-name">Pets name</label>
                  <input
                      className="input-field"
                      type="text"
                      id="pets-name"
                      name="pets-name"
                      value={petsName}
                      placeholder="Your pets name"
                      onChange={(event) => {setPetsName(event.target.value)}}
                  ></input>

              </div>
              <div className="input-element">
                  <label className="form-label" htmlFor="address">Full Address</label>
                  <input
                      className="input-field"
                      type="text"
                      value={address}
                      id="address"
                      name="address"
                      placeholder="Address"
                      onChange={(event) => {setAddress(event.target.value)}}
                  ></input>
              </div>
              <button
                  className="submit"
                  type="submit"
                  id="register-submit"
                  onClick={()=>{alert("You are basically agreeing to all sorts of things... Don't do that!")}}
              >Accept all turms & submit
              </button>

      </div>
  )
}

export default EndScreenGiveawayAlert