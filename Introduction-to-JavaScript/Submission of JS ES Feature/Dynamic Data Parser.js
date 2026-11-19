
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numbers
let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {

    // Convert value into different data types
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    // Check invalid values
    if (
        value === "NaN" ||
        value === " " ||
        value === "100px" ||
        !Number.isFinite(numberValue)
    ) {
        invalidNumbers.push(value);

        console.log(`Invalid Value: ${stringValue}`);
    }
    else {
        validNumbers.push(numberValue);

        console.log(`
Original Value: ${stringValue}
Number: ${numberValue}
Boolean: ${booleanValue}
String: ${stringValue}
-------------------------`);
    }
}

// Final report
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
