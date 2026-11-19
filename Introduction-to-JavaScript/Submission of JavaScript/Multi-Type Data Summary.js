
// Different JavaScript data types
let userName = "Diya";
let age = 20;
let isStudent = true;
let subjects = ["Java", "JavaScript", "DSA"];
let user = { city: "Mathura", course: "B.Tech" };
let address = null;
let result;

let report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "Array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Result", Value: result, Type: typeof result }
];

// Display formatted report
console.table(report);
