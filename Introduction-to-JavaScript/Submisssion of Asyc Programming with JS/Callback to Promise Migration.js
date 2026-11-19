
// Q3: Promise-Based Bug Tracker

// Original callback-based function
function fetchBugs(callback) {
    setTimeout(() => {
        callback(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
}

// Convert callback function into a Promise
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.3;

            if (isSuccessful) {
                const bugs = [
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ];

                resolve(bugs);
            } else {
                reject("Unable to fetch bugs from API");
            }
        }, 1000);
    });
}

// Call the Promise-based function
getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
