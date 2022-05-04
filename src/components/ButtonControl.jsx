import React, {useState} from "react";
import "../css/test.css";
import Timer from "./Timer";

function Buttons(props) {
    return(
        <div onClick={props.onClick}>
            <button className="Test-Buttons" onClick={props.goodClick}>{props.buttons[1]}</button>
            <button className="Test-Buttons" onClick={props.badClick}>{props.buttons[2]}</button>
        </div>
    );
}


function BackButton(props) {
    return(
        <div>
            <button onClick={props.onClick}>Back</button>
        </div>
    );
}
// eslint-disable-next-line
// ↓↓↓ Gets event info from DB and uses it to dynamically change questions and answers ↓↓↓

class ButtonControl extends React.Component {
    constructor(props) {
        super(props);
        this.eventID = props.eventID;
        this.eventType = props.eventType;
        this.author = props.author;
        this.pointsGiven =  parseInt(props.pointsGiven);
        this.description = props.description;
        this.buttons = props.buttons;
        this.state = {
            answerIsGiven: false, 
            lives : props.lives, 
            points : props.points,
            isDeadMan : false,
            hasWon : false
        };
        this.handleAnswerIsGiven = this.handleAnswerIsGiven.bind(this);
        this.killLive = this.killLive.bind(this);
        this.givePoints = this.givePoints.bind(this);
    } 
    handleAnswerIsGiven() {
        this.setState(prevState => ({
            answerIsGiven: !prevState.answerIsGiven
        }));
    }

    killLive() {
        this.setState((state) => ({
            lives: state.lives - 1
          }));
        if(this.state.lives < 1) {
            this.setState(() =>({
                isDeadMan: true
            }));
        }
    }
    
    // eslint-disable-next-line 
    // props.pointsGiven or this.pointsGiven => not working  => but need to instead of "+1" ↓↓↓

    givePoints() {
        this.setState((state) => ({
            points: state.points + this.pointsGiven
          }));
        if (this.state.points > 3){
            this.setState(() => ({
                hasWon : true
            }))
        }
    }




    render() {
        console.log(this.state.answerIsGiven)
        console.log(this.state.lives)
        console.log(this.state.points)
        const answerIsGiven = this.state.answerIsGiven;
        return (
            <div>
                <div>
                    <h4>Lives: {this.state.lives}</h4>
                    <h4>Points: {this.state.points}</h4>
                    <h3>Character is
                        {this.state.isDeadMan
                            ?" dead"
                            :" alive"}
                        {this.state.hasWon ?
                            this.state.isDeadMan ?
                                " but a winner" :
                                " and a winner" : ""}
                    </h3>
                </div>
                <div>
                    <CommentInput />
                    <div>
                        <h2>Question nr.{this.eventID} from {this.eventType}</h2>
                        <p>
                            <strong>{this.author}</strong> has asked you:<br/>
                            {this.description}
                        </p>
                        <p>&nbsp;</p>
                        {answerIsGiven ? "Answered" : "Waiting for Answer" }
                        <p></p>
                        {answerIsGiven ?
                            <BackButton onClick={this.handleAnswerIsGiven}/> :
                            <Buttons
                                onClick={this.handleAnswerIsGiven}
                                badClick={this.killLive}
                                goodClick={this.givePoints}
                                buttons={this.buttons}
                            />
                        }
                        {answerIsGiven ? <Timer /> : <span></span>}
                    </div>
                </div>
            </div>
        )
    }
    
}

const textFieldStyle = {
    width: "200px",
    margin: "20px",
    padding: "5",
    border: "dotted",
    borderRadius: "3px",
    textAlign: "center"

}

const TextField = (props) => {
    return(
        <div>
            <div style={textFieldStyle}>
                {props.time}<br/>
                <h2>Author: {props.author}</h2>
                <em>{props.value}</em>
            </div>
        </div>
    )
}


const CommentInput = () => {
    const [nameInput, setNameInput] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [texts, addText] = useState([])

    const settleAddText = () => {
        const newTexts = texts;
        const timeToAdd = new Date().toLocaleString() + "";
        const textToAdd = {
            id: (texts.length+1),
            author : nameInput,
            description: inputValue,
            time: timeToAdd
            }
        newTexts.push(textToAdd);
        addText(newTexts)
        setInputValue("")
    }
    return(
        <div>
            <label htmlFor= "name">Your name: </label>
            <input
                name = "name"
                type = "text"
                value={nameInput}
                onChange={(event) => {setNameInput(event.target.value)}}
            /><br/>
            <label htmlFor= "text">Your text: </label>
            <input
                name = "text"
                type = "text"
                value={inputValue}
                onChange={(event) => {setInputValue(event.target.value)}}/>
            <button onClick={() => {settleAddText()}}>Add text</button>
            {texts && texts.map(element =>
                <TextField
                    key = {element.id}
                    value={element.description}
                    time = {element.time}
                    author = {element.author}
                />
            )}
        </div>
    )
}



export default ButtonControl