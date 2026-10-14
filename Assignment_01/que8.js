```javascript
// Q8.js

let currentSalary = 30000;
let annualIncrementRate = 10;
let salary = currentSalary;

let salaryReport = [];

// Calculate salary for the next 5 years
for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;

    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

// Display yearly salary
console.table(salaryReport);
```