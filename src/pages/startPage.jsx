import "../css/start-page.css"
import { Link } from 'react-router-dom';



function startPage() {
return(<div>
    <div className="container">
        <h1 className="main-heading">Spot the Dark Pattern</h1>
        <div className="game-description game-description-container">Hello Friend!<br></br>
            <p>You are going to enter a game related to dark patterns - bad things all over the internet that try to
            manipulate you with different mechanics.</p>
            <p>You will be given options on different situations - the choice is yours!
            Please remember - you will only have <strong>3</strong> lives, otherwise - game over.</p>
            <p className="game-description">Good luck!</p>
            <p className="game-description">Kr,Development team.</p>

        </div>
        <Link to="login-register">
            <button className="start-game-btn">Start game</button>
        </Link>
       
        
    </div>
    
</div>)
}

export default startPage;