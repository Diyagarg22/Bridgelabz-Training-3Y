
// Q5: Person and Student Inheritance

// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent prototype method
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    // Call parent constructor
    Person.call(this, name);

    this.branch = branch;
}

// Connect Student prototype to Person prototype
Student.prototype = Object.create(Person.prototype);

// Restore the constructor reference
Student.prototype.constructor = Student;

// Child prototype method
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// Create Student object
const student1 = new Student("Diya", "Computer Science");

// Access both methods
student1.showName();
student1.showBranch();

// Check prototype chain
console.log(student1 instanceof Student); // true
console.log(student1 instanceof Person);  // true
