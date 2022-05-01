import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: "",pass: ""};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({userName: event.target.value});
    }

    handlePassChange(event) {
        this.setState({pass: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Your name is " + this.state.userName);


    }

    render() {
        let helloMessage =  <span>
                                Hello,<br/>
                                dear player<br/>
                                please enter<br/>
                                your name here:
                            </span>
        if (this.state.userName.length > 0){
            helloMessage = "Hello " + this.state.userName + "! ;)";
        }
        return (
            <div>
                    <h1>{helloMessage}</h1>
                    <label>
                        Name: <input
                        placeholder= "name"
                        type="text"
                        value = {this.state.userName}
                        onChange= {this.handleNameChange}
                    />
                    </label><br/>
                    <label>
                        Pass: <input
                        placeholder= "pass"
                        type="password"
                        value= {this.state.pass}
                        onChange={this.handlePassChange}
                        />
                    </label><br/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
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

