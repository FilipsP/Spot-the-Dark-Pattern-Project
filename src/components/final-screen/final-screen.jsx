import '../../css/final-screen.css';
import {useEffect, useRef, useState} from "react";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
import saveGame from "../../functions/saveGame";
import EndScreenGiveawayAlert from "../noteContent/EndScreenGiveawayAlert";
import {CSSTransition} from "react-transition-group";
import ProgressNote from "../modals/progressNote";
import FinalScreenTutorial from "../noteContent/FinalScreenTutorial";

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
    const [winner,setWinner] = useState(false);
    const [tutorial,setTutorial] = useState(true);


    const modal = useRef(null)

    useEffect(() => {
        saveGame(props.userID, props.save,props.isLoggedIn, props.disabledApps,props.currentProfilePicture)
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

    useEffect(()=>{
        setWinner(props.save.pointsOwned > 5)
    },[props.save.pointsOwned])

    const handleDataFarm = ()=>{
        setDataFarm(true)
            modal.current.focus();
    }

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
               {winner?
                   <div style={borderStyle}>
                    <h1>You won</h1>
                     <p className='final-text'>Hurray! Hurray! Hurray!</p>
                    <p className='final-text'>You have successfully completed the game!</p>
                    <p className='final-text'>Come back later to refresh those memories ;)</p>
                 </div>
                   :
                   <div >
                       <h1>You lost</h1>
                       <p className='final-text'>Oops...</p>
                       <p className='final-text'>Don`t be afraid to try again!</p>
                       <p className='final-text'>To start all over just refresh this page by the refresh icon or pressing "F5"</p>

                   </div>}
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