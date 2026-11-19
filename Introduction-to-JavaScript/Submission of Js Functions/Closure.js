
// Q7: Closure Example

function makeMultiplier(multiplier) {

    // Inner function remembers multiplier
    return function (number) {
        return number * multiplier;
    };
}

// Create multiplier functions
const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const quadruple = makeMultiplier(4);

// Call the returned functions
console.log(triple(5));      // 15
console.log(double(5));      // 10
console.log(quadruple(5));   // 20
