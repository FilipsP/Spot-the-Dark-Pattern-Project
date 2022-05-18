/*import "../../css/apps.css";
import "../../css/browser.css";
import redditBackground from "../../img/apps-background/reddit_bg.png";
import { useState} from 'react';
import GameEvent from '../modals/GameEvent';

function Reddit(props) {
   const [openEvent, setEvent] = useState(false);
   const [eventNumber, setEventNumber] = useState(0);
   const [event, changeEvent] = useState([{
      id:1,
      name:"Fake as fuck",
      description:"You see a picture of a hated politician in an embarrassing situation. The picture looks fake, but it does not look like a meme. What do you do?",
      positive:"I click on the picture and go read the comments to figure out what exactly is going on. ",
      negative:"I upvote the post and scroll to the next post",
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
                        <input className='browser-input' type="text" readOnly value="https://www.reddit.com/"></input>
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
                     <img className='background-image' src={redditBackground} alt="amazon background"  onClick={() => {setEvent(true)}}></img>
                  </div>
                  {openEvent &&
                     <GameEvent
                         app = "Reddit"
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

export default Reddit;*/