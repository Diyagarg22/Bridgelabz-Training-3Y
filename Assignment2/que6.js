
 // Counter variable
let count = 0;

// Increase counter
function increment() {
    count++;
    console.log("Count:", count);

    // Nested function
    function showCount() {
        console.log("Count inside nested function:", count);
    }

    showCount();
}

// Decrease counter
function decrement() {
    count--;
    console.log("Count:", count);
}

// Simulate clicks
increment();
increment();
decrement();
increment();
