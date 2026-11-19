
// Q4: Concurrent Server Responses

// Simulate a server response
function serverResponse(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly simulate server failure
            if (Math.random() > 0.2) {
                resolve(serverName + " responded successfully");
            } else {
                reject(serverName + " failed");
            }
        }, delay);
    });
}

// Create both server Promises
const serverA = serverResponse("Server A", 2000);
const serverB = serverResponse("Server B", 3000);

// Promise.all(): waits for both servers
Promise.all([serverA, serverB])
    .then((results) => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

// Promise.race(): returns the first settled result
Promise.race([
    serverResponse("Server A", 2000),
    serverResponse("Server B", 3000)
])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race error:", error);
    });
