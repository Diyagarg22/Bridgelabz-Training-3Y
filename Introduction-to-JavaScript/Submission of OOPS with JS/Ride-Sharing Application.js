
"use strict";

// Parent class
class User {

    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver inherits User
class Driver extends User {

    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip class
class Trip {

    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Calculate fare
    calculateFare() {

        // Validate distance
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Distance is required.");
        }

        if (typeof this.distance !== "number" ||
            !Number.isFinite(this.distance) ||
            this.distance < 0) {
            throw new Error("Invalid distance.");
        }

        // Fare rate = Rs.15 per km
        let fare = this.distance * 15;

        return fare;
    }
}

// Create driver
const driver1 = new Driver("Rahul", 4.8, "Swift");

// Create trip
try {

    const trip1 = new Trip("Mathura", "Agra", 60);

    console.log("Driver:", driver1.name);
    console.log("Rating:", driver1.rating);
    console.log("Vehicle:", driver1.vehicle);

    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);

    console.log("Total Fare: Rs." + trip1.calculateFare());

}
catch (error) {
    console.log("Trip Error:", error.message);
}

// Test invalid distance
try {
    const trip2 = new Trip("Mathura", "Delhi", -10);

    console.log(trip2.calculateFare());
}
catch (error) {
    console.log("Trip Error:", error.message);
}
