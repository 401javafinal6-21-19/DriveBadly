const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCsHJsr-YOoR0w-xDRT0pM5O4iPXS7vwk8",
    authDomain: 'a-car-you-can-only-drive-badly.firebaseapp.com',
    projectId: 'a-car-you-can-only-drive-badly'
});

var db = firebase.firestore();

db.collection("driving").doc("snake")
    .onSnapshot(function (doc) {
        console.log("Current data: ", doc.data());
    });
