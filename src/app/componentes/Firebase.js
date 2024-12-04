import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth} from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyA5OgFn-7QRpthDJcz32GmHcBOLDDqtx6Y",
    authDomain: "teste-com-firebase-c28bd.firebaseapp.com",
    projectId: "teste-com-firebase-c28bd",
    storageBucket: "teste-com-firebase-c28bd.appspot.com",
    messagingSenderId: "379473818522",
    appId: "1:379473818522:web:18a3c607f112447dc08023"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)