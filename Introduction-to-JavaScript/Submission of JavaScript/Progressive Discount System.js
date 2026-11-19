
// Purchase amount
let totalAmount = 7500;
let discountPercentage = 0;

// Calculate discount based on purchase amount
if (totalAmount >= 10000) {
    discountPercentage = 25;
}
else if (totalAmount >= 5000) {
    discountPercentage = 15;
}
else if (totalAmount >= 2000) {
    discountPercentage = 5;
}
else {
    discountPercentage = 0;
}

// Calculate discount amount
let discountAmount = totalAmount * discountPercentage / 100;

// Calculate final price
let finalPrice = Math.round(totalAmount - discountAmount);

// Display results
console.log("Original Total: Rs." + totalAmount);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: Rs." + discountAmount);
console.log("Final Price: Rs." + finalPrice);
