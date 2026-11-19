
// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary() {

    // Local variables
    let salary = 40000;
    let isPermanent = true;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    // Print total salary
    console.log("Total Salary: Rs." + salary);

    // Change local variable
    isPermanent = false;

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log("Salary after changing status: Rs." + salary);
}

// Function call
calculateSalary();

// Global bonus remains unchanged
console.log("Global Bonus:", bonus);
