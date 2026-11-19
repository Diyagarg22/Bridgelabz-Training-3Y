
// Q2: Apply Operation

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubledNumbers = applyOperation(numbers, function (num) {
    return num * 2;
});

console.log("Doubled:", doubledNumbers);

// Square each number
const squaredNumbers = applyOperation(numbers, function (num) {
    return num * num;
});

console.log("Squared:", squaredNumbers);

/*
Output:
Doubled: [2, 4, 6, 8]
Squared: [1, 4, 9, 16]
*/
