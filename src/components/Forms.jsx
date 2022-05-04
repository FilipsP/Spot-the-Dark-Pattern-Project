import React, {useState} from "react";


function Comments(props) {
    const [comments, setComments] = useState([]);

    return (
        <div >
            <label htmlFor= "focused-input" />
            <input
                name = "focused-input"
                ref={props.inputEl}
                type="text"
                value={props.value}
                onChange={props.changeValue}
            />
            <button onClick={() => setComments((oldArray) => oldArray.concat( // concat to combine two arrays together
                <div>
                    <p>{new Date().toLocaleString() + ""}</p>
                    <p>{"User: " + props.value}</p>
                </div>))}>
                Add comment
            </button>
            <div>
                {comments.map((value, index) => (
                    <div key={index}>{value}</div>
                ))}
            </div>
        </div>
    );
}



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: "", pass: "",comment: "", comments: []};
        this.profilePictures = props.profilePictures;
        this.buttonClick = props.buttonClick;
        this.inputEl = props.inputEl;

        this.getIndex = this.getIndex.bind(this);
        this.handleAddComments = this.handleAddComments.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCommentChange(event) {
        this.setState({comment: event.target.value})
    }
    handleNameChange(event) {
        this.setState({userName: event.target.value});

    }

    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Your name is " + this.state.userName + "?");
    }

    handleAddComments() {
        this.setState({comments: this.state.comments.push(this.state.comment)});
    }

    getIndex(value) {
        const result = this.state.comments.findIndex(obj => obj.value === value)
        console.log(result);
        return result;
    }

    render() {

        let printPass;
        let helloMessage;
        if (this.state.userName.length > 0) {
            helloMessage = "Hello " + this.state.userName + "! ;)";
        }else {
            helloMessage = <span>
                                Hello,<br/>
                                Dear player<br/>
                                please enter<br/>
                                your name here:
                            </span>
        }

        return (
            <div>
                <h1>{helloMessage}</h1>
                <p> {printPass}</p>
                <label>
                    Name: <input
                    placeholder="name"
                    type="text"
                    value={this.state.userName}
                    onChange={this.handleNameChange}
                />
                </label><br/>
                <label>
                    Pass: <input
                    placeholder="pass"
                    type="password"
                    value={this.state.pass}
                    onChange={this.handlePassChange}
                />
                </label><br/>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                <div style={{borderStyle: "solid"}}>
                    {this.profilePictures.map(element =>
                        <div key={element.id}>
                            <img
                                width="620" height="680"
                                id={element.id.toString()}
                                src={element.name}
                                alt={element.description}
                                onClick={this.buttonClick}
                            />
                            <p>{element.description}</p>
                        </div>)}
                </div>
                <div>

                    <Comments
                        inputEl ={this.inputEl}
                        value ={this.state.comment}
                        changeValue ={this.handleCommentChange}
                    />
                </div>
                <span>------------------------------------</span>

            </div>
        );
    }
}


// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut',multiple : true};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//         this.setState({multiple: false});
//     }
//
//     handleSubmit(event) {
//         this.setState({multiple: true});
//         alert("Your favorite fruit is" + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Выберите ваш любимый вкус:
//                     <select multiple={this.state.multiple} value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Грейпфрут</option>
//                         <option value="lime">Лайм</option>
//                         <option value="coconut">Кокос</option>
//                         <option value="mango">Манго</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="send" />
//             </form>
//         );
//     }
// }

export default Form

