
// Customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase
let lowerFeedback = feedback.toLowerCase();

// Count words
let words = feedback.split(" ");
let wordCount = words.length;

// Check negative words
if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
}
else {
    console.log("Positive Feedback");
}

// Display word count
console.log("Total Words:", wordCount);
