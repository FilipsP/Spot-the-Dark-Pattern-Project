import '../css/final-screen.css';


function FinalScreen(props){

    const winner = props.save.livesOwned > 0
   return(
       <>
       {winner?
         <div className='container'>
            <h1>You won</h1>
            <p className='final-text'>You have successfully completed the game!</p>
            <button className='share-button'>Share statistics</button>
         </div>
           :
           <div className='container'>
               <h1>You lost</h1>
               <p className='final-text'>Oops...</p>
               <button className='share-button'>Leave your feedback</button>
           </div>}
      </>
   )
}


export default FinalScreen;