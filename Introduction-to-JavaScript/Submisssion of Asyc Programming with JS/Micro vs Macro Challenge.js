
// Q2: Event Loop Task Order

console.log("Start");

// Macrotask: setTimeout callback
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

// Microtask: Promise callback
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous task
console.log("Synchronous log");

console.log("End");

/*
Expected Output:

Start
Synchronous log
End
Promise callback
setTimeout callback

Explanation:
1. Synchronous code executes first.
2. Promise.then() creates a microtask.
3. setTimeout() creates a macrotask.
4. After synchronous code finishes, JavaScript
   executes microtasks before macrotasks.
5. Therefore, the Promise callback runs before
   the setTimeout callback.
*/
