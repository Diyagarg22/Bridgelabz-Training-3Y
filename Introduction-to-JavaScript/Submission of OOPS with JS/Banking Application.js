
"use strict";

// BankAccount class
class BankAccount {

    // Private field
    #balance;

    constructor(initialBalance) {

        if (typeof initialBalance !== "number" ||
            !Number.isFinite(initialBalance) ||
            initialBalance < 0) {
            throw new Error("Invalid initial balance");
        }

        this.#balance = initialBalance;
    }

    // Deposit money
    deposit(amount) {

        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }

        this.#balance += amount;

        console.log("Deposited: Rs." + amount);
    }

    // Withdraw money
    withdraw(amount) {

        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;

        console.log("Withdrawn: Rs." + amount);
    }

    // Get current balance
    getBalance() {
        return this.#balance;
    }
}

// Create bank account
const account = new BankAccount(10000);

// Valid deposit
account.deposit(5000);

// Valid withdrawal
account.withdraw(2000);

// Invalid withdrawal
try {
    account.withdraw(20000);
}
catch (error) {
    console.log("Transaction Error:", error.message);
}

// Display balance
console.log("Available Balance: Rs." + account.getBalance());
