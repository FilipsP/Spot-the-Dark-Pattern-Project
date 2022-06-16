import {useState} from "react";

const SpotTheDarkPatternInput = (props) => {
    const [answer,setAnswer] = useState("")
    return(
        <div className="modal-background transparent">
            <div className="form-container modal">
                <div className="input-element">
                    <label className="form-label" htmlFor="name">How many </label>
                    <input
                        className="input-field"
                        type="number"
                        id="name"
                        name="name"
                        placeholder="dark patterns are there?"
                        value={answer}
                        onChange={(event) => {setAnswer(event.target.value)}}
                    ></input>
                </div>
                <button
                    className="submit"
                    type="button"
                    id="register-submit"
                    onClick={()=>{props.handleInput()}}
                >Answer
                </button>
            </div>
        </div>
    )
}
export default SpotTheDarkPatternInput