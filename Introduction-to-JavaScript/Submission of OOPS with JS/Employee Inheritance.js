
"use strict";

// Parent class
class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing general employee work.");
    }
}

// Child class
class Manager extends Employee {

    // Override parent method
    work() {
        console.log(this.name, "is managing the team.");
    }
}

// Create objects
const employee1 = new Employee("Amit", "HR");
const employee2 = new Manager("Diya", "IT");

// Call methods
employee1.work();
employee2.work();

// Runtime polymorphism
const employees = [employee1, employee2];

employees.forEach(employee => {
    employee.work();
});
