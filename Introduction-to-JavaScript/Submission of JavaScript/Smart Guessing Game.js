
// Generate random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess
let userGuess = 25;

// Compare user's guess with secret number
if (userGuess === secretNumber) {
    console.log("Correct guess!");
}
else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    }
    else if (userGuess > secretNumber) {
        console.log("Too high");
    }
    else {
        console.log("Too low");
    }
}
