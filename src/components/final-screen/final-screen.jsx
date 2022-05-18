import '../../css/final-screen.css';


function FinalScreen(props){





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
      </div>
   )
}


export default FinalScreen;