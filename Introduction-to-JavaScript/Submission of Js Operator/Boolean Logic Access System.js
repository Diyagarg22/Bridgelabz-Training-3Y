
// Security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}

// Change values to test another outcome
isDoorLocked = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}

// Example using OR and NOT
if (!isDoorLocked || !isWindowClosed) {
    console.log("Security Alert!");
}
