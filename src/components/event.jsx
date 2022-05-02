import "./event.css";

function GameEvent(){
    return(
        <div>
            <div className='modal-background'>
                <div className="form-container event-container">
                    <p className='event-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                    <div className='buttons-container'>
                    <button className='event-button'>Good answer</button>
                    <button className='event-button'>Bad answer</button>
                </div>
                </div>

            </div>
        </div>
    )
}


export default GameEvent;