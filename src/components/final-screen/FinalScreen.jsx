import '../../css/final-screen.css';
import {useEffect, useRef, useState} from "react";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
import saveGame from "../../functions/saveGame";
import EndScreenGiveawayAlert from "../noteContent/EndScreenGiveawayAlert";
import {CSSTransition} from "react-transition-group";
import ProgressNote from "../modals/ProgressNote";
import FinalScreenTutorial from "../noteContent/FinalScreenTutorial";
import {getComparedResults} from "../../functions/getComparedResults";

const borderStyle = {
    borderBottom: "solid 0.1rem",
    borderBottomColor:"rgba(0,0,0,0.3)"
}

const Stats = (props) => {

    return(
        <li style={borderStyle} className='final-text'>
            <h1>{props.element.characterName}</h1>
            <p>Finished on: {props.element.lastAnswerTime}</p>
            <p>Points: {props.element.pointsOwned}</p>
            <p>Wrong Answers: {props.element.wrongAnswers}</p>
        </li>
    )
}


function FinalScreen(props){

    const [results,setResults] = useState([]);
    const [dataFarm,setDataFarm] = useState(false);
    const [tutorial,setTutorial] = useState(true);
    const [userResults,setUserResults] = useState({});



    const modal = useRef(null)

    useEffect(() => {
        get(child(dbRef, '/save/')).then((snapshot) => {
            if (snapshot.exists()) {
                setResults(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        // eslint-disable-next-line
    },[])


    const handleDataFarm = ()=>{
        setDataFarm(true)
            modal.current.focus();
    }

    useEffect(()=>{
        if (results) {
            setUserResults(getComparedResults(props.save, results))
            saveGame(props.userID, props.save,props.isLoggedIn, props.disabledApps,props.currentProfilePicture)
        }
    // eslint-disable-next-line
    },[props.save, results])


    return(
       <>
           {tutorial&&
               <ProgressNote
                   content = {<FinalScreenTutorial/>}
                   continue = {setTutorial}
                   state = {tutorial}

               />
           }
           <div className='container'>
               <div style={borderStyle}>
                   <h1>You won</h1><p className='final-text'>Hurray! Hurray! Hurray!</p>
                   <p className='final-text'>You have successfully completed the game!</p>
                   <h1>Results:</h1>
                   <p className='final-text'>You got {props.save.pointsOwned} points. More than {userResults.betterThan} % of players</p>
                   <p className='final-text'>You made {props.save.wrongAnswers} wrong answers. Less than {userResults.lessMistakes} % of players</p>
               </div>
               <button className='share-button' id = "end-game-modal" ref={modal}  onClick={()=>{handleDataFarm()}}>Click for the free gifts</button><br/>
               <CSSTransition
                   in={dataFarm}
                   timeout={300}
                   classNames="animated-profile-sidebar"
                   unmountOnExit
               >
                   <EndScreenGiveawayAlert  modal = {setDataFarm}/>
               </CSSTransition>

                 <a href="https://forms.gle/qwAwGdWHoxsYS36H6"><button className='share-button' >Leave your feedback</button></a>
                 <ul style={{listStyleType:"none"}}>{results.map((element) =>  <Stats key={results.indexOf(element).toString()} element={element}/>)}</ul>
           </div>
       </>
   )
}


export default FinalScreen;