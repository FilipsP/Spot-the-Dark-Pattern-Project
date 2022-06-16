import '../../css/final-screen.css';
import {useEffect, useState} from "react";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
import saveGame from "../../functions/saveGame";
import EndScreenGiveawayAlert from "../noteContent/EndScreenGiveawayAlert";
import {CSSTransition} from "react-transition-group";



const Stats = (props) => {


    return(
        <li className='final-text'>
            <h1>{props.element.characterName}</h1>
            <p>Finished on: {props.element.lastAnswerTime}</p>
            <p>Points: {props.element.pointsOwned}</p>
            <p>Lives: {props.element.livesOwned}</p>
            -------------------------
        </li>
    )
}


function FinalScreen(props){

    const [results,setResults] = useState([]);
    const [dataFarm,setDataFarm] = useState(false);
    const [winner,setWinner] = useState(false);




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


   return(
       <>

           <div className='container'>
               {winner?
                   <div>
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
                 <button className='share-button' id = "end-game-modal" onClick={()=>{setDataFarm(true)}}><a href='#end-game-modal'>Click for the free gifts</a></button><br/>
               <CSSTransition
                   in={dataFarm}
                   timeout={300}
                   classNames="animated-profile-sidebar"
                   unmountOnExit
               >
                   <EndScreenGiveawayAlert  modal = {setDataFarm}/>
               </CSSTransition>

                 <a href="https://forms.gle/qwAwGdWHoxsYS36H6"><button className='share-button' >Leave your feedback</button></a>
                 <ul>{results.map((element) =>  <Stats key={results.indexOf(element).toString()} element={element}/>)}</ul>
           </div>
       </>
   )
}


export default FinalScreen;