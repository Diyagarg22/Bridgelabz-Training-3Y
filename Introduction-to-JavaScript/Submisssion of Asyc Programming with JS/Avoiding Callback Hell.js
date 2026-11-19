
// Q5: Callback Hell

// First version: Nested callbacks

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("Celebration time!");
        callback();
    }, 1000);
}

// Nested callback structure
function runWithCallbacks() {
    design(() => {
        build(() => {
            test(() => {
                deploy(() => {
                    celebrate(() => {
                        console.log("Pipeline completed!");
                    });
                });
            });
        });
    });
}

runWithCallbacks();


// Second version: Using async/await

function waitForStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName + " completed");
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    await waitForStage("Design");
    await waitForStage("Build");
    await waitForStage("Test");
    await waitForStage("Deploy");
    await waitForStage("Celebrate");

    console.log("Pipeline completed!");
}

// Run this after the callback version finishes
setTimeout(() => {
    console.log("\nStarting async/await version:");
    runWithAsyncAwait();
}, 5500);
