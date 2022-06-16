import {update} from "firebase/database";
import {dbRef} from "../firebase";



const clearSave = (id,save) => {

    const clearedSave = {
        characterName: save.characterName,
        spamMailNumber: 0,
        wrongAnswers: 0,
        pointsOwned: 0,
        profilePictureId: save.profilePictureId
    };

    const cleanEvents = {
        Amazon: false,
        CNN: false,
        Gmail: false,
        Instagram: false,
        Meta: false,
        Reddit: false
    };


    const updates = {};
    updates['/save/' + id] = clearedSave;
    updates['/eventSave/' + id] = cleanEvents;
    return update(dbRef, updates)

}
export default clearSave
