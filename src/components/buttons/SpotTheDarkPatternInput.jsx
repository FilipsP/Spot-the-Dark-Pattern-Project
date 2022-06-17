import {useState} from "react";

const SpotTheDarkPatternInput = (props) => {

    const [answer,setAnswer] = useState("")
    const [eventTries,setEventTries] = useState(1)

    const handleInput = ()=>{
        console.log(props.currentEvent.positive)
        console.log(answer)
        if (props.currentEvent.positive.toString() === answer.toString()){
            return props.handlePositiveAnswer()
        }
        if (eventTries>2){
            return props.handleNegativeAnswer()
        }
            alert("Try Again!")
            setAnswer("")
            return setEventTries(eventTries+1)
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