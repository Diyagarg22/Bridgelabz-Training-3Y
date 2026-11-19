
// Original product name
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Split words and capitalize first letter
let words = cleanedName.split(" ");

let capitalizedWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
);

// Join words into a string
let finalTitle = capitalizedWords.join(" ");

// Replace Pro with Pro Edition
finalTitle = finalTitle.replace("Pro", "Pro Edition");

// Display result
console.log("Product Title:", finalTitle);
console.log("Title Length:", finalTitle.length);
