
// Marks of five subjects
let marks = [90, 85, 78, 88, 92];

// Calculate total marks
let total = 0;

for (let mark of marks) {
    total += mark;
}

// Calculate average and percentage
let average = total / marks.length;
let percentage = (total / 500) * 100;

// Check if any subject has less than 35 marks
let isDetained = marks.some(mark => mark < 35);

// Display results
console.log("Total Marks:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Check promotion criteria
if (isDetained || percentage < 50) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
