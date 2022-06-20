import {useEffect,useState,useRef} from "react";


const SpotTheDarkPatternInput = (props) => {

    const [answer,setAnswer] = useState("")
    const [eventTries,setEventTries] = useState(1)

    const focusedInput = useRef(null)

    const handleInput = ()=>{
        console.log(eventTries)
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
    const scrollToBottom = () => {
        focusedInput.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom()
    }, []);

    return(
        <>
            <div className="input-container" id='answer' >
                <input
                    className="input-field"
                    type="number"
                    id="name"
                    name="name"
                    placeholder="number"
                    value={answer}
                    onChange={(event) => {setAnswer(event.target.value)}}
                ></input>
            
            <button

                className="submit answer-button"
                type="button"
                id="submit-number"
                onClick={()=>{handleInput()}}
            >Answer
            </button>
            </div>
            <div ref={focusedInput}></div>
        </>
    )
}
export default SpotTheDarkPatternInput