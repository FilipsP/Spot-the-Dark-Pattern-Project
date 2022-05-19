import '../../css/final-screen.css';
import {useEffect, useState} from "react";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
import saveGame from "../functions/saveGame";



const Stats = (props) => {


    return(
        <div className='final-text'>
            <h1>{props.element.characterName}</h1>
            <p>Points: {props.element.pointsOwned}</p>
            <p>Lives: {props.element.livesOwned}</p>
            -------------------------
        </div>
    )
}


function FinalScreen(props){

    const [results,setResults] = useState([]);


    useEffect(() => {
        saveGame(props.userID, props.save,props.isLoggedIn, props.disabledApps).catch(error => console.log('There was an error:' + error))
        get(child(dbRef, '/save/')).then((snapshot) => {
            if (snapshot.exists()) {
                setResults(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    },[props.disabledApps, props.isLoggedIn, props.save, props.userID])





    const winner = props.save.livesOwned > 0
   return(
       <div className='container'>
        {winner?
         <div >
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
           <button className='share-button' onClick={()=>{alert("Thanks a lot for sharing")}}>Share statistics</button><br/>
           <a href="https://forms.gle/qwAwGdWHoxsYS36H6"><button className='share-button' >Leave your feedback</button></a>
           <ul>{results.map(element => <Stats key = {results[element]} element={element}/>)}</ul>
      </div>
   )
}


export default FinalScreen;