import {update} from "firebase/database";
import {dbRef} from "../../firebase";





const saveGame = (id,save,isLoggedIn,disabledApps,currentProfilePicture) => {
    const clearEventSave = {
        Amazon: false,
        CNN: false,
        Gmail: false,
        Instagram: false,
        Meta: false,
        Reddit: false
    }
    if (isLoggedIn){
        const updates = {};
        const newSave = save;
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
    console.error("Could not save")
}
export default saveGame
