```javascript
// Q1.js

let userName = "Diya";
let currentHour = new Date().getHours();

// Check the current time and greet the user
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}
```