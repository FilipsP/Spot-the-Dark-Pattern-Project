import "../css/welcome.css";
import "../css/pc.css";
import { Link } from 'react-router-dom';

function WelcomePage(){
    return (
    <div>
        <div className='container'>
            <div className='container'>
                <div className='desktop'>
                    <div className='pc-content'>
                        <p className="file-name">welcome.txt</p>
                        <hr></hr>
                        <div className='welcome-text'>
                            <p>Hello Friend!</p>
                            <p>You are going to enter a game related to dark patterns - bad things all over the internet that try to manipulate you with different mechanics.</p>
                        <p>You will be given options on different situations - the choice is yours!</p>
                        <p>Please remember - you will only have 3 lives, otherwise - game over.</p>
                        <p>Good luck!</p>
                        <p>Kr,</p>
                        <p>Development team.</p>
                        <Link to="/main-menu">
                            <button className="begin-button">Begin game</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default WelcomePage;