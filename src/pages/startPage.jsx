import "../css/start-page.css"
import { Link } from 'react-router-dom';


function startPage() {
return(<div>
    <div className="container">
        <h1 className="main-heading">Spot the Dark Pattern</h1>
        <div className="game-description game-description-container">Hello Friend!<br></br>
            You are going to enter a game related to dark patterns - bad things all over the internet that try to
            manipulate you with different mechanics.
            You will be given options on different situations - the choice is yours!
            Please remember - you will only have 3 lives, otherwise - game over.
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