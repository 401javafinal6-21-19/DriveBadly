# Snek
Java 401d3 final project component [Snake Game](https://drivebadly.firebaseapp.com/)

This part of our Java final project used HTML5 Canvas and JavaScript to build a snake game. It listens to Cloud Firebase Firestore to make controlling from our [Android App](https://github.com/401javafinal6-21-19/Car-Driver) or our [Twitch Chat Bot](https://glitch.com/~drivebadlybot) possible. 

Project includes an HTML [testing page](public/_test_/test.html).

## Snake Web App
### Snake Game Features
1. **Hosted on firebase**
2. **Donut implementation** - when the snake moves off one side it reappears on the opposing side. 
3. **Collision** - the game restarts when the snake collides with itself. 

### Snake References and Links
[Snake App](https://drivebadly.web.app/) Hosted on Firestore 

[Firebase Docs](https://firebase.google.com/docs/web/setup)

[Firebase Hosting](https://firebase.google.com/docs/hosting)

[Firestore Updates Listeners](https://firebase.google.com/docs/firestore/query-data/listen)

[Snake Reference](https://github.com/Mariacristina88/Snake-game) by MariaCristina88

## Twitch Bot
### Twitch Bot Features
1. **Hosted on Glitch** - Server wakes only when needed, sleeps when not
2. **DriveBadlyBot** Uses TMI.js to listen for the below discrete messages in twitch chat

| Command     | Functionality                         | 
|-------------|---------------------------------------|
| !about      | Tells the chat how to use the bot     | 
| !changeGame | (owner only) changes game stat        |
| !left       | Moves snake/car to the left           |
| !right      | Moves snake/car to the right          |
| !up         | Moves snake up, accelerates car       |
| !down       | Moves snake down, stops car           |


### Twtich References and Links

[DriveBadlyBot](https://glitch.com/~drivebadlybot) hosted on Glitch

[See Us on Twitch](https://www.twitch.tv/michorjay)

[Twitch Dev Docs](https://dev.twitch.tv/docs/irc/)




