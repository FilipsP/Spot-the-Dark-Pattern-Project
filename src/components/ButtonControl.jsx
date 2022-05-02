import React from "react";
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
            <button className="Test-Buttons" onClick={props.onClick}>Back</button> 
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
            isDeadMan : false
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
            this.setState(() => ({
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
    }
    


    render() {
        const answerIsGiven = this.state.answerIsGiven;
        return (
            <div>
                <div>
                    {console.log(this.state.answerIsGiven)}
                    {console.log(this.state.lives)}
                    {console.log(this.state.points)}
                    Character is {this.state.isDeadMan ? "dead" : "alive"}
                </div>
                <div>
                    <div>
                        <h2>Question nr.{this.eventID} from {this.eventType}</h2>
                        <p>
                            <strong>{this.author}</strong> has askes you:<br/>
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



export default ButtonControl