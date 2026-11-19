
// Q1: Async Coffee Maker

// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly simulate failure
            if (Math.random() > 0.2) {
                console.log("Water boiled successfully!");
                resolve("Water is ready");
            } else {
                reject("Failed to boil water");
            }
        }, 1000);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed successfully!");
                resolve("Coffee is brewed");
            } else {
                reject("Failed to brew coffee");
            }
        }, 1500);
    });
}

// Step 3: Pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into the cup!");
                resolve("Coffee is poured");
            } else {
                reject("Failed to pour coffee");
            }
        }, 1000);
    });
}

// Promise chaining
boilWater()
    .then((result) => {
        console.log(result);
        return brewCoffee();
    })
    .then((result) => {
        console.log(result);
        return pourCoffee();
    })
    .then((result) => {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee process failed:", error);
    });
