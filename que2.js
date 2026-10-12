```javascript
// Q2.js

let userName = "Diya";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "HTML", "CSS"];
let user = { city: "Mathura", course: "B.Tech" };
let address = null;
let phoneNumber;

// Store all data in a report
let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Phone", Value: phoneNumber, Type: typeof phoneNumber }
];

// Print the formatted report
console.table(report);
```