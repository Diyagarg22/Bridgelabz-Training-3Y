
 // Security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check whether the system is secure
if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another outcome
isAlarmOn = false;

if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Demonstrate OR and NOT operators
console.log("Any opening unlocked:", !isDoorLocked || !isWindowClosed);
