```javascript
// Q6.js

let purchaseAmount = 7500;
let discountPercentage = 0;

// Determine the discount tier
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}

// Calculate discount and final price
let discountAmount = purchaseAmount * discountPercentage / 100;
let finalPrice = Math.round(purchaseAmount - discountAmount);

// Display the result
console.log(`Original Total: ₹${purchaseAmount}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${Math.round(discountAmount)}`);
console.log(`Final Price: ₹${finalPrice}`);
```