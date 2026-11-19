
// Given number
let x = 16.75;

// Perform mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);

// Random number between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary
console.log(`
Math Utility Dashboard

Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Cube: ${cube.toFixed(2)}
Random Number: ${randomNumber}
`);
