


class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus to monthly salary
    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Create five employee objects
const employees = [
    new Employee(1, "Rahul", "IT", 30000),
    new Employee(2, "Priya", "HR", 25000),
    new Employee(3, "Aman", "Sales", 28000),
    new Employee(4, "Neha", "IT", 40000),
    new Employee(5, "Ravi", "Finance", 35000)
];

// Apply 10% bonus to the first employee
employees[0].applyBonus(10);

// Calculate annual salary of each employee
console.log("Employee Annual Salaries:");

employees.forEach(employee => {
    console.log(
        employee.name + ": Rs." + employee.getAnnualSalary()
    );
});

// Calculate total annual company payout
const totalAnnualPayout = employees.reduce(
    (total, employee) => {
        return total + employee.getAnnualSalary();
    },
    0
);

console.log("\nTotal Annual Company Payout:");
console.log("Rs." + totalAnnualPayout);
