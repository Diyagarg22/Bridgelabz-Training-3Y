
 // Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    // Print total salary
    console.log("Total Salary:", salary);

    // Change the global variable
    bonus = bonus + 1000;
    console.log("Updated Global Bonus:", bonus);
}

// Test both conditions
calculateSalary(true);
calculateSalary(false);

// Global variable is accessible outside the function
console.log("Final Global Bonus:", bonus);
