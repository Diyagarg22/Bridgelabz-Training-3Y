```javascript
// Q3.js

let expenses = [5000, 1500, 8000, 2000, 1000];

let total = 0;

// Calculate total expenses
for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;

// Add 10% tax to the total
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

// Display the results
console.log(`Total Expenses: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount: ₹${finalAmount.toFixed(2)}`);
```