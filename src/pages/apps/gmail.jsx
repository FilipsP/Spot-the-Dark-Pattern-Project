import "./apps.css";
import "./browser.css";
import gmailBackground from "../../img/apps-background/gmail_bg.png";
import { useState} from 'react';
import GameEvent from '../../components/GameEvent';

function Gmail(props) {
   const [openEvent, setEvent] = useState(false);
   const [eventNumber, setEventNumber] = useState(0);
   const [event, changeEvent] = useState([{
       id:1,
       name:"Spam",
       description:"You receive a promotional email in your inbox. Do you mark spam emails as junk?",
       positive:"Yes, always!",
       negative:"No, never...",
       points: 2,
       lives: 0,
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
                        <input className='browser-input' type="text" readOnly value="https://www.gmail.com/"></input>
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
                     <img className='background-image' src={gmailBackground} alt="gmail background"  onClick={() => {setEvent(true)}}></img>
                  </div>
                  {openEvent &&
                     <GameEvent
                         app = "Gmail"
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

export default Gmail;