
// Q1: E-Commerce Product Manager

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply percentage discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name},
Price: Rs.${this.price}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Mouse", 800, "Accessories"),
    new Product(4, "Keyboard", 2000, "Accessories")
];

// Apply 10% discount to first product
products[0].applyDiscount(10);

// Display all products
console.log("All Products:");

products.forEach(product => {
    console.log(product.displayDetails());
});

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => {
    return product.price > 1000;
});

console.log("\nProducts with price greater than 1000:");

expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});
