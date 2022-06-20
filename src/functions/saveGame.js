import {update} from "firebase/database";
import {dbRef} from "../firebase";





const saveGame = (id,save,isLoggedIn,disabledApps,currentProfilePicture,profiles) => {
    const clearEventSave = {
        Amazon: false,
        CNN: false,
        Gmail: false,
        Instagram: false,
        Meta: false,
        Reddit: false
    }
    const updates = {};
    const newSave = save;
    let newID= 0;
    if (isLoggedIn){
        newSave["profilePictureId"] = currentProfilePicture;
        updates['/save/' + id] = newSave;
        let eventSaveTemp = clearEventSave;
        console.log(eventSaveTemp)
        for (const app in disabledApps) {
            console.log("disabled app: "+disabledApps[app])
            eventSaveTemp[disabledApps[app]] = true
        }
        updates['/eventSave/' + id] = eventSaveTemp
        return update(dbRef, updates)
            .then(()=>alert("Successfully saved"))
            .catch(()=>(console.error("Oops, error while saving")))
    }
    if (profiles) {
        for (const profile in profiles) {
            if (newID <= profiles[profile].id) {
                newID = profiles[profile].id + 1
            }
        }
        updates['/save/' + newID] = newSave;
        return update(dbRef, updates)
            .then(()=>console.log("Successfully saved"))
            .catch(()=>(console.error("Oops, error while saving")))
    }
    console.error("Error while saving, no profiles available for non logged in player")
    return alert("Failed to save")
}
export default saveGame
