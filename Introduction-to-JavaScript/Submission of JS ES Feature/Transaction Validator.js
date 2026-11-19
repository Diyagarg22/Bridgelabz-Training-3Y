
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

// Arrays for transaction reports
let validTransactions = [];
let invalidTransactions = [];

for (let transaction of transactions) {

    try {
        // Check null entries
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        // Check missing ID or amount
        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MISSING_DATA");
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        // Store valid transaction
        validTransactions.push(transaction);
        console.log("Valid Transaction:", transaction);

    }
    catch (error) {

        invalidTransactions.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Transaction Error:", error.message);
    }
}

// Final report
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);
