var firebaseConfig = {
    apiKey: "AIzaSyCsHJsr-YOoR0w-xDRT0pM5O4iPXS7vwk8",
    authDomain: "a-car-you-can-only-drive-badly.firebaseapp.com",
    databaseURL: "https://a-car-you-can-only-drive-badly.firebaseio.com",
    projectId: "a-car-you-can-only-drive-badly",
    storageBucket: "a-car-you-can-only-drive-badly.appspot.com",
    messagingSenderId: "382080557027",
    appId: "1:382080557027:web:8bfeeb1722de0fbf"
};


firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// writing to Cloud Firestore database
db.collection("driving").doc("snake")
    .onSnapshot(function (doc) {
        console.log("Current data: ", doc.data().direction);

        switch (doc.data().direction) {
            case "left":
                if (direction != 'right') {
                    direction = 'left';
                }
                break;

            case "right":
                if (direction != 'left') {
                    direction = 'right';
                }
                break;

            case "up":
                if (direction != 'down') {
                    direction = 'up';
                }
                break;

            case "down":
                if (direction != 'up') {
                    direction = 'down';
                }
                break;
        }

    });
