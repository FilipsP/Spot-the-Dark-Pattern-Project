import {update} from "firebase/database";
import {dbRef} from "../firebase";





const saveGame = (id,save,isLoggedIn,disabledApps,currentProfilePicture) => {
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
    if (isLoggedIn){
        newSave["profilePictureId"] = currentProfilePicture;
        updates['/save/' + id] = newSave;
        let eventSaveTemp = clearEventSave;
        for (const app in disabledApps) {
            console.log("disabled app: "+disabledApps[app])
            eventSaveTemp[disabledApps[app]] = true
        }
        updates['/eventSave/' + id] = eventSaveTemp
        return update(dbRef, updates)
            .catch(()=>(console.error("Oops, error while saving")))
    }
    return console.log("Log in to save progress")
    // console.error("Error while saving, no allSaves available for non logged in player")
    // return alert("Failed to save")
}
export default saveGame
