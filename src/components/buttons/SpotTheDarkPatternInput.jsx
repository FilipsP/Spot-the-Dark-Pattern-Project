import {useState} from "react";

const SpotTheDarkPatternInput = (props) => {
    const [answer,setAnswer] = useState("")
    const handleInput = ()=>{
        if (props.currentEvent.positive === answer){
            props.handlePositiveAnswer()
        }else {
            props.handleNegativeAnswer()
        }
    }

    return(
        <>
            <div className="input-element">
                <input
                    className="input-field"
                    type="number"
                    id="name"
                    name="name"
                    placeholder="number"
                    value={answer}
                    onChange={(event) => {setAnswer(event.target.value)}}
                ></input>
            </div>
            <button
                className="submit"
                type="button"
                id="submit-number"
                onClick={()=>{handleInput()}}
            >Answer
            </button>
        </>
    )
}
export default SpotTheDarkPatternInput