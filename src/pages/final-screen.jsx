import '../css/final-screen.css';

function FinalScreen(){

   return(
      <div>
         <div className='container'>
            <h1>You lost</h1>
            <p className='final-text'>Oops...</p>
            <button className='share-button'>Leave your feedback</button>
         </div>
      {/*
       * Win page
         <div className='container'>
            <h1>You won</h1>
            <p className='final-text'>You have successfully completed the game!</p>
            <button className='share-button'>Share statictics</button>
         </div>



      */}


      </div>

   )
}


export default FinalScreen;