
import "../../css/event.css"

const AnswerButton = (props) =>{
    return <li><button onClick={()=>{props.handleInput(props.content)}} type= "button" className='event-button'>{props.content}</button></li>
}

export default AnswerButton