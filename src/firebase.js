



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getDatabase,ref} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB8fRZxZgqI8HRhuve6z34WEE92SwLftho",
    authDomain: "dark-patterns-project.firebaseapp.com",
    databaseURL: "https://dark-patterns-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dark-patterns-project",
    // storageBucket: "dark-patterns-project.appspot.com",
    // messagingSenderId: "1081125825911",
    // appId: "1:1081125825911:web:bc8caad37699d908930572",
    // measurementId: "G-RTBRBQ7T8Z"
};
export const app = initializeApp(firebaseConfig);
export const dbRef = ref(getDatabase());
export const db = getDatabase();


