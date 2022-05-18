/*import "../../css/apps.css";
import "../../css/browser.css";
import metaBackground from "../../img/apps-background/meta_bg.png";
import { useState} from 'react';
import GameEvent from '../modals/GameEvent';

function Meta(props) {
   const [openEvent, setEvent] = useState(false);
   const [eventNumber, setEventNumber] = useState(0);
   const [event, changeEvent] = useState([{
      id:1,
      name:"Game invite",
      description:"You see a game invitation in your inbox on social media. How do you react?",
      positive:"I ignore the invite and do not play the game.",
      negative:"Find out what game it is.",
      points: 2,
      lives: 0,
   },{
      id:2,
      name:"Extra shit",
      description:"The game asks for your credit card details and a subscription to let you play.",
      positive:"I do not enter any data and exit the game.",
      negative:"I enter my credit card details and play the game.",
      points: 1,
      lives: 1
   }]);

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
                        <input className='browser-input' type="text" readOnly value="https://www.meta.com/"></input>
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
                     <img className='background-image' src={metaBackground} alt="amazon background"  onClick={() => {setEvent(true)}}></img>
                  </div>
                  {openEvent &&
                     <GameEvent
                         app = "Meta"
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

export default Meta;*/