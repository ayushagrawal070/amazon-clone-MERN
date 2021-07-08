import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQESoPZq48c6Vstlz8zEBbvrVZiQj8_2U",
    authDomain: "clone01-c8301.firebaseapp.com",
    projectId: "clone01-c8301",
    storageBucket: "clone01-c8301.appspot.com",
    messagingSenderId: "69836042286",
    appId: "1:69836042286:web:1081f76599a7bf18c42fbf",
    measurementId: "G-SG88H2WJDG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };