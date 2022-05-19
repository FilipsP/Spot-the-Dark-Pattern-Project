import {update} from "firebase/database";
import {dbRef} from "../../firebase";
import {newEventSave} from "../templates/saveTemplates";


const clearSave = (id,save) => {
    const clearedSave = {
        characterName: save.characterName,
        spamMailNumber: 0,
        livesOwned: 3,
        pointsOwned: 0,
        profilePictureId: save.profilePictureId
    };


    const updates = {};
    updates['/save/' + id] = clearedSave;
    updates['/eventSave/' + id] = newEventSave;
    return update(dbRef, updates)
        .then(()=>alert("Successfully cleared"))
        .catch(() => console.error("Oops, error while clearing save"))

}
export default clearSave
