import {update} from "firebase/database";
import {dbRef} from "../../firebase";
import {newEventSave} from "../templates/saveTemplates";




const saveGame = (id,save,isLoggedIn,disabledApps,currentProfilePicture) => {
    if (isLoggedIn){
        const updates = {};
        const newSave = save;
        newSave["profilePictureId"] = currentProfilePicture;
        updates['/save/' + id] = newSave;
        let eventSaveTemp = newEventSave;
        for (const app in disabledApps) {
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
