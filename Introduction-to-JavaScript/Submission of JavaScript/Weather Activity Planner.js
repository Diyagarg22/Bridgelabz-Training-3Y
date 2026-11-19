
// Weather information
let temperature = 25;
let isRaining = false;
let windSpeed = 10;

// Check weather conditions
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
}
else if (temperature > 35) {
    console.log("Go swimming.");
}
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
}
else {
    console.log("Perfect day for a walk.");
}

// Additional logical condition example
if (temperature > 35 || windSpeed > 30) {
    console.log("Weather is extreme.");
}
