
// Global counter
let count = 0;

// Increment function
function increment() {
    count++;
    console.log("Incremented Count:", count);
}

// Decrement function
function decrement() {
    count--;
    console.log("Decremented Count:", count);
}

// Nested function example
function counterDetails() {

    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}

// Simulate button clicks
increment();
increment();
increment();

decrement();

counterDetails();
