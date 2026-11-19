
"use strict";

// Product inventory
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 20 },
    { id: 3, name: "Shoes", category: "Fashion", price: 2500, stock: 3 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 700, stock: 15 },
    { id: 5, name: "Book", category: "Education", price: 500, stock: 2 },
    { id: 6, name: "Notebook", category: "Education", price: 100, stock: 30 }
];

// 1. Get products with low stock
function getLowStockProducts() {

    return products.filter(product => product.stock < 5);
}

// 2. Sort products by price (low to high)
function sortProductsByPrice() {

    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Calculate total inventory value
function calculateTotalInventoryValue() {

    return products.reduce((total, product) => {
        return total + (product.price * product.stock);
    }, 0);
}

// 4. Group products by category
function groupByCategory() {

    return products.reduce((groups, product) => {

        let category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;

    }, {});
}

// Display results
console.log("Low Stock Products:");
console.log(getLowStockProducts());

console.log("Products Sorted by Price:");
console.log(sortProductsByPrice());

console.log("Total Inventory Value:");
console.log("Rs." + calculateTotalInventoryValue());

console.log("Products Grouped by Category:");
console.log(groupByCategory());
