import "./apps.css";
import "./browser.css";
import amazonBackground from "../../img/amazon_bg_2.png";
import {useState} from 'react';
import GameEvent from '../../components/GameEvent';

function Amazon(){

    const [openEvent, setEvent] = useState(false);


    return(
        <div>
            <div className='container'>
                <div className='browser-container'>
                    <div className="row">
                        <div className='column left'>
                            <span className='dot red-dot'></span>
                            <span className='dot yellow-dot'></span>
                            <span className='dot green-dot'></span>
                        </div>
                        <div className='column middle'>
                            <input className='browser-input' type="text" readOnly value="https://www.amazon.com/"></input>
                        </div>
                        <div className="column right">
                            <div style={{float:"right"}}>
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>
                            </div>
                            
                    </div>
                    </div>
                    <div className='content'>
                    <hr></hr>
                        <img className='background-image' src={amazonBackground} alt="amazon background"  onClick={() => {setEvent(true)}}></img>
                    </div>
                    {openEvent &&
                        <GameEvent closeEvent={setEvent}

                    />}
                </div>
            </div>
        </div>
    )
}

export default Amazon;