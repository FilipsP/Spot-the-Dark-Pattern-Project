import "./event.css";
import {Link} from "react-router-dom";







function GameEvent(props){
    return(
        <div>
            <div className='modal-background'>
                <div className="form-container event-container">
                    <p className='event-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                    <div className='buttons-container' onClick={() => {props.closeEvent(false)}}>
                        <Link to="/main-menu">
                            <button className='event-button'>Good answer</button>
                            <button className='event-button'>Bad answer</button>
                        </Link>
                </div>
                </div>

            </div>
        </div>
    )
}


export default GameEvent;