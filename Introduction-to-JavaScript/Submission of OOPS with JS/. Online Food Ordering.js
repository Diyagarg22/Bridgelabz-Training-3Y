
"use strict";

// Food menu
const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

// Calculate bill function
function calculateBill(orderItems) {

    // Get prices using map()
    const priceList = orderItems.map(item => {

        // Find item in menu
        const food = menu.find(menuItem => menuItem.name === item);

        // Throw error if item is invalid
        if (!food) {
            throw new Error(`Invalid food item: ${item}`);
        }

        return food.price;
    });

    // Calculate total using reduce()
    const total = priceList.reduce((sum, price) => sum + price, 0);

    return total;
}

// Test order
try {
    const orderItems = ["Pizza", "Burger", "Pasta"];

    const bill = calculateBill(orderItems);

    console.log("Food Order:", orderItems);
    console.log("Total Bill: Rs." + bill);
}
catch (error) {
    console.log("Order Error:", error.message);
}

// Test invalid order
try {
    const orderItems = ["Pizza", "Ice Cream"];

    const bill = calculateBill(orderItems);

    console.log("Total Bill:", bill);
}
catch (error) {
    console.log("Order Error:", error.message);
}
