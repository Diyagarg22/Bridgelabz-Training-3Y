
"use strict";

// Number of rows
let rows = 4;

// Outer loop controls rows
for (let i = 1; i <= rows; i++) {

    let pattern = "";

    // Inner loop prints stars
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
