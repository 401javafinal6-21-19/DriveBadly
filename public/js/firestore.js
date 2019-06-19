

var db = firebase.firestore();

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
