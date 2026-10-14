
 // Customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

// Check for negative words
let lowerFeedback = feedback.toLowerCase();

if (
    !lowerFeedback.includes("bad") &&
    !lowerFeedback.includes("poor")
) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

// Display word count
console.log("Word Count:", wordCount);
