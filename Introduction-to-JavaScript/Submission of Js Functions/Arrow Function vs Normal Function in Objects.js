
// Q3: Arrow Function and this

const user = {
    name: "Diya",

    // Arrow function
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Output: undefined (in Node.js at the top level)

// Correct solution using a normal function
const correctUser = {
    name: "Diya",

    showName: function () {
        console.log(this.name);
    }
};

correctUser.showName();

// Output: Diya
