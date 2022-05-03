import {Link} from "react-router-dom";
import ButtonControl from './ButtonControl';
import "../css/test.css"
import React, {useEffect, useState} from "react";
import '../img/profile_pic.png'
//import Form from "./Forms"


// eslint-disable-next-line
// import { useLocation } from "react-router-dom";
// make class StatusChecker => constructor() => super() => this.state = {pathInList : false} => 
// this.checkIfPathInList = this.checkIfPathInList.bind(this) => const location = useLocation(); =>
// location.pathname gives you the path like "/test" => take list of path => 
// like ["/","/test","/","/login-register"] => checkIfPathInList = () => {return result}  => 
// if location in list => this.setState(prevState => ({pathInList: !prevState.pathInList })); =>
// if pathInList ? lastRightLocation = setLastRightLocation :  <Redirect to="/" />
// const setLastRightLocation = () => {return location.pathname}
/*class PathChecker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pathInList : false, lastRightLocation : "/"};
        this.checkIfPathInList = this.checkIfPathInList.bind(this)
        this.setLastRightPathLocation = this.setLastRightPathLocation.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        
    }

    checkIfPathInList() {
        this.setState(() => ({
            pathInList: this.handleCheck(useCurrentPathLocation,listOfPaths)
          }));
    }
        
    handleCheck(val,list) {
        return list.some(item => val.name === item.name);
    }
        

    setLastRightPathLocation() {
        this.setState(() => ({
            lastRightLocation : useCurrentPathLocation 
          }));
    }

    componentDidMount() {
        return (this.checkIfPathInList());
    }
    
    render() {
        return(
            <div>
                <div>
                    god save me
                </div>
                <div>
                    Dunno what to do
                </div>
                <div>
                    .............
                </div>
            </div>
        )
    }
}*/

// eslint-disable-next-line
/*function Rediraction() {
  const location = useLocation();
  console.log(location.pathname);
  const [pathInList, changePathInList] = useState(true);
  useEffect(
      () => {
          changePathInList(() => ({pathInList : checkIfPathInList(location.pathname,listOfPaths)}))
      },
      [location]
  );
  return (
      <div>
          {pathInList ? <p>"I am happy"</p> : <useNavigate to = "/"/>}
      </div>
        )
    }
const listOfPaths = ["/","/test","/login-register"];


function checkIfPathInList(val,list) {
    return list.some(item => val === item);
}




function HandleBrowserButtons(){
    const [ locationKeys, setLocationKeys ] = useState([])
    const history = useHistory()

    useEffect(() => {
        return history.listen(location => {
            if (history.action === 'PUSH') {
                setLocationKeys([ location.key ])
            }

            if (history.action === 'POP') {
                if (locationKeys[1] === location.key) {
                    setLocationKeys(([ _, ...keys ]) => keys)

                    // Handle forward event

                } else {
                    setLocationKeys((keys) => [ location.key, ...keys ])
                    alert("You`re about to lose all of your progress")
                    // Handle back event

                }
            }
        })
    }, [ locationKeys, ])

}*/

function Avatar(props) {
    return(
        <div>
            <img width= "240" height = "290"
                 src={props.profilePictures[props.currentProfilePicture].name}
                 alt={props.profilePictures[props.currentProfilePicture].description}
            /><br/>
            <button onClick = {() => props.solvePictureChange(-1)}>prev</button>
            <button onClick = {() => props.solvePictureChange(1)}>next</button>
        </div>
    )
}

function CallPictures() {

    const [profilePictures, setProfilePictures] = useState([]);
    const [currentProfilePicture, setCurrentPicture] = useState(0);
    const [render, setRender] = useState(true);



    useEffect(() => {
        fetch("http://localhost:8080/profile-pictures/", {method: 'GET'})
            .then(response => response.json())
            .then(body => setProfilePictures(body));


    }, []);


    function solvePictureChange(number) {
        if (currentProfilePicture + number < profilePictures.length && currentProfilePicture + number > -1 ) {
            setCurrentPicture(currentProfilePicture + number)
        }
        if (currentProfilePicture + number < 0) {
            setCurrentPicture(profilePictures.length-1)
        }
        if (currentProfilePicture + number > profilePictures.length-1) {
            setCurrentPicture(0)
        }
    }


    return (
        <div>
            <div>
                {render? <button onClick={ () => {setRender(false)}}>Choose Avatar</button> :
                    <Avatar
                        solvePictureChange = {solvePictureChange}
                        profilePictures = {profilePictures}
                        currentProfilePicture = {currentProfilePicture}
                    />}
                <p>{currentProfilePicture}</p>
                <p>{profilePictures.length}</p>
            </div>
            <>------------------------------------</>
            <div style = {{borderStyle: "solid"}}>
                {profilePictures.map( element =>
                <div key = {element.id}>
                    <img
                        src= {element.name}
                        alt={element.description}
                    />
                    <p>{element.description}</p>
                </div>)}
            </div>
        </div>
    )
}


function Testing() {
    return(
        <div className="Not-Found-Page">
            <div>
                <h1><strong>THIS IS A TEST PAGE</strong></h1>
            </div>
            <div>
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
            <div>
                <ButtonControl
                    eventID = {question.eventID}
                    eventType = {question.eventType}
                    author = {question.author}
                    buttons = {question.buttons}
                    description = {question.description}
                    lives =  {user.lives}
                    points = {user.points}
                    pointsGiven = {question.pointsGiven}
                /> {/*info from "DB"(↓const question↓) goes to the button menu(ButtonControl)↑
                    There it goes to the question description and buttons */}
                <CallPictures />
            </div>
        </div>

    );
}
// eslint-disable-next-line
{/*↓local pseudo DB↓ */}
const user = {
    lives : 3,
    points : 0
}

const question = { 
    eventID : 1 ,
    eventType : "Meta",
    pointsGiven: "1",
    author : "Tellie",
    description : "Choose good or bad",
    buttons : {
        1 : "Good answer",
        2 : "Bad answer"
    }
}



export default Testing;