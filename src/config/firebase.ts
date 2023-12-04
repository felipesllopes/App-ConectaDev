import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDmXMPlzKGkWZVM8qOmTxDGEKwTa2_rpxw",
    authDomain: "auth-4499c.firebaseapp.com",
    databaseURL: "https://auth-4499c-default-rtdb.firebaseio.com",
    projectId: "auth-4499c",
    storageBucket: "auth-4499c.appspot.com",
    messagingSenderId: "1064977555174",
    appId: "1:1064977555174:web:8f48a3046c27df7fa3e527",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
