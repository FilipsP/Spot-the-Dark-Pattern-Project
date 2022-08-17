import {useEffect,useRef,useState} from "react";


const SpotTheDarkPatternInput = (props) => {

    const [answer,setAnswer] = useState("")
    const focusedInput = useRef(null)

    const handleClick = () => {
        setAnswer("")
        props.handleInput(answer)

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
                onClick={()=>{handleClick()}}
            >Answer
            </button>
            </div>
            <div ref={focusedInput}></div>
        </>
    )
}
export default SpotTheDarkPatternInput