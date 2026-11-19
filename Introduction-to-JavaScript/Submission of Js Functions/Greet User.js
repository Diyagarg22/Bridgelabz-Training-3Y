
// Q1: Callback Function

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Execute the callback function
    callback();
}

// Calling the function
greetUser("Diya", showEndMessage);

/*
Output:
Hello Diya
Welcome to the course!
*/
