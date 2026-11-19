
// Q4: Car Constructor and Prototype

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getDetails = function () {
    console.log("Brand:", this.brand);
    console.log("Model:", this.model);
};

// Create two car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

// Call prototype method
car1.getDetails();

console.log("----------");

car2.getDetails();

/*
Output:
Brand: Toyota
Model: Fortuner
----------
Brand: Honda
Model: City
*/
