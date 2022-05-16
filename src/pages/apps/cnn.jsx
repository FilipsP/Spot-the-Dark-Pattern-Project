import "./apps.css";
import "./browser.css";
import cnnBackground from "../../img/apps-background/cnn_bg.PNG";
import { useState} from 'react';
import GameEvent from '../../components/GameEvent';

function CNN(props) {
   const [openEvent, setEvent] = useState(false);
   const [eventNumber, setEventNumber] = useState(0);
   const [event, changeEvent] = useState([{
      id:1,
      name:"Provocation",
      description:"An online news site you don't subscribe to shows a provocative headline, but you can't read the full article. What do you do?",
      positive:"I buy the one-time-right to read the article or subscribe to the newspaper and read the article in full.",
      negative:"I do not mind that I can’t read the full article, I go to the comments section to read what others think and comment my opinion as well.",
      points: 2,
      lives: 0
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
                        <input className='browser-input' type="text" readOnly value="https://www.cnn-news.com/"></input>
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
                     <img className='background-image' src={cnnBackground} alt="cnn background"  onClick={() => {setEvent(true)}}></img>
                  </div>
                  {openEvent &&
                     <GameEvent
                         app = "CNN"
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

export default CNN;