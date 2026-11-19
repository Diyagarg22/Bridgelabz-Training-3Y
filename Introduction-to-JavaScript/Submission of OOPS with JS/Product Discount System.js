
"use strict";

// Constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Add method to prototype
Product.prototype.applyDiscount = function(percent) {

    // Calculate discounted price
    let discount = this.price * percent / 100;

    let newPrice = this.price - discount;

    return newPrice;
};

// Create three products
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Mobile", 20000);
const product3 = new Product("Headphones", 5000);

// Apply different discounts
console.log(product1.name, "Final Price:", product1.applyDiscount(10));

console.log(product2.name, "Final Price:", product2.applyDiscount(15));

console.log(product3.name, "Final Price:", product3.applyDiscount(20));
