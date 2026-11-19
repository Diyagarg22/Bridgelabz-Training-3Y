
// Q6: Fetch Product Data

async function fetchProducts() {
    try {
        // Send request to Fake Store API
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        // Check whether the response was successful
        if (!response.ok) {
            throw new Error("API request failed");
        }

        // Convert response into JavaScript data
        const products = await response.json();

        // Display each product
        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("--------------------------");
        });

    } catch (error) {
        console.log(
            "Failed to load products. Please try again."
        );

        console.log("Error details:", error.message);
    }
}

// Call the function
fetchProducts();
