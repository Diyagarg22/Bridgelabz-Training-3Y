
// Q6: Person → Faculty → Professor

// Level 1: Person
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function () {
    console.log("Name:", this.name);
};

// Level 2: Faculty
function Faculty(name, department) {
    Person.call(this, name);

    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function () {
    console.log("Department:", this.department);
};

// Level 3: Professor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);

    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function () {
    console.log("Subject:", this.subject);
};

// Create Professor object
const professor1 = new Professor(
    "Mr. Sharma",
    "Computer Science",
    "JavaScript"
);

// Access all methods
professor1.showPerson();
professor1.showFaculty();
professor1.showProfessor();

/*
Output:
Name: Mr. Sharma
Department: Computer Science
Subject: JavaScript
*/
