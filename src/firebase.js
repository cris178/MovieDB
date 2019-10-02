// src/firebase.js
import firebase from "firebase"

// PASTE FIREBASE CODE HERE (before "export default firebase;")
// It should look similar to the following:
// // Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBfCT-N2j_zBNKFg8mFhLvOYst15n2VwcE",
    authDomain: "moviedbee.firebaseapp.com",
    databaseURL: "https://moviedbee.firebaseio.com",
    projectId: "moviedbee",
    storageBucket: "",
    messagingSenderId: "654778769458",
    appId: "1:654778769458:web:167d661802c82c3c385c2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
