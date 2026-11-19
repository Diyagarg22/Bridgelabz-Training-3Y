
"use strict";

// Create Student class
class Student {

    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // Calculate average using reduce()
    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    // Calculate grade based on average
    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        }
        else if (average >= 60) {
            return "B";
        }
        else if (average >= 40) {
            return "C";
        }
        else {
            return "F";
        }
    }
}

// Create three student objects
const student1 = new Student("Diya", [85, 90, 80]);
const student2 = new Student("Amit", [65, 70, 60]);
const student3 = new Student("Sara", [30, 35, 25]);

// Store students in an array
const students = [student1, student2, student3];

// Display student results
students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("--------------------");
});
