/*import "./apps.css";
import "./browser.css";
import amazonBackground from "../../img/apps-background/amazon_bg_2.png";
import { useState} from 'react';
import GameEvent from '../modals/GameEvent';
import {useEffect} from "react";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";



function Amazon(props){
    const [openEvent, setOpenEvent] = useState(false);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [eventNumber, setEventNumber] = useState(1);
    const [event, setEvent] = useState([]);

    useEffect(() => {
        get(child(dbRef, `event/amazon`)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true);
                setEvent([snapshot.val()]);
                setIsLoading(false);
                console.log("Amazon events received");
                return setEvent(snapshot.val());
            } else {
                console.log("oops... no events here");
            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
        });
    },[setOpenEvent])
    //<img src= "../../img/avatars/casual.png" alt= "avatar"/>

    return(
        <div>
            {isLoading && <h1>Event is loading...</h1>}
            {isError && <h1>Error :(</h1>}
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
                        <img className='background-image' src={amazonBackground} alt="amazon background"  onClick={() => {setOpenEvent(true)}}></img>
                    </div>
                    {openEvent &&
                        <GameEvent
                            app = "Amazon"
                            closeEvent={setOpenEvent}
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

export default Amazon;*/