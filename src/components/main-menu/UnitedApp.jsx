
import "../../css/browser.css";
import {useCallback, useState} from 'react';
import GameEvent from '../modals/GameEvent';
import {useEffect} from "react";
import {child, get} from "firebase/database";
import {dbRef} from "../../firebase";
//import SpotTheDP from "../modals/SpotTheDarkPattern";
import ProgressNote from "../modals/progressNote";
import SpotTheDPAlert from '../noteContent/SpotTheDPAlert';


const background = {
    cursor: "pointer"
}



function UnitedApp(props){
    const [openEvent, setOpenEvent] = useState(false);
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [eventNumber, setEventNumber] = useState(1);
    const [event, setEvent] = useState([]);
    const [note, setNote] = useState(false);
    const [inputEvent, setInputEvent] = useState(false);




    const appName = props.app.toLowerCase()
    useEffect(() => {
        get(child(dbRef, `event/` + appName)).then((snapshot) => {
            if (snapshot.exists()) {
                setIsError(false);
                setIsLoading(true);
                console.log(appName + " events received");
                setEvent(snapshot.val());
                setIsLoading(false);
            } else {
                console.log("oops... no events here");
            }
        }).catch((error) => {
            console.error(error);
            setIsError(true);
        });
        // eslint-disable-next-line
    },[setOpenEvent])
    //<img src= "../../img/avatars/casual.png" alt= "avatar"/>

    useEffect(()=>{
        setNote(true)
    },[])



    const setType = useCallback(() => {
        setInputEvent(false)
        if (event) {
            if (event[eventNumber].type === "input") {
                setInputEvent(true)
            }
            setOpenEvent(true)
        }
    },[event,eventNumber])
    


    return(
        <div>
            {isLoading && <h1>Event is loading...</h1>}
            <div className='container image-container'>
                        <img
                            style={background}
                            className='background-image'
                            src={props.appPath}
                            alt= {appName+" background"}
                            onClick={() => {setType()}}>
                        </img>
                    {openEvent
                        ? <GameEvent
                            app = {props.app}
                            closeEvent={setOpenEvent}
                            showApps = {props.showApps}
                            hidePage = {props.hidePage}
                            handleSaveUpdate = {props.handleSaveUpdate}
                            save = {props.save}
                            event = {event}
                            eventNumber = {eventNumber}
                            setEventNumber={setEventNumber}
                            money = {props.money}
                            setMoney = {props.setMoney}
                            disabledApps={props.disabledApps}
                            setDisabledApps={props.setDisabledApps}
                            handleLastAnswerTiming = {props.handleLastAnswerTiming}
                            inputEvent= {inputEvent}
                            setType = {setType}
                        />
                        :note&&<ProgressNote
                            content = {<SpotTheDPAlert></SpotTheDPAlert>}
                            continue = {setNote}
                            state = {note}
                        />
                    }
                </div>

        </div>
    )
}

export default UnitedApp;