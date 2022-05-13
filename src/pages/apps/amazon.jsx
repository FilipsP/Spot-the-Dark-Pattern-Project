import "./apps.css";
import "./browser.css";
import amazonBackground from "../../img/apps-background/amazon_bg_2.png";
import { useState} from 'react';
import GameEvent from '../../components/GameEvent';



function Amazon(props){
    const [openEvent, setEvent] = useState(false);
    const [eventNumber, setEventNumber] = useState(0);
    const [event, changeEvent] = useState([{
        id:1,
        name:"Interesting proposition",
        description:"Veebipood pakub lisa-allahindlust -10% kui nende e-maili listiga liitud. Kuidas käitud?",
        positive:"Ei liitu.",
        negative:"Liitun listiga ja saan allahindlust.",
        points: 2,
        lives: 0,
    },{
        id:2,
        name:"Fishing rod",
        description:"Liitudes näed, et allahindlus -10% on vaid valitud toodetele ja sinu soovitud esemele soodustus ei laiene. Kuidas käitud?",
        positive:"Lahkun meililistist.",
        negative:"Valin soodustustega toodet ja ostan neid. Kasumlik.",
        points: 1,
        lives: 1
    }]);

    //<img src= "../../img/avatars/casual.png" alt= "avatar"/>

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
                        <GameEvent
                            app = "Amazon"
                            closeEvent={setEvent}
                            showApps = {props.showApps}
                            hidePage = {props.hidePage}
                            setSave = {props.setSave}
                            save = {props.save}
                            event = {event}
                            eventNumber = {eventNumber}
                            setEventNumber={setEventNumber}
                            money = {props.money}
                            setMoney = {props.setMoney}
                            disabledApps={props.disabledApps}
                            setDisabledApps={props.setDisabledApps}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Amazon;