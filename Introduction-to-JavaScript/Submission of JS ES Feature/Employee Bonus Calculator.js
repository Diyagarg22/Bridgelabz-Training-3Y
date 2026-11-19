
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let employee of employees) {

    try {
        // Convert strings into numbers
        let salary = Number(employee.salary);
        let years = Number(employee.years);

        // Validate employee information
        if (
            !employee.name ||
            !Number.isFinite(salary) ||
            !Number.isFinite(years)
        ) {
            throw new Error("Invalid employee data");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        }
        else {
            bonus = salary * 0.05;
        }

        let totalSalary = salary + bonus;

        // Display employee details
        console.log(`
Employee: ${employee.name}
Salary: Rs.${salary}
Experience: ${years} years
Bonus: Rs.${bonus}
Total Salary: Rs.${totalSalary}
--------------------------`);

    }
    catch (error) {
        console.log("Error:", error.message);
    }
}
